import React from "react";
import { useSelector } from "react-redux";
import Popup from "../../utils/Popup";
import { Link } from "react-router-dom";

const Devices = () => {
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
      <Popup bottom={0} right={0} width={47} opacity={1}>
        <p className="popup-text">
          You are now in the kitchen of the ground floor. In the diagram to the
          left of your screen you can see that the kitchen is on power group 2.
          By clicking the Disconnect or Pair button, you can unplug or
          disconnect a device from the network.
        </p>
        <p className="popup-text">
          If there are other rooms on the same power group, you must also turn
          off the devices from those rooms.
        </p>
        <p className="popup-text">
          When you want to leave a room, click the Back button
        </p>
        <div className="popup-button">
          <Link to="/exercise-step3-finish">Click here to continue</Link>
        </div>
      </Popup>
    </div>
  );
};

export default Devices;
