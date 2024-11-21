import React from "react";
import "./actionButton.css";

function ActionButton({ label, onClick, type, htmlType, loading, disabled, isBlocked }) {
  return (
    <button
      className={
        isBlocked
          ? "action-button-blocked"
          : type === "outline"
          ? "action-button-outline"
          : "action-button"
      }
      onClick={onClick}
      type={htmlType}
      disabled={disabled} // Disabling button if isBlocked is true
    >
      {label}
    </button>
  );
}

export default ActionButton;
