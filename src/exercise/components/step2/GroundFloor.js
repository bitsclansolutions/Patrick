import React from "react";
import { useSelector } from "react-redux";
import Popup from "../../utils/Popup";
import { Link } from "react-router-dom";
import "./GroundFloor.css";
import ExerciseName from "../../utils/ExerciseName";
import AudioPlayer from "../../../utils/AudioPlayer";
import audio2 from "../../../audios/audio2.m4a";

const GroundFloor = () => {
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

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
        <ExerciseName />
        <Popup opacity="20" top={0} right={0} position={true} width={45}>
          {isDutch ? (
            <>
              <p className="welcome">Begane Grond</p>
              <p className="popup-text-base">Je bevindt je in de hal</p>
              <p className="popup-text-base">
                Je ziet verschillende deuren met de naam van de ruimte erop.{" "}
                <br />
                Links van het scherm zie je de meterkast. <br /> Daarboven staat
                een overzicht waarop je kunt zien welke stroomgroep bij welke
                ruimte(s) hoort. <br /> Je kunt daar ook zien op welke
                stroomgroep de elektriciteit is aangesloten.
              </p>
              <p className="popup-text-base">
                Hier zie je dat de <b>keuken</b> op <b>stroomgroep 2</b> zit.{" "}
                <br /> Het <b>toilet, de woonkamer</b> en de <b>hal</b> ziten op{" "}
                <b>stroomgroep 1</b>.
              </p>
              <div className="popup-bottom">
                <div className="vol-icon"></div>
                <div className="popup-button">
                  <Link to="/exercise-firstFloor">
                    klik op de deze knop om verder te gaan
                  </Link>
                </div>
                <div className="vol-icon">
                  <AudioPlayer file={audio2} />
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="welcome">Ground Floor</p>
              <p className="popup-text-base">
                You will see several doors with the name of the room on them .
              </p>
              <p className="popup-text-base">
                To the left of the screen you see the meter cupboard with an
                overview above it where you can see which power group is in
                which room. You can also see which power group the electricity
                is connected to.
              </p>
              <p className="popup-text-base">
                Here you can see that the <b>kitchen</b> is on power{" "}
                <b>group 2</b> and the <b>toilet, living room</b> and{" "}
                <b>hall</b> on power <b>group 1</b>.
              </p>
              <div className="popup-button">
                <Link to="/exercise-firstFloor">Click here to continue</Link>
              </div>
            </>
          )}
        </Popup>
      </div>
    </>
  );
};

export default GroundFloor;
