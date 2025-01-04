// components/CustomMap.jsx
import React from "react";

const CustomMap = ({ mapUrl }) => {
  return (
    <div style={{ position: "relative", width: "100%", height: "400px" }}>
      <iframe
        title="Google Map"
        src={mapUrl} // Pass the URL as a prop
        style={{ border: 0, width: "100%", height: "100%" }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default CustomMap;
