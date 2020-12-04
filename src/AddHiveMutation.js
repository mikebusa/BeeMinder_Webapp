import * as React from "react"
// Apollo imports
import { useMutation } from "@apollo/client";
import { CREATE_HIVE } from "./graphql-operations";
import { Button } from "reactstrap";
import { useRealmApp } from "./components/RealmApp";

function AddHiveMutation(props) {
	const app = useRealmApp();
	const userID = app.currentUser._id

  // logic for create hive mutation
  const [createHive] = useMutation(CREATE_HIVE);
  const createNewHive = async () => {
    if (!props.hiveName) return;
    await createHive({
      variables: {
        data: {
          _owner: userID,
          created: (new Date()).toISOString(),
          identifier: props.hiveID,
          name: props.hiveName,
          reports: {
            link:[],
            create:[]
          }
        }
      }
    })
	window.location.reload(false);
  }
  
  const submitForm = () => {
	props.submitted();
  }
  
  const valid = props.hiveName && props.hiveID ? true : false;
  
  return (
    <div> 
        <Button color = "primary" onClick={()=>{createNewHive(); submitForm()}} disabled={!valid}>Submit</Button>
    </div>)
};

export default AddHiveMutation;