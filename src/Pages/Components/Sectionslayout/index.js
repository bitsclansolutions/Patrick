import React from "react";

function SectionsLayout({ children }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
}

export default SectionsLayout;
