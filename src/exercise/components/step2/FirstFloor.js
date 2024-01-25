import React from "react";
import { useSelector } from "react-redux";
import "./FirstFloor.css";
import Popup from "../../../utils/Popup";
import { Link } from "react-router-dom";
import ExerciseName from "../../utils/ExerciseName";
import AudioPlayer from "../../../utils/AudioPlayer";
import audio3 from "../../../audios/audio3.m4a";
import firstEng from "../../patrick-exercise-new/ground-floor-eng.png";
import firstDutch from "../../patrick-exercise-new/first-floor-dutch.png";

const FirstFloor = () => {
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  return (
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
          ? "firstFloor-main-div-exercise-dutch"
          : "firstFloor-main-div-exercise-eng"
      }
    >
      <img className="bg-image" src={isDutch ? firstDutch : firstEng} alt="" />
      <ExerciseName />
      <Popup opacity="20" top={0} right={0} position={true} width={47}>
        {isDutch ? (
          <>
            {" "}
            <p className="welcome">Eerste verdieping</p>
            <p className="popup-text-base">Je bevindt je op de overloop.</p>
            <p className="popup-text-base">
              Bij het trapgat kun je van de ene verdieping naar de andere
              verdieping gaan.
            </p>
            <p className="popup-text-base">
              Hier zie je dat <b>slaapkamers 1</b> en <b>2</b> op{" "}
              <b>stroomgroep 3</b> zitten. <br /> De <b>overloop</b>, de{" "}
              <b>badkamer</b> en <b>slaapkamer 3</b> zitten op{" "}
              <b>stroomgroep 4</b>.
            </p>
            <div className="popup-bottom">
              <div className="vol-icon"></div>
              <div className="popup-button">
                <Link to="/exercise-atticFloor">
                  klik op deze knop om verder te gaan
                </Link>
              </div>
              <div className="vol-icon">
                <AudioPlayer file={audio3} />
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
            <p className="welcome">First Floor</p>
            <p className="popup-text-base">
              This is the first floor of the house. You are on the landing.
            </p>
            <p className="popup-text-base">
              At the stairwell you can go from one floor to the other floor.
            </p>
            <p className="popup-text-base">
              Here you can see that <b>bedrooms 1</b> and <b>2</b> are on{" "}
              <b>power group 3</b>. The <b>hall</b>, the <b>bathroom</b> and{" "}
              <b>bedroom 3</b> are on <b>power group 4</b>.
            </p>
            <div className="popup-button">
              <Link to="/exercise-atticFloor">Click here to continue</Link>
            </div>
          </>
        )}
      </Popup>
    </div>
  );
};

export default FirstFloor;
