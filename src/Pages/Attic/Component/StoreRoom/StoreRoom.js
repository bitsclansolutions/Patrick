import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useSound from "use-sound";
import error from "../SoundEffects/error.mp3";
import LightOn from "../images/LightOn.png";
import LightOff from "../images/LightOff.png";
import LightOff_D from "../images/LightOff_D.png";
import gittarOn from "../images/gittarOn.png";
import drillOn from "../images/drillOn.png";
import drillOff from "../images/drillOff.png";
import gittarOff from "../images/gittarOff.png";
import "./StoreRoom.css";
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
} from "../../../../Redux/Action";

const StoreRoom = (props) => {
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
  const disconnectHandler = (val) => {
    if (val === 44) {
      props.setLivingOneLignt01("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 45) {
      props.setLivingOneLignt02("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 46) {
      props.setLivingOneLignt03("disconnect");
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
      errorSound();
      props.setIsGroupFiveBreaker(false);
      SwalBreakerOff(disconnectedDevices, redirectSorry);
      dispatch(increaseDeviceCounter());
      props.setAtticTrial(props.atticTrial + 1);
      localStorage.setItem("state-attic", JSON.stringify(props.atticTrial + 1));
    }
    props.setGroupFiveCorruptDevice(val);
    if (val === 44) {
      props.setLivingOneLignt01("connected");
      dispatchconnect(connectDevice());
    }
    if (val === 45) {
      props.setLivingOneLignt02("connected");
      dispatchconnect(connectDevice());
    }
    if (val === 46) {
      props.setLivingOneLignt03("connected");
      dispatchconnect(connectDevice());
    }
  };

  return (
    <>
      <>
        {props.gamePhase === "StoreRoom" ? (
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%),url(${
                process.env.PUBLIC_URL + "/images/FullStore.png"
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
                  props.isGroupFiveBreaker === true &&
                  props.livingOneLignt01 === "connected"
                    ? "div-store-light01-on"
                    : "div-store-light01"
                }
              >
                <img
                  src={
                    props.isGroupFiveBreaker === true &&
                    props.livingOneLignt01 === "connected"
                      ? // ? gittarOn
                        // : props.livingOneLignt01 === "disconnect"
                        // ? LightOff_D
                        // : LightOff
                        gittarOn
                      : props.livingOneLignt01 === "disconnect"
                      ? gittarOff
                      : gittarOff
                  }
                  alt=""
                  className={
                    props.livingOneLignt01 === "disconnect"
                      ? "disconnected-brightness"
                      : ""
                  }
                  style={{
                    height:
                      props.isGroupFiveBreaker === true &&
                      props.livingOneLignt01 === "connected"
                        ? "26vh"
                        : "26vh",
                  }}
                />

                <>
                  {props.livingOneLignt01 === "disconnect" ? (
                    <button
                      className="btn btn-danger btn-sm active btn-font"
                      onClick={() => connectHandler(44)}
                    >
                      Connect
                    </button>
                  ) : (
                    <button
                      className="btn btn-success btn-sm active btn-font"
                      onClick={() => disconnectHandler(44)}
                    >
                      Disconnect
                    </button>
                  )}
                </>
              </div>

              {/* second light div ................. */}
              <div
                className={
                  props.isGroupFiveBreaker === true &&
                  props.livingOneLignt02 === "connected"
                    ? "div-store-light02-on"
                    : "div-store-light02"
                }
              >
                <img
                  src={
                    props.isGroupFiveBreaker === true &&
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
                      props.isGroupFiveBreaker === true &&
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
                      onClick={() => connectHandler(45)}
                    >
                      Connect
                    </button>
                  ) : (
                    <button
                      className="btn btn-success btn-sm active btn-font"
                      onClick={() => disconnectHandler(45)}
                    >
                      Disconnect
                    </button>
                  )}
                </>
              </div>

              {/* start my code 12/30...................... */}

              <button
                // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
                className={"btn-maskGroup set-attic-store-back"}
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

              {/* light 03 div .............. */}
              <div
                className={
                  props.isGroupFiveBreaker === true &&
                  props.livingOneLignt03 === "connected"
                    ? "div-store-light03-on"
                    : "div-store-light03"
                }
              >
                <>
                  {props.livingOneLignt03 === "disconnect" ? (
                    <button
                      className="btn btn-danger btn-sm active btn-font"
                      onClick={() => connectHandler(46)}
                    >
                      Connect
                    </button>
                  ) : (
                    <button
                      className="btn btn-success btn-sm active btn-font"
                      onClick={() => disconnectHandler(46)}
                    >
                      Disconnect
                    </button>
                  )}
                </>

                <img
                  src={
                    props.isGroupFiveBreaker === true &&
                    props.livingOneLignt03 === "connected"
                      ? // ? LightOn
                        // : props.livingOneLignt03 === "disconnect"
                        // ? LightOff_D
                        // : LightOff

                        drillOn
                      : props.livingOneLignt03 === "disconnect"
                      ? drillOff
                      : drillOff
                  }
                  alt=""
                  className={
                    props.livingOneLignt03 === "disconnect"
                      ? "disconnected-brightness"
                      : ""
                  }
                  style={{
                    height:
                      props.isGroupFiveBreaker === true &&
                      props.livingOneLignt03 === "connected"
                        ? "16vh"
                        : "16vh",
                  }}
                />
              </div>
            </div>
            <div className="position-heading-bottom">
              <h1 className="heading-bottom">Storage Room</h1>
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
                  process.env.PUBLIC_URL + "images/Store.png"
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

export default StoreRoom;
