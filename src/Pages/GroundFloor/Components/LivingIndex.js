import React from "react";
import { useState, useEffect } from "react";
import LivingRoom from "./LivingRoom";
import RightNavBar from "./RightNavBar";
import "../../GroundFloor/index.css";
import ErrorPage from "../../404/ErrorPage";
import Confetti from "react-confetti";
import { useSelector } from "react-redux";

const LivingIndex = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groundFloorTrial, setGroundFloorTrial] = useState(-3);

  // Right navbar states and functions......................................
  const [meterType, setMeterType] = useState("meterBoardClose");
  const [groupGroundFloor, setGroupGroundFloor] = useState("");
  const [breaker, setBreaker] = useState("");

  // LivingRoom section code ...................................................
  // const [livingLight01, setLivingLight01] = useState("connected");
  // const [livingLight02, setLivingLight02] = useState("connected");
  // const [livingLight03, setLivingLight03] = useState("connected");
  // const [livingAC, setLivingAC] = useState("connected");
  // const [livingRadio, setLivingRadio] = useState('connected')

  const [livingCorruptDevice, setLivingCorruptDevice] = useState(0);
  const [rndLiving, setRndLiving] = useState(0);
  const [livingBreakerType, setLivingBreakerType] = useState("black");
  const [islivingBreaker, setIsLivingBreaker] = useState("");

  // useEffect(() => {
  //   setRndLiving(Math.floor(Math.random() * 4) + 1);
  // }, []);

  // useEffect(() => {
  //   setLivingCorruptDevice(rndLiving);
  // }, [rndLiving]);

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
              breaker={breaker}
              setBreaker={setBreaker}
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
              // living Room states
              // livingLight01={props.livingLight01}
              // setLivingLight01={props.setLivingLight01}
              // livingLight03={props.livingLight03}
              // setLivingLight03={props.setLivingLight03}
              // livingAC={props.livingAC}
              // setLivingAC={props.setLivingAC}
              // livingRadio={props.livingRadio}
              // setLivingRadio={props.setLivingRadio}
              livingCorruptDevice={livingCorruptDevice}
              setLivingCorruptDevice={setLivingCorruptDevice}
              rndLiving={rndLiving}
              livingBreakerType={livingBreakerType}
              setLivingBreakerType={setLivingBreakerType}
              islivingBreaker={islivingBreaker}
              setIsLivingBreaker={setIsLivingBreaker}
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
            style={{ background: "#B33759", height: "100uh" }}
          >
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12 " style={{ height: "100vh" }}>
                  <LivingRoom
                    setBreaker={setBreaker}
                    groundFloorTrial={groundFloorTrial}
                    setGroundFloorTrial={setGroundFloorTrial}
                    livingLight01={props.livingLight01}
                    setLivingLight01={props.setLivingLight01}
                    livingLight03={props.livingLight03}
                    setLivingLight03={props.setLivingLight03}
                    livingAC={props.livingAC}
                    setLivingAC={props.setLivingAC}
                    livingRadio={props.livingRadio}
                    setLivingRadio={props.setLivingRadio}
                    livingCorruptDevice={livingCorruptDevice}
                    setLivingCorruptDevice={setLivingCorruptDevice}
                    rndLiving={rndLiving}
                    livingBreakerType={livingBreakerType}
                    setLivingBreakerType={setLivingBreakerType}
                    islivingBreaker={islivingBreaker}
                    setIsLivingBreaker={setIsLivingBreaker}
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

export default LivingIndex;
