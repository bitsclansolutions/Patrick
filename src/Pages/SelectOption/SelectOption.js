import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SelectOption.css";
import ChangeLanguageToggle from "../../utils/ChangeLanguageToggle";
import { setExercise, setExerciseGate } from "../../Redux/Action";

const SelectOption = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [errUserName, setErrUserName] = useState("");
  const [smallBtn, setSmallBtn] = useState("next");
  const [largeBtn, setLargeBtn] = useState("IQ test");

  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/HomeIMG.png"})`,
          height: "100vh",
          width: "auto",
        }}
        className="main-home-div"
      >
        <div id="clouds">
          <div class="cloud x1"></div>
          <div class="cloud x2"></div>
          <div class="cloud x3"></div>
          <div class="cloud x4"></div>
          <div class="cloud x5"></div>
          <div class="cloud x6"></div>
          <div class="cloud x7"></div>
          <div class="cloud x8"></div>
        </div>
        <div style={{ textAlign: "center", position: "fixed" }}>
          <ChangeLanguageToggle color="black" />
          <>
            <div>
              <label
                style={{ marginLeft: "-27px" }}
                className="home-heading"
                htmlFor="name"
              >
                {isDutch ? "Maak een keuze" : "Select Between Two Option"}
              </label>
            </div>
            <div className="d-flex select-text">
              <button
                className={
                  largeBtn === "exercise"
                    ? "btn-blue set-opacity-btn mx-3"
                    : "btn-white mx-3"
                }
                style={{ padding: "14px 30px", minWidth: "200px" }}
                onClick={() => setLargeBtn("exercise")}
              >
                {isDutch ? "Oefening" : "Do you want to move for an exercise?"}
              </button>
              <button
                className={
                  largeBtn === "IQ test"
                    ? "btn-blue set-opacity-btn mx-3"
                    : "btn-white mx-3"
                }
                style={{ padding: "14px 30px", minWidth: "200px" }}
                onClick={() => setLargeBtn("IQ test")}
              >
                {isDutch ? "Toets" : "Do you want to perform a IQ test?"}
              </button>
              <button
                className="btn-blue set-opacity-btn"
                style={{ paddingRight: "10px", padding: "4px 12px 1px 12px" }}
              >
                <i
                  className="fa-solid fa-microphone-slash"
                  style={{ fontSize: "23px" }}
                ></i>
              </button>
            </div>
            <div
              style={{
                color: "red",
                marginLeft: "-27px",
                fontSize: "13px",
                marginTop: "2px",
              }}
            >
              {errUserName}
            </div>
            <div className="d-flex justify-content-evenly">
              <button
                className={
                  smallBtn === "back" ? "btn-blue set-opacity-btn" : "btn-white"
                }
                onMouseEnter={() => setSmallBtn("back")}
                style={{
                  padding: "8px 30px",
                  marginTop: "6%",
                }}
                onClick={() => navigate("/")}
              >
                {isDutch ? "Terug" : "Back"}
              </button>
              <button
                className={
                  smallBtn === "next" ? "btn-blue set-opacity-btn" : "btn-white"
                }
                onMouseEnter={() => setSmallBtn("next")}
                style={{
                  padding: "8px 30px",
                  marginTop: "6%",
                }}
                onClick={() => {
                  if (largeBtn === "IQ test") {
                    dispatch(setExerciseGate(2));
                    navigate("/mask-group");
                  } else {
                    navigate("/exercise-start");
                  }
                }}
              >
                {isDutch ? "Volgende" : "Next"}
              </button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default SelectOption;
