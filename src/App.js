import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import themeObj from "./theme";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Map from "./pages/Map";
import Camera from "./pages/CameraPage";
import Verify from "./pages/Verify";

const theme = createMuiTheme(themeObj);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/signup" exact render={SignUp} />
        <Route path="/login" exact render={Login} />
        <Route path="/profile" exact render={Profile} />
        <Route path="/" exact render={Map} />
        <Route path="/cam" exact render={Camera} />
        <Route path="/verify" exact render={Verify} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
