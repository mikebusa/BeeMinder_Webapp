import React from "react";
import * as Realm from "realm-web";
import { useRealmApp } from "./RealmApp";

import { Card, CardBody, Spinner, Input, Button } from "reactstrap";

export default function LoginScreen() {
  const app = useRealmApp();
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
  // Whenever the mode changes, clear the form inputs
  React.useEffect(() => {
    setEmail("nick.larew@mongodb.com");
    setPassword("password");
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
      {isLoggingIn ? (
        <Spinner color="primary" />
      ) : (
        <Card>
          <CardBody>  
            <div>
              <h1>
                {mode === "login" ? "Log In" : "Register an Account"}
              </h1>
            </div>
            <div>
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
                  error.email
                    ? "error"
                    : isValidEmail(email)
                    ? "valid"
                    : "none"
                }
                errorMessage={error.email}
              />
            </div>
            <div>
              <Input
                type="password"
                label="Password"
                placeholder="pa55w0rd"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                state={
                  error.password ? "error" : error.password ? "valid" : "none"
                }
                errorMessage={error.password}
              />
            </div>
            {mode === "login" ? (
              <Button variant="primary" onClick={() => handleLogin()}>
                Log In
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={() => handleRegistrationAndLogin()}
              >
                Register
              </Button>
            )}
            <div>
              <span>
                {mode === "login"
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleMode();
                }}
              >
                {mode === "login" ? "Register one now." : "Log in instead."}
              </button>
            </div>
          </CardBody>
        </Card>
      )}
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
