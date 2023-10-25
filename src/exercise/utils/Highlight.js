import React from "react";
import "./Highlight.css";

const Highlight = ({ top, bottom, left, right, opacity, width }) => {
  return (
    <div
      className="highlight-main"
      style={{
        boxShadow: `0 0 50px 10000px hsla(0, 0%, 0%, 0.${
          opacity ? opacity : 50
        })`,
      }}
    >
      <div
        className="highlight"
        style={{
          top: top !== null ? top + "%" : "initial",
          left: left !== null ? left + "%" : "initial",
          right: right !== null ? right + "%" : "initial",
          bottom: bottom !== null ? bottom + "%" : "initial",
          width: width !== null ? width : "200px",
          boxShadow: `0 0 50px 10000px hsla(0, 0%, 0%, 0.${
            opacity ? opacity : 50
          })`,
        }}
      ></div>
    </div>
  );
};

export default Highlight;
