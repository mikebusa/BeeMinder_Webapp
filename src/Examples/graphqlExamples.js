import * as React from "react"
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
// Apollo imports
import { useQuery, useMutation } from "@apollo/client";
import { CREATE_HIVE, FIND_HIVES, UPDATE_HIVE } from "../graphql-operations";

export default function GQLExamples() {
  // Logic for Hive query
  const [hiveSearchText, setHiveSearchText] = React.useState("5f988ba84e48809d447001e4");
  const { loading: hiveLoading, data: hiveData } = useQuery(FIND_HIVES, {
    variables: { query: { _owner: hiveSearchText } }
  });
  const hive = hiveData ? hiveData.hive : null;

  // Logic for update Hive mutation
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

  // lgoic for create hive mutation
  const [createHive, { loading: insertingHive }] = useMutation(CREATE_HIVE);
  const [createHiveNameText, setCreateHiveNameText] = React.useState("");
  const createNewHive = async () => {
    if (!createHiveNameText) return;
    await createHive({
      variables: {
        data: {
          _owner: "5f988ba84e48809d447001e4",
          created: (new Date()).toISOString(),
          identifier: "madeWithGraphQL",
          name: createHiveNameText,
          reports: {
            link:[],
            create:[]
          }
        }
      }
    })
  }


  return (
    <div>
      <Link to="/"><Button color="dark">Back</Button></Link>
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
              {hive.reports.length > 0 && <div>
                <h4>Reports</h4>
                <ol>
                  {hive.reports.map((report) => (
                        <li key={report._id}>{report._id}</li>
                      )
                    )
                  }
                </ol>
              </div>}
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
                onChange={e => setNewHiveNameText(e.target.value)}
              />
              <button onClick={() => updateHiveName()}>
                Change the Hive Name
              </button>
            </div>
          )}
        </div>
        <div>
          <div> Here we can Create a new Hive </div>
          {!insertingHive && (
            <div>
              <input
                type="text"
                value={createHiveNameText}
                onChange={e => setCreateHiveNameText(e.target.value)}
              />
              <button onClick={() => createNewHive()}>
                Create a new Hive
              </button>
            </div>
          )}
        </div>
    </div>)
};