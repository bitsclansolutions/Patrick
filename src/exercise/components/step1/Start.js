import React from "react";
import { useSelector } from "react-redux";
import "./Start.css";
import Popup from "../../utils/Popup";
import { Link } from "react-router-dom";
// import ExerciseHall from "/exercise-images/Screenshot 2023-10-20 220310.png";

const Start = () => {
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  console.log(process.env.PUBLIC_URL);

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%) url(${
            process.env.PUBLIC_URL
          }${
            !isDutch
              ? "/exercise-images/Screenshot 2023-10-20 220310.png"
              : "/exercise-images/hall.png"
          })`,
          height: "100vh",
          width: "100vw",
          border: "2px dotted white",
        }}
        className={
          isDutch
            ? "hall-main-div-exercise-dutch"
            : "hall-main-div-exercise-eng"
        }
      >
        <Popup opacity={60}>
          <p className="welcome">Welcome</p>
          <p className="popup-text">
            Dear student, In this assignment you will learn how to find out if
            there is a short circuit at home and how to solve it. Watch the
            video to understand what a short circuit is.
          </p>
          <div className="video">
            <iframe
              width="90%"
              height="235"
              src="https://www.youtube.com/embed/-SORycnF0Yo?si=awMxZ_iEH1eSV2O9"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p className="popup-text">You will be shown a tour of a house.</p>
          <div className="popup-button">
            <Link to={"/exercise-groundFloor"}>Click here to continue</Link>
          </div>
        </Popup>
      </div>
    </>
  );
};

export default Start;
