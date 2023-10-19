import { Button, Modal } from "antd";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ResultModel.css";
import { FinishSwal } from "./SwalModules";
import { isHurray, resultTotal } from "../../Redux/Action";
import useSound from "use-sound";

import hurray from "../Attic/Component/SoundEffects/hurray.wav";
const ResultModel = (props) => {
  const ground = useSelector((state) => state.ResultReducer.resultGroundFloor);
  const first = useSelector((state) => state.ResultReducer.resultFirstFloor);
  const attic = useSelector((state) => state.ResultReducer.resultAtticFloor);
  const showFinishBtn = useSelector((state) => state.ShowFinishReducer.show);
  console.log(showFinishBtn);
  const total = ground + first + attic;

  const totalLocal = localStorage.getItem("totalResult");
  const counterLocal = localStorage.getItem("counter");
  const counterDeviceLocal = localStorage.getItem("counterDevice");
  const disconnectedDevicesLocal = localStorage.getItem("disconnectedDevices");

  console.log(totalLocal);

  const [isMounted, setIsMounted] = useState(false);

  const dispatch = useDispatch();
  const [hurraySound] = useSound(hurray);

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
  // console.log(disconnectedDevices + " Disconnected Device numbers");

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

  useEffect(() => {
    dispatch(resultTotal(newtotalAvgProgress));
  }, [newtotalAvgProgress]);

  console.log("Total Avarage Progress of Game ", totalAvgProgress, "%");

  const navigate = useNavigate();
  const showModal = () => {
    props.setIsModalOpen(true);
  };

  const handleOk = () => {
    props.setIsModalOpen(false);
    navigate("/result");
    dispatch(isHurray(true));
    hurraySound();

    setTimeout(() => {
      dispatch(isHurray(false));
    }, 3000);
    setTimeout(() => {
      props.setgroupFiveBreakerType("red");
      props.setIsGroupFiveBreaker(true);
    }, 3000);
    // if (props.floor === "groundFloor") {
    //   navigate("/first-floor");
    // }
    // if (props.floor === "firstFloor") {
    //   navigate("/attic");
    // }
  };
  // const handleTryAgain = () => {
  //   props.setIsModalOpen(false);
  //   navigate("/");
  // };
  const handleCancel = () => {
    props.setIsModalOpen(false);
  };

  const handleRefresh = () => {
    window.location.href = "/";
  };
  const percentage = 100;

  console.log(showFinishBtn);
  return (
    <>
      <Button type="primary" onClick={showModal}>
        open model
      </Button>
      <Modal
        // {props.floor === "groundFloor" ? "Ground Floor" : "First Floor"}
        title="Overall Result"
        open={props.isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{
          backgroundColor: "#CC664A",
          color: "white",
        }}
        footer={[
          <>
            {counter > 10 || counterDevice > 10 ? (
              <button
                className="btn btn-light me-3"
                key="1"
                onClick={handleRefresh}
              >
                Try Again
              </button>
            ) : (
              <>
                <button
                  className="btn btn-light me-3"
                  key="1"
                  onClick={handleRefresh}
                >
                  Try Again
                </button>
                <button key="2" className="btn btn-danger" onClick={handleOk}>
                  Finish
                </button>
              </>
            )}
          </>,
        ]}
      >
        {!showFinishBtn && (
          <>
            <p className="set-font-20">
              <strong>
                Sorry, You have not disconnected the corrupt device
              </strong>
            </p>
          </>
        )}
        {counter > 10 ||
          (counterDevice > 10 && (
            <>
              <p className="set-font-20">
                <strong>
                  Sorry, You have tried more than 10 attempts. So, please try
                  again!!!
                </strong>
              </p>
            </>
          ))}
        {counter > 10 ||
          (counterDevice > 10 && showFinishBtn && (
            <>
              <div style={{ height: "200px", width: "200px", margin: "auto" }}>
                {counterLocal == 1 &&
                counterDeviceLocal == 1 &&
                disconnectedDevicesLocal == 1 ? (
                  <CircularProgressbar
                    value={totalLocal}
                    text={totalLocal + "%"}
                  />
                ) : (
                  <CircularProgressbar
                    value={totalLocal}
                    text={`${totalLocal}%`}
                  />
                )}
              </div>
              <div className="mt-4 resultFormat">
                <p className="mb-0 set-font-16">
                  Maximum of 10 Breaker attempts:
                </p>
                <p className="set-font-20">
                  You did experiment with{" "}
                  <strong style={{ borderBottom: "1px solid #fff" }}>
                    {counterLocal} breakers.{" "}
                  </strong>
                </p>
                <p className="mb-0 set-font-16">
                  Maximum of 10 Device attempts:
                </p>
                <p className="set-font-20">
                  You did experiment with{" "}
                  <strong style={{ borderBottom: "1px solid #fff" }}>
                    {counterDeviceLocal} Devices.
                  </strong>
                </p>
                <p className="mb-0 set-font-16">Maximum of 49 Devices:</p>
                <p className="set-font-20">
                  You did disconnect{" "}
                  <strong style={{ borderBottom: "1px solid #fff" }}>
                    {disconnectedDevicesLocal} Devices.
                  </strong>
                </p>
              </div>
            </>
          ))}

        {/* { props.trial} */}
      </Modal>
    </>
  );
};

export default ResultModel;
