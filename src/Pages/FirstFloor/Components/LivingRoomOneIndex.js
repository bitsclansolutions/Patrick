import React from "react";
import "../index.css";
import { useState, useEffect } from "react";
import ErrorPage from "../../404/ErrorPage";
import SecondRightNavBar from "./RightNavBar/SecondRightNavBar";
import LivingRoomTwo from "./LivingRoomTwo/LivingRoomTwo";
import LivingRoomOne from "./LivingRoomOne/LivingRoomOne";
import ToiletFirstFloor from "./ToiletFirstFloor/ToiletFirstFloor";
import BedRoomFirstFloor from "./BedRoomFirstFloor/BedRoomFirstFloor";
import HallFirstFloor from "./HallFirstFloor/HallFirstFloor";
import Confetti from "react-confetti";
import { useSelector } from "react-redux";
import RightNavBar from "../../GroundFloor/Components/RightNavBar";
import FirstFloorModel from "../../../PopUpModels/FirstFloorModel";

const LivingRoomOneIndex = (props) => {
  const [firstFloorTrial, setFirstFloorTrial] = useState(-5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  // Right navbar states and functions......................................
  const [meterType, setMeterType] = useState("meterBoardClose");
  const [groupFirstFloor, setGroupFirstFloor] = useState("");
  const [breaker, setBreaker] = useState("");
  const [gamePhase, setGamePhase] = useState("livingOne");
  const [gamePhaseGroup4, setGamePhaseGroup4] = useState("hall");
  const [showFirstFloor, setshowFirstFloor] = useState(false);

  // const [livingOneCorruptDevice, setLivingOneCorruptDevice] = useState(0);
  // const [rndLivingOne, setRndLivingOne] = useState(0);

  // const [livingOneBreakerType, setLivingOneBreakerType] = useState("black");
  // const [isLivingOneBreaker, setIsLivingOneBreaker] = useState("");
  // useEffect(() => {
  //   setRndLivingOne(Math.floor(Math.random() * 5) + 1);
  // }, []);
  // useEffect(()=>{

  //   const items = JSON.parse(localStorage.getItem('state-first'));
  //   setFirstFloorTrial(items)
  // }, []);

  // useEffect(() => {
  //   setLivingOneCorruptDevice(rndLivingOne);

  //   // console.log("first floor 2");

  // }, [rndLivingOne]);

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
              // livingone .............................
              livingOneLignt01={props.livingOneLignt01}
              setLivingOneLignt01={props.setLivingOneLignt01}
              livingOneLignt02={props.livingOneLignt02}
              setLivingOneLignt02={props.setLivingOneLignt02}
              livingOneLignt03={props.livingOneLignt03}
              setLivingOneLignt03={props.setLivingOneLignt03}
              livingOneFan={props.livingOneFan}
              setLivingOneFan={props.setLivingOneFan}
              livingOneTV={props.livingOneTV}
              setLivingOneTV={props.setLivingOneTV}
              // living two
              livingTwoLignt01={props.livingTwoLignt01}
              setLivingTwoLignt01={props.setLivingTwoLignt01}
              livingTwoLignt02={props.livingTwoLignt02}
              setLivingTwoLignt02={props.setLivingTwoLignt02}
              livingTwoSmallLamp={props.livingTwoSmallLamp}
              setLivingTwoSmallLamp={props.setLivingTwoSmallLamp}
              livingTwoFan={props.livingTwoFan}
              setLivingTwoFan={props.setLivingTwoFan}
              groupThreeCorruptDevice={props.groupThreeCorruptDevice}
              setGroupThreeCorruptDevice={props.setGroupThreeCorruptDevice}
              rndGroupThree={props.rndGroupThree}
              setRndGroupThree={props.setRndGroupThree}
              // groupThreeBreakerType={props.groupThreeBreakerType}
              // setGroupThreeBreakerType={props.setGroupThreeBreakerType}
              // isGroupThreeBreaker={props.isGroupThreeBreaker}
              // setIsGroupThreeBreaker={props.setIsGroupThreeBreaker}

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
                    <LivingRoomOne
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
                      // living one
                      livingOneLignt01={props.livingOneLignt01}
                      setLivingOneLignt01={props.setLivingOneLignt01}
                      livingOneLignt02={props.livingOneLignt02}
                      setLivingOneLignt02={props.setLivingOneLignt02}
                      livingOneLignt03={props.livingOneLignt03}
                      setLivingOneLignt03={props.setLivingOneLignt03}
                      livingOneFan={props.livingOneFan}
                      setLivingOneFan={props.setLivingOneFan}
                      livingOneTV={props.livingOneTV}
                      setLivingOneTV={props.setLivingOneTV}
                      groupThreeCorruptDevice={props.groupThreeCorruptDevice}
                      setGroupThreeCorruptDevice={
                        props.setGroupThreeCorruptDevice
                      }
                      rndGroupThree={props.rndGroupThree}
                      setRndGroupThree={props.setRndGroupThree}
                      groupThreeBreakerType={props.groupThreeBreakerType}
                      setGroupThreeBreakerType={props.setGroupThreeBreakerType}
                      isGroupThreeBreaker={props.isGroupThreeBreaker}
                      setIsGroupThreeBreaker={props.setIsGroupThreeBreaker}
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

export default LivingRoomOneIndex;
