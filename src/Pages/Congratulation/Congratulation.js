import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useDispatch, useSelector } from "react-redux";
import RestartIcon from "../Congratulation/restart-icon.png";
import "./Congratulation.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { isFinished, showFinishBtn } from "../../Redux/Action";
import ChangeLanguageToggle from "../../utils/ChangeLanguageToggle";
const Congratulation = () => {
  const isHurray = useSelector((state) => state.HurrayReducer.hurry);
  const finished = useSelector((state) => state.ShowFinishReducer.show);

  const userName = localStorage.getItem("userName");

  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Cancel the event to show a custom confirmation dialog
      event.preventDefault();
      // Display a custom confirmation message
      const confirmationMessage =
        "You are about to leave this page. Are you sure you want to leave?";
      event.returnValue = confirmationMessage;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    return () => {
      navigate("/result");
    };
  }, []);

  const totalLocal = localStorage.getItem("totalResult");
  const counterLocal = localStorage.getItem("counter");
  const counterDeviceLocal = localStorage.getItem("counterDevice");
  const disconnectedDevicesLocal = localStorage.getItem("disconnectedDevices");
  const finishGame = JSON.parse(localStorage.getItem("finishGame"));
  const totalErrors = JSON.parse(localStorage.getItem("totalErrors"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isFinished());
  }, []);

  // console.log(total, 'total');
  const counter = useSelector((state) => state.CounterReducer.count);
  // console.log(counter + " redux counter");

  const counterDevice = useSelector(
    (state) => state.CounterDeviceReducer.count
  );

  const corruptAttemptedDevices = useSelector(
    (state) => state.GroupDevicesCounterReducer.corruptGroupError
  );
  const correctAttemptedDevices = useSelector(
    (state) => state.GroupDevicesCounterReducer.correctGroupError
  );
  // console.log(counterDevice + " redux device counter");

  const disconnectedDevices = useSelector(
    (state) => state.CounterRemainingDevicesReducer.count
  );
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message = "Are you sure you want to leave this page?";
      event.returnValue = message; // Standard for most browsers
      return message; // For some older browsers
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // TOTAL OF COUNTERS
  const [breakerTotal, setBreakerTotal] = useState(10);
  const [deviceTotal, setDeviceTotal] = useState(10);
  const [remainingDevicesTotal, setRemainingDevicesTotal] = useState(48);

  // FINDING PERCENTAGES OF BREAKERS, DEVICES AND REMAINING DEVICES

  const wrongPerOfBreakerHit = (counter / breakerTotal) * 100;
  const wrongPerOfDeviceHit = (counterDevice / deviceTotal) * 100;
  const wrongPerOfRemainingDevices =
    (disconnectedDevices / remainingDevicesTotal) * 100;
  const wrongDeviceAttempted =
    ((corruptAttemptedDevices + correctAttemptedDevices) / 10) * 100;
  //this is the average of wrong attempts
  const avgOfWrongProgress =
    (wrongPerOfBreakerHit +
      wrongPerOfDeviceHit +
      wrongPerOfRemainingDevices +
      wrongDeviceAttempted) /
    4;

  console.log(avgOfWrongProgress);
  //now find the over all plus point of average in percentage
  const totalAvgProgress = 100 - avgOfWrongProgress;

  const newtotalAvgProgress = Math.floor(totalAvgProgress);

  console.log("Total Avarage Progress of Game ", totalAvgProgress, "%");

  const handleOk = () => {
    // props.setIsModalOpen(false);
    navigate("/result");
    // dispatch(isHurray(true));
    // hurraySound();

    // setTimeout(() => {
    //   dispatch(isHurray(false));
    // }, 3000);
    // setTimeout(() => {
    //   // props.setgroupFiveBreakerType("red");
    //   // props.setIsGroupFiveBreaker(true);
    // }, 3000);
    // if (props.floor === "groundFloor") {
    //   navigate("/first-floor");
    // }
    // if (props.floor === "firstFloor") {
    //   navigate("/attic");
    // }
  };

  console.log(finishGame);

  let result;

  if (!finishGame) {
    result = (
      <>
        <p className="set-font-20">
          <strong>
            {isDutch
              ? "Sorry, u heeft het corrupte apparaat niet losgekoppeld!"
              : "Sorry, You have not disconnected the corrupt device!"}{" "}
          </strong>
        </p>
      </>
    );
  } else if (counter > 10 || counterDevice > 10) {
    result = (
      <>
        <p className="set-font-20">
          <strong>
            {isDutch
              ? "Sorry, u heeft meer dan 10 pogingen geprobeerd. Probeer het dus nog eens!!!"
              : "Sorry, You have tried more than 10 attempts. So, please try again!!!"}
          </strong>
        </p>
      </>
    );
  } else {
    console.log(totalLocal);
    result = (
      <>
        {totalLocal > 0 &&
          (isDutch ? (
            <p className="congo-msg">
              Goed zo {userName.toUpperCase()} ! Je hebt het juiste apparaat
              uitgekozen. Haal je begeleider erbij en laat hem jouw score zien
            </p>
          ) : (
            <p className="congo-msg">
              Well done {userName.toUpperCase()} ! You have chosen the right
              device. Get your supervisor in and show him your score
            </p>
          ))}
        <div style={{ height: "200px", width: "200px", margin: "auto" }}>
          {(counterLocal == 0 &&
            counterDeviceLocal == 1 &&
            disconnectedDevicesLocal == 1 &&
            totalErrors == 0) ||
          (counterLocal == 0 &&
            counterDeviceLocal == 1 &&
            disconnectedDevicesLocal == 1 &&
            totalErrors == 0) ||
          (counterLocal == 0 &&
            counterDeviceLocal == 0 &&
            disconnectedDevicesLocal == 1 &&
            totalErrors == 0) ||
          (counterLocal == 0 &&
            counterDeviceLocal == 0 &&
            disconnectedDevicesLocal == 1 &&
            totalErrors == 0) ? (
            <>
              <CircularProgressbar value={100} text={"100%"} />
            </>
          ) : (
            <CircularProgressbar
              value={totalLocal < 1 ? 0 : totalLocal}
              text={`${totalLocal < 1 ? 0 : totalLocal}%`}
            />
          )}
        </div>
        <div className="mt-4 resultFormat">
          {/* <p className="mb-0 set-font-16">
                  Maximum of 10 Breaker attempts:
                </p> */}
          <p className="set-font-20">
            {isDutch
              ? "Je hebt geëxperimenteerd met"
              : "You did experiment with"}{" "}
            <strong style={{ borderBottom: "1px solid #fff" }}>
              {counterLocal} {isDutch ? "Zekeringen" : "Breakers."}{" "}
            </strong>
          </p>
          {/* <p className="mb-0 set-font-16">
                  Maximum of 10 Device attempts:
                </p> */}
          <p className="set-font-20">
            {isDutch
              ? "Je hebt geëxperimenteerd met"
              : "You did experiment with"}{" "}
            <strong style={{ borderBottom: "1px solid #fff" }}>
              {counterDeviceLocal} {isDutch ? "Apparaten " : "Devices"} .
            </strong>
          </p>
          {/* <p className="mb-0 set-font-16">Maximum of 49 Devices:</p> */}
          <p className="set-font-20">
            {isDutch ? "Je hebt losgekoppeld" : "You did disconnect"}{" "}
            <strong style={{ borderBottom: "1px solid #fff" }}>
              {disconnectedDevicesLocal} {isDutch ? "Apparaten " : "Devices"}.
            </strong>
          </p>
        </div>
      </>
    );
  }

  console.log(totalLocal);

  console.log(result);
  return (
    <>
      {isHurray ? (
        <Confetti
          numberOfPieces={1000}
          height={"1000px"}
          width={"3000px"}
          gravity={1}
        />
      ) : (
        ""
      )}
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/congratulation-org.png"
          })`,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          paddingTop: "20px",
          width: "auto",
          position: "relative",
          flexDirection: "column",
          justifyItems: "stretch",
        }}
        className="main-mask-div"
      >
        <ChangeLanguageToggle />
        <div className="set-bg-centent-explain">{result}</div>
        <div className="congo-button">
          <button
            // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
            //   boom-bum
            className={"set-position-btn boom-bum set-btn-tell-teacher"}
            onClick={() => {
              // setShowAttic(true)
              // navigate("/mask-group");
              window.location.href = "/";
            }}
          >
            {/* <img src={RestartIcon} /> */}
            {isDutch ? "Vertel het uw supervisor" : "Tell Your Supervisor"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Congratulation;
