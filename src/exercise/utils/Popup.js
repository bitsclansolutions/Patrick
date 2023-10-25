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
  higlight,
}) => {
  console.log(opacity);
  console.log(top, right);
  return (
    <div className="popup">
      <div
        className="backdrop"
        style={{
          background: `hsla(0, 0%, 0%, 0.${opacity !== null ? opacity : "50"})`,
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
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
