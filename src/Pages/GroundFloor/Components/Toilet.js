import React from "react";
import FanOff from "../images/FanOff.png";
import FanOff_D from "../images/FanOff_D.png";
import FanOn from "../images/FanOn.png";
import bathBulbOff from "../images/bathBulbOff.png";
import bathBulbOff_D from "../images/bathBulbOff_D.png";
import bathBulbOn from "../images/bathBulbOn.png";

import "./Toilet.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useSound from "use-sound";
import error from "../SoundEffects/error.mp3";
import { SwalBreakerOff, SwalDisconnected } from "../../Components/SwalModules";
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
} from "../../../Redux/Action";
import { useNavigate } from "react-router-dom";
import { breakerOffDutch, breakerOffEnglish } from "../../../utils/translation";

const Toilet = (props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const dispatchdisconnect = useDispatch();
  const dispatchconnect = useDispatch();

  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  const disconnectedDevices = useSelector(
    (state) => state.CounterRemainingDevicesReducer.count
  );

  const corruptGroup = useSelector(
    (state) => state.corruptGroupReducer.corruptGroup
  );

  const corruptAttemptedDevices = useSelector(
    (state) => state.GroupDevicesCounterReducer.corruptAttempted
  );

  const redirectSorry = () => {
    navigate("/result");
  };

  const [errorSound] = useSound(error);

  const [hover, setHover] = useState("");

  const corruptDevice = useSelector(
    (state) => state.CorruptDeviceReducer.corrupt
  );

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
    if (val === 1) {
      props.setToiletFan("disconnect");
      dispatchdisconnect(disconnectDevice());
      dispatch(addDisconnectDevice("toiletFan"));
    }
    if (val === 2) {
      props.setToiletLight("disconnect");
      dispatchdisconnect(disconnectDevice());
      dispatch(addDisconnectDevice("toiletLight"));
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

      errorSound();
      props.setIsFirstGroupBreaker(false);
      // SwalBreakerOff(popupText, redirectSorry);
      dispatch(increaseDeviceCounter());
      props.setGroundFloorTrial(props.groundFloorTrial + 1);
      localStorage.setItem("state", JSON.stringify(props.groundFloorTrial + 1));
    }
    props.setCompleteCorruptDevice(val);
    if (val === 1) {
      props.setToiletFan("connected");
      dispatchconnect(connectDevice());
      dispatch(removeDisconnectDevice("toiletFan"));
    }
    if (val === 2) {
      props.setToiletLight("connected");
      dispatchconnect(connectDevice());
      dispatch(removeDisconnectDevice("toiletLight"));
    }
    if (props.completeRnd === val) {
      dispatch(hideFinishBtn());
    }
  };
  return (
    <>
      {/* {props.gamePhase === "toilet" ? ( */}
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%),url(${
            process.env.PUBLIC_URL
          }${
            isDutch
              ? "/dutch-images/ground-toilet-2.png"
              : "/images/wash-room-ground.png"
          })`,
          height: "100%",
          width: "100%",
          border: "2px dotted white",
        }}
        className="bath-main-div curl"
      >
        {/* image main div .......................  */}
        <div className=" d-flex img-div">
          {/* fan div .............. */}
          <div className={"div-fan-On "}>
            <img
              src={
                props.isFirstGroupBreaker === true &&
                props.toiletFan === "connected"
                  ? FanOn
                  : props.toiletFan === "disconnect"
                  ? FanOff_D
                  : FanOff
              }
              alt=""
              className={props.toiletFan === "disconnect" ? "" : ""}
              style={{
                height:
                  props.isFirstGroupBreaker === true &&
                  props.toiletFan === "connected"
                    ? "16vh"
                    : "16vh",
              }}
              // onMouseEnter={() => setHover("fan")}
              // onMouseLeave={() => setHover("")}
            />

            <>
              {props.toiletFan === "disconnect" ? (
                <button
                  // onMouseEnter={() => setHover("fan")}
                  // onMouseLeave={() => setHover("")}
                  className="btn btn-danger btn-sm active mt-4 ms-1 btn-font"
                  onClick={() => connectHandler(1)}
                >
                  {isDutch ? "Aansluiten" : "Connect"}
                </button>
              ) : (
                <button
                  // onMouseEnter={() => setHover("fan")}
                  // onMouseLeave={() => setHover("")}
                  className="btn btn-success btn-sm active mt-4 ms-1 btn-font"
                  onClick={() => disconnectHandler(1)}
                >
                  {isDutch ? "Loskoppelen" : "Disconnect"}
                </button>
              )}
            </>
          </div>

          {/* start my code 12/29...................... */}

          <button
            // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
            className={"btn-maskGroup set-btns-toilet-back"}
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

          {/* light div ................. */}
          <div
            className={
              props.isFirstGroupBreaker === true &&
              props.toiletLight === "connected"
                ? "div-light-On"
                : "div-light"
            }
          >
            {/* {hover === "light" ? ( */}
            <>
              {props.toiletLight === "disconnect" ? (
                <button
                  // onMouseEnter={() => setHover("light")}
                  // onMouseLeave={() => setHover("")}
                  className="btn btn-danger btn-sm active btn-font "
                  onClick={() => connectHandler(2)}
                >
                  {isDutch ? "Aansluiten" : "Connect"}
                </button>
              ) : (
                <button
                  // onMouseEnter={() => setHover("light")}
                  // onMouseLeave={() => setHover("")}
                  className="btn btn-success btn-sm active btn-font"
                  onClick={() => disconnectHandler(2)}
                >
                  {isDutch ? "Loskoppelen" : "Disconnect"}
                </button>
              )}
            </>
            {/* ) : (
            ""
          )} */}
            <img
              src={
                props.isFirstGroupBreaker === true &&
                props.toiletLight === "connected"
                  ? bathBulbOn
                  : props.toiletLight === "disconnect"
                  ? bathBulbOff_D
                  : bathBulbOff
              }
              className={props.toiletLight === "disconnect" ? "" : ""}
              style={{
                height:
                  props.isFirstGroupBreaker === true &&
                  props.toiletLight === "connected"
                    ? "28vh"
                    : "28vh",
              }}
              alt=""
            />
          </div>
        </div>
        <div className="position-heading-bottom">
          <h1 className="heading-bottom">{isDutch ? "Toilet" : "Toilet"}</h1>
        </div>
      </div>
      {/* ) : ( */}
      <div style={{ border: "2px solid white", height: "100%", width: "106%" }}>
        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/BathRoom.png"})`,
            height: "100%",
            width: "100%",
            border: "2px solid white",
          }}
          className="bath-main-div disconnected"
        ></div>
      </div>

      {/* )} */}
    </>
  );
};

export default Toilet;
