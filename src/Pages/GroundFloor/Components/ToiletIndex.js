import React from "react";
import { useState, useEffect } from "react";
import Toilet from "./Toilet";
// import Toilet from "./Toilet";
import RightNavBar from "./RightNavBar";
import "../../GroundFloor/index.css";
import ErrorPage from "../../404/ErrorPage";
import Confetti from "react-confetti";
import { useSelector } from "react-redux";

const ToiletIndex = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [functionalGroundModel, setFunctionalGroundModel] = useState(false);

  const [groundFloorTrial, setGroundFloorTrial] = useState(-4);

  // Right navbar states and functions......................................
  const [meterType, setMeterType] = useState("meterBoardClose");
  const [groupGroundFloor, setGroupGroundFloor] = useState("");
  const [breaker, setBreaker] = useState("");

  // toilet section code ...................................................
  // const [toiletFan, setToiletFan] = useState("connected");
  // const [toiletLight, setToiletLight] = useState("connected");

  const [toiletCorruptDevice, setToiletCorruptDevice] = useState(0);
  const [rndToilet, setRndToilet] = useState(0);
  const [toiletBreakerType, setToiletBreakerType] = useState("black");
  const [isToiletBreaker, setIsToiletBreaker] = useState("");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("state"));
    setGroundFloorTrial(items);
  }, []);

  // useEffect(() => {
  //   setRndToilet(Math.floor(Math.random() * 2) + 1);
  // }, []);

  // useEffect(() => {
  //   setToiletCorruptDevice(rndToilet);
  // }, [rndToilet]);

  const isHurray = useSelector((state) => state.HurrayReducer.hurry);

  return (
    <>
      <div className="error-page">
        <ErrorPage />
      </div>
      <div className="container-fluid m-0 main-groundFloor-div">
        {isHurray ? (
          <Confetti
            numberOfPieces={1000}
            height={"1000px"}
            width={"3000px"}
            gravity={2}
          />
        ) : (
          ""
        )}
        <div className="row" style={{ height: "100vh" }}>
          <div className="col-lg-2 navbar-background">
            <RightNavBar
              groundFloorTrial={groundFloorTrial}
              setGroundFloorTrial={setGroundFloorTrial}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              //Toilet states
              meterType={meterType}
              // hall states ..........
              hallLamp={props.hallLamp}
              setHallLamp={props.setHallLamp}
              hallLight01={props.hallLight01}
              setHallLight01={props.setHallLight01}
              hallLight02={props.hallLight02}
              setHallLight02={props.setHallLight02}
              // Toilet states ...........
              setToiletFan={props.setToiletFan}
              setToiletLight={props.setToiletLight}
              toiletFan={props.toiletFan}
              toiletLight={props.toiletLight}
              // living states ...........
              livingLight01={props.livingLight01}
              setLivingLight01={props.setLivingLight01}
              livingLight03={props.livingLight03}
              setLivingLight03={props.setLivingLight03}
              livingAC={props.livingAC}
              setLivingAC={props.setLivingAC}
              livingRadio={props.livingRadio}
              setLivingRadio={props.setLivingRadio}
              setMeterType={setMeterType}
              groupGroundFloor={groupGroundFloor}
              setGroupGroundFloor={setGroupGroundFloor}
              breaker={breaker}
              setBreaker={setBreaker}
              rndToilet={rndToilet}
              toiletCorruptDevice={toiletCorruptDevice}
              toiletBreakerType={toiletBreakerType}
              setToiletBreakerType={setToiletBreakerType}
              setIsToiletBreaker={setIsToiletBreaker}
              isToiletBreaker={isToiletBreaker}
              completeRnd={props.rndAll}
              completeCorruptDevice={props.allCorruptDevice}
              setCompleteCorruptDevice={props.setAllCorruptDevice}
              // firstGroupBreakerType={props.firstGroupBreakerType}
              // setFirstGroupBreakerType={props.setFirstGroupBreakerType}
              // isFirstGroupBreaker={props.isFirstGroupBreaker}
              // setIsFirstGroupBreaker={props.setIsFirstGroupBreaker}

              firstGroupBreakerType={props.firstGroupBreakerType}
              setFirstGroupBreakerType={props.setFirstGroupBreakerType}
              isFirstGroupBreaker={props.isFirstGroupBreaker}
              setIsFirstGroupBreaker={props.setIsFirstGroupBreaker}
              //kitchen
              kitchenBreakerType={props.kitchenBreakerType}
              setKitchenBreakerType={props.setKitchenBreakerType}
              isKitchenBreaker={props.isKitchenBreaker}
              setIsKitchenBreaker={props.setIsKitchenBreaker}
              //group three
              groupThreeBreakerType={props.groupThreeBreakerType}
              setGroupThreeBreakerType={props.setGroupThreeBreakerType}
              isGroupThreeBreaker={props.isGroupThreeBreaker}
              setIsGroupThreeBreaker={props.setIsGroupThreeBreaker}
              //group four
              setGroupFourBreakerType={props.setGroupFourBreakerType}
              groupFourBreakerType={props.groupFourBreakerType}
              setIsGroupFourBreaker={props.setIsGroupFourBreaker}
              isGroupFourBreaker={props.isGroupFourBreaker}
              //group five
              groupFiveBreakerType={props.groupFiveBreakerType}
              setgroupFiveBreakerType={props.setgroupFiveBreakerType}
              isGroupFiveBreaker={props.isGroupFiveBreaker}
              setIsGroupFiveBreaker={props.setIsGroupFiveBreaker}
              //laundry
              laundaryBreakerType={props.laundaryBreakerType}
              setLaundaryBreakerType={props.setLaundaryBreakerType}
              isLaundaryBreaker={props.isLaundaryBreaker}
              setIsLaundaryBreaker={props.setIsLaundaryBreaker}
              wholeCorruptDevice={props.wholeCorruptDevice}
            />
          </div>
          <div
            className="col-lg-10"
            style={{ background: "#B33759", height: "100vh" }}
          >
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12 " style={{ height: "100vh" }}>
                  <Toilet
                    rndToilet={rndToilet}
                    setToiletFan={props.setToiletFan}
                    toiletFan={props.toiletFan}
                    toiletLight={props.toiletLight}
                    setToiletLight={props.setToiletLight}
                    setToiletCorruptDevice={setToiletCorruptDevice}
                    setToiletBreakerType={setToiletBreakerType}
                    setIsToiletBreaker={setIsToiletBreaker}
                    isToiletBreaker={isToiletBreaker}
                    groundFloorTrial={groundFloorTrial}
                    setGroundFloorTrial={setGroundFloorTrial}
                    setBreaker={setBreaker}
                    toiletBreakerType={toiletBreakerType}
                    completeRnd={props.rndAll}
                    completeCorruptDevice={props.allCorruptDevice}
                    setCompleteCorruptDevice={props.setAllCorruptDevice}
                    firstGroupBreakerType={props.firstGroupBreakerType}
                    setFirstGroupBreakerType={props.setFirstGroupBreakerType}
                    isFirstGroupBreaker={props.isFirstGroupBreaker}
                    setIsFirstGroupBreaker={props.setIsFirstGroupBreaker}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToiletIndex;
