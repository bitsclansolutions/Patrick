import React from "react";
import { useState, useEffect } from "react";
import "../index.css";
import ErrorPage from "../../404/ErrorPage";
import ThirdRightNavBar from "./ThirdRightNavBar/ThirdRightNavBar";
import RightNavBar from "../../GroundFloor/Components/RightNavBar";
import StudyRoom from "./StudyRoom/StudyRoom";
import GuestRoom from "./GuestRoom/GuestRoom";
import HallAttic from "./HallAttic/HallAttic";
import StoreRoom from "./StoreRoom/StoreRoom";
import Laundary from "./Laundary/laundary";
import Confetti from "react-confetti";
import { useSelector } from "react-redux";
import AtticModel from "../../../PopUpModels/AtticModel";

const GuestRoomIndexAttic = (props) => {
  console.log("Hello Hamza " + props.rndGroupFive);
  const [atticTrial, setAtticTrial] = useState(-5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  // Right navbar states and functions......................................
  const [meterType, setMeterType] = useState("meterBoardClose");
  const [groupAttic, setGroupAttic] = useState("");
  const [breaker, setBreaker] = useState("");
  const [gamePhase, setGamePhase] = useState("GuestRoom");

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
        ) : null}
        <div className="row" style={{ height: "100vh" }}>
          <div className="col-lg-2 navbar-background3">
            <RightNavBar
              isModalOpen1={isModalOpen1}
              setIsModalOpen1={setIsModalOpen1}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              // navbar .............................
              atticTrial={atticTrial}
              setAtticTrial={setAtticTrial}
              meterType={meterType}
              setMeterType={setMeterType}
              breaker={breaker}
              setBreaker={setBreaker}
              setGamePhase={setGamePhase}
              gamePhase={gamePhase}
              groupAttic={groupAttic}
              setGroupAttic={setGroupAttic}
              // hall
              hallLampFive={props.hallLampFive}
              setHallLampFive={props.setHallLampFive}
              hallLight01Five={props.hallLight01Five}
              setHallLight01Five={props.setHallLight01Five}
              hallLight02Five={props.hallLight02Five}
              setHallLight02Five={props.setHallLight02Five}
              // guest room
              setGuestLamp={props.setGuestLamp}
              guestLamp={props.guestLamp}
              setGuestRadio={props.setGuestRadio}
              guestRadio={props.guestRadio}
              setGuestFan={props.setGuestFan}
              guestFan={props.guestFan}
              setGuestLED={props.setGuestLED}
              guestLED={props.guestLED}
              // study room
              studyLamp={props.studyLamp}
              setStudyLamp={props.setStudyLamp}
              studyLamp02={props.studyLamp02}
              setStudyLamp02={props.setStudyLamp02}
              // store
              livingOneLignt01={props.livingOneLignt01}
              setLivingOneLignt01={props.setLivingOneLignt01}
              livingOneLignt02={props.livingOneLignt02}
              setLivingOneLignt02={props.setLivingOneLignt02}
              livingOneLignt03={props.livingOneLignt03}
              setLivingOneLignt03={props.setLivingOneLignt03}
              groupFiveCorruptDevice={props.groupFiveCorruptDevice}
              setGroupFiveCorruptDevice={props.setGroupFiveCorruptDevice}
              rndGroupFive={props.rndGroupFive}
              // groupFiveBreakerType={props.groupFiveBreakerType}
              // setgroupFiveBreakerType={props.setgroupFiveBreakerType}
              // isGroupFiveBreaker={props.isGroupFiveBreaker}
              // setIsGroupFiveBreaker={props.setIsGroupFiveBreaker}

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
                  <GuestRoom
                    atticTrial={atticTrial}
                    setAtticTrial={setAtticTrial}
                    meterType={meterType}
                    setMeterType={setMeterType}
                    breaker={breaker}
                    setBreaker={setBreaker}
                    setGamePhase={setGamePhase}
                    gamePhase={gamePhase}
                    groupAttic={groupAttic}
                    setGroupAttic={setGroupAttic}
                    // guest room
                    setGuestLamp={props.setGuestLamp}
                    guestLamp={props.guestLamp}
                    setGuestRadio={props.setGuestRadio}
                    guestRadio={props.guestRadio}
                    setGuestFan={props.setGuestFan}
                    guestFan={props.guestFan}
                    setGuestLED={props.setGuestLED}
                    guestLED={props.guestLED}
                    groupFiveCorruptDevice={props.groupFiveCorruptDevice}
                    setGroupFiveCorruptDevice={props.setGroupFiveCorruptDevice}
                    rndGroupFive={props.rndGroupFive}
                    groupFiveBreakerType={props.groupFiveBreakerType}
                    setgroupFiveBreakerType={props.setgroupFiveBreakerType}
                    isGroupFiveBreaker={props.isGroupFiveBreaker}
                    setIsGroupFiveBreaker={props.setIsGroupFiveBreaker}
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

export default GuestRoomIndexAttic;
