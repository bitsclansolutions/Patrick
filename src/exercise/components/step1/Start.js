import React from "react";
import { useSelector } from "react-redux";
import "./Start.css";
import Popup from "../../utils/Popup";
import { Link } from "react-router-dom";
import ChangeLanguageToggle from "../../../utils/ChangeLanguageToggle";
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
        }}
        className={
          isDutch
            ? "hall-main-div-exercise-dutch"
            : "hall-main-div-exercise-eng"
        }
      >
        <div className="translator-exercise">
          <ChangeLanguageToggle />
        </div>
        <Popup opacity={60}>
          <p className="welcome">{isDutch ? "Welkom" : "Welcome"}</p>
          <p className="popup-text">
            {isDutch
              ? "Beste leerling, In deze opdracht ga je leren hoe je een thuis kunt ontdekken of er een kortsluiting is en hoe je dit kunt oplossen. bekijk het filmpje om te begrijpen wat een kortsluiting is."
              : "Dear student, In this assignment you will learn how to find out if there is a short circuit at home and how to solve it. Watch the video to understand what a short circuit is."}
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
          <p className="popup-text">
            {isDutch
              ? "Je krijgt straks een rondleiding te zien in een woning."
              : "You will be shown a tour of a house."}
          </p>
          <div className="popup-button">
            <Link to={"/exercise-groundFloor"}>
              {isDutch
                ? "klik hier om verder te gaan"
                : "Click here to continue"}
            </Link>
          </div>
        </Popup>
      </div>
    </>
  );
};

export default Start;
