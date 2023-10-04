import React from "react";
import { useState, useEffect } from "react";
import Hall from "./Components/Hall";
import RightNavBar from "./Components/RightNavBar";
import "./index.css";
import ErrorPage from "../404/ErrorPage";
import Confetti from "react-confetti";
import { useSelector } from "react-redux";
import GroundFloorModel from "../../PopUpModels/GroundFloorModel";

const GroundFloor = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groundFloorTrial, setGroundFloorTrial] = useState(-4);

  // Right navbar states and functions......................................
  const [meterType, setMeterType] = useState("meterBoardClose");
  const [groupGroundFloor, setGroupGroundFloor] = useState("");
  const [breaker, setBreaker] = useState("");

  // Hall section code ...................................................
  // const [hallLight01, setHallLight01] = useState("connected");
  // const [hallLight02, setHallLight02] = useState("connected");
  // const [hallLedTv, setHallLedTv] = useState("connected");
  // const [hallPadestal, sethallPadestal] = useState("connected");
  // const [hallLamp, setHallLamp] = useState("connected");

  const [hallCorruptDevice, setHallCorruptDevice] = useState(0);
  const [rndHall, setRndHall] = useState(0);
  const [hallBreakerType, setHallBreakerType] = useState("black");
  const [isHallBreaker, setIsHallBreaker] = useState("");

  // useEffect(() => {
  //   setRndHall(Math.floor(Math.random() * 3) + 1);
  // }, []);
  // useEffect(() => {
  //   setHallCorruptDevice(rndHall);
  // }, [rndHall]);

  // Kitchen Section Code ..............................................................
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const isHurray = useSelector((state) => state.HurrayReducer.hurry);
  return (
    <>
      {/* <div style={{ display: "none" }}>
        <GroundFloorModel
          setIsModalOpen2={setIsModalOpen2}
          isModalOpen2={isModalOpen2}
        />
      </div> */}

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
              setMeterType={setMeterType}
              groupGroundFloor={groupGroundFloor}
              setGroupGroundFloor={setGroupGroundFloor}
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
              completeRnd={props.rndAll}
              completeCorruptDevice={props.allCorruptDevice}
              setCompleteCorruptDevice={props.setAllCorruptDevice}
              // kitchen states ..........
              kitchenLight01={props.kitchenLight01}
              setKitchenLight01={props.setKitchenLight01}
              kitchenLight02={props.kitchenLight02}
              setKitchenLight02={props.setKitchenLight02}
              kitchenLight03={props.kitchenLight03}
              setKitchenLight03={props.setKitchenLight03}
              kitchenMixture={props.kitchenMixture}
              setKitchenMixture={props.setKitchenMixture}
              kitchenOven={props.kitchenOven}
              setKitchenOven={props.setKitchenOven}
              kitchenToster={props.kitchenToster}
              setKitchenToster={props.setKitchenToster}
              // kitchenCorruptDevice={props.kitchenCorruptDevice}
              // setKitchenCorruptDevice={props.setKitchenCorruptDevice}
              // rndKitchen={props.rndKitchen}

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
                  <Hall
                    setBreaker={setBreaker}
                    hallLamp={props.hallLamp}
                    setHallLamp={props.setHallLamp}
                    hallLight01={props.hallLight01}
                    setHallLight01={props.setHallLight01}
                    hallLight02={props.hallLight02}
                    setHallLight02={props.setHallLight02}
                    hallCorruptDevice={hallCorruptDevice}
                    setHallCorruptDevice={setHallCorruptDevice}
                    rndHall={rndHall}
                    groundFloorTrial={groundFloorTrial}
                    setGroundFloorTrial={setGroundFloorTrial}
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

export default GroundFloor;
