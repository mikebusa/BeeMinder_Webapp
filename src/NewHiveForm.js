import React, { Component } from 'react';
import { Button } from 'reactstrap';
import TextInput from './TextInput';
import validate from './validate';
import Password from './Password';

class NewHiveForm extends Component {
	constructor() {
		super();

		this.state = {
			formIsValid: false,
			formControls: {
				
				username: {
					value: '',
					placeholder: 'Username',
					valid: false,
					validationRules: {
						minLength: 4,
						isRequired: true
					},
					touched: false
				},
				psword: {
					value: '',
					placeholder: 'Password',
					valid: false,
					validationRules: {
						minLength: 4,
						isRequired: true,
						isPassword: true
					},
					touched: false
				},
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
					placeholder: 'BeeMinder System ID Number',
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
				<TextInput name="username" 
					placeholder={this.state.formControls.username.placeholder}
					value={this.state.formControls.username.value}
					onChange={this.changeHandler}
					touched={this.state.formControls.username.touched}
					valid={this.state.formControls.username.valid}
				/>
				
				<Password name="psword"
					placeholder={this.state.formControls.psword.placeholder}
					value={this.state.formControls.psword.value}
					onChange={this.changeHandler}
					touched={this.state.formControls.psword.touched}
					valid={this.state.formControls.psword.valid}
				/>

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
				<Button color = "primary" onClick={this.onSubmitForm} disabled={! this.state.formIsValid}>Submit</Button>
			</div>
		);
	}
}

export default NewHiveForm;