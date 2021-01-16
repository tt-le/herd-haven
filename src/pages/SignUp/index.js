import React from "react";

import {
  CssBaseline,
  Container,
  Paper,
  Typography,
  Grid,
} from "@material-ui/core";

import SignUpForm from "../../components/SignUpForm";

function SignUp() {
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
            <Typography variant="h6">Sign up</Typography>
            <Paper elevation={1}>
              <SignUpForm />
            </Paper>
          </Grid>
        </Grid>
      </CssBaseline>
    </Container>
  );
}

export default SignUp;
