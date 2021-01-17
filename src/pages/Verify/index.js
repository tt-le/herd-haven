import React from "react";

import {
  CssBaseline,
  Container,
  Paper,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";

import VerifyForm from "../../components/VerifyForm";

function Verify() {
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
            <Grid container justify="center">
              <Box marginTop={3}>
                <Typography variant="body1">
                  Check your email for a verification code
                </Typography>
              </Box>
            </Grid>
            <Box padding={4}>
              <VerifyForm />
            </Box>
          </Grid>
        </Grid>
      </CssBaseline>
    </Container>
  );
}

export default Verify;
