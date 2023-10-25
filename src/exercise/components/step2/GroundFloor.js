import React from "react";
import { useSelector } from "react-redux";
import Popup from "../../utils/Popup";
import { Link } from "react-router-dom";

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
        <Popup opacity="20" top={0} right={0} position={true} width={45}>
          <p className="popup-text">
            You will see several doors with the name of the room on them.
          </p>
          <p className="popup-text">
            To the left of the screen you see the meter cupboard with an
            overview above it where you can see which power group is in which
            room. You can also see which power group the electricity is
            connected to.
          </p>
          <p className="popup-text">
            Here you can see that the kitchen is on power group 2 and the
            toilet, living room and hall on power group 1.
          </p>
          <div className="popup-button">
            <Link to="/exercise-firstFloor">Click here to continue</Link>
          </div>
        </Popup>
      </div>
    </>
  );
};

export default GroundFloor;
