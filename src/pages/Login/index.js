import React from "react";

import {
  CssBaseline,
  Container,
  Paper,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";

import LoginForm from "../../components/LoginForm";

function Login() {
  return (
    <Container maxWidth="md" style={{ height: "100%" }}>
      <CssBaseline>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Grid item>
            <Paper elevation={0} style={{ borderRadius: "15px" }}>
              <Grid container justify="center">
                <Box marginTop={3}>
                  <Typography variant="h5">Log in</Typography>
                </Box>
              </Grid>
              <Box padding={4}>
                <LoginForm />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </CssBaseline>
    </Container>
  );
}

export default Login;
