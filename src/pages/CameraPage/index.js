import React from "react";
import { CssBaseline, Container, Grid, Button } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Camera from "../../components/Camera";
import { withRouter } from "react-router-dom";

function CameraPage(props) {
  return (
    <Container maxWidth="md" style={{ height: "100%" }}>
      <CssBaseline>
        <Button
          onClick={props.history.goBack}
          variant="contained"
          size="small"
          disableElevation
          color="secondary"
          style={{
            borderRadius: "15px",
            marginTop: "15px",
            marginLeft: "15px",
          }}
        >
          <ArrowBackIosIcon />
        </Button>
        <Camera />
      </CssBaseline>
    </Container>
  );
}

export default withRouter(CameraPage);
