/* global google */
import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

function HeatMap() {
  const [heatmapPoints, setHeatMapPoints] = useState([
    { lat: 43.658654, lng: -79.381864 },
    { lat: 43.662373, lng: -79.383485 },
    { lat: 43.663676, lng: -79.38012 },
    { lat: 43.665407, lng: -79.377974 },
    { lat: 43.667588, lng: -79.38056 },
    { lat: 43.668962, lng: -79.384648 },
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
          lat: 43.66,
          lng: -79.38,
        }}
        defaultZoom={11}
        heatmapLibrary={true}
        heatmap={heatMapData}
      ></GoogleMapReact>
    </div>
  );
}

export default HeatMap;
