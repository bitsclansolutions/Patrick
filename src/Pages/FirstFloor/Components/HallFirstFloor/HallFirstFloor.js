import React from "react";
import HallBulbOnImg from "../images/HallBulbOnImg.png";
import HallBulbOffImg from "../images/HallBulbOffImg.png";
import HallBulbOffImg_D from "../images/HallBulbOffImg_D.png";
import LEDHallFirstFloorOn from "../images/LEDHallFirstFloorOn.png";
import LEDHallFirstFloor from "../images/LEDHallFirstFloor.png";
import aquarium from "../images/aquarium.png";
import aquariumD from "../images/aquariumD.png";
import "./HallFirstFloor.css";
import "./HallFirstFloor";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useSound from "use-sound";
import error from "../SoundEffects/error.mp3";
import {
  SwalBreakerOff,
  SwalDisconnected,
} from "../../../Components/SwalModules";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseDeviceCounter,
  connectDevice,
  disconnectDevice,
  showFinishBtn,
  hideFinishBtn,
  disconnectCorrupGroupDevice,
  disconnectCorrectGroupDevice,
  connectCorrupGroupDevice,
  connectCorrectGroupDevice,
  corrupGroupDeviceError,
  corruptAttempted,
  correctGroupDeviceError,
  removeDisconnectDevice,
  addDisconnectDevice,
} from "../../../../Redux/Action";
import {
  breakerOffDutch,
  breakerOffEnglish,
} from "../../../../utils/translation";
import BreakerOffPopup from "../../../../utils/BreakerOffPopup";

const HallFirstFloor = (props) => {
  const navigate = useNavigate();
  const [breakerOff, setBreakerOff] = useState(false);

  const disconnectedDevices = useSelector(
    (state) => state.CounterRemainingDevicesReducer.count
  );
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  const corruptGroup = useSelector(
    (state) => state.corruptGroupReducer.corruptGroup
  );
  const corruptAttemptedDevices = useSelector(
    (state) => state.GroupDevicesCounterReducer.corruptAttempted
  );
  const corruptDevice = useSelector(
    (state) => state.CorruptDeviceReducer.corrupt
  );
  const exerciseNumber = useSelector((state) => state.ExerciseReducer.exercise);

  const redirectSorry = () => {
    navigate("/result");
  };

  const dispatch = useDispatch();
  const dispatchdisconnect = useDispatch();
  const dispatchconnect = useDispatch();

  const [errorSound] = useSound(error);
  const [hover, setHover] = useState("");

  const disconnectHandler = (val) => {
    if (corruptGroup === 4) {
      if (
        (val === corruptDevice &&
          corruptAttemptedDevices.filter((item) => item === val).length ===
            2) ||
        (val !== corruptDevice && corruptAttemptedDevices.includes(val))
      ) {
        dispatch(corrupGroupDeviceError());
      } else {
        dispatch(corruptAttempted(val));
      }
      dispatch(disconnectCorrupGroupDevice());
    } else {
      dispatch(disconnectCorrectGroupDevice());
      dispatch(correctGroupDeviceError());
    }
    if (val === 25) {
      props.setHallLedTv("disconnect");
      dispatchdisconnect(disconnectDevice());
      dispatch(addDisconnectDevice("hallLedTv"));
    }
    if (val === 26) {
      props.setHallLight01("disconnect");
      dispatchdisconnect(disconnectDevice());
      dispatch(addDisconnectDevice("hallLight01"));
    }
    if (val === 27) {
      props.setHallLight02("disconnect");
      dispatchdisconnect(disconnectDevice());
      dispatch(addDisconnectDevice("hallLight02"));
    }
    if (props.rndGroupFour === val) {
      props.setGroupFourCorruptDevice(0);
      props.setGroupFourBreakerType("black");
      dispatch(showFinishBtn());
    }
  };

  const popupText = isDutch ? breakerOffDutch : breakerOffEnglish;

  const connectHandler = (val) => {
    if (corruptGroup === 4) {
      dispatch(connectCorrupGroupDevice());
    } else {
      dispatch(connectCorrectGroupDevice());
    }
    if (props.rndGroupFour === val && props.groupFourBreakerType === "red") {
      props.setGroupFourBreakerType("black");
      props.setIsGroupFourBreaker(false);
      exerciseNumber === 2 && setBreakerOff(true);
      dispatch(increaseDeviceCounter());
      errorSound();
      // props.setFirstFloorTrial(props.firstFloorTrial + 1);
      // localStorage.setItem(
      //   "state-first",
      //   JSON.stringify(props.firstFloorTrial + 1)
      // );
    }
    props.setGroupFourCorruptDevice(val);
    if (val === 25) {
      props.setHallLedTv("connected");
      dispatchconnect(connectDevice());
      dispatch(removeDisconnectDevice("hallLedTv"));
    }
    if (val === 26) {
      props.setHallLight01("connected");
      dispatchconnect(connectDevice());
      dispatch(removeDisconnectDevice("hallLight01"));
    }
    if (val === 27) {
      props.setHallLight02("connected");
      dispatchconnect(connectDevice());
      dispatch(removeDisconnectDevice("hallLight02"));
    }
    if (props.rndGroupFour === val) {
      dispatch(hideFinishBtn());
    }
  };

  return (
    <>
      {breakerOff && <BreakerOffPopup close={() => setBreakerOff(false)} />}

      {props.gamePhaseGroup4 === "hall" ? (
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%),url(${
              process.env.PUBLIC_URL
            }${
              isDutch
                ? "/dutch-images/first-hall-5.png"
                : "/images/full-first-floor-hall.png"
            })`,
            height: "100%",
            width: "100%",
            border: "2px dotted white",
          }}
          className="hall-main-div"
        >
          <div className=" d-flex img-div">
            {/* LED TV div .............. */}
            <div
              className={
                props.isGroupFourBreaker === true &&
                props.hallLedTv === "connected"
                  ? "div-LED-hall2-On"
                  : "div-LED-hall2"
              }
              id="set-width-btn"
            >
              <img
                src={
                  props.isGroupFourBreaker === true &&
                  props.hallLedTv === "connected"
                    ? aquarium
                    : props.hallLedTv === "disconnect"
                    ? aquariumD
                    : aquariumD
                }
                alt=""
                className={
                  props.hallLedTv === "disconnect"
                    ? "disconnected-brightness"
                    : ""
                }
                style={{
                  height:
                    props.isGroupFourBreaker === true &&
                    props.hallLedTv === "connected"
                      ? "18vh"
                      : "18vh",
                }}
                onMouseEnter={() => setHover("LED")}
                onMouseLeave={() => setHover("")}
              />
              <>
                {props.hallLedTv === "disconnect" ? (
                  <button
                    onMouseEnter={() => setHover("LED")}
                    onMouseLeave={() => setHover("")}
                    className="btn btn-danger btn-sm active btn-font set-ab-btn-top"
                    onClick={() => connectHandler(25)}
                  >
                    {isDutch ? "Aansluiten" : "Connect"}
                  </button>
                ) : (
                  <button
                    onMouseEnter={() => setHover("LED")}
                    onMouseLeave={() => setHover("")}
                    className="btn btn-success btn-sm active btn-font set-ab-btn-top"
                    onClick={() => disconnectHandler(25)}
                  >
                    {isDutch ? "Loskoppelen" : "Disconnect"}
                  </button>
                )}
              </>
            </div>
            {/* start my code 12/29...................... */}
            <button
              // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
              className={"btn-maskGroup set-btns-hall-first-attic"}
              onMouseEnter={() => {
                // setBtnPhase("attic")
                // setfirstBtn('')
              }}
              // onMouseLeave={()=> setBtnPhase("")}
              onClick={() => {
                // setShowAttic(true)
                navigate("/attic");
                localStorage.setItem("state-attic", JSON.stringify(-5));
              }}
            >
              {isDutch ? "Zolder" : "Attic Floor"}
            </button>
            <button
              // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
              className={"btn-maskGroup set-btns-hall-first-ground"}
              onMouseEnter={() => {
                // setBtnPhase("attic")
                // setfirstBtn('')
              }}
              // onMouseLeave={()=> setBtnPhase("")}
              onClick={() => {
                // setShowAttic(true)
                navigate("/ground-floor");
              }}
            >
              {isDutch ? "Begane Grond" : "Ground Floor"}
            </button>
            <button
              // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
              className={"btn-maskGroup set-btn-hall-first-bedroom"}
              onMouseEnter={() => {
                // setBtnPhase("attic")
                // setfirstBtn('')
              }}
              // onMouseLeave={()=> setBtnPhase("")}
              onClick={() => {
                // setShowAttic(true)
                navigate("/first-floor/bed-room");
              }}
            >
              {isDutch ? "Slaapkamer 03" : "Bed Room 03"}
            </button>{" "}
            <button
              // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
              className={"btn-maskGroup set-btn-hall-first-toilet"}
              onMouseEnter={() => {
                // setBtnPhase("attic")
                // setfirstBtn('')
              }}
              // onMouseLeave={()=> setBtnPhase("")}
              onClick={() => {
                // setShowAttic(true)
                navigate("/first-floor/toilet");
              }}
            >
              {isDutch ? "Badkamer" : "Bathroom"}
            </button>{" "}
            <button
              // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
              className={"btn-maskGroup set-btn-hall-first-living1"}
              onMouseEnter={() => {
                // setBtnPhase("attic")
                // setfirstBtn('')
              }}
              // onMouseLeave={()=> setBtnPhase("")}
              onClick={() => {
                // setShowAttic(true)
                navigate("/first-floor/living-room01");
              }}
            >
              {isDutch ? "Slaapkamer 01" : "Bedroom 01"}
            </button>{" "}
            <button
              // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
              className={"btn-maskGroup set-btn-hall-first-living2"}
              onMouseEnter={() => {
                // setBtnPhase("attic")
                // setfirstBtn('')
              }}
              // onMouseLeave={()=> setBtnPhase("")}
              onClick={() => {
                // setShowAttic(true)
                navigate("/first-floor/living-room02");
              }}
            >
              {isDutch ? "Slaapkamer 02" : "Bedroom 02"}
            </button>
            {/* end my code 12/29...................... */}
            {/* first light div ................. */}
            <div
              className={
                props.isGroupFourBreaker === true &&
                props.hallLight01 === "connected"
                  ? "div-light01-hall2-on"
                  : "div-light01-hall2"
              }
            >
              <img
                src={
                  props.isGroupFourBreaker === true &&
                  props.hallLight01 === "connected"
                    ? HallBulbOnImg
                    : props.hallLight01 === "disconnect"
                    ? HallBulbOffImg_D
                    : HallBulbOffImg

                  // ? HallBulbOnImg : props.hallLight01 === "disconnect" ? HallBulbOffImg_D
                  // : HallBulbOffImg
                }
                // className={
                //   props.hallLight01 === "disconnect" ? "disconnected" : ""
                // }
                style={{
                  height:
                    props.isGroupFourBreaker === true &&
                    props.hallLight01 === "connected"
                      ? "30vh"
                      : "30vh",
                }}
                alt=""
                onMouseEnter={() => setHover("hallLight01")}
                onMouseLeave={() => setHover("")}
              />

              <>
                {props.hallLight01 === "disconnect" ? (
                  <button
                    onMouseEnter={() => setHover("hallLight01")}
                    onMouseLeave={() => setHover("")}
                    className="btn btn-danger btn-sm active btn-font"
                    onClick={() => connectHandler(26)}
                  >
                    {isDutch ? "Aansluiten" : "Connect"}
                  </button>
                ) : (
                  <button
                    onMouseEnter={() => setHover("hallLight01")}
                    onMouseLeave={() => setHover("")}
                    className="btn btn-success btn-sm active btn-font"
                    onClick={() => disconnectHandler(26)}
                  >
                    {isDutch ? "Loskoppelen" : "Disconnect"}
                  </button>
                )}
              </>
            </div>
            {/* Second light div ................. */}
            <div
              className={
                props.isGroupFourBreaker === true &&
                props.hallLight02 === "connected"
                  ? "div-light02-hall2-on"
                  : "div-light02-hall2"
              }
            >
              <img
                src={
                  props.isGroupFourBreaker === true &&
                  props.hallLight02 === "connected"
                    ? HallBulbOnImg
                    : props.hallLight02 === "disconnect"
                    ? HallBulbOffImg_D
                    : HallBulbOffImg

                  // ? HallBulbOnImg : props.hallLight02 === "disconnect" ? HallBulbOffImg_D
                  // : HallBulbOffImg
                }
                // className={
                //   props.hallLight02 === "disconnect" ? "disconnected" : ""
                // }
                style={{
                  height:
                    props.isGroupFourBreaker === true &&
                    props.hallLight02 === "connected"
                      ? "30vh"
                      : "30vh",
                }}
                alt=""
                onMouseEnter={() => setHover("hallLight02")}
                onMouseLeave={() => setHover("")}
              />

              <>
                {props.hallLight02 === "disconnect" ? (
                  <button
                    onMouseEnter={() => setHover("hallLight02")}
                    onMouseLeave={() => setHover("")}
                    className="btn btn-danger btn-sm active btn-font"
                    onClick={() => connectHandler(27)}
                  >
                    {isDutch ? "Aansluiten" : "Connect"}
                  </button>
                ) : (
                  <button
                    onMouseEnter={() => setHover("hallLight02")}
                    onMouseLeave={() => setHover("")}
                    className="btn btn-success btn-sm active btn-font"
                    onClick={() => disconnectHandler(27)}
                  >
                    {isDutch ? "Loskoppelen" : "Disconnect"}
                  </button>
                )}
              </>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: "0%",
              transform: "translateX(-50%)",
            }}
          >
            <h1 className="heading-bottom">{isDutch ? "Overloop" : "Hall"}</h1>
          </div>
        </div>
      ) : (
        <div
          style={{
            border: "2px solid white",
            height: "100%",
            width: "100%",
            marginTop: "2px",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/HallFirstFloor.png"
              })`,
              height: "100%",
              width: "100%",
            }}
            className="hall-main-div disconnected"
          >
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default HallFirstFloor;
