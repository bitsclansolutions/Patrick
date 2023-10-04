import React from "react";
import "./BedRoomFirstFloor.css";
import { useState, useEffect } from "react";
import ACOn from "../images/ACOn.png";
import ACOff from "../images/ACOff.png";
import SilingFanOffIMG from "../images/SilingFanOffIMG.png";
import SilingFanOnIMG from "../images/SilingFanOnIMG.png";
import LampBedRoomOn_D from "../images/LampBedRoomOn_D.png";
import LampBedRoom from "../images/LampBedRoom.png";
import LampBedRoomOn from "../images/LampBedRoomOn.png";
import SilingFanOnIMG_DD from "../images/SilingFanOnIMG_DD.png";
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

const BedRoomFirstFloor = (props) => {
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
    if (val === 28) {
      props.setLivingLight01("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 29) {
      props.setLivingLight02("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 30) {
      props.setLivingSilingFan("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (props.rndGroupFour === val) {
      props.setGroupFourCorruptDevice(0);
      props.setGroupFourBreakerType("black");
      dispatch(showFinishBtn());
    }
  };

  const connectHandler = (val) => {
    if (props.rndGroupFour === val && props.groupFourBreakerType === "red") {
      props.setGroupFourBreakerType("black");

      props.setIsGroupFourBreaker(false);
      SwalBreakerOff(disconnectedDevices, redirectSorry);
      dispatch(increaseDeviceCounter());
      props.setFirstFloorTrial(props.firstFloorTrial + 1);
      localStorage.setItem(
        "state-first",
        JSON.stringify(props.firstFloorTrial + 1)
      );
      errorSound();
    }
    props.setGroupFourCorruptDevice(val);

    if (val === 28) {
      props.setLivingLight01("connected");
      dispatchconnect(connectDevice());
    }
    if (val === 29) {
      props.setLivingLight02("connected");
      dispatchconnect(connectDevice());
    }
    if (val === 30) {
      props.setLivingSilingFan("connected");
      dispatchconnect(connectDevice());
    }
  };

  return (
    <>
      {props.gamePhaseGroup4 === "livingRoom" ? (
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%),url(${
              process.env.PUBLIC_URL + "/images/FullFirstFloor-bedRoom.png"
            })`,
            height: "100%",
            width: "100%",
            border: "2px dotted white",
          }}
          className="LivingRoom-main-div"
        >
          <div className=" d-flex img-div">
            {/* first light div ................. */}
            <div
              className={
                props.isGroupFourBreaker === true &&
                props.livingLight01 === "connected"
                  ? "div-lamp-bed"
                  : "div-lamp-bed"
              }
            >
              <img
                src={
                  props.isGroupFourBreaker === true &&
                  props.livingLight01 === "connected"
                    ? LampBedRoomOn
                    : props.livingLight01 === "disconnect"
                    ? LampBedRoomOn_D
                    : LampBedRoom

                  // ? LampBedRoom : props.livingLight01 === "disconnect" ? LampBedRoomOn_D
                  //   : LampBedRoom
                }
                // className={
                //   props.livingLight01 === "disconnect" ? "disconnected" : ""
                // }
                style={{
                  height:
                    props.isGroupFourBreaker === true &&
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
                    onClick={() => connectHandler(28)}
                  >
                    Connect
                  </button>
                ) : (
                  <button
                    onMouseEnter={() => setHover("livingLight01")}
                    onMouseLeave={() => setHover("")}
                    className="btn btn-success btn-sm btn-font active"
                    onClick={() => disconnectHandler(28)}
                  >
                    Disconnect
                  </button>
                )}
              </>
            </div>

            {/* start my code 12/29...................... */}

            <button
              // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
              className={"btn-maskGroup set-btn-first-bed-back"}
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
              Go Back
            </button>
            {/* end my code 12/29...................... */}

            {/* livingLight03 div .............. */}
            <div
              className={
                props.isGroupFourBreaker === true &&
                props.livingLight02 === "connected"
                  ? "div-lamp2-bed"
                  : "div-lamp2-bed"
              }
            >
              <img
                src={
                  props.isGroupFourBreaker === true &&
                  props.livingLight02 === "connected"
                    ? LampBedRoomOn
                    : props.livingLight02 === "disconnect"
                    ? LampBedRoomOn_D
                    : LampBedRoom
                  // ? LampBedRoom : props.livingLight02 === "disconnect" ? LampBedRoomOn_D
                  // : LampBedRoom
                }
                alt=""
                // className={
                //   props.livingLight02 === "disconnect" ? "disconnected" : ""
                // }
                style={{
                  height:
                    props.isGroupFourBreaker === true &&
                    props.livingLight02 === "connected"
                      ? "28vh"
                      : "28vh",
                }}
                onMouseEnter={() => setHover("livingLight03")}
                onMouseLeave={() => setHover("")}
              />
              <>
                {props.livingLight02 === "disconnect" ? (
                  <button
                    onMouseEnter={() => setHover("livingLight03")}
                    onMouseLeave={() => setHover("")}
                    className="btn btn-danger btn-sm active btn-font"
                    onClick={() => connectHandler(29)}
                  >
                    Connect
                  </button>
                ) : (
                  <button
                    onMouseEnter={() => setHover("livingLight03")}
                    onMouseLeave={() => setHover("")}
                    className="btn btn-success btn-sm active btn-font"
                    onClick={() => disconnectHandler(29)}
                  >
                    Disconnect
                  </button>
                )}
              </>
            </div>

            {/* silingfan div .............. */}
            <div
              className={
                props.isGroupFourBreaker === true &&
                props.livingSilingFan === "connected"
                  ? "div-fan-bed-on"
                  : "div-fan-bed"
              }
            >
              <img
                src={
                  props.isGroupFourBreaker === true &&
                  props.livingSilingFan === "connected"
                    ? SilingFanOnIMG
                    : props.livingSilingFan === "disconnect"
                    ? SilingFanOnIMG_DD
                    : SilingFanOnIMG_DD
                }
                alt=""
                className={
                  props.livingSilingFan === "disconnect"
                    ? "disconnected-brightness"
                    : ""
                }
                style={{
                  height:
                    props.isGroupFourBreaker === true &&
                    props.livingSilingFan === "connected"
                      ? "14vh"
                      : "14vh",
                }}
                onMouseEnter={() => setHover("radio")}
                onMouseLeave={() => setHover("")}
              />

              <>
                {props.livingSilingFan === "disconnect" ? (
                  <button
                    onMouseEnter={() => setHover("radio")}
                    onMouseLeave={() => setHover("")}
                    className="btn btn-danger btn-sm active btn-font"
                    onClick={() => connectHandler(30)}
                  >
                    Connect
                  </button>
                ) : (
                  <button
                    onMouseEnter={() => setHover("radio")}
                    onMouseLeave={() => setHover("")}
                    className="btn btn-success btn-sm active btn-font"
                    onClick={() => disconnectHandler(30)}
                  >
                    Disconnect
                  </button>
                )}
              </>
            </div>
          </div>
          <div className="position-heading-bottom">
            <h1 className="heading-bottom">Bed Room 03</h1>
          </div>
        </div>
      ) : (
        <div
          style={{ border: "2px solid white", height: "100%", width: "100%" }}
        >
          <div
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/BedRoomFirstFloor.png"
              })`,
              height: "100%",
              width: "100%",
            }}
            className="LivingRoom-main-div disconnected"
          ></div>
        </div>
      )}
    </>
  );
};

export default BedRoomFirstFloor;
