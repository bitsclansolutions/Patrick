import React from "react";
import "../index.css";
import { useState, useEffect } from "react";
import ErrorPage from "../../404/ErrorPage";
import RightNavBar from "../../GroundFloor/Components/RightNavBar";
import SecondRightNavBar from "./RightNavBar/SecondRightNavBar";
import LivingRoomTwo from "./LivingRoomTwo/LivingRoomTwo";
import LivingRoomOne from "./LivingRoomOne/LivingRoomOne";
import ToiletFirstFloor from "./ToiletFirstFloor/ToiletFirstFloor";
import BedRoomFirstFloor from "./BedRoomFirstFloor/BedRoomFirstFloor";
import HallFirstFloor from "./HallFirstFloor/HallFirstFloor";
import Confetti from "react-confetti";
import { useSelector } from "react-redux";
import FirstFloorModel from "../../../PopUpModels/FirstFloorModel";

const BedRoomIndex = (props) => {
  const [firstFloorTrial, setFirstFloorTrial] = useState(-5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  // Right navbar states and functions......................................
  const [meterType, setMeterType] = useState("meterBoardClose");
  const [groupFirstFloor, setGroupFirstFloor] = useState("");
  const [breaker, setBreaker] = useState("");
  const [gamePhase, setGamePhase] = useState("");
  const [gamePhaseGroup4, setGamePhaseGroup4] = useState("livingRoom");
  const [showFirstFloor, setshowFirstFloor] = useState(false);

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
          <div className="col-lg-2 navbar-background2">
            <RightNavBar
              // navbar .............................
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              firstFloorTrial={firstFloorTrial}
              setFirstFloorTrial={setFirstFloorTrial}
              meterType={meterType}
              setMeterType={setMeterType}
              breaker={breaker}
              setBreaker={setBreaker}
              setGamePhase={setGamePhase}
              gamePhase={gamePhase}
              groupFirstFloor={groupFirstFloor}
              setGroupFirstFloor={setGroupFirstFloor}
              gamePhaseGroup4={gamePhaseGroup4}
              setGamePhaseGroup4={setGamePhaseGroup4}
              // Toilet
              setToiletFan={props.setToiletFan}
              toiletFan={props.toiletFan}
              setToiletLight={props.setToiletLight}
              toiletLight={props.toiletLight}
              setToiletLight02={props.setToiletLight02}
              toiletLight02={props.toiletLight02}
              setToiletLight03={props.setToiletLight03}
              toiletLight03={props.toiletLight03}
              //bedroom ...................
              livingLight01={props.livingLight01}
              setLivingLight01={props.setLivingLight01}
              livingLight02={props.livingLight02}
              setLivingLight02={props.setLivingLight02}
              livingSilingFan={props.livingSilingFan}
              setLivingSilingFan={props.setLivingSilingFan}
              // hall
              hallLedTv={props.hallLedTv}
              setHallLedTv={props.setHallLedTv}
              hallLight01={props.hallLight01}
              setHallLight01={props.setHallLight01}
              hallLight02={props.hallLight02}
              setHallLight02={props.setHallLight02}
              rndGroupFour={props.rndGroupFour}
              setGroupFourCorruptDevice={props.setGroupFourCorruptDevice}
              groupFourCorruptDevice={props.groupFourCorruptDevice}
              // setGroupFourBreakerType={props.setGroupFourBreakerType}
              // groupFourBreakerType={props.groupFourBreakerType}
              // setIsGroupFourBreaker={props.setIsGroupFourBreaker}
              // isGroupFourBreaker={props.isGroupFourBreaker}

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
              <>
                <div className="row ">
                  <div className="col-lg-12 " style={{ height: "100vh" }}>
                    <BedRoomFirstFloor
                      gamePhaseGroup4={gamePhaseGroup4}
                      setGamePhaseGroup4={setGamePhaseGroup4}
                      firstFloorTrial={firstFloorTrial}
                      setFirstFloorTrial={setFirstFloorTrial}
                      meterType={meterType}
                      setMeterType={setMeterType}
                      breaker={breaker}
                      setBreaker={setBreaker}
                      setGamePhase={setGamePhase}
                      gamePhase={gamePhase}
                      groupFirstFloor={groupFirstFloor}
                      setGroupFirstFloor={setGroupFirstFloor}
                      //bedroom ...................
                      livingLight01={props.livingLight01}
                      setLivingLight01={props.setLivingLight01}
                      livingLight02={props.livingLight02}
                      setLivingLight02={props.setLivingLight02}
                      livingSilingFan={props.livingSilingFan}
                      setLivingSilingFan={props.setLivingSilingFan}
                      rndGroupFour={props.rndGroupFour}
                      setGroupFourCorruptDevice={
                        props.setGroupFourCorruptDevice
                      }
                      groupFourCorruptDevice={props.groupFourCorruptDevice}
                      setGroupFourBreakerType={props.setGroupFourBreakerType}
                      groupFourBreakerType={props.groupFourBreakerType}
                      setIsGroupFourBreaker={props.setIsGroupFourBreaker}
                      isGroupFourBreaker={props.isGroupFourBreaker}
                    />
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BedRoomIndex;
