import React, { Component } from 'react';
import TextInput from './TextInput';
import validate from './validate';
import AddHiveMutation from './AddHiveMutation';

class NewHiveForm extends Component {
	constructor() {
		super();

		this.state = {
			formIsValid: false,
			formControls: {
				
				HiveName: {
					value: '',
					placeholder: 'Hive Name',
					valid: false,
					validationRules: {
						minLength: 5,
						isRequired: true,
					},
					touched: false
				},  
				HiveID: {
					value: '',
					placeholder: 'ID: dev_XX_XX_XX_XX_XX_XX',
					valid: false,
					validationRules: {
						minLength: 6,
						isRequired: true,
					},
					touched: false
				}	
			}
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
		updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

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
		this.props.onFormSubmit(formData);
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
					  
				<TextInput name="HiveID"
					placeholder={this.state.formControls.HiveID.placeholder}
					value={this.state.formControls.HiveID.value}
					onChange={this.changeHandler}
					touched={this.state.formControls.HiveID.touched}
					valid={this.state.formControls.HiveID.valid}
				/>
				<AddHiveMutation hiveName = {this.state.formControls.HiveName.value} hiveID = {this.state.formControls.HiveID.value} submitted={this.onSubmitForm}/>
			</div>
		);
	}
}

export default NewHiveForm;