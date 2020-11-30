import * as React from 'react';
import HomePage from './HomePage';
import AccountPage from './AccountPage';
import HivePage from './HivePage';
import GQLExamples from "./Examples/graphqlExamples";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function BeeMinderApp() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/MyAccount" component={AccountPage} />
        <Route path="/MyHive" component={HivePage}/>
        <Route path="/GQLExamples" component={GQLExamples} />
      </Switch>
    </BrowserRouter>
  )
}