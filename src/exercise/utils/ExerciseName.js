import React from "react";
import "./ExerciseName.css";

const ExerciseName = () => {
  const userName = localStorage.getItem("userName");
  return (
    <div className="exercise-name">
      <div className="d-flex align-items-center">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/Avatar.png"}
            alt="dasdas"
            style={{ height: "40px", width: "40px", borderRadius: "100%" }}
          />
        </div>
        <div className="avatar-name">{userName}</div>
      </div>
    </div>
  );
};

export default ExerciseName;
