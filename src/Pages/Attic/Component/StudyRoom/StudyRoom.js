import React from "react";
import "./StudyRoom.css";
import LampGuestRoomIMG from "../images/LampGuestRoomIMG.png";
import LampGuestRoomIMGOn from "../images/LampGuestRoomIMGOn.png";
import laptopOn from "../images/laptopOn.png";
import laptopOff from "../images/laptopOff.png";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useSound from "use-sound";
import LampGuestRoom_D from "../images/LampGuestRoom_D.png";
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
  connectCorrupGroupDevice,
  connectCorrectGroupDevice,
  disconnectCorrupGroupDevice,
  disconnectCorrectGroupDevice,
  corrupGroupDeviceError,
  corruptAttempted,
  correctGroupDeviceError,
} from "../../../../Redux/Action";
import {
  breakerOffDutch,
  breakerOffEnglish,
} from "../../../../utils/translation";

const StudyRoom = (props) => {
  const navigate = useNavigate();

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
    if (corruptGroup === 5) {
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
    if (val === 42) {
      props.setStudyLamp("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 43) {
      props.setStudyLamp02("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (props.rndGroupFive === val) {
      props.setGroupFiveCorruptDevice(0);
      props.setgroupFiveBreakerType("black");
      dispatch(showFinishBtn());
    }
  };

  const popupText = isDutch ? breakerOffDutch : breakerOffEnglish;

  const connectHandler = (val) => {
    if (corruptGroup === 5) {
      dispatch(connectCorrupGroupDevice());
    } else {
      dispatch(connectCorrectGroupDevice());
    }
    if (props.rndGroupFive === val && props.groupFiveBreakerType === "red") {
      props.setgroupFiveBreakerType("black");
      props.setIsGroupFiveBreaker(false);
      SwalBreakerOff(popupText, redirectSorry);
      dispatch(increaseDeviceCounter());
      errorSound();
      props.setAtticTrial(props.atticTrial + 1);
      localStorage.setItem("state-attic", JSON.stringify(props.atticTrial + 1));
    }
    props.setGroupFiveCorruptDevice(val);
    if (val === 42) {
      props.setStudyLamp("connected");
      dispatchconnect(connectDevice());
    }
    if (val === 43) {
      props.setStudyLamp02("connected");
      dispatchconnect(connectDevice());
    }
    if (props.rndGroupFive === val) {
      dispatch(hideFinishBtn());
    }
  };

  return (
    <>
      {props.gamePhase === "StudyRoom" ? (
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%),url(${
              process.env.PUBLIC_URL
            }${
              isDutch
                ? "/dutch-images/study-attic-12.png"
                : "/images/study-attic-12.png"
            })`,
            height: "100%",
            width: "100%",
            border: "2px dotted white",
          }}
          className="bath-main-div curl"
        >
          {/* image main div .......................  */}
          <div className=" d-flex img-div">
            {/* lamp div .............. */}
            <div
              className={
                props.isGroupFiveBreaker === true &&
                props.studyLamp === "connected"
                  ? "div-lamp-study-on"
                  : "div-lamp-study"
              }
            >
              <img
                src={
                  props.isGroupFiveBreaker === true &&
                  props.studyLamp === "connected"
                    ? LampGuestRoomIMGOn
                    : props.studyLamp === "disconnect"
                    ? LampGuestRoom_D
                    : LampGuestRoomIMG

                  //   ? LampGuestRoomIMG : props.studyLamp === "disconnect" ? LampGuestRoom_D
                  // : LampGuestRoomIMG
                }
                alt=""
                // className={
                //   props.studyLamp === "disconnect" ? "disconnected" : ""
                // }
                style={{
                  height:
                    props.isGroupFiveBreaker === true &&
                    props.studyLamp === "connected"
                      ? "16vh"
                      : "16vh",
                }}
              />

              <>
                {props.studyLamp === "disconnect" ? (
                  <button
                    className="btn btn-danger btn-sm active mt-4 ms-1 btn-font"
                    onClick={() => connectHandler(42)}
                  >
                    {isDutch ? "Aansluiten" : "Connect"}
                  </button>
                ) : (
                  <button
                    className="btn btn-success btn-sm active mt-4 ms-1 btn-font"
                    onClick={() => disconnectHandler(42)}
                  >
                    {isDutch ? "Loskoppelen" : "Disconnect"}
                  </button>
                )}
              </>
            </div>

            {/* start my code 12/29...................... */}

            <button
              // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
              className={"btn-maskGroup set-attic-study-back"}
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
            {/* end my code 12/29...................... */}

            {/* lamp02 div .............. */}
            <div
              className={
                props.isGroupFiveBreaker === true &&
                props.studyLamp02 === "connected"
                  ? "div-lamp02-study-on"
                  : "div-lamp02-study"
              }
            >
              <>
                {props.studyLamp02 === "disconnect" ? (
                  <button
                    className="btn btn-danger btn-sm active mt-4 ms-1 btn-font"
                    onClick={() => connectHandler(43)}
                  >
                    {isDutch ? "Aansluiten" : "Connect"}
                  </button>
                ) : (
                  <button
                    className="btn btn-success btn-sm active mt-4 ms-1 btn-font"
                    onClick={() => disconnectHandler(43)}
                  >
                    {isDutch ? "Loskoppelen" : "Disconnect"}
                  </button>
                )}
              </>
              <img
                src={
                  props.isGroupFiveBreaker === true &&
                  props.studyLamp02 === "connected"
                    ? // ? LampGuestRoomIMGOn
                      //   : props.studyLamp02 === "disconnect"
                      //   ? LampGuestRoom_D
                      //   : LampGuestRoomIMG

                      laptopOn
                    : props.studyLamp02 === "disconnect"
                    ? laptopOff
                    : laptopOff
                }
                alt=""
                className={
                  props.studyLamp02 === "disconnect"
                    ? "disconnected-brightness"
                    : ""
                }
                style={{
                  height:
                    props.isGroupFiveBreaker === true &&
                    props.studyLamp02 === "connected"
                      ? "10vh"
                      : "10vh",
                }}
              />
            </div>
          </div>
          <div className="position-heading-bottom">
            <h1 className="heading-bottom">
              {isDutch ? "Studeerkamer" : "Study Room"}
            </h1>
          </div>
        </div>
      ) : (
        <div
          style={{ border: "2px solid white", height: "100%", width: "100%" }}
        >
          <div
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/StudyRoom.png"
              })`,
              height: "100%",
              width: "100%",
              border: "2px solid white",
            }}
            className="bath-main-div disconnected"
          ></div>
        </div>
      )}
    </>
  );
};

export default StudyRoom;
