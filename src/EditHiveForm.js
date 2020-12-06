import React, { Component } from 'react';
import TextInput from './TextInput';
import validate from './validate';
import EditHiveMutation from './EditHiveMutation';

class EditHiveForm extends Component {
	constructor(props) {
		super();
		this.state = {
			formIsValid: false,
			oldHiveName: props.hiveName,
			formControls: {
				HiveName: {
					value: '',
					placeholder: props.hiveName,
					valid: true,
				}
			},
		}
		this.onSubmitForm = this.onSubmitForm.bind(this);
	}
	

	changeHandler = event => {
		
		const name = event.target.name;
		const value = event.target.value;

		const updatedControls = {
			...this.state.formControls
		};
		const updatedFormElement = {
			...updatedControls[name]
		};
		updatedFormElement.value = value;
		updatedFormElement.touched = true;

		updatedControls[name] = updatedFormElement;

		let formIsValid = true;
		for (let inputIdentifier in updatedControls) {
			formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
		}

		this.setState({
			formControls: updatedControls,
			formIsValid: formIsValid
		});

	}
	  
	  
	onSubmitForm() {
		const formData = {};
		for (let formElementId in this.state.formControls) {
			formData[formElementId] = this.state.formControls[formElementId].value;
		}
	}
	
	render() {
		
		return (
			<div className = "App">
				<TextInput name="HiveName"
					placeholder={this.state.formControls.HiveName.placeholder}
					value={this.state.formControls.HiveName.value}
					onChange={this.changeHandler}
					touched={this.state.formControls.HiveName.touched}
					valid={this.state.formControls.HiveName.valid}
				/>
				<EditHiveMutation oldHiveName = {this.state.oldHiveName} newHiveName = {this.state.formControls.HiveName.value} submitted = {this.onSubmitForm}/>
			</div>
		);
	}
}

export default EditHiveForm;