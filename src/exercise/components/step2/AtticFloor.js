import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./AtticFloor.css";
import Popup from "../../utils/Popup";
import { Link } from "react-router-dom";
import ExerciseName from "../../utils/ExerciseName";
import AudioPlayer from "../../../utils/AudioPlayer";
import audio4 from "../../../audios/audio4.m4a";

const AtticFloor = () => {
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);
  const [endStep, setEndStep] = useState(false);
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
          ? "atticFloor-main-div-exercise-dutch"
          : "atticFloor-main-div-exercise-eng"
      }
    >
      <ExerciseName />
      {!endStep && (
        <Popup right={0} top={0} opacity={10}>
          {isDutch ? (
            <>
              <p className="welcome">Zolder</p>
              <p className="popup-text-base">Je bevindt je op de overloop.</p>
              <p className="popup-text-base">
                Hier zie je dat de <b>overloop</b>, <b>logeerkamer</b>,{" "}
                <b>studeerkamer</b> en <b>berging</b> op <b>stroomgroep 5</b>{" "}
                zitten. <br /> Het <b>washok</b> zit op <b>stroomgroep 6</b>.
              </p>
              <div className="popup-bottom">
                <div className="vol-icon"></div>
                <div className="popup-button">
                  <button onClick={() => setEndStep(true)}>
                    klik op de deze knop om verder te gaan
                  </button>
                </div>
                <div className="vol-icon">
                  <AudioPlayer file={audio4} />
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="welcome">Attic Floor</p>
              <p className="popup-text-base">
                This is the attic, which is located on the second floor of the
                house. You are on the landing of the attic.
              </p>
              <p className="popup-text-base">
                Here you can see that the landing, <b>guest room</b>,{" "}
                <b>study</b> and <b>storage room</b> are on stream{" "}
                <b>group 5</b> and the <b>laundry room</b> on stream{" "}
                <b>group 6</b>.
              </p>

              <div className="popup-button">
                <button onClick={() => setEndStep(true)}>
                  Click here to continue
                </button>
              </div>
            </>
          )}
        </Popup>
      )}
      {endStep && (
        <Popup opacity={50}>
          {" "}
          {isDutch ? (
            <>
              <p className="welcome">Heb je deze uitleg begrepen?</p>
              <div className="popup-button">
                <Link to="/exercise-groundFloor">Nee</Link>
                <Link to="/exercise-step3">Ja</Link>
              </div>
            </>
          ) : (
            <>
              <p className="welcome">Did you understand this explanation?</p>
              <div className="popup-button">
                <Link to="/exercise-groundFloor">No</Link>
                <Link to="/exercise-step3">Yes</Link>
              </div>
            </>
          )}
        </Popup>
      )}
    </div>
  );
};

export default AtticFloor;
