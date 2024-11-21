import React from "react";
import "./customButton.css";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Button = ({
  label,
  onClick,
  loading,
  type,
  disabled,
  style = {},
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={`${className} ${
        type === "solid" ? "solid-button" : "outlined-button"
      } `}
    >
      {loading ? (
        <Spin
          indicator={<LoadingOutlined style={{ color: "#ffffff" }} spin />}
        />
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
