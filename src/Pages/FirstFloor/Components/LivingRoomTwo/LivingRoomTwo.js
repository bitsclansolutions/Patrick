import React from "react";
import "./LivingRoomTwo.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useSound from "use-sound";
import error from "../SoundEffects/error.mp3";

import SmallLampOnIMG from "../images/SmallLampOnIMG.png";
import SmallLampOffIMG from "../images/SmallLampOffIMG.png";
import LightOn from "../images/LightOn.png";
import LightOff from "../images/LightOff.png";
import LightOff_D from "../images/LightOff_D.png";
import SilingFanOffIMG from "../images/SilingFanOffIMG.png";
import SilingFanOnIMG from "../images/SilingFanOnIMG.png";
import SilingFanOnIMG_DD from "../images/SilingFanOnIMG_DD.png";
import SmallLampOff_D from "../images/SmallLampOff_D.png";
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
} from "../../../../Redux/Action";
import {
  breakerOffDutch,
  breakerOffEnglish,
} from "../../../../utils/translation";

const LivingRoomTwo = (props) => {
  // console.log("Hello Random " + props.rndGroupThree)
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

  const disconnectHandler = (val) => {
    if (corruptGroup === 3) {
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
    if (val === 21) {
      props.setLivingTwoLignt01("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 22) {
      props.setLivingTwoFan("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 23) {
      props.setLivingTwoLignt02("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 24) {
      props.setLivingTwoSmallLamp("disconnect");
      dispatchdisconnect(disconnectDevice());
    }

    if (props.rndGroupThree === val) {
      props.setGroupThreeCorruptDevice(0);
      props.setGroupThreeBreakerType("black");
      dispatch(showFinishBtn());
    }
  };

  const popupText = isDutch ? breakerOffDutch : breakerOffEnglish;

  const connectHandler = (val) => {
    if (corruptGroup === 3) {
      dispatch(connectCorrupGroupDevice());
    } else {
      dispatch(connectCorrectGroupDevice());
    }
    if (props.rndGroupThree === val && props.groupThreeBreakerType === "red") {
      props.setGroupThreeBreakerType("black");

      props.setIsGroupThreeBreaker(false);
      // SwalBreakerOff(popupText, redirectSorry);
      dispatch(increaseDeviceCounter());
      errorSound();
      props.setFirstFloorTrial(props.firstFloorTrial + 1);
      localStorage.setItem(
        "state-first",
        JSON.stringify(props.firstFloorTrial + 1)
      );
    }
    props.setGroupThreeCorruptDevice(val);

    if (val === 21) {
      props.setLivingTwoLignt01("connected");
      dispatchconnect(connectDevice());
    }
    if (val === 22) {
      props.setLivingTwoFan("connected");
      dispatchconnect(connectDevice());
    }
    if (val === 23) {
      props.setLivingTwoLignt02("connected");
      dispatchconnect(connectDevice());
    }
    if (val === 24) {
      props.setLivingTwoSmallLamp("connected");
      dispatchconnect(connectDevice());
    }
    if (props.rndGroupThree === val) {
      dispatch(hideFinishBtn());
    }
  };

  return (
    <>
      <>
        {props.gamePhase === "livingTwo" ? (
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%),url(${
                process.env.PUBLIC_URL
              }${
                isDutch
                  ? "/dutch-images/room2-first-7.png"
                  : "/images/FullLivingRoom2.png"
              })`,
              height: "100%",
              width: "100%",
              border: "2px dotted white",
            }}
            className="LivingRoomTwo-main-div"
          >
            <div className=" d-flex img-div">
              {/* first bulb div .............. */}
              <div
                className={
                  props.isGroupThreeBreaker === true &&
                  props.livingTwoLignt01 === "connected"
                    ? "div-living01-light01-on set-light-two-on"
                    : "div-living01-light01 set-light-two"
                }
              >
                <img
                  src={
                    props.isGroupThreeBreaker === true &&
                    props.livingTwoLignt01 === "connected"
                      ? LightOn
                      : props.livingTwoLignt01 === "disconnect"
                      ? LightOff_D
                      : LightOff
                    //   ? LightOff : props.livingTwoLignt01 === "disconnect" ? LightOff_D
                    // : LightOff
                  }
                  alt=""
                  // className={
                  //   props.livingTwoLignt01 === "disconnect" ? "disconnected" : ""
                  // }
                  style={{
                    height:
                      props.isGroupThreeBreaker === true &&
                      props.livingTwoLignt01 === "connected"
                        ? "24vh"
                        : "24vh",
                  }}
                />

                <>
                  {props.livingTwoLignt01 === "disconnect" ? (
                    <button
                      className="btn btn-danger btn-sm active btn-font"
                      onClick={() => connectHandler(21)}
                    >
                      {isDutch ? "Aansluiten" : "Connect"}
                    </button>
                  ) : (
                    <button
                      className="btn btn-success btn-sm active btn-font"
                      onClick={() => disconnectHandler(21)}
                    >
                      {isDutch ? "Loskoppelen" : "Disconnect"}
                    </button>
                  )}
                </>
              </div>

              {/* start my code 12/28...................... */}
              <button
                // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
                className={"btn-maskGroup set-btns-first-living2"}
                onMouseEnter={() => {
                  // setBtnPhase("attic")
                  // setfirstBtn('')
                }}
                // onMouseLeave={()=> setBtnPhase("")}
                onClick={() => {
                  // setShowAttic(true)
                  navigate("/first-floor");
                }}
              >
                {isDutch ? "Ga Terug" : "Go Back"}
              </button>

              {/* fan div div ................. */}
              <div
                className={
                  props.isGroupThreeBreaker === true &&
                  props.livingTwoFan === "connected"
                    ? "div-living02-fan-on"
                    : "div-living02-fan"
                }
              >
                <img
                  src={
                    props.isGroupThreeBreaker === true &&
                    props.livingTwoFan === "connected"
                      ? // ? SilingFanOnIMG
                        // : SilingFanOffIMG
                        SilingFanOnIMG
                      : props.livingTwoFan === "disconnect"
                      ? SilingFanOnIMG_DD
                      : SilingFanOnIMG_DD
                  }
                  className={
                    props.livingTwoFan === "disconnect"
                      ? "disconnected-brightness"
                      : ""
                  }
                  style={{
                    height:
                      props.isGroupThreeBreaker === true &&
                      props.livingTwoFan === "connected"
                        ? "13vh"
                        : "13vh",
                  }}
                  alt=""
                />

                <>
                  {props.livingTwoFan === "disconnect" ? (
                    <button
                      className="btn btn-danger btn-sm active btn-font"
                      onClick={() => connectHandler(22)}
                    >
                      {isDutch ? "Aansluiten" : "Connect"}
                    </button>
                  ) : (
                    <button
                      className="btn btn-success btn-sm active btn-font"
                      onClick={() => disconnectHandler(22)}
                    >
                      {isDutch ? "Loskoppelen" : "Disconnect"}
                    </button>
                  )}
                </>
              </div>

              {/* second light div ................. */}
              <div
                className={
                  props.isGroupThreeBreaker === true &&
                  props.livingTwoLignt02 === "connected"
                    ? "div-living01-light02-on set-position-roomTwo"
                    : "div-living01-light02 set-position-roomTwo"
                }
              >
                <img
                  src={
                    props.isGroupThreeBreaker === true &&
                    props.livingTwoLignt02 === "connected"
                      ? LightOn
                      : props.livingTwoLignt02 === "disconnect"
                      ? LightOff_D
                      : LightOff

                    // ? LightOff : props.livingTwoLignt02 === "disconnect" ? LightOff_D
                    // : LightOff
                  }
                  // className={
                  //   props.livingTwoLignt02 === "disconnect" ? "disconnected" : ""
                  // }
                  style={{
                    height:
                      props.isGroupThreeBreaker === true &&
                      props.livingTwoLignt02 === "connected"
                        ? "23vh"
                        : "23vh",
                  }}
                  alt=""
                />

                <>
                  {props.livingTwoLignt02 === "disconnect" ? (
                    <button
                      className="btn btn-danger btn-sm active btn-font"
                      onClick={() => connectHandler(23)}
                    >
                      {isDutch ? "Aansluiten" : "Connect"}
                    </button>
                  ) : (
                    <button
                      className="btn btn-success btn-sm active btn-font"
                      onClick={() => disconnectHandler(23)}
                    >
                      {isDutch ? "Loskoppelen" : "Disconnect"}
                    </button>
                  )}
                </>
              </div>

              {/* light 03 div .............. */}
              <div
                className={
                  props.isGroupThreeBreaker === true &&
                  props.livingTwoSmallLamp === "connected"
                    ? "div-living02-lamp-on"
                    : "div-living02-lamp"
                }
              >
                <>
                  {props.livingTwoSmallLamp === "disconnect" ? (
                    <button
                      className="btn btn-danger btn-sm active btn-font"
                      onClick={() => connectHandler(24)}
                    >
                      {isDutch ? "Aansluiten" : "Connect"}
                    </button>
                  ) : (
                    <button
                      className="btn btn-success btn-sm active btn-font"
                      onClick={() => disconnectHandler(24)}
                    >
                      {isDutch ? "Loskoppelen" : "Disconnect"}
                    </button>
                  )}
                </>

                <img
                  src={
                    props.isGroupThreeBreaker === true &&
                    props.livingTwoSmallLamp === "connected"
                      ? // ? SmallLampOnIMG
                        // : props.livingTwoSmallLamp === "disconnect"
                        // ? SmallLampOff_D
                        // : SmallLampOffIMG

                        // ? SmallLampOffIMG
                        // : SmallLampOnIMG
                        // SmallLampOff_D
                        SmallLampOnIMG
                      : props.livingTwoSmallLamp === "disconnect"
                      ? SmallLampOff_D
                      : SmallLampOff_D
                  }
                  alt=""
                  className={
                    props.livingTwoSmallLamp === "disconnect"
                      ? "disconnected-brightness"
                      : ""
                  }
                  style={{
                    height:
                      props.isGroupThreeBreaker === true &&
                      props.livingTwoSmallLamp === "connected"
                        ? "10vh"
                        : "10vh",
                  }}
                />
              </div>
            </div>
            <div className="position-heading-bottom">
              <h1 className="heading-bottom">
                {isDutch ? "Slaapkamer 02" : "Bedroom 02"}
              </h1>
            </div>
          </div>
        ) : (
          <div
            style={{
              border: "2px solid white",
              height: "100%",
              width: "100%",
              marginTop: "4px",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "images/LivingRoomTwoIMG.png"
                })`,
                height: "100%",
                width: "100%",
              }}
              className="LivingRoomTwo-main-div disconnected"
            ></div>
          </div>
        )}
      </>
    </>
  );
};

export default LivingRoomTwo;
