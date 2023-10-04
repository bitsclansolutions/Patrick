import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useSelector } from "react-redux";
import RestartIcon from "../Congratulation/restart-icon.png";
import "./Congratulation.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Congratulation = () => {
  const navigate = useNavigate();
  const isHurray = useSelector((state) => state.HurrayReducer.hurry);

  // console.log(total, 'total');
  const counter = useSelector((state) => state.CounterReducer.count);
  // console.log(counter + " redux counter");

  const counterDevice = useSelector(
    (state) => state.CounterDeviceReducer.count
  );
  // console.log(counterDevice + " redux device counter");

  const disconnectedDevices = useSelector(
    (state) => state.CounterRemainingDevicesReducer.count
  );
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
  //this is the average of wrong attempts
  const avgOfWrongProgress =
    (wrongPerOfBreakerHit + wrongPerOfDeviceHit + wrongPerOfRemainingDevices) /
    3;
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
          justifyContent: "center",
          width: "auto",
          position: "relative",
        }}
        className="main-mask-div"
      >
        <div className="set-bg-centent-explain">
          {counter > 10 || counterDevice > 10 ? (
            <>
              <p className="set-font-20">
                <strong>
                  Sorry, You have tried more than 10 attempts. So, please try
                  again!!!
                </strong>
              </p>
            </>
          ) : (
            <>
              <div style={{ height: "200px", width: "200px", margin: "auto" }}>
                {(counter == 1 &&
                  counterDevice == 1 &&
                  disconnectedDevices == 1) ||
                (counter == 0 &&
                  counterDevice == 1 &&
                  disconnectedDevices == 1) ||
                (counter == 1 &&
                  counterDevice == 0 &&
                  disconnectedDevices == 1) ||
                (counter == 0 &&
                  counterDevice == 0 &&
                  disconnectedDevices == 1) ? (
                  <CircularProgressbar value={100} text={"100%"} />
                ) : (
                  <CircularProgressbar
                    value={newtotalAvgProgress}
                    text={`${newtotalAvgProgress}%`}
                  />
                )}
              </div>
              <div className="mt-4 resultFormat">
                {/* <p className="mb-0 set-font-16">
                  Maximum of 10 Breaker attempts:
                </p> */}
                <p className="set-font-20">
                  You did experiment with{" "}
                  <strong style={{ borderBottom: "1px solid #fff" }}>
                    {counter} breakers.{" "}
                  </strong>
                </p>
                {/* <p className="mb-0 set-font-16">
                  Maximum of 10 Device attempts:
                </p> */}
                <p className="set-font-20">
                  You did experiment with{" "}
                  <strong style={{ borderBottom: "1px solid #fff" }}>
                    {counterDevice} Devices.
                  </strong>
                </p>
                {/* <p className="mb-0 set-font-16">Maximum of 49 Devices:</p> */}
                <p className="set-font-20">
                  You did disconnect{" "}
                  <strong style={{ borderBottom: "1px solid #fff" }}>
                    {disconnectedDevices} Devices.
                  </strong>
                </p>
              </div>
            </>
          )}
        </div>
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
          Tell Your Supervisor
        </button>
      </div>
    </>
  );
};

export default Congratulation;
