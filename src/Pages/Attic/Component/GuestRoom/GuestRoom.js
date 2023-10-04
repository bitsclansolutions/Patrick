import React from "react";
import RadioStudyRoomIMG from "../images/RadioStudyRoomIMG.png";
import RadioStudyRoomIMGOn from "../images/RadioStudyRoomIMGOn.png";
import LampGuestRoomIMG from "../images/LampGuestRoomIMG.png";
import LampGuestRoomIMGOn from "../images/LampGuestRoomIMGOn.png";
import SilingFanOnIMG from "../images/SilingFanOnIMG.png";
import SilingFanOnIMG_DD from "../images/SilingFanOnIMG_DD.png";
import SilingFanOffIMG from "../images/SilingFanOffIMG.png";
import LEDStudyRoomIMG from "../images/LEDStudyRoomIMG.png";
import LampGuestRoom_D from "../images/LampGuestRoom_D.png";
import LEDStudyRoomIMGOn from "../images/LEDStudyRoomIMGOn.png";
import LedOnIMG from "../images/LedOnIMG.png";
import RadioOffIMG_D from "../images/RadioOffIMG_D.png";
import { useNavigate } from "react-router-dom";
import "./GuestRoom.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useSound from "use-sound";
import error from "../SoundEffects/error.mp3";
import {
  SwalBreakerOff,
  SwalDisconnected,
  SwalInitial,
} from "../../../Components/SwalModules";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseDeviceCounter,
  connectDevice,
  disconnectDevice,
  showFinishBtn,
} from "../../../../Redux/Action";

const GuestRoom = (props) => {
  const navigate = useNavigate();

  const disconnectedDevices = useSelector(
    (state) => state.CounterRemainingDevicesReducer.count
  );
  const redirectSorry = () => {
    navigate("/result");
  };

  const dispatch = useDispatch();
  const dispatchdisconnect = useDispatch();
  const dispatchconnect = useDispatch();

  const [errorSound] = useSound(error);
  const [hover, setHover] = useState("");
  const disconnectHandler = (val) => {
    if (val === 38) {
      props.setGuestLamp("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 39) {
      props.setGuestRadio("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 40) {
      props.setGuestFan("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 41) {
      props.setGuestLED("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (props.rndGroupFive === val) {
      props.setGroupFiveCorruptDevice(0);
      props.setgroupFiveBreakerType("black");
      dispatch(showFinishBtn());
    }
  };

  const connectHandler = (val) => {
    if (props.rndGroupFive === val && props.groupFiveBreakerType === "red") {
      props.setgroupFiveBreakerType("black");
      props.setIsGroupFiveBreaker(false);
      SwalBreakerOff(disconnectedDevices, redirectSorry);
      dispatch(increaseDeviceCounter());
      errorSound();
      props.setAtticTrial(props.atticTrial + 1);
      localStorage.setItem("state-attic", JSON.stringify(props.atticTrial + 1));
    }
    props.setGroupFiveCorruptDevice(val);
    if (val === 38) {
      props.setGuestLamp("connected");
      dispatchconnect(connectDevice());
    }
    if (val === 39) {
      props.setGuestRadio("connected");
      dispatchconnect(connectDevice());
    }
    if (val === 40) {
      props.setGuestFan("connected");
      dispatchconnect(connectDevice());
    }
    if (val === 41) {
      props.setGuestLED("connected");
      dispatchconnect(connectDevice());
    }
  };
  return (
    <>
      {props.gamePhase === "GuestRoom" ? (
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%),url(${
              process.env.PUBLIC_URL + "/images/FullGuestRoom.png"
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
                props.guestLamp === "connected"
                  ? "div-lamp-guest-on"
                  : "div-lamp-guest"
              }
            >
              <img
                src={
                  props.isGroupFiveBreaker === true &&
                  props.guestLamp === "connected"
                    ? LampGuestRoomIMGOn
                    : props.guestLamp === "disconnect"
                    ? LampGuestRoom_D
                    : LampGuestRoomIMG

                  // ? LampGuestRoomIMG : props.guestLamp === "disconnect" ? LampGuestRoom_D
                  // : LampGuestRoom_D
                }
                alt=""
                // className={
                //   props.guestLamp === "disconnect" ? "disconnected" : ""
                // }
                style={{
                  height:
                    props.isGroupFiveBreaker === true &&
                    props.guestLamp === "connected"
                      ? "16vh"
                      : "16vh",
                }}
              />

              <>
                {props.guestLamp === "disconnect" ? (
                  <button
                    className="btn btn-danger btn-sm active mt-4 ms-1 btn-font"
                    onClick={() => connectHandler(38)}
                  >
                    Connect
                  </button>
                ) : (
                  <button
                    className="btn btn-success btn-sm active mt-4 ms-1 btn-font"
                    onClick={() => disconnectHandler(38)}
                  >
                    Disconnect
                  </button>
                )}
              </>
            </div>

            {/* Radio div ................. */}
            <div
              className={
                props.isGroupFiveBreaker === true &&
                props.guestRadio === "connected"
                  ? "div-radio-guest"
                  : "div-radio-guest"
              }
            >
              <>
                <img
                  src={
                    props.isGroupFiveBreaker === true &&
                    props.guestRadio === "connected"
                      ? RadioStudyRoomIMGOn
                      : props.guestRadio === "disconnect"
                      ? RadioOffIMG_D
                      : RadioStudyRoomIMG

                    // ? RadioStudyRoomIMGOn
                    // : RadioStudyRoomIMG
                    // LampGuestRoom_D
                    // ? RadioStudyRoomIMG : props.guestRadio === "disconnect" ? RadioOffIMG_D
                    // : RadioStudyRoomIMG
                  }
                  // className={
                  //   props.guestRadio === "disconnect" ? "disconnected" : ""
                  // }
                  style={{
                    height:
                      props.isGroupFiveBreaker === true &&
                      props.guestRadio === "connected"
                        ? "9vh"
                        : "9vh",
                  }}
                />
                {props.guestRadio === "disconnect" ? (
                  <button
                    className="btn btn-danger btn-sm active btn-font ms-1 "
                    onClick={() => connectHandler(39)}
                  >
                    Connect
                  </button>
                ) : (
                  <button
                    className="btn btn-success btn-sm active btn-font ms-1"
                    onClick={() => disconnectHandler(39)}
                  >
                    Disconnect
                  </button>
                )}
              </>
            </div>

            {/* start my code 12/29...................... */}

            <button
              // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
              className={"btn-maskGroup set-attic-guest-back"}
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
              Go Back
            </button>
            {/* end my code 12/29...................... */}

            {/* silingfan div .............. */}
            <div
              className={
                props.isGroupFiveBreaker === true &&
                props.guestFan === "connected"
                  ? "div-fan-guest-on"
                  : "div-fan-guest"
              }
            >
              <img
                src={
                  props.isGroupFiveBreaker === true &&
                  props.guestFan === "connected"
                    ? // ? SilingFanOnIMG
                      //   : props.guestFan === "disconnect"
                      //   ? SilingFanOnIMG_DD
                      //   : SilingFanOffIMG

                      // ? SilingFanOnIMG
                      // : SilingFanOffIMG
                      SilingFanOnIMG
                    : props.guestFan === "disconnect"
                    ? SilingFanOnIMG_DD
                    : SilingFanOnIMG_DD
                }
                alt=""
                className={
                  props.guestFan === "disconnect"
                    ? "disconnected-brightness"
                    : ""
                }
                style={{
                  height:
                    props.isGroupFiveBreaker === true &&
                    props.guestFan === "connected"
                      ? "12vh"
                      : "12vh",
                }}
              />

              <>
                {props.guestFan === "disconnect" ? (
                  <button
                    className="btn btn-danger btn-sm active btn-font"
                    onClick={() => connectHandler(40)}
                  >
                    Connect
                  </button>
                ) : (
                  <button
                    className="btn btn-success btn-sm active btn-font"
                    onClick={() => disconnectHandler(40)}
                  >
                    Disconnect
                  </button>
                )}
              </>
            </div>

            {/* LED div .............. */}
            <div
              className={
                props.isGroupFiveBreaker === true &&
                props.guestLED === "connected"
                  ? "div-LED-guest"
                  : "div-LED-guest"
              }
            >
              <>
                {props.guestLED === "disconnect" ? (
                  <button
                    className="btn btn-danger btn-sm active btn-font"
                    onClick={() => connectHandler(41)}
                  >
                    Connect
                  </button>
                ) : (
                  <button
                    className="btn btn-success btn-sm active btn-font"
                    onClick={() => disconnectHandler(41)}
                  >
                    Disconnect
                  </button>
                )}
              </>
              <img
                src={
                  props.isGroupFiveBreaker === true &&
                  props.guestLED === "connected"
                    ? LEDStudyRoomIMGOn
                    : props.guestLED === "disconnect"
                    ? LEDStudyRoomIMG
                    : LEDStudyRoomIMG
                }
                alt=""
                className={
                  props.guestLED === "disconnect"
                    ? "disconnected-brightness"
                    : ""
                }
                style={{
                  height:
                    props.isGroupFiveBreaker === true &&
                    props.guestLED === "connected"
                      ? "14vh"
                      : "14vh",
                }}
              />
            </div>
          </div>
          <div className="position-heading-bottom">
            <h1 className="heading-bottom">Guest Room</h1>
          </div>
        </div>
      ) : (
        <div
          style={{ border: "2px solid white", height: "100%", width: "103%" }}
        >
          <div
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/GuestRoom.png"
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

export default GuestRoom;
