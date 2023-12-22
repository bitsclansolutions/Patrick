import React from "react";
import "./Popup.css";

const Popup = ({
  children,
  opacity,
  top,
  left,
  right,
  bottom,
  width,
  show,
}) => {
  console.log(opacity);
  console.log(typeof opacity === "number");
  console.log(top, right);
  return (
    <div className={`popup ${show !== false ? "show" : "hide"}`}>
      <div
        className="backdrop"
        style={{
          background: `hsla(0, 0%, 0%, 0.${
            opacity !== null && opacity !== undefined ? opacity : "50"
          })`,
        }}
      >
        <div
          className="overlay"
          style={{
            top: top !== null ? top + "%" : "initial",
            left: left !== null ? left + "%" : "initial",
            right: right !== null ? right + "%" : "initial",
            bottom: bottom !== null ? bottom + "%" : "initial",
            width: width !== null ? width + "%" : "initial",
          }}
        >
          <div className="overlay-inner">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
