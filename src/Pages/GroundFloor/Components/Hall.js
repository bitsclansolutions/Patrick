import React from "react";
import HallBulbOnImg from "../images/HallBulbOnImg.png";
import HallBulbOffImg from "../images/HallBulbOffImg.png";
import HallBulbOffImg_D from "../images/HallBulbOffImg_D.png";
import LampOnIMG from "../images/LampOnIMG.png";
import LampOffIMG from "../images/LampOffIMG.png";
import LampOffIMG_D from "../images/LampOffIMG_D.png";
import "./Hall.css";
import { useState, useEffect } from "react";
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
} from "../../../Redux/Action";
import Swal from "sweetalert2";
import useSound from "use-sound";
import error from "../SoundEffects/error.mp3";
import { SwalBreakerOff, SwalDisconnected } from "../../Components/SwalModules";
import { useNavigate } from "react-router-dom";
import { breakerOffDutch, breakerOffEnglish } from "../../../utils/translation";

const Hall = (props) => {
  // const counterHall = useSelector((state) => state.CounterDeviceReducer.count);
  // console.log(counterHall + " redux device counter");

  const disconnectedDevices = useSelector(
    (state) => state.CounterRemainingDevicesReducer.count
  );
  const redirectSorry = () => {
    navigate("/result");
  };

  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  const corruptGroup = useSelector(
    (state) => state.corruptGroupReducer.corruptGroup
  );

  const corruptAttemptedDevices = useSelector(
    (state) => state.GroupDevicesCounterReducer.corruptAttempted
  );

  const dispatch = useDispatch();
  const dispatchdisconnect = useDispatch();
  const dispatchconnect = useDispatch();

  const navigate = useNavigate();

  const [errorSound] = useSound(error);

  const [hover, setHover] = useState("");

  const [corruptDevice, setCorruptDevice] = useState(1);

  const corruptDeviceRedux = useSelector(
    (state) => state.CorruptDeviceReducer.corrupt
  );

  const disconnectHandler = (val) => {
    if (corruptGroup === 1) {
      if (
        (val === corruptDeviceRedux &&
          corruptAttemptedDevices.filter((item) => item === val).length ===
            2) ||
        (val !== corruptDeviceRedux && corruptAttemptedDevices.includes(val))
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
    if (val === 3) {
      props.setHallLamp("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 4) {
      props.setHallLight01("disconnect");
      dispatchdisconnect(disconnectDevice());
    }
    if (val === 5) {
      props.setHallLight02("disconnect");
      dispatchdisconnect(disconnectDevice());
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
      SwalBreakerOff(popupText, redirectSorry);
      // DISPATCH COUNTER REDUX
      dispatch(increaseDeviceCounter());
      errorSound();
      props.setGroundFloorTrial(props.groundFloorTrial + 1);
      localStorage.setItem("state", JSON.stringify(props.groundFloorTrial + 1));

      setCorruptDevice(corruptDevice + 1);
      console.log(corruptDevice, "Heloo counter Corrupt");
    }
    props.setCompleteCorruptDevice(val);
    if (val === 3) {
      props.setHallLamp("connected");
      dispatchconnect(connectDevice());
    }
    if (val === 4) {
      props.setHallLight01("connected");
      dispatchconnect(connectDevice());
    }
    if (val === 5) {
      props.setHallLight02("connected");
      dispatchconnect(connectDevice());
    }
    if (props.completeRnd === val) {
      dispatch(hideFinishBtn());
    }
  };

  console.log(isDutch);

  console.log(process.env.PUBLIC_URL);

  return (
    <>
      {/* {props.gamePhase === "hall" ? ( */}
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%), url(${
            process.env.PUBLIC_URL
          }${
            !isDutch
              ? "/images/full-hall-ground.png"
              : "/dutch-images/hall-ground-1.png"
          })`,
          height: "100%",
          width: "100%",
          border: "2px dotted white",
        }}
        className={`hall-main-div 
        `}
      >
        <div className=" d-flex img-div">
          {/* lamp div .............. */}
          <div
            className={
              props.isFirstGroupBreaker === true &&
              props.hallLamp === "connected"
                ? "div-lamp-On"
                : "div-lamp"
            }
          >
            <img
              src={
                props.isFirstGroupBreaker === true &&
                props.hallLamp === "connected"
                  ? LampOnIMG
                  : props.hallLamp === "disconnect"
                  ? LampOffIMG_D
                  : LampOffIMG
              }
              alt=""
              style={{
                height:
                  props.isFirstGroupBreaker === true &&
                  props.hallLamp === "connected"
                    ? "25vh"
                    : "25vh",
              }}
              onMouseEnter={() => setHover("lamp")}
              onMouseLeave={() => setHover("")}
            />

            <>
              {props.hallLamp === "disconnect" ? (
                <button
                  onMouseEnter={() => setHover("lamp")}
                  onMouseLeave={() => setHover("")}
                  className="btn btn-danger btn-sm active btn-font"
                  onClick={() => connectHandler(3)}
                >
                  {isDutch ? "Aansluiten" : "Connect"}
                </button>
              ) : (
                <button
                  onMouseEnter={() => setHover("lamp")}
                  onMouseLeave={() => setHover("")}
                  className="btn btn-success btn-sm active btn-font"
                  onClick={() => disconnectHandler(3)}
                >
                  {isDutch ? "Loskoppelen" : "Disconnect"}
                </button>
              )}
            </>
          </div>

          {/* first light div ................. */}
          <div
            className={
              props.isFirstGroupBreaker === true &&
              props.hallLight01 === "connected"
                ? "div-light01-On"
                : "div-light01"
            }
          >
            <img
              src={
                props.isFirstGroupBreaker === true &&
                props.hallLight01 === "connected"
                  ? HallBulbOnImg
                  : props.hallLight01 === "disconnect"
                  ? HallBulbOffImg_D
                  : HallBulbOffImg
              }
              style={{
                height:
                  props.isFirstGroupBreaker === true &&
                  props.hallLight01 === "connected"
                    ? "30vh"
                    : "30vh",
              }}
              alt=""
              onMouseEnter={() => setHover("hallLight01")}
              onMouseLeave={() => setHover("")}
            />

            <>
              {props.hallLight01 === "disconnect" ? (
                <button
                  onMouseEnter={() => setHover("hallLight01")}
                  onMouseLeave={() => setHover("")}
                  className="btn btn-danger btn-sm active btn-font"
                  onClick={() => connectHandler(4)}
                >
                  {isDutch ? "Aansluiten" : "Connect"}
                </button>
              ) : (
                <button
                  onMouseEnter={() => setHover("hallLight01")}
                  onMouseLeave={() => setHover("")}
                  className="btn btn-success btn-sm active btn-font"
                  onClick={() => disconnectHandler(4)}
                >
                  {isDutch ? "Loskoppelen" : "Disconnect"}
                </button>
              )}
            </>
          </div>

          {/* Second light div ................. */}
          <div
            className={
              props.isFirstGroupBreaker === true &&
              props.hallLight02 === "connected"
                ? "div-light02-On"
                : "div-light02"
            }
          >
            <>
              {props.hallLight02 === "disconnect" ? (
                <button
                  onMouseEnter={() => setHover("hallLight02")}
                  onMouseLeave={() => setHover("")}
                  className="btn btn-danger btn-sm active btn-font"
                  onClick={() => connectHandler(5)}
                >
                  {isDutch ? "Aansluiten" : "Connect"}
                </button>
              ) : (
                <button
                  onMouseEnter={() => setHover("hallLight02")}
                  onMouseLeave={() => setHover("")}
                  className="btn btn-success btn-sm active btn-font"
                  onClick={() => disconnectHandler(5)}
                >
                  {isDutch ? "Loskoppelen" : "Disconnect"}
                </button>
              )}
            </>
            <img
              src={
                props.isFirstGroupBreaker === true &&
                props.hallLight02 === "connected"
                  ? HallBulbOnImg
                  : props.hallLight02 === "disconnect"
                  ? HallBulbOffImg_D
                  : HallBulbOffImg
              }
              style={{
                height:
                  props.isFirstGroupBreaker === true &&
                  props.hallLight02 === "connected"
                    ? "30vh"
                    : "30vh",
              }}
              alt=""
              onMouseEnter={() => setHover("hallLight02")}
              onMouseLeave={() => setHover("")}
            />
          </div>
          {/* start my code 12/28...................... */}
          <button
            // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
            className={"btn-maskGroup set-btn-living-ground"}
            onMouseEnter={() => {
              // setBtnPhase("attic")
              // setfirstBtn('')
            }}
            // onMouseLeave={()=> setBtnPhase("")}
            onClick={() => {
              // setShowAttic(true)
              navigate("/ground-floor/living-room");
            }}
          >
            {isDutch ? "Woonkamer" : "Living Room"}
          </button>

          <button
            // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
            className={"btn-maskGroup set-btn-toilet-ground"}
            onMouseEnter={() => {
              // setBtnPhase("attic")
              // setfirstBtn('')
            }}
            // onMouseLeave={()=> setBtnPhase("")}
            onClick={() => {
              // setShowAttic(true)
              navigate("/ground-floor/toilet");
            }}
          >
            {isDutch ? "Toilet" : "Toilet"}
          </button>

          <button
            // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
            className={"btn-maskGroup set-btn-kitchen-ground"}
            onMouseEnter={() => {
              // setBtnPhase("attic")
              // setfirstBtn('')
            }}
            // onMouseLeave={()=> setBtnPhase("")}
            onClick={() => {
              // setShowAttic(true)
              navigate("/ground-floor/kitchen");
            }}
          >
            {isDutch ? "Keuken" : "Kitchen"}
          </button>
          <button
            // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
            className={"btn-maskGroup set-btn-firt-ground"}
            onMouseEnter={() => {
              // setBtnPhase("attic")
              // setfirstBtn('')
            }}
            // onMouseLeave={()=> setBtnPhase("")}
            onClick={() => {
              // setShowAttic(true)
              navigate("/first-floor");
              localStorage.setItem("state-first", JSON.stringify(-5));
            }}
          >
            {isDutch ? "Eerste Verdieping" : "First Floor"}
          </button>
          {/* end my code 12/28.......................... */}
        </div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: "0%",
            transform: "translateX(-50%)",
          }}
        >
          <h1 className="heading-bottom">{isDutch ? "Hal" : "Hall"}</h1>
        </div>
      </div>
      {/* ) : ( */}
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
            backgroundImage: `url(${process.env.PUBLIC_URL + "/HallIMG.png"})`,
            height: "100%",
            width: "100%",
          }}
          className="hall-main-div disconnected"
        >
          <div></div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Hall;
