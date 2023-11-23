import React from "react";
import { useSelector } from "react-redux";
import Highlight from "../../utils/Highlight";
import Popup from "../../utils/Popup";
import "./Board.css";
import { Link } from "react-router-dom";
import ChangeLanguageToggle from "../../../utils/ChangeLanguageToggle";
import ExerciseName from "../../utils/ExerciseName";

const Board = () => {
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
      }}
      className={
        isDutch
          ? "kitchen-main-div-exercise-dutch"
          : "kitchen-main-div-exercise-eng"
      }
    >
      <ExerciseName />
      <div className="translator-exercise">
        <ChangeLanguageToggle />
      </div>
      <Highlight bottom={8} width="19%" left={-1.5} opacity={70} />
      <Popup bottom={15} left={20}>
        {isDutch ? (
          <>
            <p className="popup-text">
              Dit is de meterkast waarmee je alle stroom in huis in en uit kunt
              schakelen.
            </p>
            <p className="popup-text">
              Op deze afbeelding zie je <b>dat stroomgroep 2</b> is
              uitgeschakeld. <br /> De schakelaar staat naar beneden en is nu
              zwart van kleur.
            </p>
            <div className="popup-button">
              <Link to="/exercise-devices">Klik hier om verder te gaan</Link>
            </div>
          </>
        ) : (
          <>
            <p className="popup-text">
              This is the meter box with which you can switch all the power in
              your house on and off.
            </p>
            <p className="popup-text">
              In this board you can see that power <b>group 2</b> is switched
              off and changed color.
            </p>
            <div className="popup-button">
              <Link to="/exercise-devices">Click here to continue</Link>
            </div>
          </>
        )}
      </Popup>
    </div>
  );
};

export default Board;
