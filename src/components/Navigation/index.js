import React from "react";
import { Grid, Button, IconButton, Link } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MapIcon from "@material-ui/icons/Map";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

function Navigation({ isOnMap }) {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      style={{ padding: "15px" }}
    >
      <Grid item>
        {isOnMap ? (
          <Button
            onClick={() => (window.location.href = "/profile")}
            variant="contained"
            size="small"
            disableElevation
            color="secondary"
            style={{
              borderRadius: "15px",
              marginRight: "15px",
              marginLeft: "15px",
            }}
          >
            <AccountCircleIcon />
          </Button>
        ) : (
          <Button
            onClick={() => (window.location.href = "/")}
            variant="contained"
            size="small"
            disableElevation
            color="secondary"
            style={{
              borderRadius: "15px",
              marginRight: "15px",
            }}
          >
            <MapIcon />
          </Button>
        )}
        <Button
          onClick={() => (window.location.href = "/cam")}
          variant="contained"
          size="small"
          disableElevation
          color="secondary"
          style={{
            borderRadius: "15px",
            marginRight: "15px",
          }}
        >
          <CameraAltIcon />
        </Button>
      </Grid>
    </Grid>
  );
}

export default Navigation;
