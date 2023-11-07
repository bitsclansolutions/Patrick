import React from "react";
import "./LivingRoomOne.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useSound from "use-sound";
import error from "../SoundEffects/error.mp3";
import HallBulbOffImg_D from "../images/HallBulbOffImg_D.png";
import LightOn from "../images/LightOn.png";
import LightOff from "../images/LightOff.png";
import ACOn from "../images/ACOn.png";
import ACOff from "../images/ACOff.png";
import TVOffIMG from "../images/TVOffIMG.png";
import TVOnIMG from "../images/TVOnIMG.png";
import SilingFanOffIMG from "../images/SilingFanOffIMG.png";
import SilingFanOnIMG_DD from "../images/SilingFanOnIMG_DD.png";
import SilingFanOnIMG from "../images/SilingFanOnIMG.png";
import SilingFanOff_D from "../images/SilingFanOff_D.png";
import LightOff_D from "../images/LightOff_D.png";
import Right from "../images/Right.png";
import RightOff from "../images/RightOff.png";
import Left from "../images/Left.png";
import LeftOff from "../images/LeftOff.png";
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

const LivingRoomOne = (props) => {
  const navigate = useNavigate();

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
    if (val === 16) {
      props.setLivingOneLignt01("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 17) {
      props.setLivingOneLignt02("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 18) {
      props.setLivingOneLignt03("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 19) {
      props.setLivingOneFan("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 20) {
      props.setLivingOneTV("disconnect");
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
    console.log(props.rndGroupThree, "rndGroupThree");
    console.log(props.groupThreeCorruptDevice, "groupThreeCorruptDevice");

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
    if (val === 16) {
      props.setLivingOneLignt01("connected");
      dispatchconnect(connectDevice());
    }
    if (val === 17) {
      props.setLivingOneLignt02("connected");
      dispatchconnect(connectDevice());
    }
    if (val === 18) {
      props.setLivingOneLignt03("connected");
      dispatchconnect(connectDevice());
    }
    if (val === 19) {
      props.setLivingOneFan("connected");
      dispatchconnect(connectDevice());
    }
    if (val === 20) {
      props.setLivingOneTV("connected");
      dispatchconnect(connectDevice());
    }
    if (props.rndGroupThree === val) {
      dispatch(hideFinishBtn());
    }
  };

  return (
    <>
      <>
        {props.gamePhase === "livingOne" ? (
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%),url(${
                process.env.PUBLIC_URL
              }${
                isDutch
                  ? "/dutch-images/room1-first-6.png"
                  : "/images/FullLiving-room1.png"
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
                  props.livingOneLignt01 === "connected"
                    ? "div-living01-light01-on"
                    : "div-living01-light01"
                }
              >
                <img
                  src={
                    props.isGroupThreeBreaker === true &&
                    props.livingOneLignt01 === "connected"
                      ? Right
                      : props.livingOneLignt01 === "disconnect"
                      ? RightOff
                      : RightOff
                  }
                  alt=""
                  className={
                    props.livingOneLignt01 === "disconnect"
                      ? "disconnected-brightness"
                      : ""
                  }
                  style={{
                    height:
                      props.isGroupThreeBreaker === true &&
                      props.livingOneLignt01 === "connected"
                        ? "20vh"
                        : "20vh",
                  }}
                />

                <>
                  {props.livingOneLignt01 === "disconnect" ? (
                    <button
                      className="btn btn-danger btn-sm active btn-font"
                      onClick={() => connectHandler(16)}
                    >
                      {isDutch ? "Aansluiten" : "Connect"}
                    </button>
                  ) : (
                    <button
                      className="btn btn-success btn-sm active btn-font"
                      onClick={() => disconnectHandler(16)}
                    >
                      {isDutch ? "Loskoppelen" : "Disconnect"}
                    </button>
                  )}
                </>
              </div>

              {/* start my code 12/29...................... */}
              <button
                // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
                className={"btn-maskGroup set-btns-fist-living1"}
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
              {/* end my code 12/29...................... */}

              {/* second light div ................. */}
              <div
                className={
                  props.isGroupThreeBreaker === true &&
                  props.livingOneLignt02 === "connected"
                    ? "div-living01-light02-on"
                    : "div-living01-light02"
                }
              >
                <img
                  src={
                    props.isGroupThreeBreaker === true &&
                    props.livingOneLignt02 === "connected"
                      ? LightOn
                      : props.livingOneLignt02 === "disconnect"
                      ? LightOff_D
                      : LightOff
                    // ? LightOff : props.livingOneLignt02 === "disconnect" ? LightOff_D
                    // : LightOff
                  }
                  // className={
                  //   props.livingOneLignt02 === "disconnect" ? "disconnected" : ""
                  // }
                  style={{
                    height:
                      props.isGroupThreeBreaker === true &&
                      props.livingOneLignt02 === "connected"
                        ? "24vh"
                        : "24vh",
                  }}
                  alt=""
                />

                <>
                  {props.livingOneLignt02 === "disconnect" ? (
                    <button
                      className="btn btn-danger btn-sm active btn-font"
                      onClick={() => connectHandler(17)}
                    >
                      {isDutch ? "Aansluiten" : "Connect"}
                    </button>
                  ) : (
                    <button
                      className="btn btn-success btn-sm active btn-font"
                      onClick={() => disconnectHandler(17)}
                    >
                      {isDutch ? "Loskoppelen" : "Disconnect"}
                    </button>
                  )}
                </>
              </div>

              {/* Second light div ................. */}
              <div
                className={
                  props.isGroupThreeBreaker === true &&
                  props.livingOneFan === "connected"
                    ? "div-living01-fan-on"
                    : "div-living01-fan"
                }
              >
                <img
                  src={
                    props.isGroupThreeBreaker === true &&
                    props.livingOneFan === "connected"
                      ? // ? SilingFanOnIMG
                        // : props.livingOneFan === "disconnect"
                        // ? SilingFanOff_D
                        // : SilingFanOffIMG

                        SilingFanOnIMG
                      : props.livingOneFan === "disconnect"
                      ? SilingFanOnIMG_DD
                      : SilingFanOnIMG_DD
                  }
                  className={
                    props.livingOneFan === "disconnect"
                      ? "disconnected-brightness"
                      : ""
                  }
                  style={{
                    height:
                      props.isGroupThreeBreaker === true &&
                      props.livingOneFan === "connected"
                        ? "13vh"
                        : "13vh",
                  }}
                  alt=""
                />

                <>
                  {props.livingOneFan === "disconnect" ? (
                    <button
                      className="btn btn-danger btn-sm active btn-font"
                      onClick={() => connectHandler(19)}
                    >
                      {isDutch ? "Aansluiten" : "Connect"}
                    </button>
                  ) : (
                    <button
                      className="btn btn-success btn-sm active btn-font"
                      onClick={() => disconnectHandler(19)}
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
                  props.livingOneLignt03 === "connected"
                    ? "div-living01-light03-on"
                    : "div-living01-light03"
                }
              >
                <>
                  {props.livingOneLignt03 === "disconnect" ? (
                    <button
                      className="btn btn-danger btn-sm active btn-font"
                      onClick={() => connectHandler(18)}
                    >
                      {isDutch ? "Aansluiten" : "Connect"}
                    </button>
                  ) : (
                    <button
                      className="btn btn-success btn-sm active btn-font"
                      onClick={() => disconnectHandler(18)}
                    >
                      {isDutch ? "Loskoppelen" : "Disconnect"}
                    </button>
                  )}
                </>

                <img
                  src={
                    props.isGroupThreeBreaker === true &&
                    props.livingOneLignt03 === "connected"
                      ? Left
                      : props.livingOneLignt03 === "disconnect"
                      ? LeftOff
                      : LeftOff
                  }
                  alt=""
                  className={
                    props.livingOneLignt03 === "disconnect"
                      ? "disconnected-brightness"
                      : ""
                  }
                  style={{
                    height:
                      props.isGroupThreeBreaker === true &&
                      props.livingOneLignt03 === "connected"
                        ? "20vh"
                        : "20vh",
                  }}
                />
              </div>

              {/* LED TV div .............. */}
              <div
                className={
                  props.isGroupThreeBreaker === true &&
                  props.livingOneTV === "connected"
                    ? "div-living01-TV"
                    : "div-living01-TV"
                }
              >
                <>
                  {props.livingOneTV === "disconnect" ? (
                    <button
                      className="btn btn-danger btn-sm active btn-font"
                      onClick={() => connectHandler(20)}
                    >
                      {isDutch ? "Aansluiten" : "Connect"}
                    </button>
                  ) : (
                    <button
                      className="btn btn-success btn-sm active btn-font"
                      onClick={() => disconnectHandler(20)}
                    >
                      {isDutch ? "Loskoppelen" : "Disconnect"}
                    </button>
                  )}
                </>

                <img
                  src={
                    props.isGroupThreeBreaker === true &&
                    props.livingOneTV === "connected"
                      ? TVOnIMG
                      : props.livingOneTV === "disconnect"
                      ? TVOffIMG
                      : TVOffIMG
                  }
                  alt=""
                  className={
                    props.livingOneTV === "disconnect"
                      ? "disconnected-brightness"
                      : ""
                  }
                  style={{
                    height:
                      props.isGroupThreeBreaker === true &&
                      props.livingOneTV === "connected"
                        ? "22vh"
                        : "22vh",
                  }}
                />
              </div>
            </div>
            <div className="position-heading-bottom">
              <h1 className="heading-bottom">
                {isDutch ? "Slaapkamer 01" : "Bedroom 01"}
              </h1>
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
                  process.env.PUBLIC_URL + "images/LivingRoomOneIMG.png"
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

export default LivingRoomOne;
