import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./AtticFloor.css";
import Popup from "../../utils/Popup";
import { Link } from "react-router-dom";

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
      {!endStep && (
        <Popup right={0} top={0} opacity={10}>
          {" "}
          <p className="popup-text">
            This is the first floor of the house. You are on the landing.
          </p>
          <p className="popup-text">
            At the stairwell you can go from one floor to the other floor.
          </p>
          <p className="popup-text">
            Here you can see that bedrooms 1 and 2 are on power group 3. The
            landing, the bathroom and bedroom 3 are on power group 4.
          </p>
          <div className="popup-button">
            <button onClick={() => setEndStep(true)}>
              Click here to continue
            </button>
          </div>
        </Popup>
      )}
      {endStep && (
        <Popup opacity={50}>
          {" "}
          <p className="welcome">Did you understand this explanation?</p>
          <div className="popup-button">
            <Link to="/exercise-groundFloor">No</Link>
            <Link to="/exercise-step3">Yes</Link>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default AtticFloor;
