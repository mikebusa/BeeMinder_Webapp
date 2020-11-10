// React
import React from 'react';
import { render } from 'react-dom';
// import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import BeeMinderApp from './BeeMinderApp';
// Apollo
import {
	ApolloProvider,
	ApolloClient,
	HttpLink,
	InMemoryCache,
} from "@apollo/client";
// Realm
import * as Realm from "realm-web";

export const APP_ID = "beeminderdb-nyofv";

const graphql_url = `https://realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`;

const app = new Realm.App(APP_ID);

// Get a valid Realm user access token to authenticate requests
async function getValidAccessToken() {
	if (!app.currentUser) {
	  // If no user is logged in, log in an anonymous user
	  await app.logIn(Realm.Credentials.anonymous());
	} else {
	  // The logged in user's access token might be stale.
	  // Refreshing custom data also refreshes the access token.
	  await app.currentUser.refreshCustomData();
	}
	// Get a valid access token for the current user
	const { accessToken } = app.currentUser;
	return accessToken
}

const client = new ApolloClient({
	link: new HttpLink({
		uri: graphql_url,
		// We define a custom fetch handler for the Apollo client that lets us authenticate GraphQL requests.
		// The function intercepts every Apollo HTTP request and adds an Authorization header with a valid
		// access token before sending the request.
		fetch: async (uri, options) => {
			const accessToken = await getValidAccessToken();
			options.headers.Authorization = `Bearer ${accessToken}`;
			return fetch(uri, options);
		},
	}),
	cache: new InMemoryCache()
});

render(
	<ApolloProvider client={client}>
		<BeeMinderApp/>
	</ApolloProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
