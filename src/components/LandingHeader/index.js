import React from "react";
import { Grid, Button, Link } from "@material-ui/core";

function LandingHeader() {
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      style={{ padding: "15px" }}
    >
      <Grid item>
        <Button
          variant="contained"
          size="small"
          disableElevation
          color="secondary"
          style={{ borderRadius: "15px", fontWeight: "bold" }}
        >
          Herd Haven
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          size="small"
          disableElevation
          color="secondary"
          style={{
            borderRadius: "15px",
            fontWeight: "bold",
            marginRight: "15px",
          }}
        >
          <Link underline="none" color="inherit" href="/login">
            Login
          </Link>
        </Button>
        <Button
          variant="contained"
          size="small"
          disableElevation
          color="secondary"
          style={{ borderRadius: "15px", fontWeight: "bold" }}
        >
          <Link underline="none" color="inherit" href="/signup">
            Sign up
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}

export default LandingHeader;
