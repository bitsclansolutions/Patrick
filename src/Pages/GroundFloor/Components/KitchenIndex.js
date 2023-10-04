import React from "react";
import { useState, useEffect } from "react";
import Toilet from "./Toilet";
// import Toilet from "./Toilet";
import Hall from "./Hall";
import LivingRoom from "./LivingRoom";
import RightNavBar from "./RightNavBar";
import Kitchen from "./Kitchen";
import "../../GroundFloor/index.css";
import ErrorPage from "../../404/ErrorPage";
import Confetti from "react-confetti";
import { useSelector } from "react-redux";
import FrontScreenModel from "../../../PopUpModels/FirstFloorModel";
import GroundFloorModel from "../../../PopUpModels/GroundFloorModel";

const KitchenIndex = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groundFloorTrial, setGroundFloorTrial] = useState(0);
  // Right navbar states and functions.....................................
  const [meterType, setMeterType] = useState("meterBoardClose");
  const [groupGroundFloor, setGroupGroundFloor] = useState("");
  const [breaker, setBreaker] = useState("");

  // Kitchen Section Code ..................................................
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const isHurray = useSelector((state) => state.HurrayReducer.hurry);

  console.log(props.rndKitchen);
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
              // completeRnd={props.rndAll}
              // completeCorruptDevice={props.allCorruptDevice}
              // setCompleteCorruptDevice={props.setAllCorruptDevice}

              kitchenCorruptDevice={props.kitchenCorruptDevice}
              setKitchenCorruptDevice={props.setKitchenCorruptDevice}
              rndKitchen={props.rndKitchen}
              // setRndKitchen={setRndKitchen}
              // kitchenBreakerType={props.kitchenBreakerType}
              // setKitchenBreakerType={props.setKitchenBreakerType}
              // isKitchenBreaker={props.isKitchenBreaker}
              // setIsKitchenBreaker={props.setIsKitchenBreaker}

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
                <div className="col-lg-12" style={{ height: "100vh" }}>
                  <Kitchen
                    setBreaker={setBreaker}
                    groundFloorTrial={groundFloorTrial}
                    setGroundFloorTrial={setGroundFloorTrial}
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
                    kitchenCorruptDevice={props.kitchenCorruptDevice}
                    setKitchenCorruptDevice={props.setKitchenCorruptDevice}
                    rndKitchen={props.rndKitchen}
                    // setRndKitchen={setRndKitchen}
                    kitchenBreakerType={props.kitchenBreakerType}
                    setKitchenBreakerType={props.setKitchenBreakerType}
                    isKitchenBreaker={props.isKitchenBreaker}
                    setIsKitchenBreaker={props.setIsKitchenBreaker}
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

export default KitchenIndex;
