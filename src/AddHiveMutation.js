import * as React from "react"
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
// Apollo imports
import { useMutation } from "@apollo/client";
import { CREATE_HIVE } from "./graphql-operations";

function AddHiveMutation() {

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
          identifier: "succesfulCreation",
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

export default AddHiveMutation;