import React, { useState } from "react";
import * as Realm from "realm-web";
import { useRealmApp } from "./RealmApp";
import LoginPageNavBar from "./LoginPageNavBar";

//Imports for eye icon for show password
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { Card, CardBody, Spinner, Input, Button, Container, Col, Row} from "reactstrap";

export default function LoginScreen() {
	
	const app = useRealmApp();
	const eye = <FontAwesomeIcon icon={faEye} />;
	
	const [pressed, setPressed] = React.useState(false);
	
	// Toggle between logging users in and registering new users
	const [mode, setMode] = React.useState("login");
	const toggleMode = () => {
		setMode((oldMode) => (oldMode === "login" ? "register" : "login"));
	};
	
	// Keep track of form input state
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	
	// Keep track of input validation/errors
	const [error, setError] = React.useState({});
	
	//Show/hide password status and function
	const [passwordShown, setPasswordShown] = useState(false);
	const togglePasswordVisiblity = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	// Whenever the mode changes, clear the form inputs
	React.useEffect(() => {
		setEmail("Joe@beeminder.com");
		setPassword("123bee");
		setError({});
	}, [mode]);

	const [isLoggingIn, setIsLoggingIn] = React.useState(false);
	const handleLogin = async () => {
		setIsLoggingIn(true);
		setError((e) => ({ ...e, password: null }));
		try {
			// Call the logIn() method and pass it the emailPassword credentials.
		await app.logIn(Realm.Credentials.emailPassword(email, password));
		} catch (err) {
			handleAuthenticationError(err, setError);
		}
	};

	const handleRegistrationAndLogin = async () => {
		//TODO: get email validation, probably redo the form
		const isValidEmailAddress = true;
		setError((e) => ({ ...e, password: null }));
		if (isValidEmailAddress) {
			try {
				// Register the user and, if successful, log them in
				// Create new emailPassword credentials by calling the registerUser() method.
				await app.emailPasswordAuth.registerUser(email, password);
				return await handleLogin();
			} catch (err) {
				handleAuthenticationError(err, setError);
			}
		} else {
			setError((err) => ({ ...err, email: "Email is invalid." }));
		}
	};

	function isValidEmail() {
		return true
	}

	return (
		<div>
			<div style = {{backgroundColor: 'gray'}}>
				<LoginPageNavBar />
				<Container>
					<Row>
						<Col xs="auto"/>
						<Col xs="10">
							<br/>
							<br/>
							{isLoggingIn & error.password == null ? (
								<Spinner color="primary" />
							) : (
								<Card>
									<CardBody>  
										<div>
											<h1>{mode === "login" ? "Log In" : "Register Account"}</h1>
										</div>
										<div>
											Email:
											<Input
												type="email"
												label="Email"
												placeholder="your.email@example.com"
												onChange={(e) => {
													setError((e) => ({ ...e, email: null }));
													setEmail(e.target.value);
												}}
												value={email}
												state={
													error.email ? "error" : isValidEmail(email) ? "valid" : "none"
												}
												errorMessage={error.email}
											/>
										</div>
										<div>
											Password:
											<Input
												type={passwordShown ? "text" : "password"}
												label="Password"
												placeholder=""
												onChange={(e) => {setPassword(e.target.value);}}
												value={password}
												state={
												  error.password ? "error" : error.password ? "valid" : "none"
												}
												errorMessage={error.password}
											/>
											<p style={{"fontSize": 15}}><i position="absolute" onClick={togglePasswordVisiblity}>{eye}</i>{' '}← Show Password</p>
											{error != null && pressed === true ? (
												<p style = {{"color" : "red"}}>Incorrect Email or Password</p>
											) : (
												<p style = {{"color" : "white", "fontSize":1}}>!</p>	
											)}
										</div>
										<Container>
											<Row>
												<Col/>
												<Col/>
												<Col>
													{mode === "login" ? (
														<Button color="warning" onClick={() => {handleLogin(); setPressed(true)}}>
															Log In
														</Button>
													) : (
														<Button color="warning" onClick={() => {handleRegistrationAndLogin(); setPressed(true);}}>
															Register
														</Button>
													)}
												</Col>
											</Row>
										</Container>
										<div>
											<p>
												{mode === "login" ? "Don't have an account?" : "Already have an account?"}
											</p>
											<Button color = "secondary" onClick={(e) => {e.preventDefault(); toggleMode();}}>
												{mode === "login" ? "Register now" : "Log in instead"}
											</Button>
										</div>
									</CardBody>
								</Card>
							)}
						</Col>
						<Col xs="auto"/>
					</Row>
					<br/>
					<br/>
					<br/>
				</Container>
			</div>
		</div>
	);
}

function handleAuthenticationError(err, setError) {
	const { status, message } = parseAuthenticationError(err);
	const errorType = message || status;
	switch (errorType) {
		case "invalid username":
			setError((prevErr) => ({ ...prevErr, email: "Invalid email address." }));
			break;
		case "invalid username/password":
		case "invalid password":
		case "401":
			setError((err) => ({ ...err, password: "Incorrect password." }));
			break;
		case "name already in use":
		case "409":
			setError((err) => ({ ...err, email: "Email is already registered." }));
			break;
		case "password must be between 6 and 128 characters":
		case "400":
			setError((err) => ({
				...err,
				password: "Password must be between 6 and 128 characters.",
			}));
			break;
		default:
			setError((err) => null);
			break;
	}
}

function parseAuthenticationError(err) {
	const parts = err.message.split(":");
	const reason = parts[parts.length - 1].trimStart();
	if (!reason) return { status: "", message: "" };
	const reasonRegex = /(?<message>.+)\s\(status (?<status>[0-9][0-9][0-9])/;
	const match = reason.match(reasonRegex);
	const { status, message } = match?.groups ?? {};
	return { status, message };
}
