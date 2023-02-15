import React from "react";

export default function Loading({ style }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <i className="fas fa-spinner fa-pulse" style={style}></i>
    </div>
  );
}
