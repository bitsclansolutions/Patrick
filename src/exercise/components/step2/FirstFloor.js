import React from "react";
import { useSelector } from "react-redux";
import "./FirstFloor.css";
import Popup from "../../utils/Popup";
import { Link } from "react-router-dom";

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
      <Popup opacity="20" top={0} right={0} position={true} width={42}>
        <p className="welcome">First Floor</p>
        <p className="popup-text-base">
          This is the first floor of the house. You are on the landing.
        </p>
        <p className="popup-text-base">
          At the stairwell you can go from one floor to the other floor.
        </p>
        <p className="popup-text-base">
          Here you can see that bedrooms 1 and 2 are on power group 3. The
          landing, the bathroom and bedroom 3 are on power group 4.
        </p>
        <div className="popup-button">
          <Link to="/exercise-atticFloor">Click here to continue</Link>
        </div>
      </Popup>
    </div>
  );
};

export default FirstFloor;
