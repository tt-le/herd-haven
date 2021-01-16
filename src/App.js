import React from "react";
import "./App.css";

import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import themeObj from "./theme";

const theme = createMuiTheme(themeObj);

function App() {
  return <ThemeProvider theme={theme}></ThemeProvider>;
}

export default App;
