/* global google */
import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

function HeatMap() {
  const [heatmapPoints, setHeatMapPoints] = useState([
    { lat: 59.95, lng: 30.33 },
    { lat: 59.96, lng: 30.32 },
  ]);
  const apiKey = { key: "AIzaSyCzzH_05cKBIT1YNbtiuoe-k2w4U3BGG2M" };
  const heatMapData = {
    positions: heatmapPoints,
    options: {
      radius: 20,
      opacity: 0.6,
    },
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        // zIndex: -1,
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={apiKey}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33,
        }}
        defaultZoom={11}
        heatmapLibrary={true}
        heatmap={heatMapData}
      ></GoogleMapReact>
    </div>
  );
}

export default HeatMap;
