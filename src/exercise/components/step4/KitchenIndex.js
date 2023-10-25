import React, { useState } from "react";
import "../RightNavbar.css";
import ChangeLanguageToggle from "../../../utils/ChangeLanguageToggle";
import Avator from "../../../Pages/Components/Avator";
import Popup from "../../utils/Popup";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseExerciseCounter,
  increaseCouter,
  increaseExerciseCounter,
  resetExerciseCounter,
  setExerciseCounter,
} from "../../../Redux/Action";

import "./Kitchen.css";

import breakerOffIMG from "../../kitchen-items/breakerOffIMG.png";
import breakerOnIMG from "../../kitchen-items/breakerOnIMG.png";
import SmokeOn from "../../kitchen-items/SmookOn.png";
import MixerOn from "../../kitchen-items/mixerOn.png";
import MixerOff from "../../kitchen-items/mixerOff.png";
import BulbOn from "../../kitchen-items/bulbOn.png";
import BulbOff from "../../kitchen-items/bulboff.png";
import OvenOn from "../../kitchen-items/ovenOn.png";
import OvenOff from "../../kitchen-items/ovenOff.png";
import ToasterOn from "../../kitchen-items/toasterOn.png";
import ToasterOff from "../../kitchen-items/toasterOff.png";
import { Link } from "react-router-dom";

const KitchenIndex = () => {
  const isDutchLocal = useSelector(
    (state) => state.ChangeLanguageReducer.isDutch
  );
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  const [breaker1, setBreaker1] = useState(true);
  const [breaker2, setBreaker2] = useState(false);
  const [breaker3, setBreaker3] = useState(true);
  const [breaker4, setBreaker4] = useState(true);
  const [breaker5, setBreaker5] = useState(true);
  const [breaker6, setBreaker6] = useState(true);
  const [showDisconnectDevices, setShowDisconnectDevices] = useState(true);
  const [showDisconnectAll, setShowDisconnectAll] = useState(false);
  const [showMeterFuse, setShowMeterFuse] = useState(false);
  const [showWrongBreaker, setShowWrongBreaker] = useState(false);
  const [showRightBreaker, setShowRightBreaker] = useState(false);
  const [showDeviceError, setShowDeviceError] = useState(false);
  const [showCorruptError, setShowCorruptError] = useState(false);
  const [showFuseError, setShowFuseError] = useState(false);
  const [showConnectAll, setShowConnectAll] = useState(false);
  const [showRepair, setShowRepair] = useState(false);
  const [showConnectRemaining, setShowConnectRemaining] = useState(false);
  const [showStepBack, setShowStepBack] = useState(false);
  const [connectCorrect, setConnectCorrect] = useState(false);
  const [showFinish, setShowFinish] = useState(false);
  const [warning, setWarning] = useState(false);
  const dispatch = useDispatch();
  const [smoke, setSmoke] = useState(true);
  const [mixer, setMixer] = useState(true);
  const [oven, setOven] = useState(true);
  const [toaster, setToaster] = useState(true);
  const [bulb1, setBulb1] = useState(true);
  const [bulb2, setBulb2] = useState(true);
  const [breakerOn, setBreakerOn] = useState(false);

  const exerciseDisconnected = useSelector(
    (state) => state.ExerciseReducer.deviceCount
  );

  console.log(exerciseDisconnected);

  const breakerHnadler = (val) => {
    if (val === 1) {
      setBreaker1(!breaker1);
    } else if (val === 2 && exerciseDisconnected === 6) {
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

    if (val === 2 && exerciseDisconnected === 6 && !breakerOn) {
      setShowRightBreaker(true);
    } else if (val === 2 && exerciseDisconnected !== 6 && !breakerOn) {
      setShowDeviceError(true);
    } else if (val !== 2) {
      setShowWrongBreaker(true);
    }

    if (val === 2 && warning && exerciseDisconnected === 1) {
      setBreaker2(true);
      setShowFinish(true);
    }
    if (val === 2 && warning && exerciseDisconnected !== 1) {
      setConnectCorrect(true);
    }
  };

  console.log(warning);
  const toasterOn = () => {
    if (breakerOn && !warning) {
      console.log("hello");
      setShowCorruptError(true);
      setBreaker2(false);
      setWarning(true);
    } else if (warning) {
      console.log("hello");
      setShowStepBack(true);
    } else if (!breakerOn) {
      setToaster(!toaster);
    }
  };

  console.log(showStepBack);

  console.log(breaker2);

  const disconnectDevices = () => {
    setShowDisconnectDevices(false);
    setShowDisconnectAll(true);
  };
  const disconnectAll = () => {
    setShowDisconnectAll(false);
    setShowMeterFuse(true);
  };

  const wrongBreakerHandler = () => {
    setBreaker1(true);
    setBreaker3(true);
    setBreaker4(true);
    setBreaker5(true);
    setBreaker6(true);
    setShowWrongBreaker(false);
  };
  const deviceErrorHandler = () => {
    setBulb1(true);
    setBulb2(true);
    setOven(true);
    setToaster(true);
    setMixer(true);
    setSmoke(true);
    setShowDeviceError(false);
    dispatch(resetExerciseCounter());
  };
  const rightBreakerHandler = () => {
    setShowRightBreaker(false);
    setBreakerOn(true);
    setShowConnectAll(true);
  };
  const connectAll = () => {
    setShowConnectAll(false);
    dispatch(setExerciseCounter(6));
  };

  const corruptErrorHandler = () => {
    setShowCorruptError(false);
    setShowFuseError(true);
  };

  const fuseErrorHandler = () => {
    setShowFuseError(false);
    setShowRepair(true);
  };

  const repairHandler = () => {
    setShowRepair(false);
    setShowConnectRemaining(true);
  };
  const stepBackHandler = () => {
    setShowStepBack(false);
  };

  return (
    <>
      <div className="flex" style={{ height: "100vh", display: "flex" }}>
        <div
          className=" navbar-background"
          style={{ width: "17%", padding: "0 10px" }}
        >
          <>
            <div>
              {<ChangeLanguageToggle />}
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
                  <p className="grp-detail">
                    {isDutchLocal ? "keuken" : "Kitchen"}
                  </p>
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
                  <p className="grp-detail">
                    {isDutchLocal ? "de was" : "laundry"}
                  </p>
                </div>
                {/* END GROUP */}
              </div>
              <div
                className="set-main-flex-container"
                style={{ marginTop: "2rem" }}
              >
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
          </>
        </div>
        <div style={{ background: "#B33759", height: "100uh", width: "83%" }}>
          <div className="">
            <div className="row">
              <div style={{ height: "100vh" }}>
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
                    border: "2px dotted white",
                  }}
                  className={
                    isDutch
                      ? "kitchen-func-exercise-dutch"
                      : "kitchen-func-exercise-eng"
                  }
                >
                  <div className="smoke">
                    {smoke && <img src={SmokeOn} alt="smoke" />}
                  </div>
                  <div className="smoke-button">
                    <button
                      className={`btn btn-${
                        smoke ? "success" : "danger"
                      } btn-sm active btn-font`}
                      onClick={() => {
                        dispatch(
                          !smoke
                            ? decreaseExerciseCounter()
                            : increaseExerciseCounter()
                        );
                        setSmoke(!smoke);
                      }}
                    >
                      {smoke ? "Disconnect" : "Connect"}
                    </button>
                  </div>
                  <div className="mixer">
                    <img src={mixer ? MixerOn : MixerOff} alt="mixer" />
                  </div>
                  <div className="mixer-button">
                    <button
                      className={`btn btn-${
                        mixer ? "success" : "danger"
                      } btn-sm active btn-font`}
                      onClick={() => {
                        dispatch(
                          !mixer
                            ? decreaseExerciseCounter()
                            : increaseExerciseCounter()
                        );
                        setMixer(!mixer);
                      }}
                    >
                      {mixer ? "Disconnect" : "Connect"}
                    </button>
                  </div>
                  <div className="toaster">
                    <img src={toaster ? ToasterOn : ToasterOff} alt="toaster" />
                  </div>
                  <div className="toaster-button">
                    <button
                      className={`btn btn-${
                        toaster ? "success" : "danger"
                      } btn-sm active btn-font`}
                      onClick={() => {
                        !breakerOn &&
                          dispatch(
                            !toaster
                              ? decreaseExerciseCounter()
                              : increaseExerciseCounter()
                          );
                        toasterOn();
                      }}
                    >
                      {toaster ? "Disconnect" : "Connect"}
                    </button>
                  </div>
                  <div className="oven">
                    <img src={oven ? OvenOn : OvenOff} alt="oven" />
                  </div>
                  <div className="oven-button">
                    <button
                      className={`btn btn-${
                        oven ? "success" : "danger"
                      } btn-sm active btn-font`}
                      onClick={() => {
                        dispatch(
                          !oven
                            ? decreaseExerciseCounter()
                            : increaseExerciseCounter()
                        );
                        setOven(!oven);
                      }}
                    >
                      {oven ? "Disconnect" : "Connect"}
                    </button>
                  </div>
                  <div className="bulb1">
                    <img src={bulb1 ? BulbOn : BulbOff} alt="bulb" />
                  </div>
                  <div className="bulb1-button">
                    <button
                      className={`btn btn-${
                        bulb1 ? "success" : "danger"
                      } btn-sm active btn-font`}
                      onClick={() => {
                        dispatch(
                          !bulb1
                            ? decreaseExerciseCounter()
                            : increaseExerciseCounter()
                        );
                        setBulb1(!bulb1);
                      }}
                    >
                      {bulb1 ? "Disconnect" : "Connect"}
                    </button>
                  </div>
                  <div className="bulb2">
                    <img src={bulb2 ? BulbOn : BulbOff} alt="bulb" />
                  </div>
                  <div className="bulb2-button">
                    <button
                      className={`btn btn-${
                        bulb2 ? "success" : "danger"
                      } btn-sm active btn-font`}
                      onClick={() => {
                        dispatch(
                          !bulb2
                            ? decreaseExerciseCounter()
                            : increaseExerciseCounter()
                        );
                        setBulb2(!bulb2);
                      }}
                    >
                      {bulb2 ? "Disconnect" : "Connect"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDisconnectDevices && (
        <Popup opacity={2} bottom={5} right={2}>
          <p className="popup-text">
            You can see that in the kitchen there are You can see that in the
            kitchen there are various electrical appliances. Each device or lamp
            has a green 'Disconnect' button.
          </p>
          <p className="popup-text">
            By pressing this button you unplug the plug. The button changes
            color so you can see that it's scaled out.
          </p>
          <div className="popup-button">
            <button onClick={disconnectDevices}>Click here to continue</button>
          </div>
        </Popup>
      )}
      {showDisconnectAll && (
        <Popup opacity={7}>
          <p className="welcome">Disconnect All</p>
          <p className="popup-text">
            Click on all electrical device in the kitchen to turn them off.
          </p>
          <div className="popup-button">
            <button onClick={disconnectAll}>Click here to continue</button>
          </div>
        </Popup>
      )}
      {showMeterFuse && (
        <>
          <Popup opacity={2}>
            <p className="welcome">Turn fuse on</p>
            <p className="popup-text">
              After disconnecting all devices look to the meterbox Click on the
              group 2 fuse to turn power back on.
            </p>
            <div className="popup-button">
              <button onClick={() => setShowMeterFuse(false)}>
                Click here to continue
              </button>
            </div>
          </Popup>
        </>
      )}
      {showWrongBreaker && (
        <Popup opacity={7}>
          <p className="welcome">
            Unfortunately, this is the wrong fuse. choose again.
          </p>
          <div className="popup-button">
            <button onClick={wrongBreakerHandler}>Try again</button>
          </div>
        </Popup>
      )}
      {showDeviceError && (
        <Popup opacity={7}>
          <p className="welcome">
            Look after! You haven't turned off all the devices in the kitchen
            yet.
          </p>
          <div className="popup-button">
            <button onClick={deviceErrorHandler}>Try again</button>
          </div>
        </Popup>
      )}
      {showRightBreaker && (
        <Popup opacity={7}>
          <p className="welcome">Well done! You turned the power back on.</p>
          <div className="popup-button">
            <button onClick={rightBreakerHandler}>
              Click here to continue
            </button>
          </div>
        </Popup>
      )}
      {showConnectAll && (
        <Popup opacity={7}>
          <p className="welcome">Connect all devices</p>
          <div className="popup-button">
            <button onClick={connectAll}>Click here to continue</button>
          </div>
        </Popup>
      )}
      {showCorruptError && (
        <Popup opacity={1}>
          <div className="welcome">Corrupt device</div>
          <p className="popup-text">
            You tried to turn on the device, but you couldn't. Now look in the
            meter cupboard.
          </p>
          <div className="popup-button">
            <button onClick={corruptErrorHandler}>
              Click here to continue
            </button>
          </div>
        </Popup>
      )}
      {showFuseError && (
        <Popup opacity={1}>
          <p className="welcome">Fuse turned off</p>
          <p className="popup-text">
            Fuse is now switched off. This means that the last device you
            switched on had a short circuit.
          </p>
          <div className="popup-button">
            <button onClick={fuseErrorHandler}>Click here to continue</button>
          </div>
        </Popup>
      )}
      {showRepair && (
        <Popup opacity={1}>
          <p className="welcome">Fuse turned off</p>
          <p className="popup-text">
            You can see that {exerciseDisconnected} devices are switched off in
            the kitchen (group 2). The last device has a short circuit. So you
            have to replace it or have it repaired.
          </p>
          <p className="popup-text">Do you understand this?</p>
          <p></p>
          <div className="popup-button">
            <Link to="/exercise-step4">No</Link>
            <button onClick={repairHandler}>Yes</button>
          </div>
        </Popup>
      )}
      {showConnectRemaining && (
        <Popup opacity={1}>
          <p className="welcome">Connect Other</p>
          <p className="popup-text">
            Now turn the {exerciseDisconnected - 1} good devices back on and
            leave the defective device turned off.
          </p>
          <p></p>
          <div className="popup-button">
            <button onClick={() => setShowConnectRemaining(false)}>
              Click here to continue
            </button>
          </div>
        </Popup>
      )}
      {showStepBack && (
        <Popup opacity={7}>
          <p className="welcome">Wrong device</p>
          <p className="popup-text">
            This is not right. Choose again. Do you want to step back? Then
            click on step back.
          </p>
          <p></p>
          <div className="popup-button">
            <button onClick={() => window.location.reload(false)}>
              Step Back
            </button>
            <button onClick={stepBackHandler}>Continue</button>
          </div>
        </Popup>
      )}
      {connectCorrect && (
        <Popup opacity={7}>
          <p className="welcome">Connect all correct</p>
          <p className="popup-text">
            You have not turned on all correct devices, please connect all. Do
            you want to step back?
          </p>
          <p></p>
          <div className="popup-button">
            <button onClick={() => window.location.reload(false)}>
              Step Back
            </button>
            <button onClick={() => setConnectCorrect(false)}>Continue</button>
          </div>
        </Popup>
      )}
      {showFinish && (
        <Popup opacity={7}>
          <p className="welcome">Hurray</p>
          <p className="popup-text">
            Well done! You are now ready to take the test.
          </p>
          <p></p>
          <div className="popup-button">
            <Link to="/mask-group">Let's go</Link>
          </div>
        </Popup>
      )}
    </>
  );
};

export default KitchenIndex;
