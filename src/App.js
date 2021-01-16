import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import themeObj from "./theme";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const theme = createMuiTheme(themeObj);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/signup" exact render={SignUp} />
        <Route path="/login" exact render={Login} />
        <Route path="/profile" exact render={Profile} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
