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
  removeDisconnectDevice,
  addDisconnectDevice,
  showPopup,
} from "../../../Redux/Action";
import Swal from "sweetalert2";
import useSound from "use-sound";
import error from "../SoundEffects/error.mp3";
import { SwalBreakerOff, SwalDisconnected } from "../../Components/SwalModules";
import { useNavigate } from "react-router-dom";
import { breakerOffDutch, breakerOffEnglish } from "../../../utils/translation";
import Popup from "../../../utils/Popup";
import AudioPlayer from "../../../utils/AudioPlayer";
import audio10 from "../../../audios/audio10.m4a";
import BreakerOffPopup from "../../../utils/BreakerOffPopup";

const Hall = (props) => {
  const starterPopup = useSelector((state) => state.StaterPopupReducer.show);
  console.log(starterPopup);
  // console.log(counterHall + " redux device counter");
  const [initialPopup, setInitialPopup] = useState(false);
  const [breakerOff, setBreakerOff] = useState(false);

  const [compMounted, setCompMounted] = useState(false);

  console.log(compMounted);

  useEffect(() => {
    if (!compMounted) {
      setInitialPopup(true);
    }
    setCompMounted(true);
  }, []);

  console.log(compMounted);

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

  const exerciseNumber = useSelector((state) => state.ExerciseReducer.exercise);

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
      dispatch(addDisconnectDevice("hallLamp"));
    }
    if (val === 4) {
      props.setHallLight01("disconnect");
      dispatchdisconnect(disconnectDevice());
      dispatch(addDisconnectDevice("hallLight01"));
    }
    if (val === 5) {
      props.setHallLight02("disconnect");
      dispatchdisconnect(disconnectDevice());
      dispatch(addDisconnectDevice("hallLight02"));
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
      dispatch(removeDisconnectDevice("hallLamp"));
    }
    if (val === 4) {
      props.setHallLight01("connected");
      dispatchconnect(connectDevice());
      dispatch(removeDisconnectDevice("hallLight01"));
    }
    if (val === 5) {
      props.setHallLight02("connected");
      dispatchconnect(connectDevice());
      dispatch(removeDisconnectDevice("hallLight02"));
    }
    if (props.completeRnd === val) {
      dispatch(hideFinishBtn());
    }
  };

  console.log(isDutch);

  console.log(process.env.PUBLIC_URL);

  return (
    <>
      {breakerOff && <BreakerOffPopup close={() => setBreakerOff(false)} />}

      {starterPopup && (
        <Popup opacity={5}>
          <p className="welcome">Opdracht</p>
          <div
            style={{
              fontSize: "15px",
              textAlign: "center",
              color: "#474747 ",
            }}
          >
            <p>
              Ergens in huis is een zekering uitgeschakeld. <br /> In deze
              oefening zitten er meerdere ruimtes op dezelfde groep.
            </p>
            {exerciseNumber === 2 && (
              <>
                <p>
                  {" "}
                  In dit geval moet je de stroom in meerdere ruimtes controleren
                  en eventueel in of uitschakelen.
                </p>
                <p>
                  <b>
                    Kijk daarom goed in het overzicht welke ruimtes op dezelfde
                    groep zitten!
                  </b>
                </p>
              </>
            )}
            <div style={{ width: "100%" }}>
              {/* Legend Table */}
              <table border="1" style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td
                      colSpan="2"
                      style={{ textAlign: "left", paddingLeft: "14px" }}
                    >
                      <p
                        style={{
                          marginBottom: "0px",
                          fontSize: "16px",
                          color: "#B41D1D",
                        }}
                      >
                        <strong style={{ borderBottom: "2px solid #B41D1D" }}>
                          {isDutch ? "Begane Grond" : "Ground Floor"}
                        </strong>
                      </p>
                    </td>
                  </tr>
                  <tr className="d-flex">
                    <td
                      style={{
                        width: "50%",
                        textAlign: "left",
                        paddingLeft: "14px",
                        marginTop: "18px",
                      }}
                    >
                      <div
                        className="set-legend-text-popup"
                        style={{ marginBottom: "1px solid red" }}
                      >
                        <p
                          style={{
                            marginBottom: "0px",
                            fontSize: "16px",
                            color: "#B41D1D",
                            lineHeight: "6px",
                          }}
                        >
                          <sup>
                            <strong>{isDutch ? "Groep 1" : "Group 1"}</strong>
                          </sup>
                        </p>
                        <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                          <small>
                            {isDutch
                              ? "Hal, Toilet, Woonkamer"
                              : "Hall, Toilet, Living room"}
                          </small>
                        </p>
                      </div>
                    </td>
                    <td
                      style={{
                        width: "50%",
                        textAlign: "left",
                        paddingLeft: "14px",
                        marginTop: "18px",
                      }}
                    >
                      <div className="set-legend-text-popup">
                        <p
                          style={{
                            marginBottom: "0px",
                            fontSize: "16px",
                            color: "#B41D1D",
                            lineHeight: "6px",
                          }}
                        >
                          <strong>
                            <sup>{isDutch ? "Groep 2" : "Group 2"}</sup>
                          </strong>
                        </p>
                        <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                          <small>{isDutch ? "Keuken" : "Kitchen"}</small>
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="2"
                      style={{ textAlign: "left", paddingLeft: "14px" }}
                    >
                      <p
                        style={{
                          marginBottom: "0px",
                          fontSize: "16px",
                          color: "#B41D1D",
                        }}
                      >
                        <strong style={{ borderBottom: "2px solid #B41D1D" }}>
                          {isDutch ? "Eerste verdieping" : "First Floor"}
                        </strong>
                      </p>
                    </td>
                  </tr>
                  <tr className="d-flex">
                    <td
                      style={{
                        width: "50%",
                        textAlign: "left",
                        paddingLeft: "14px",
                        marginTop: "18px",
                      }}
                    >
                      <div className="set-legend-text-popup">
                        <p
                          style={{
                            marginBottom: "0px",
                            fontSize: "16px",
                            color: "#B41D1D",
                            lineHeight: "6px",
                          }}
                        >
                          <sup>
                            <strong>{isDutch ? "Groep 3" : "Group 3"}</strong>
                          </sup>
                        </p>
                        <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                          <small>
                            {isDutch
                              ? "Slaapkamer 01, Slaapkamer 02"
                              : "Bedroom 01, Bedroom 02"}
                          </small>
                        </p>
                      </div>
                    </td>
                    <td
                      style={{
                        width: "50%",
                        textAlign: "left",
                        paddingLeft: "14px",
                        marginTop: "18px",
                      }}
                    >
                      <div className="set-legend-text-popup">
                        <p
                          style={{
                            marginBottom: "0px",
                            fontSize: "16px",
                            color: "#B41D1D",
                            lineHeight: "6px",
                          }}
                        >
                          <strong>
                            <sup>{isDutch ? "Groep 4" : "Group 4"}</sup>
                          </strong>
                        </p>
                        <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                          <small>
                            {isDutch
                              ? "Badkamer, Overloop, Slaapkamer 03"
                              : "Hall, Bathroom, Bedroom 03"}
                          </small>
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="2"
                      style={{ textAlign: "left", paddingLeft: "14px" }}
                    >
                      <p
                        style={{
                          marginBottom: "0px",
                          fontSize: "16px",
                          color: "#B41D1D",
                        }}
                      >
                        <strong style={{ borderBottom: "2px solid #B41D1D" }}>
                          {isDutch ? "Zolder" : "Attic Floor"}
                        </strong>
                      </p>
                    </td>
                  </tr>
                  <tr className="d-flex">
                    <td
                      style={{
                        width: "50%",
                        textAlign: "left",
                        paddingLeft: "14px",
                        marginTop: "18px",
                      }}
                    >
                      <div className="set-legend-text-popup-popup">
                        <p
                          style={{
                            marginBottom: "0px",
                            fontSize: "16px",
                            color: "#B41D1D",
                            lineHeight: "6px",
                          }}
                        >
                          <sup>
                            <strong>{isDutch ? "Groep 5" : "Group 5"}</strong>
                          </sup>
                        </p>
                        <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                          <small>
                            {isDutch
                              ? "Logeerkamer, Overloop, Studeerkamer, Berging"
                              : "Hall, Guest room, Study room, Storage room"}
                          </small>
                        </p>
                      </div>
                    </td>
                    <td
                      style={{
                        width: "50%",
                        textAlign: "left",
                        paddingLeft: "14px",
                        marginTop: "18px",
                      }}
                    >
                      <div className="set-legend-text-popup-popup">
                        <p
                          style={{
                            marginBottom: "0px",
                            fontSize: "16px",
                            color: "#B41D1D",
                            lineHeight: "6px",
                          }}
                        >
                          <strong>
                            <sup>{isDutch ? "Groep 6" : "Group 6"}</sup>
                          </strong>
                        </p>
                        <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                          <small>{isDutch ? "Washok" : "Laundry"}</small>
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style={{ marginBottom: "0", fontSize: "16px" }}>
              Als je klaar bent druk je op de blauwe knop <br /> "Ik ben klaar"
            </p>

            <div className="popup-bottom">
              <div className="vol-icon"></div>
              <div className="popup-button">
                <button onClick={() => dispatch(showPopup())}>
                  Ik snap dit
                </button>
              </div>
              <div className="vol-icon">
                {exerciseNumber === 2 && <AudioPlayer file={audio10} />}
              </div>
            </div>
          </div>
        </Popup>
      )}
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
