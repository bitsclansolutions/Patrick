import React from "react";
import { useSelector } from "react-redux";
import Popup from "../../utils/Popup";
import { Link } from "react-router-dom";

const Finish = () => {
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
      <Popup opacity={60}>
        <p className="welcome">Did you understand this explanation?</p>
        <div className="popup-button">
          <div className="popup-button">
            <Link to="/exercise-step3">No</Link>
            <Link to="/exercise-step4">Yes</Link>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default Finish;
