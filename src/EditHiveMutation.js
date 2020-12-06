import React, {useState} from "react"
// Apollo imports
import { useMutation } from "@apollo/client";
import { UPDATE_HIVE } from "./graphql-operations";
import { Button } from "reactstrap";

function EditHiveMutation(props) {
	
	const [updateHive, { loading: updatingHive }] = useMutation(UPDATE_HIVE);
	const [newHiveNameText, setNewHiveNameText] = React.useState(props.newHiveName);
	const updateHiveName = async () => {
		if (!props.newHiveName) return;
		await updateHive({
			variables: {
				query: { name: props.oldHiveName },
				set: { name: props.newHiveName }
			}
		});
		window.location.reload(false);
	};
	
	//Modal Controls
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);
  
  const valid = props.newHiveName && props.oldHiveName ? true : false;
  console.log(valid)
  console.log(props.newHiveName)
  console.log(props.oldHiveName)
  
  const submitForm = () => {
	props.submitted();
  }
  
  return (
    <div> 
        <Button color = "primary" onClick={() => {updateHiveName(); submitForm();}} disabled = {!valid}>Submit</Button>
    </div>)
};

export default EditHiveMutation;