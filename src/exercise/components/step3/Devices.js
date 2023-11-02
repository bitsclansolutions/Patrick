import React from "react";
import { useSelector } from "react-redux";
import Popup from "../../utils/Popup";
import { Link } from "react-router-dom";
import ChangeLanguageToggle from "../../../utils/ChangeLanguageToggle";

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
      <div className="translator-exercise">
        <ChangeLanguageToggle />
      </div>
      <Popup bottom={0} right={0} width={47} opacity={1}>
        {isDutch ? (
          <>
            <p className="popup-text-base">
              Je staat nu in de keuken van de begane grond. In het schema links
              van je scherm zie dat de <b>keuken</b> op <b>stroomgroep 2</b> zit
              Door te klikken op de knop Loskoppelen of Koppelen kun je een
              apparaat uit het stopcontact halen of loskoppelen van het netwerk.
            </p>
            <p className="popup-text-base">
              Als er andere kamers op dezelfde stroomgroep zitten moet je de
              apparaten uit die kamers ook uitschakelen.
            </p>
            <p className="popup-text-base">
              Wanneer je een kamer wilt verlaten klik je op de knop 'Terug'
            </p>
            <div className="popup-button">
              <Link to="/exercise-step3-finish">
                Klik hier om verder te gaan
              </Link>
            </div>
          </>
        ) : (
          <>
            <p className="popup-text-base">
              You are now in the kitchen of the ground floor. In the diagram to
              the left of your screen you can see that the <b>kitchen</b> is on{" "}
              <b>group 2</b>. By clicking the Disconnect or Pair button, you can
              unplug or disconnect a device from the network.
            </p>
            <p className="popup-text-base">
              If there are other rooms on the same power group, you must also
              turn off the devices from those rooms.
            </p>
            <p className="popup-text-base">
              When you want to leave a room, click the Back button
            </p>
            <div className="popup-button">
              <Link to="/exercise-step3-finish">Click here to continue</Link>
            </div>
          </>
        )}
      </Popup>
    </div>
  );
};

export default Devices;
