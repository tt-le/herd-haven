import React from "react";
import { CssBaseline, Container, Grid, Button } from "@material-ui/core";
import HeatMap from "../../components/HeatMap";
import LandingHeader from "../../components/LandingHeader";
import MapFooter from "../../components/MapFooter";

function Map() {
  return (
    <Container maxWidth="xl" disableGutters style={{ height: "100%" }}>
      <CssBaseline>
        <HeatMap />
        <LandingHeader />
        <MapFooter />
      </CssBaseline>
    </Container>
  );
}

export default Map;
