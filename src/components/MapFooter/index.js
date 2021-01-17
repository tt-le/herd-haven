import React from "react";
import { Grid, LinearProgress, Typography } from "@material-ui/core";

const mapData = {
  city: "Toronto",
  vaccinated: "1155562",
  population: "2930000",
};

function MapFooter() {
  return (
    <Grid
      container
      direction="column"
      alignItem="center"
      style={{
        position: "absolute",
        bottom: 0,
        height: "110px",
        backgroundColor: "#fff",
        borderRadius: "20px 20px 0 0",
      }}
    >
      <Grid item container justify="center" style={{ marginTop: "15px" }}>
        <Typography
          variant="body1"
          style={{ fontWeight: "bold", opacity: 0.87 }}
        >
          {mapData.city + ": " + mapData.vaccinated + "/" + mapData.population}
        </Typography>
      </Grid>
      <Grid item xl justify="center" style={{ padding: "15px" }}>
        <LinearProgress
          value={(mapData.vaccinated / mapData.population) * 100}
          color="primary"
          variant="determinate"
          style={{ height: 20, borderRadius: 10 }}
        />
      </Grid>
    </Grid>
  );
}

export default MapFooter;
