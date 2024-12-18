import React, { useEffect, useState } from "react";
import "../RightNavbar.css";
import ChangeLanguageToggle from "../../../utils/ChangeLanguageToggle";
import Avator from "../../../Pages/Components/Avator";
import Popup from "../../../utils/Popup";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseExerciseCounter,
  increaseExerciseCounter,
  resetExerciseCounter,
  setExerciseCounter,
  setExerciseGate,
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
import { Link, useNavigate } from "react-router-dom";
import AudioPlayer from "../../../utils/AudioPlayer";
import audio7 from "../../../audios/audio7.m4a";
import audio8 from "../../../audios/audio8.m4a";
import audio9 from "../../../audios/audio9.m4a";
import error from "../../../audios/error.mp3";
import useSound from "use-sound";

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
  const [exercise2, setExercise2] = useState(false);
  const [showMeterFuse, setShowMeterFuse] = useState(false);
  const [turnFuseOn, setTurnFuseOn] = useState(false);
  const [notAFuse, setNotAFuse] = useState(false);
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

  const [errorSound] = useSound(error);

  const exerciseDisconnected = useSelector(
    (state) => state.ExerciseReducer.deviceCount
  );

  useEffect(() => {
    dispatch(resetExerciseCounter());
  }, []);

  const navigate = useNavigate();

  console.log(exerciseDisconnected);

  // breakers on and off and corrupt breaker logic
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
      setTurnFuseOn(false);
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

  // device on and off
  const changeDeviceHandler = (device) => {
    if (turnFuseOn) {
      setNotAFuse(true);
    } else {
      if (device === "oven") {
        dispatch(!oven ? decreaseExerciseCounter() : increaseExerciseCounter());
        setOven(!oven);
      } else if (device === "smoke") {
        dispatch(
          !smoke ? decreaseExerciseCounter() : increaseExerciseCounter()
        );
        setSmoke(!smoke);
      } else if (device === "toaster") {
        dispatch(
          !toaster ? decreaseExerciseCounter() : increaseExerciseCounter()
        );
        setToaster(!toaster);
      } else if (device === "mixer") {
        dispatch(
          !mixer ? decreaseExerciseCounter() : increaseExerciseCounter()
        );
        setMixer(!mixer);
      } else if (device === "bulb1") {
        dispatch(
          !bulb1 ? decreaseExerciseCounter() : increaseExerciseCounter()
        );
        setBulb1(!bulb1);
      } else if (device === "bulb2") {
        !breakerOn &&
          dispatch(
            !bulb2 ? decreaseExerciseCounter() : increaseExerciseCounter()
          );
        bulb2On();
      }
    }
  };

  // corrupt device logic
  const bulb2On = () => {
    if (breakerOn && !warning) {
      setShowCorruptError(true);
      setBreaker2(false);
      setWarning(true);
      errorSound();
    } else if (warning) {
      setShowStepBack(true);
    } else if (!breakerOn) {
      setBulb2(!bulb2);
    }
  };

  // show popups logic
  const disconnectDevices = () => {
    setShowDisconnectDevices(false);
    setShowDisconnectAll(true);
  };
  const disconnectAll = () => {
    setShowDisconnectAll(false);
  };

  const startExercise2 = () => {
    if (!bulb1 && !bulb2 && !oven && !smoke && !toaster && !mixer) {
      setShowMeterFuse(true);
      setExercise2(true);
      setTurnFuseOn(true);
    }
  };

  useEffect(() => {
    if (!exercise2) {
      startExercise2();
    }
  }, [bulb1, bulb2, oven, smoke, toaster, mixer]);

  const wrongBreakerHandler = () => {
    setShowWrongBreaker(false);
  };
  const deviceErrorHandler = () => {
    setShowDeviceError(false);
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
  const connectCorrectHandler = () => {
    setConnectCorrect(false);
    setBreaker2(false);
  };

  const finishExercise1 = () => {
    dispatch(setExerciseGate(2));
    navigate("/mask-group");
  };

  return (
    <>
      {/* right navbar */}
      <div className="flex" style={{ height: "100vh", display: "flex" }}>
        <div
          className=" navbar-background"
          style={{ width: "17%", padding: "0 10px" }}
        >
          <>
            <div>
              <div className="translator-exercise">
                {<ChangeLanguageToggle />}
              </div>
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
                      ? "Badkamer, Overloop, Slaapkamer 03"
                      : "Hall, Bathroom, Bedroom 03"}
                  </p>
                </div>
                <div className="text-start">
                  <p className="set-link-color">
                    {isDutchLocal ? "Zolder" : "Attic Floor"}
                  </p>
                </div>
                {/* GROUP 5 */}
                <div className="set-legend-text">
                  {isDutchLocal ? <p>Groep&nbsp;5:</p> : <p>Group&nbsp;5:</p>}
                  <p className="grp-detail">
                    {isDutchLocal
                      ? "Logeerkamer, Overloop, Studeerkamer, Berging"
                      : "hall, guest room, study room, storage room"}
                  </p>
                </div>
                {/* GROUP 6 */}
                <div className="set-legend-text">
                  {isDutchLocal ? <p>Groep&nbsp;6:</p> : <p>Group&nbsp;6:</p>}
                  <p className="grp-detail">
                    {isDutchLocal ? "Washok" : "laundry"}
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
                    <div className="groupB groupB-ex">
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
                {isDutchLocal ? "Meterkast" : "House Breakers"}
              </h3>
              <hr />
            </div>
          </>
        </div>
        {/* kitchen */}
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
                      onClick={() => changeDeviceHandler("smoke")}
                    >
                      {smoke
                        ? isDutch
                          ? "Loskoppelen"
                          : "Disconnect"
                        : isDutch
                        ? "Aansluiten"
                        : "Connect"}
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
                      onClick={() => changeDeviceHandler("mixer")}
                    >
                      {mixer
                        ? isDutch
                          ? "Loskoppelen"
                          : "Disconnect"
                        : isDutch
                        ? "Aansluiten"
                        : "Connect"}
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
                      onClick={() => changeDeviceHandler("toaster")}
                    >
                      {toaster
                        ? isDutch
                          ? "Loskoppelen"
                          : "Disconnect"
                        : isDutch
                        ? "Aansluiten"
                        : "Connect"}
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
                      onClick={() => changeDeviceHandler("oven")}
                    >
                      {oven
                        ? isDutch
                          ? "Loskoppelen"
                          : "Disconnect"
                        : isDutch
                        ? "Aansluiten"
                        : "Connect"}
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
                      onClick={() => changeDeviceHandler("bulb1")}
                    >
                      {bulb1
                        ? isDutch
                          ? "Loskoppelen"
                          : "Disconnect"
                        : isDutch
                        ? "Aansluiten"
                        : "Connect"}
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
                      onClick={() => changeDeviceHandler("bulb2")}
                    >
                      {bulb2
                        ? isDutch
                          ? "Loskoppelen"
                          : "Disconnect"
                        : isDutch
                        ? "Aansluiten"
                        : "Connect"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDisconnectDevices && (
        <Popup opacity={2} bottom={2} right={0} width={48}>
          {isDutch ? (
            <>
              <p className="popup-text">
                Je ziet dat in de keuken verschillende elektrische apparaten
                staan. <br /> Bij elk apparaat of lamp staat een groene knop{" "}
                <b>'Loskoppelen'</b>.
              </p>
              <p className="popup-text">
                Door op deze knop te drukken haal je de stekker uit het
                stopcontact. <br /> De knop verandert van kleur zodat je kunt
                zien dat deze is uitgeschakeld.
              </p>
              <div className="popup-bottom">
                <div className="vol-icon"></div>
                <div className="popup-button">
                  <button onClick={disconnectDevices}>
                    Klik hier om verder te gaan
                  </button>
                </div>
                <div className="vol-icon">
                  <AudioPlayer file={audio7} />
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="popup-text">
                You can see that in the kitchen there are You can see that in
                the kitchen there are various electrical appliances. Each device
                or lamp has a green <b>'Disconnect'</b> button.
              </p>
              <p className="popup-text">
                By pressing this button you unplug the plug. The button changes
                color so you can see that it's scaled out.
              </p>
              <div className="popup-button">
                <button onClick={disconnectDevices}>
                  Click here to continue
                </button>
              </div>
            </>
          )}
        </Popup>
      )}
      {showDisconnectAll && (
        <Popup opacity={7}>
          {isDutch ? (
            <>
              <p className="welcome">Alles Loskoppelen</p>
              <p className="popup-text">
                Klik op de knop ‘Loskoppelen’ bij een elektrisch apparaat of
                lamp om deze uit te schakelen.
              </p>
              <div className="popup-button">
                <button onClick={disconnectAll}>
                  Klik hier om verder te gaan
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="welcome">Disconnect All</p>
              <p className="popup-text">
                Click on all electrical device in the kitchen to turn them off.
              </p>
              <div className="popup-button">
                <button onClick={disconnectAll}>Click here to continue</button>
              </div>
            </>
          )}
        </Popup>
      )}
      {showMeterFuse && (
        <>
          <Popup opacity={2}>
            {isDutch ? (
              <>
                <p className="welcome">Je hebt alle apparaten losgekoppeld!</p>
                <p className="popup-text">
                  Schakel nu juiste groep in door op zekering van groep 2 in te
                  klikken.
                </p>
                <div className="popup-button">
                  <button onClick={() => setShowMeterFuse(false)}>
                    Ik snap dit
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="welcome">You have disconnected all devices!</p>
                <p className="popup-text">
                  Now switch on the correct group by clicking on the fuse of
                  group 2.
                </p>
                <div className="popup-button">
                  <button onClick={() => setShowMeterFuse(false)}>
                    I get this
                  </button>
                </div>
              </>
            )}
          </Popup>
        </>
      )}
      {notAFuse && (
        <>
          <Popup opacity={4}>
            {isDutch ? (
              <>
                <p className="welcome">Dit is niet de zekering</p>
                <p className="popup-text">
                  Dit is een apparaat en geen zekering. <br /> Klik op zekering
                  2 in de meterkast.
                </p>
                <div className="popup-button">
                  <button onClick={() => setNotAFuse(false)}>
                    Ik snap dit
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="welcome">This is not the fuse</p>
                <p className="popup-text">
                  This is a device and not a fuse. <br /> Click on fuse 2 in the
                  meter cupboard.
                </p>
                <div className="popup-button">
                  <button onClick={() => setNotAFuse(false)}>I get this</button>
                </div>
              </>
            )}
          </Popup>
        </>
      )}
      {showWrongBreaker && (
        <Popup opacity={7}>
          {isDutch ? (
            <>
              <p className="welcome">
                Helaas, dit is de verkeerde zekering. kies opnieuw.
              </p>
              <div className="popup-button">
                <button onClick={wrongBreakerHandler}>
                  probeer het nog eens
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="welcome">
                Unfortunately, this is the wrong fuse. choose again.
              </p>
              <div className="popup-button">
                <button onClick={wrongBreakerHandler}>Try again</button>
              </div>
            </>
          )}
        </Popup>
      )}
      {showDeviceError && (
        <Popup opacity={7}>
          {isDutch ? (
            <>
              <p className="welcome">
                Pas op! Je hebt nog niet alle apparaten in de keuken
                uitgeschakel.
              </p>
              <div className="popup-button">
                <button onClick={deviceErrorHandler}>
                  probeer het nog eens
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="welcome">
                Look after! You haven't turned off all the devices in the
                kitchen yet.
              </p>
              <div className="popup-button">
                <button onClick={deviceErrorHandler}>Try again</button>
              </div>
            </>
          )}
        </Popup>
      )}
      {showRightBreaker && (
        <Popup opacity={7}>
          {isDutch ? (
            <>
              <p className="welcome">Goed gedaan!</p>
              <p className="popup-text">Je hebt de stroom weer ingeschakeld.</p>
              <div className="popup-button">
                <button onClick={rightBreakerHandler}>
                  Klik hier om verder te gaan
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="welcome">
                Well done! You turned the power back on.
              </p>
              <div className="popup-button">
                <button onClick={rightBreakerHandler}>
                  Click here to continue
                </button>
              </div>
            </>
          )}
        </Popup>
      )}
      {showConnectAll && (
        <Popup opacity={7}>
          {isDutch ? (
            <>
              <p className="welcome">Sluit alle apparaten aan</p>
              <div className="popup-button">
                <button onClick={connectAll}>
                  Klik hier om verder te gaan
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="welcome">Connect all devices</p>
              <div className="popup-button">
                <button onClick={connectAll}>Click here to continue</button>
              </div>
            </>
          )}
        </Popup>
      )}
      {showCorruptError && (
        <Popup opacity={1}>
          {isDutch ? (
            <>
              <div className="welcome">Defect apparaat</div>
              <p className="popup-text">
                Je hebt het apparaat proberen in te schakelen, maar dat kan
                niet. <br /> Kijk nu in de meterkast.
              </p>
              <div className="popup-button">
                <button onClick={corruptErrorHandler}>
                  Klik hier om verder te gaan
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="welcome">Corrupt device</div>
              <p className="popup-text">
                You tried to turn on the device, but you couldn't. Now look in
                the meter cupboard.
              </p>
              <div className="popup-button">
                <button onClick={corruptErrorHandler}>
                  Click here to continue
                </button>
              </div>
            </>
          )}
        </Popup>
      )}
      {showFuseError && (
        <Popup opacity={1}>
          {isDutch ? (
            <>
              <p className="welcome">Zekering uitgeschakeld</p>
              <p className="popup-text">
                De schakelaar van de zekering staat naar onder en is nu zwart.{" "}
                <br />
                Dit betekent dat in het laatste apparaat dat je had ingeschakeld
                een kortsluiting zit.
              </p>
              <div className="popup-bottom">
                <div className="vol-icon"></div>
                <div className="popup-button">
                  <button onClick={fuseErrorHandler}>
                    Klik hier om verder te gaan
                  </button>
                </div>
                <div className="vol-icon">
                  <AudioPlayer file={audio8} />
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="welcome">Fuse turned off</p>
              <p className="popup-text">
                The fuse switch is down and is now black. <br /> This means that
                in the last device you had turned on there is a short circuit.
              </p>
              <div className="popup-button">
                <button onClick={fuseErrorHandler}>
                  Click here to continue
                </button>
              </div>
            </>
          )}
        </Popup>
      )}
      {showRepair && (
        <Popup opacity={1}>
          {isDutch ? (
            <>
              <p className="welcome">Zekering uitgeschakeld</p>
              <p className="popup-text">
                Je ziet dat in de keuken (groep 2) {exerciseDisconnected}{" "}
                apparaten zijn uitgeschakeld. <br /> In het laatste apparaat zit
                dus kortsluiting. <br /> Dit apparaat moet je normaal gesproken
                vervangen of laten repareren.
              </p>
              <p className="popup-text" style={{ fontSize: "20px" }}>
                <b>Begrijp je dit?</b>
              </p>
              <p></p>
              <div className="popup-bottom">
                <div className="vol-icon"></div>
                <div className="popup-button">
                  <button onClick={() => window.location.reload(false)}>
                    Nee
                  </button>
                  <button onClick={repairHandler}>Ja</button>
                </div>
                <div className="vol-icon">
                  <AudioPlayer file={audio9} />
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="welcome">Fuse turned off</p>
              <p className="popup-text">
                You can see that {exerciseDisconnected} devices are switched off
                in the kitchen (group 2). The last device has a short circuit.
                So you have to replace it or have it repaired.
              </p>
              <p className="popup-text" style={{ fontSize: "20px" }}>
                Do you understand this?
              </p>
              <p></p>
              <div className="popup-button">
                <button onClick={() => window.location.reload(false)}>
                  No
                </button>
                <button onClick={repairHandler}>Yes</button>
              </div>
            </>
          )}
        </Popup>
      )}
      {showConnectRemaining && (
        <Popup opacity={1}>
          {isDutch ? (
            <>
              <p className="welcome">Aansluiten / Loskoppelen</p>
              <p className="popup-text">
                Schakel nu de {exerciseDisconnected - 1} goede apparaten weer in
                en laat het defecte apparaat losgekoppeld.
              </p>
              <p className="popup-text">
                Schakel daarna de zekering van groep 2 in.
              </p>
              <p></p>
              <div className="popup-button">
                <button onClick={() => setShowConnectRemaining(false)}>
                  Klik hier om verder te gaan
                </button>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </Popup>
      )}
      {showStepBack && (
        <Popup opacity={7}>
          {isDutch ? (
            <>
              <p className="welcome">Verkeerd apparaat</p>
              <p className="popup-text">
                Dit is niet juist, deze lamp is defect. <br /> Kies opnieuw, wil
                je een stap terug, klik dan op stap terug.
              </p>
              <p></p>
              <div className="popup-button">
                <button onClick={() => window.location.reload(false)}>
                  Stap terug
                </button>
                <button onClick={stepBackHandler}>Doorgaan</button>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </Popup>
      )}
      {connectCorrect && (
        <Popup opacity={7}>
          {isDutch ? (
            <>
              <p className="welcome">Sluit alles correct aan</p>
              <p className="popup-text">
                Je hebt niet alle goede apparaten aangesloten. <br /> Schakel
                alle goede apparaten allemaal in.
              </p>

              <p className="popup-text" style={{ fontSize: "20px" }}>
                <b>Wil je een stap terug doen?</b>
              </p>
              <div className="popup-button">
                <button onClick={() => window.location.reload(false)}>
                  Stap terug
                </button>
                <button onClick={connectCorrectHandler}>Doorgaan</button>
              </div>
            </>
          ) : (
            <>
              <p className="welcome">Connect all correct</p>
              <p className="popup-text">
                You have not turned on all correct devices, please connect all.
                Do you want to step back?
              </p>
              <p></p>
              <div className="popup-button">
                <button onClick={() => window.location.reload(false)}>
                  Step Back
                </button>
                <button onClick={connectCorrectHandler}>Continue</button>
              </div>
            </>
          )}
        </Popup>
      )}
      {showFinish && (
        <Popup opacity={7}>
          {isDutch ? (
            <>
              <p className="welcome">Goed zo!</p>
              <p className="popup-text">
                Je bent nu zover om de oefening 2 te maken.
              </p>
              <p></p>
              <div className="popup-button">
                <button onClick={finishExercise1}>Ga verder</button>
              </div>
            </>
          ) : (
            <>
              <p className="welcome">Well done!</p>
              <p className="popup-text">You are now ready to do exercise 2.</p>
              <p></p>
              <div className="popup-button">
                <button onClick={finishExercise1} to="/mask-group">
                  Continue
                </button>
              </div>
            </>
          )}
        </Popup>
      )}
    </>
  );
};

export default KitchenIndex;
