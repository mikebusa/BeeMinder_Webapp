import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import AccountPage from './AccountPage';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/MyAccount" component={AccountPage} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
