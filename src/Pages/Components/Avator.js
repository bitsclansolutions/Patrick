import React from "react";
import { useSelector } from "react-redux";
import "./Avator.css";

const Avator = (props) => {
  // const userName = useSelector((state) => state.UserReducer.userName);

  const userName = localStorage.getItem("userName");

  return (
    <div className={props.phase === "home" ? "d-flex flex-lg-row-reverse" : ""}>
      <div className="d-flex align-items-center">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/Avatar.png"}
            alt="dasdas"
            style={{ height: "50px", width: "50px", borderRadius: "100%" }}
          />
        </div>
        <div className="avatar-name">{userName}</div>
      </div>
    </div>
  );
};

export default Avator;
