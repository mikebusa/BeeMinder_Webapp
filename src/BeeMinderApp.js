import * as React from 'react';
import HomePage from './HomePage';
import AccountPage from './AccountPage';
import HivePage from './HivePage';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Apollo imports
import { useQuery, useMutation } from "@apollo/client";
import { FIND_HIVE, UPDATE_HIVE } from './graphql-operations';

export default function BeeMinderApp() {
  // Logic for Hive query
  const [hiveSearchText, setHiveSearchText] = React.useState("Hive1");
  const { loading: hiveLoading, data: hiveData } = useQuery(FIND_HIVE, {
    variables: { query: { name: hiveSearchText } }
  });
  const hive = hiveData ? hiveData.hive : null;
  
  // Logic for Hive mutation
  const [updateHive, { loading: updatingHive }] = useMutation(UPDATE_HIVE);
  const [newHiveNameText, setNewHiveNameText] = React.useState("Silly New Name");
  const updateHiveName = async () => {
      if (!hive) return;
      await updateHive({
        variables: {
          query: { name: hive.name },
          set: { name: newHiveNameText }
        }
      });
      setHiveSearchText(newHiveNameText);
  };

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/MyAccount" component={AccountPage} />
          <Route path="/MyHive" component={HivePage} />
        </Switch>
      </BrowserRouter>
      <div>
          <h1>GraphQL Test</h1>
          <div>
              <div> Here we can query the Database </div>
              <input
                value={hiveSearchText}
                onChange={e => setHiveSearchText(e.target.value)}
                type="text"
              />
              {!hiveLoading && !hive && <div>No hive with that name</div>}
              {hive && !hiveLoading && (
                  <div>
                      <h2>{hive.name}</h2>
                      <div>ID: {hive.identifier}</div>
                      <div>Created: {hive.created}</div>
                      <div>Owner: {hive._owner}</div>
                  </div>
              )}
          </div>
          <div>
              <div> Here we can modify the Database </div>
              {!updatingHive && (
                <div>
                    <input
                      type="text"
                      value={newHiveNameText}
                      onChange={e => setNewHiveNameText()}
                    />
                    <button
                      onClick={() => updateHiveName()}
                    >
                        Change the Hive Name
                    </button>
                </div>
              )}
          </div>
      </div>
    </div>
  )
}