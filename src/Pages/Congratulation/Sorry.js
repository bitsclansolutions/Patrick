import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useSelector } from "react-redux";
import RestartIcon from "../Congratulation/restart-icon.png";
import TryAgain from "../Congratulation/try-again.png";
import "./Congratulation.css";
const Sorry = () => {
  const navigate = useNavigate();
  const isHurray = useSelector((state) => state.HurrayReducer.hurry);
  return (
    <>
      {isHurray ? (
        <Confetti
          numberOfPieces={1000}
          height={"1000px"}
          width={"3000px"}
          gravity={1}
        />
      ) : (
        ""
      )}
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/sorry-img.png"})`,
          height: "100vh",
          width: "auto",
          position: "relative",
        }}
        className="main-mask-div"
      >
        <button
          // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
          //   boom-bum
          className={"set-position-btn boom-bum"}
          onClick={() => {
            // setShowAttic(true)
            // navigate("/mask-group");
            window.location.href = "/";
          }}
        >
          <img src={TryAgain} />
        </button>
      </div>
    </>
  );
};

export default Sorry;
