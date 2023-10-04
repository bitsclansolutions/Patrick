import React from "react";
import HallBulbOnImg from "../images/HallBulbOnImg.png";
import HallBulbOffImg from "../images/HallBulbOffImg.png";
import LampOnIMG from "../images/LampOnIMG.png";
import LampGuestRoom_D from "../images/LampGuestRoom_D.png";
import LampOffIMG from "../images/LampOffIMG.png";
import HallBulbOffImg_D from "../images/HallBulbOffImg_D.png";
import LampOffIMG_D from "../images/LampOffIMG_D.png";
import heaterOn from "../images/heaterOn.png";
import heaterOff from "../images/heaterOff.png";
import "./HallAttic.css";
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
} from "../../../../Redux/Action";

const HallAttic = (props) => {
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
    if (val === 35) {
      props.setHallLampFive("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 36) {
      props.setHallLight01Five("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 37) {
      props.setHallLight02Five("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (props.rndGroupFive === val) {
      props.setGroupFiveCorruptDevice(0);
      props.setgroupFiveBreakerType("black");
      dispatch(showFinishBtn());
    }
  };

  const connectHandler = (val) => {
    console.log("rondom ", props.rndGroupFive);
    console.log();
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
    if (val === 35) {
      props.setHallLampFive("connected");
      dispatchconnect(connectDevice());
    }
    if (val === 36) {
      props.setHallLight01Five("connected");
      dispatchconnect(connectDevice());
    }
    if (val === 37) {
      props.setHallLight02Five("connected");
      dispatchconnect(connectDevice());
    }
  };

  return (
    <>
      {props.gamePhase === "hall" ? (
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%),url(${
              process.env.PUBLIC_URL + "/images/FullAtticHall.png"
            })`,
            height: "100%",
            width: "100%",
            border: "2px dotted white",
            marginTop: "2px",
          }}
          className="hall-main-div"
        >
          <div className=" d-flex img-div">
            {/* LED TV div .............. */}
            <div
              className={
                props.isGroupFiveBreaker === true &&
                props.hallLampFive === "connected"
                  ? "div-Lamp-attic-on"
                  : "div-Lamp-attic"
              }
            >
              <img
                src={
                  props.isGroupFiveBreaker === true &&
                  props.hallLampFive === "connected"
                    ? LampOnIMG
                    : props.hallLampFive === "disconnect"
                    ? LampOffIMG_D
                    : LampOffIMG
                  // ? LampOnIMG
                  // : LampOffIMG
                  // ? LampOffIMG : props.hallLampFive === "disconnect" ? LampOffIMG_D
                  // : LampOffIMG
                }
                alLampOnIMG=""
                // className={
                //   props.hallLampFive === "disconnect" ? "disconnected" : ""
                // }
                style={{
                  height:
                    props.isGroupFiveBreaker === true &&
                    props.hallLampFive === "connected"
                      ? "26vh"
                      : "26vh",
                }}
                onMouseEnter={() => setHover("LED")}
                onMouseLeave={() => setHover("")}
              />
              <>
                {props.hallLampFive === "disconnect" ? (
                  <button
                    onMouseEnter={() => setHover("LED")}
                    onMouseLeave={() => setHover("")}
                    className="btn btn-danger btn-sm active btn-font"
                    onClick={() => connectHandler(35)}
                  >
                    Connect
                  </button>
                ) : (
                  <button
                    onMouseEnter={() => setHover("LED")}
                    onMouseLeave={() => setHover("")}
                    className="btn btn-success btn-sm active btn-font"
                    onClick={() => disconnectHandler(35)}
                  >
                    Disconnect
                  </button>
                )}
              </>
            </div>

            {/* start my code 12/30...................... */}

            <button
              // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
              className={"btn-maskGroup set-attic-hall-store"}
              onMouseEnter={() => {
                // setBtnPhase("attic")
                // setfirstBtn('')
              }}
              // onMouseLeave={()=> setBtnPhase("")}
              onClick={() => {
                // setShowAttic(true)
                navigate("/attic/storage-room");
              }}
            >
              Storage Room
            </button>
            <button
              // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
              className={"btn-maskGroup set-attic-hall-study"}
              onMouseEnter={() => {
                // setBtnPhase("attic")
                // setfirstBtn('')
              }}
              // onMouseLeave={()=> setBtnPhase("")}
              onClick={() => {
                // setShowAttic(true)
                navigate("/attic/study-room");
              }}
            >
              Study Room
            </button>
            <button
              // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
              className={"btn-maskGroup set-attic-hall-first"}
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
              First Floor
            </button>
            <button
              // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
              className={"btn-maskGroup set-attic-hall-guest"}
              onMouseEnter={() => {
                // setBtnPhase("attic")
                // setfirstBtn('')
              }}
              // onMouseLeave={()=> setBtnPhase("")}
              onClick={() => {
                // setShowAttic(true)
                navigate("/attic/guest-room");
              }}
            >
              Guest Room
            </button>
            <button
              // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
              className={"btn-maskGroup set-attic-hall-lundary"}
              onMouseEnter={() => {
                // setBtnPhase("attic")
                // setfirstBtn('')
              }}
              // onMouseLeave={()=> setBtnPhase("")}
              onClick={() => {
                // setShowAttic(true)
                navigate("/attic/laundary");
              }}
            >
              Laundary
            </button>
            {/* end my code 12/29...................... */}

            {/* first light div ................. */}
            <div
              className={
                props.isGroupFiveBreaker === true &&
                props.hallLight01Five === "connected"
                  ? "div-light01-atticHall-on"
                  : "div-light01-atticHall"
              }
            >
              <img
                src={
                  props.isGroupFiveBreaker === true &&
                  props.hallLight01Five === "connected"
                    ? HallBulbOnImg
                    : props.hallLight01Five === "disconnect"
                    ? HallBulbOffImg_D
                    : HallBulbOffImg

                  // ? HallBulbOnImg
                  // : HallBulbOffImg
                  // HallBulbOffImg_D
                  // ? HallBulbOffImg : props.hallLight01Five === "disconnect" ? HallBulbOffImg_D
                  // : HallBulbOffImg
                }
                // className={
                //   props.hallLight01Five === "disconnect" ? "disconnected" : ""
                // }
                style={{
                  height:
                    props.isGroupFiveBreaker === true &&
                    props.hallLight01Five === "connected"
                      ? "24vh"
                      : "24vh",
                }}
                alt=""
                onMouseEnter={() => setHover("hallLight01Five")}
                onMouseLeave={() => setHover("")}
              />

              <>
                {props.hallLight01Five === "disconnect" ? (
                  <button
                    onMouseEnter={() => setHover("hallLight01Five")}
                    onMouseLeave={() => setHover("")}
                    className="btn btn-danger btn-sm active btn-font"
                    onClick={() => connectHandler(36)}
                  >
                    Connect
                  </button>
                ) : (
                  <button
                    onMouseEnter={() => setHover("hallLight01Five")}
                    onMouseLeave={() => setHover("")}
                    className="btn btn-success btn-sm active btn-font"
                    onClick={() => disconnectHandler(36)}
                  >
                    Disconnect
                  </button>
                )}
              </>
            </div>

            {/* Second light div ................. */}
            <div
              className={
                props.isGroupFiveBreaker === true &&
                props.hallLight02Five === "connected"
                  ? "div-light02-atticHall-on"
                  : "div-light02-atticHall"
              }
            >
              <>
                {props.hallLight02Five === "disconnect" ? (
                  <button
                    onMouseEnter={() => setHover("hallLight02Five")}
                    onMouseLeave={() => setHover("")}
                    className="btn btn-danger btn-sm active btn-font"
                    onClick={() => connectHandler(37)}
                  >
                    Connect
                  </button>
                ) : (
                  <button
                    onMouseEnter={() => setHover("hallLight02Five")}
                    onMouseLeave={() => setHover("")}
                    className="btn btn-success btn-sm active btn-font"
                    onClick={() => disconnectHandler(37)}
                  >
                    Disconnect
                  </button>
                )}
              </>
              <img
                src={
                  props.isGroupFiveBreaker === true &&
                  props.hallLight02Five === "connected"
                    ? // ? HallBulbOnImg
                      //   : props.hallLight02Five === "disconnect"
                      //   ? HallBulbOffImg_D
                      //   : HallBulbOffImg

                      heaterOn
                    : props.hallLight02Five === "disconnect"
                    ? heaterOff
                    : heaterOff
                }
                className={
                  props.hallLight02Five === "disconnect"
                    ? "disconnected-brightness"
                    : ""
                }
                style={{
                  height:
                    props.isGroupFiveBreaker === true &&
                    props.hallLight02Five === "connected"
                      ? "12vh"
                      : "12vh",
                }}
                alt=""
                onMouseEnter={() => setHover("hallLight02Five")}
                onMouseLeave={() => setHover("")}
              />
            </div>
          </div>
          <div className="position-heading-bottom">
            <h1 className="heading-bottom">Hall</h1>
          </div>
        </div>
      ) : (
        <div
          style={{
            border: "2px solid white",
            height: "100%",
            width: "104%",
            marginTop: "2px",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/HallAttic.png"
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

export default HallAttic;
