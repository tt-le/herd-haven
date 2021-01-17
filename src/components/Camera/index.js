import React, { useState } from "react";
import QrReader from "react-qr-scanner";

function Camera() {
  const [qr, setQr] = useState("");

  const handleScan = (data) => {
    if (data) {
      setQr(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{
          zIndex: -1,
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <p>{qr}</p>
    </div>
  );
}

export default Camera;
