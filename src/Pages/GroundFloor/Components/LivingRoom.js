import React from "react";
import "./LivingRoom.css";
import { useState, useEffect } from "react";
import LightOn from "../images/LightOn.png";
import LightOff from "../images/LightOff.png";
import LightOff_D from "../images/LightOff_D.png";
import RadioOnIMG from "../images/RadioOnIMG.png";
import RadioOffIMG from "../images/RadioOffIMG.png";
import RadioOffIMG_D from "../images/RadioOffIMG_D.png";
import LedOnIMG from "../images/LedOnIMG.png";
import LedOffIMG from "../images/LedOffIMG.png";
import LedOffIMG_D from "../images/LedOffIMG_D.png";
import RadioOn_d from "../images/RadioOn_d.png";
import Swal from "sweetalert2";
import useSound from "use-sound";
import error from "../SoundEffects/error.mp3";
import FrontScreenModel from "../../Components/FrontScreenModel";
import { SwalBreakerOff, SwalDisconnected } from "../../Components/SwalModules";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseDeviceCounter,
  connectDevice,
  disconnectDevice,
  showFinishBtn,
  hideFinishBtn,
  connectCorrupGroupDevice,
  connectCorrectGroupDevice,
  disconnectCorrectGroupDevice,
  disconnectCorrupGroupDevice,
  corrupGroupDeviceError,
  corruptAttempted,
  correctGroupDeviceError,
  removeDisconnectDevice,
  addDisconnectDevice,
} from "../../../Redux/Action";
import { breakerOffDutch, breakerOffEnglish } from "../../../utils/translation";
import BreakerOffPopup from "../../../utils/BreakerOffPopup";

const LivingRoom = (props) => {
  const navigate = useNavigate();

  const [breakerOff, setBreakerOff] = useState(false);

  const dispatch = useDispatch();
  const dispatchdisconnect = useDispatch();
  const dispatchconnect = useDispatch();

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

  const [errorSound] = useSound(error);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [hover, setHover] = useState("");

  const disconnectHandler = (val) => {
    if (corruptGroup === 1) {
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
    if (val === 6) {
      props.setLivingRadio("disconnect");
      dispatchdisconnect(disconnectDevice());
      dispatch(addDisconnectDevice("livingRadio"));
    }
    if (val === 7) {
      props.setLivingLight01("disconnect");
      dispatchdisconnect(disconnectDevice());
      dispatch(addDisconnectDevice("livingLight01"));
    }
    if (val === 8) {
      props.setLivingAC("disconnect");
      dispatchdisconnect(disconnectDevice());
      dispatch(addDisconnectDevice("livingAC"));
    }
    if (val === 9) {
      props.setLivingLight03("disconnect");
      dispatchdisconnect(disconnectDevice());
      dispatch(addDisconnectDevice("livingLight03"));
    }
    if (props.completeRnd === val) {
      props.setCompleteCorruptDevice(0);
      props.setFirstGroupBreakerType("black");
      dispatch(showFinishBtn());
    }
  };

  const popupText = isDutch ? breakerOffDutch : breakerOffEnglish;

  const connectHandler = (val) => {
    if (corruptGroup === 1) {
      dispatch(connectCorrupGroupDevice());
    } else {
      dispatch(connectCorrectGroupDevice());
    }
    if (props.completeRnd === val && props.firstGroupBreakerType === "red") {
      props.setFirstGroupBreakerType("black");
      props.setIsFirstGroupBreaker(false);
      exerciseNumber === 2 && setBreakerOff(true);
      dispatch(increaseDeviceCounter());
      props.setGroundFloorTrial(props.groundFloorTrial + 1);
      localStorage.setItem("state", JSON.stringify(props.groundFloorTrial + 1));

      errorSound();
    }
    props.setCompleteCorruptDevice(val);
    if (val === 6) {
      props.setLivingRadio("connected");
      dispatchconnect(connectDevice());
      dispatch(removeDisconnectDevice("livingRadio"));
    }
    if (val === 7) {
      props.setLivingLight01("connected");
      dispatchconnect(connectDevice());
      dispatch(removeDisconnectDevice("livingLight01"));
    }
    if (val === 8) {
      props.setLivingAC("connected");
      dispatchconnect(connectDevice());
      dispatch(removeDisconnectDevice("livingAC"));
    }
    if (val === 9) {
      props.setLivingLight03("connected");
      dispatchconnect(connectDevice());
      dispatch(removeDisconnectDevice("livingLight03"));
    }
    if (props.completeRnd === val) {
      dispatch(hideFinishBtn());
    }
  };
  // useEffect(() => {
  //   if (
  //     props.livingAC === "disconnect" &&
  //     props.livingLight01 === "disconnect" &&
  //     props.livingLight03 === "disconnect" &&
  //     props.livingRadio === "disconnect"
  //   ) {
  //     SwalDisconnected();

  //   }
  // }, [
  //   props.livingAC,
  //   props.livingLight01,
  //   props.livingLight03,
  //   props.livingRadio,
  // ]);

  return (
    <>
      {/* {props.gamePhase === "livingRoom" ? ( */}
      {breakerOff && <BreakerOffPopup close={() => setBreakerOff(false)} />}

      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%),url(${
            process.env.PUBLIC_URL
          }${
            isDutch
              ? "/dutch-images/living-ground-3.png"
              : "/images/living-room-ground.png"
          })`,
          height: "100%",
          width: "100%",
          border: "2px dotted white",
        }}
        className="LivingRoom-main-div"
      >
        <div className=" d-flex img-div">
          {/* Radio div .............. */}
          <div
            className={
              props.isFirstGroupBreaker === true &&
              props.livingRadio === "connected"
                ? "div-radio-On"
                : "div-radio"
            }
          >
            <img
              src={
                props.isFirstGroupBreaker === true &&
                props.livingRadio === "connected"
                  ? RadioOn_d
                  : props.livingRadio === "disconnect"
                  ? RadioOffIMG_D
                  : RadioOffIMG
              }
              alt="radio"
              style={{
                height:
                  props.isFirstGroupBreaker === true &&
                  props.livingRadio === "connected"
                    ? "11vh"
                    : "11vh",
              }}
              onMouseEnter={() => setHover("radio")}
              onMouseLeave={() => setHover("")}
            />

            <>
              {props.livingRadio === "disconnect" ? (
                <button
                  onMouseEnter={() => setHover("radio")}
                  onMouseLeave={() => setHover("")}
                  className="btn btn-danger btn-sm active btn-font"
                  onClick={() => connectHandler(6)}
                >
                  {isDutch ? "Aansluiten" : "Connect"}
                </button>
              ) : (
                <button
                  onMouseEnter={() => setHover("radio")}
                  onMouseLeave={() => setHover("")}
                  className="btn btn-success btn-sm active btn-font"
                  onClick={() => disconnectHandler(6)}
                >
                  {isDutch ? "Loskoppelen" : "Disconnect"}
                </button>
              )}
            </>
          </div>
          {/* start my code 12/29...................... */}

          <button
            // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
            className={"btn-maskGroup set-btns-living-back"}
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
            {isDutch ? "Ga Terug" : "Go Back"}
          </button>
          {/* end my code 12/29...................... */}

          {/* first light div ................. */}
          <div
            className={
              props.isFirstGroupBreaker === true &&
              props.livingLight01 === "connected"
                ? "div-livinglight01-On"
                : "div-livinglight01"
            }
          >
            <img
              src={
                props.isFirstGroupBreaker === true &&
                props.livingLight01 === "connected"
                  ? LightOn
                  : props.livingLight01 === "disconnect"
                  ? LightOff_D
                  : LightOff
              }
              style={{
                height:
                  props.isFirstGroupBreaker === true &&
                  props.livingLight01 === "connected"
                    ? "28vh"
                    : "28vh",
              }}
              alt=""
              onMouseEnter={() => setHover("livingLight01")}
              onMouseLeave={() => setHover("")}
            />
            <>
              {props.livingLight01 === "disconnect" ? (
                <button
                  onMouseEnter={() => setHover("livingLight01")}
                  onMouseLeave={() => setHover("")}
                  className="btn btn-danger btn-sm active btn-font"
                  onClick={() => connectHandler(7)}
                >
                  {isDutch ? "Aansluiten" : "Connect"}
                </button>
              ) : (
                <button
                  onMouseEnter={() => setHover("livingLight01")}
                  onMouseLeave={() => setHover("")}
                  className="btn btn-success btn-sm btn-font active"
                  onClick={() => disconnectHandler(7)}
                >
                  {isDutch ? "Loskoppelen" : "Disconnect"}
                </button>
              )}
            </>
          </div>

          {/* AC div .............. */}
          <div
            className={
              props.isFirstGroupBreaker === true &&
              props.livingAC === "connected"
                ? "div-AC-On"
                : "div-AC"
            }
          >
            <img
              src={
                props.isFirstGroupBreaker === true &&
                props.livingAC === "connected"
                  ? LedOnIMG
                  : props.livingAC === "disconnect"
                  ? LedOffIMG_D
                  : LedOffIMG
              }
              alt=""
              style={{
                height:
                  props.isFirstGroupBreaker === true &&
                  props.livingAC === "connected"
                    ? "20vh"
                    : "20vh",
              }}
              onMouseEnter={() => setHover("AC")}
              onMouseLeave={() => setHover("")}
            />
            <>
              {props.livingAC === "disconnect" ? (
                <button
                  onMouseEnter={() => setHover("AC")}
                  onMouseLeave={() => setHover("")}
                  className="btn btn-danger btn-sm active btn-font ms-2"
                  onClick={() => connectHandler(8)}
                >
                  {isDutch ? "Aansluiten" : "Connect"}
                </button>
              ) : (
                <button
                  onMouseEnter={() => setHover("AC")}
                  onMouseLeave={() => setHover("")}
                  className="btn btn-success btn-sm active btn-font ms-2"
                  onClick={() => disconnectHandler(8)}
                >
                  {isDutch ? "Loskoppelen" : "Disconnect"}
                </button>
              )}
            </>
          </div>

          {/* livingLight03 div .............. */}
          <div
            className={
              props.isFirstGroupBreaker === true &&
              props.livingLight03 === "connected"
                ? "div-livingLight03-On"
                : "div-livingLight03"
            }
          >
            <img
              src={
                props.isFirstGroupBreaker === true &&
                props.livingLight03 === "connected"
                  ? LightOn
                  : props.livingLight03 === "disconnect"
                  ? LightOff_D
                  : LightOff
              }
              alt=""
              style={{
                height:
                  props.isFirstGroupBreaker === true &&
                  props.livingLight03 === "connected"
                    ? "28vh"
                    : "28vh",
              }}
              onMouseEnter={() => setHover("livingLight03")}
              onMouseLeave={() => setHover("")}
            />
            <>
              {props.livingLight03 === "disconnect" ? (
                <button
                  onMouseEnter={() => setHover("livingLight03")}
                  onMouseLeave={() => setHover("")}
                  className="btn btn-danger btn-sm active btn-font"
                  onClick={() => connectHandler(9)}
                >
                  {isDutch ? "Aansluiten" : "Connect"}
                </button>
              ) : (
                <button
                  onMouseEnter={() => setHover("livingLight03")}
                  onMouseLeave={() => setHover("")}
                  className="btn btn-success btn-sm active btn-font"
                  onClick={() => disconnectHandler(9)}
                >
                  {isDutch ? "Loskoppelen" : "Disconnect"}
                </button>
              )}
            </>
          </div>
        </div>
        <div className="position-heading-bottom">
          <h1 className="heading-bottom">
            {isDutch ? "Woonkamer" : "Living Room"}
          </h1>
        </div>
      </div>
      {/* ) : ( */}
      <div style={{ border: "2px solid white", height: "100%", width: "100%" }}>
        <div
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/LivingRoomIMG.png"
            })`,
            height: "100%",
            width: "100%",
          }}
          className="LivingRoom-main-div disconnected"
        ></div>
      </div>
      {/* )} */}
    </>
  );
};

export default LivingRoom;
