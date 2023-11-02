import React, { useState } from "react";
import "./RightNavbar.css";
import breakerOffIMG from "../kitchen-items/breakerOffIMG.png";
import breakerOnIMG from "../kitchen-items/breakerOnIMG.png";
import ChangeLanguageToggle from "../../utils/ChangeLanguageToggle";
import Avator from "../../Pages/Components/Avator";
import { useSelector } from "react-redux";
import Popup from "../utils/Popup";

const RightNavbar = () => {
  const isDutchLocal = useSelector(
    (state) => state.ChangeLanguageReducer.isDutch
  );

  const [breaker1, setBreaker1] = useState(true);
  const [breaker2, setBreaker2] = useState(false);
  const [breaker3, setBreaker3] = useState(true);
  const [breaker4, setBreaker4] = useState(true);
  const [breaker5, setBreaker5] = useState(true);
  const [breaker6, setBreaker6] = useState(true);
  const [showWrongBreaker, setShowWrongBreaker] = useState(false);
  const [showRightBreaker, setShowRightBreaker] = useState(false);
  const [showDeviceError, setShowDeviceError] = useState(false);

  const exerciseDisconnected = useSelector(
    (state) => state.ExerciseReducer.deviceCount
  );

  console.log(exerciseDisconnected);

  const breakerHnadler = (val) => {
    if (val === 1) {
      setBreaker1(!breaker1);
    } else if (val === 2) {
      setBreaker2(!breaker2);
    } else if (val === 3) {
      setBreaker3(!breaker3);
    } else if (val === 4) {
      setBreaker4(!breaker4);
    } else if (val === 5) {
      setBreaker5(!breaker5);
    } else if (val === 6) {
      setBreaker6(!breaker6);
    }

    if (val === 2 && exerciseDisconnected === 6) {
      setShowRightBreaker(true);
    } else if (val === 2 && exerciseDisconnected !== 6) {
      setShowDeviceError(true);
    } else if (val !== 2) {
      setShowWrongBreaker();
    }
  };

  return (
    <>
      <div>
        <div className="translator-exercise">{<ChangeLanguageToggle />}</div>
        <div className="check-exercise-div">
          <Avator phase={"game"} />
        </div>

        <hr style={{ marginTop: "2%" }} />
        <div className="legend">
          {/* GROUP 1 */}
          <div className="text-start">
            <p className="set-link-color">
              {isDutchLocal ? "Begane Grond" : "Ground Floor"}
            </p>
          </div>
          <div className="set-legend-text">
            {isDutchLocal ? <p>Groep&nbsp;1:</p> : <p>Group&nbsp;1:</p>}
            <p className="grp-detail">
              {isDutchLocal
                ? "Hal, Toilet, Woonkamer"
                : "Hall, Toilet, Living room"}
            </p>
          </div>
          {/* GROUP 2 */}
          <div className="set-legend-text">
            {isDutchLocal ? <p>Groep&nbsp;2:</p> : <p>Group&nbsp;2:</p>}
            <p className="grp-detail">{isDutchLocal ? "keuken" : "Kitchen"}</p>
          </div>
          {/* GROUP 3 */}
          <div className="text-start">
            <p className="set-link-color">
              {isDutchLocal ? "Eerste Verdieping" : "First Floor"}
            </p>
          </div>
          <div className="set-legend-text">
            {isDutchLocal ? <p>Groep&nbsp;3:</p> : <p>Group&nbsp;3:</p>}
            <p className="grp-detail">
              {isDutchLocal
                ? "Slaapkamer 01, Slaapkamer 02"
                : "Bedroom 01, Bedroom 02"}
            </p>
          </div>
          {/* GROUP 4 */}
          <div className="set-legend-text">
            {isDutchLocal ? <p>Groep&nbsp;4:</p> : <p>Group&nbsp;4:</p>}
            <p className="grp-detail">
              {isDutchLocal
                ? "Hal, Toilet, Slaapkamer 03"
                : "Hall, Toilet, Bedroom 03"}
            </p>
          </div>
          <div className="text-start">
            <p className="set-link-color">
              {isDutchLocal ? "Zolderverdieping" : "Attic Floor"}
            </p>
          </div>
          {/* GROUP 5 */}
          <div className="set-legend-text">
            {isDutchLocal ? <p>Groep&nbsp;5:</p> : <p>Group&nbsp;5:</p>}
            <p className="grp-detail">
              {isDutchLocal
                ? "hal, logeerkamer, studeerkamer, berging"
                : "hall, guest room, study room, storage room"}
            </p>
          </div>
          {/* GROUP 6 */}
          <div className="set-legend-text">
            {isDutchLocal ? <p>Groep&nbsp;6:</p> : <p>Group&nbsp;6:</p>}
            <p className="grp-detail">{isDutchLocal ? "de was" : "laundry"}</p>
          </div>
          {/* END GROUP */}
        </div>
        <div className="set-main-flex-container" style={{ marginTop: "2rem" }}>
          <div
            className="meter-inner-img"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}${
                !isDutchLocal
                  ? "/images/meterGroup.png"
                  : "/dutch-images/breakers-15.png"
              })`,
            }}
          >
            <>
              {/* MAIN .................................................................. */}
              <div className="groupA">
                <div className="d-flex justify-content-center">
                  <>
                    <button
                      className="group-btn position-Bath font-height-width btn-shadow"
                      onClick={() => breakerHnadler(1)}
                    >
                      <img
                        src={breaker1 ? breakerOnIMG : breakerOffIMG}
                        alt=""
                        className="breakerImg"
                      />
                    </button>
                  </>
                  <>
                    <button
                      className="group-btn position-living font-height-width btn-shadow"
                      onClick={() => breakerHnadler(2)}
                    >
                      <img
                        src={breaker2 ? breakerOnIMG : breakerOffIMG}
                        alt=""
                        className="breakerImg"
                      />
                    </button>
                  </>
                  <>
                    <button
                      className="group-btn position-living font-height-width btn-shadow"
                      onClick={() => breakerHnadler(3)}
                    >
                      <img
                        src={breaker3 ? breakerOnIMG : breakerOffIMG}
                        alt=""
                        className="breakerImg"
                      />
                    </button>
                  </>
                </div>
              </div>

              {/* Groups row 2 .................................................................. */}
              <div className="groupB">
                <div className="d-flex justify-content-center">
                  <>
                    <button
                      className="group-btn position-Hall font-height-width  btn-shadow"
                      onClick={() => breakerHnadler(4)}
                    >
                      <img
                        src={breaker4 ? breakerOnIMG : breakerOffIMG}
                        alt=""
                        className="breakerImg"
                      />
                    </button>
                  </>
                  <>
                    <button
                      className="group-btn position-Hall font-height-width  btn-shadow"
                      onClick={() => breakerHnadler(5)}
                    >
                      <img
                        src={breaker5 ? breakerOnIMG : breakerOffIMG}
                        alt=""
                        className="breakerImg"
                      />
                    </button>
                  </>
                  <>
                    <button
                      className="group-btn position-Hall font-height-width  btn-shadow"
                      onClick={() => breakerHnadler(6)}
                    >
                      <img
                        src={breaker6 ? breakerOnIMG : breakerOffIMG}
                        alt=""
                        className="breakerImg"
                      />
                    </button>
                  </>
                </div>
              </div>
            </>
          </div>
        </div>
        <h3 className="set-floor-title">
          {" "}
          {isDutchLocal ? "Huisbrekers" : "House Breakers"}
        </h3>
        <hr />
      </div>
      <Popup top={50} opacity={7}>
        <p className="popup-text">Wrong Breaker</p>
      </Popup>
    </>
  );
};

export default RightNavbar;
