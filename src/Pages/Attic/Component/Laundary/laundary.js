import React from "react";
import HallBulbOnImg from "../images/HallBulbOnImg.png";
import HallBulbOffImg from "../images/HallBulbOffImg.png";
import WashingMachineIMG from "../images/WashingMachineIMG.png";
import WashingMachineIMGOn from "../images/WashingMachineIMGOn.png";
import ironOff from "../images/ironOff.png";
import ironOn from "../images/ironOn.png";
import "./laundary.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useSound from "use-sound";
import error from "../SoundEffects/error.mp3";
import HallBulbOffImg_D from "../images/HallBulbOffImg_D.png";
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
  addDisconnectDevice,
  removeDisconnectDevice,
} from "../../../../Redux/Action";
import {
  breakerOffDutch,
  breakerOffEnglish,
} from "../../../../utils/translation";
import BreakerOffPopup from "../../../../utils/BreakerOffPopup";

const Laundary = (props) => {
  const navigate = useNavigate();

  const [breakerOff, setBreakerOff] = useState(false);

  const disconnectedDevices = useSelector(
    (state) => state.CounterRemainingDevicesReducer.count
  );
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

  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);
  const redirectSorry = () => {
    navigate("/result");
  };

  const dispatch = useDispatch();
  const dispatchdisconnect = useDispatch();
  const dispatchconnect = useDispatch();

  const [errorSound] = useSound(error);

  const [hover, setHover] = useState("");

  const disconnectHandler = (val) => {
    if (corruptGroup === 6) {
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
    if (val === 47) {
      props.setLaundaryWashing("disconnect");
      dispatch(addDisconnectDevice("laundaryWashing"));
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 48) {
      props.setLaundaryLight01("disconnect");
      dispatch(addDisconnectDevice("laundaryLight01"));
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 49) {
      props.setLaundaryLight02("disconnect");
      dispatch(addDisconnectDevice("laundaryLight02"));
      dispatchdisconnect(disconnectDevice());
    }
    if (props.rndLaundary === val) {
      props.setLaundaryCorruptDevice(0);
      props.setLaundaryBreakerType("black");
      dispatch(showFinishBtn());
    }
  };

  const popupText = isDutch ? breakerOffDutch : breakerOffEnglish;

  const connectHandler = (val) => {
    if (corruptGroup === 6) {
      dispatch(connectCorrupGroupDevice());
    } else {
      dispatch(connectCorrectGroupDevice());
    }
    if (props.rndLaundary === val && props.laundaryBreakerType === "red") {
      props.setLaundaryBreakerType("black");
      errorSound();
      props.setIsLaundaryBreaker(false);
      props.setAtticTrial(props.atticTrial + 1);
      localStorage.setItem("state-attic", JSON.stringify(props.atticTrial + 1));

      exerciseNumber === 2 && setBreakerOff(true);
      dispatch(increaseDeviceCounter());
    }
    props.setLaundaryCorruptDevice(val);
    if (val === 47) {
      props.setLaundaryWashing("connected");
      dispatch(removeDisconnectDevice("laundaryWashing"));
      dispatchconnect(connectDevice());
    }
    if (val === 48) {
      props.setLaundaryLight01("connected");
      dispatch(removeDisconnectDevice("laundaryLight01"));
      dispatchconnect(connectDevice());
    }
    if (val === 49) {
      props.setLaundaryLight02("connected");
      dispatch(removeDisconnectDevice("laundaryLight02"));
      dispatchconnect(connectDevice());
    }
    if (props.rndLaundary === val) {
      dispatch(hideFinishBtn());
    }
  };
  return (
    <>
      {breakerOff && <BreakerOffPopup close={() => setBreakerOff(false)} />}

      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%),url(${
            process.env.PUBLIC_URL
          }${
            isDutch
              ? "/dutch-images/laundary-attic-14.png"
              : "/images/FullLaundary.png"
          })`,
          height: "100%",
          width: "100%",
          border: "2px dotted white",
          marginTop: "2px",
        }}
        className="hall-main-div"
      >
        <div className=" d-flex img-div">
          {/* washing TV div .............. */}
          <div
            className={
              props.isLaundaryBreaker === true &&
              props.laundaryWashing === "connected"
                ? "div-washing"
                : "div-washing"
            }
          >
            <img
              src={
                props.isLaundaryBreaker === true &&
                props.laundaryWashing === "connected"
                  ? // ? WashingMachineIMGOn
                    // : WashingMachineIMG
                    WashingMachineIMGOn
                  : props.laundaryWashing === "disconnect"
                  ? WashingMachineIMG
                  : WashingMachineIMG
              }
              alt=""
              className={
                props.laundaryWashing === "disconnect"
                  ? "disconnected-brightness"
                  : ""
              }
              style={{
                height:
                  props.isLaundaryBreaker === true &&
                  props.laundaryWashing === "connected"
                    ? "35vh"
                    : "35vh",
              }}
              onMouseEnter={() => setHover("LED")}
              onMouseLeave={() => setHover("")}
            />
            <>
              {props.laundaryWashing === "disconnect" ? (
                <button
                  onMouseEnter={() => setHover("LED")}
                  onMouseLeave={() => setHover("")}
                  className="btn btn-danger ms-1 btn-sm active btn-font"
                  onClick={() => connectHandler(47)}
                >
                  {isDutch ? "Aansluiten" : "Connect"}
                </button>
              ) : (
                <button
                  onMouseEnter={() => setHover("LED")}
                  onMouseLeave={() => setHover("")}
                  className="btn btn-success ms-1 btn-sm active btn-font"
                  onClick={() => disconnectHandler(47)}
                >
                  {isDutch ? "Loskoppelen" : "Disconnect"}
                </button>
              )}
            </>
          </div>
          <button
            // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
            className={"btn-maskGroup set-attic-lundary-back"}
            onMouseEnter={() => {
              // setBtnPhase("attic")
              // setfirstBtn('')
            }}
            // onMouseLeave={()=> setBtnPhase("")}
            onClick={() => {
              // setShowAttic(true)
              navigate("/attic");
            }}
          >
            {isDutch ? "Ga Terug" : "Go Back"}
          </button>
          {/* first light div ................. */}
          <div
            className={
              props.isLaundaryBreaker === true &&
              props.laundaryLight01 === "connected"
                ? "div-light01-laundary-on"
                : "div-light01-laundary"
            }
          >
            <img
              src={
                props.isLaundaryBreaker === true &&
                props.laundaryLight01 === "connected"
                  ? HallBulbOnImg
                  : props.laundaryLight01 === "disconnect"
                  ? HallBulbOffImg_D
                  : HallBulbOffImg

                // ? HallBulbOnImg
                // : HallBulbOffImg
                // HallBulbOffImg_D
                // ? HallBulbOffImg : props.laundaryLight01 === "disconnect" ? HallBulbOffImg_D
                // : HallBulbOffImg
              }
              // className={
              //   props.laundaryLight01 === "disconnect" ? "disconnected" : ""
              // }
              style={{
                height:
                  props.isLaundaryBreaker === true &&
                  props.laundaryLight01 === "connected"
                    ? "25vh"
                    : "25vh",
              }}
              alt=""
              onMouseEnter={() => setHover("laundaryLight01")}
              onMouseLeave={() => setHover("")}
            />

            <>
              {props.laundaryLight01 === "disconnect" ? (
                <button
                  onMouseEnter={() => setHover("laundaryLight01")}
                  onMouseLeave={() => setHover("")}
                  className="btn btn-danger btn-sm active btn-font"
                  onClick={() => connectHandler(48)}
                >
                  {isDutch ? "Aansluiten" : "Connect"}
                </button>
              ) : (
                <button
                  onMouseEnter={() => setHover("laundaryLight01")}
                  onMouseLeave={() => setHover("")}
                  className="btn btn-success btn-sm active btn-font"
                  onClick={() => disconnectHandler(48)}
                >
                  {isDutch ? "Loskoppelen" : "Disconnect"}
                </button>
              )}
            </>
          </div>

          {/* Second light div ................. */}
          <div
            className={
              props.isLaundaryBreaker === true &&
              props.laundaryLight02 === "connected"
                ? "div-light02-laundary-on"
                : "div-light02-laundary"
            }
          >
            <>
              {props.laundaryLight02 === "disconnect" ? (
                <button
                  onMouseEnter={() => setHover("laundaryLight02")}
                  onMouseLeave={() => setHover("")}
                  className="btn btn-danger btn-sm active btn-font"
                  onClick={() => {
                    connectHandler(49);
                  }}
                >
                  {isDutch ? "Aansluiten" : "Connect"}
                </button>
              ) : (
                <button
                  onMouseEnter={() => setHover("laundaryLight02")}
                  onMouseLeave={() => setHover("")}
                  className="btn btn-success btn-sm active btn-font"
                  onClick={() => {
                    disconnectHandler(49);
                  }}
                >
                  {isDutch ? "Loskoppelen" : "Disconnect"}
                </button>
              )}
            </>
            <img
              src={
                props.isLaundaryBreaker === true &&
                props.laundaryLight02 === "connected"
                  ? // ? HallBulbOnImg
                    // : props.laundaryLight02 === "disconnect"
                    // ? HallBulbOffImg_D
                    // : HallBulbOffImg

                    ironOn
                  : props.laundaryLight02 === "disconnect"
                  ? ironOff
                  : ironOff
              }
              className={
                props.laundaryLight02 === "disconnect"
                  ? "disconnected-brightness"
                  : ""
              }
              style={{
                height:
                  props.isLaundaryBreaker === true &&
                  props.laundaryLight02 === "connected"
                    ? "9vh"
                    : "9vh",
              }}
              alt=""
            />
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
          <h1 className="heading-bottom">{isDutch ? "Washok" : "Laundary"}</h1>
        </div>
      </div>
    </>
  );
};

export default Laundary;
