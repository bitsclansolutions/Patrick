import React from "react";
import Meter from "../images/Meter.png";
import meterGroup from "../images/meterGroup.png";
import breakerOffIMG from "../images/breakerOffIMG.png";
import breakerOnIMG from "../images/breakerOnIMG.png";
import beep from "../SoundEffects/beep.mp3";
import hurray from "../SoundEffects/hurray.wav";
import { useEffect } from "react";
import "./RightNavBar.css";
import useSound from "use-sound";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "antd/dist/antd.css";
import ResultModel from "../../Components/ResultModel";
import Avator from "../../Components/Avator";
import { useDispatch, useSelector } from "react-redux";
import { SwalResult, SwalTest } from "../../Components/SwalModules";
import {
  addDisconnectDevice,
  changeLanguage,
  corruptBreakerAttemptedHandler,
  increaseCouter,
  isHurray,
  kitchenBreaker,
  resetCouter,
  resultGroundFloor,
  setExercise,
  setExerciseGate,
} from "../../../Redux/Action";
import { useState } from "react";
import FrontScreenModel from "../../Components/FrontScreenModel";
import AtticModel from "../../../PopUpModels/AtticModel";
import FirstFloorModel from "../../../PopUpModels/FirstFloorModel";
import GroundFloorModel from "../../../PopUpModels/GroundFloorModel";
import { Link } from "react-router-dom";
import {
  SwalHurray,
  SwalBreakerOn,
  SwalInitial,
  SwalDisconnectedCorrupt,
  FinishSwal,
} from "../../Components/SwalModules";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import {
  breakerOnDutch,
  breakerOnEnglish,
  initialDutch,
  initialEnglish,
} from "../../../utils/translation";
import ChangeLanguageToggle from "../../../utils/ChangeLanguageToggle";

const RightNavBar = (props) => {
  const { id } = useParams();
  const [breaker1, setBreaker1] = useState(true);
  const [breaker2, setBreaker2] = useState(true);
  const [breaker3, setBreaker3] = useState(true);
  const [breaker4, setBreaker4] = useState(true);
  const [breaker5, setBreaker5] = useState(true);
  const [breaker6, setBreaker6] = useState(true);

  const [breakers, setBreakers] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  console.log(props.all);

  const corruptDevice = useSelector(
    (state) => state.CorruptDeviceReducer.corrupt
  );
  console.log(corruptDevice);
  const corruptGroupDevices = useSelector(
    (state) => state.GroupDevicesCounterReducer.corruptGroupDisconnected
  );
  const correctGroupDevices = useSelector(
    (state) => state.GroupDevicesCounterReducer.correctGroupDisconnected
  );

  const corruptAttemptedDevices = useSelector(
    (state) => state.GroupDevicesCounterReducer.corruptGroupError
  );
  const correctAttemptedDevices = useSelector(
    (state) => state.GroupDevicesCounterReducer.correctGroupError
  );
  const corruptGroup = useSelector(
    (state) => state.corruptGroupReducer.corruptGroup
  );

  const exerciseNumber = useSelector((state) => state.ExerciseReducer.exercise);

  useEffect(() => {
    // if (corruptGroup === 1) {
    //   setBreaker1(false);
    // } else if (corruptGroup === 2) {
    //   setBreaker2(false);
    // } else if (corruptGroup === 3) {
    //   setBreaker3(false);
    // } else if (corruptGroup === 4) {
    //   setBreaker4(false);
    // } else if (corruptGroup === 5) {
    //   setBreaker5(false);
    // } else if (corruptGroup === 6) {
    //   setBreaker6(false);
    // }
    console.log(corruptGroup);
    console.log(breakers[corruptGroup - 1]);
    const newBreakers = [...breakers];
    newBreakers[corruptGroup - 1] = false;
    setBreakers(newBreakers);
  }, [corruptGroup]);

  console.log(corruptGroupDevices, correctGroupDevices);
  console.log(breakers);

  // console.log(total, 'total');
  const counter = useSelector((state) => state.CounterReducer.count);
  const deviceCounter = useSelector(
    (state) => state.CounterRemainingDevicesReducer.count
  );

  const allDisconnectedDevices = useSelector(
    (state) => state.allDisconnectedDevices.devices
  );

  console.log(deviceCounter);
  console.log(counter);

  // console.log(counter + " redux counter");

  const [isDutch, setIsDutch] = useState(true);
  const counterDevice = useSelector(
    (state) => state.CounterDeviceReducer.count
  );

  console.log(props.randAll);
  // console.log(counterDevice + " redux device counter");
  const isDutchLocal = useSelector(
    (state) => state.ChangeLanguageReducer.isDutch
  );

  const disconnectedDevices = useSelector(
    (state) => state.CounterRemainingDevicesReducer.count
  );

  const showFinishBtn = useSelector((state) => state.ShowFinishReducer.show);
  console.log(showFinishBtn);
  let popupText;
  if (!showFinishBtn && exerciseNumber === 2) {
    popupText = isDutchLocal
      ? ` <ul style="textAlign: left">
        <li>Je hebt het defecte apparaat nog niet losgekoppeld.</li>
        <li>Zoek eerst het defecte apparaat.</li>
      </ul>`
      : ` <ul style = {{textAlign: "left"}}>
        <li>You have not yet disconnected the defective device.</li>
        <li>First find the faulty device.</li>
      </ul>`;
  }
  if (!showFinishBtn && exerciseNumber === 3) {
    popupText = isDutchLocal
      ? "Je hebt het defecte apparaat nog niet losgekoppeld. <br/> Wil je toch doorgaan?"
      : "You have not disconnected the corrupt device, Do you still want to finish?";
  } else if (
    showFinishBtn &&
    exerciseNumber === 2 &&
    (corruptGroupDevices > 1 || correctGroupDevices > 0)
  ) {
    popupText = isDutchLocal
      ? `Je bent vergeten ${
          corruptGroupDevices - 1 + correctGroupDevices
        } juiste ${
          corruptGroupDevices > 2 ? "apparaten" : "apparaat"
        }  die niet defect zijn aan te sluiten.`
      : `You forgot to connect ${
          corruptGroupDevices - 1 + correctGroupDevices
        } correct ${corruptGroupDevices > 2 ? "devices" : "device"}`;
  } else if (
    showFinishBtn &&
    corruptGroupDevices > 1 &&
    correctGroupDevices === 0
  ) {
    popupText = isDutchLocal
      ? `Je bent vergeten de ${corruptGroupDevices - 1} juiste ${
          corruptGroupDevices > 2 ? "apparaten" : "apparaat"
        } van de gehandicaptengroep aan te sluiten.`
      : `You forgot to connect ${corruptGroupDevices - 1} correct ${
          corruptGroupDevices > 2 ? "devices" : "device"
        } of the disabled group.`;
  } else if (
    showFinishBtn &&
    corruptGroupDevices === 1 &&
    correctGroupDevices > 0
  ) {
    popupText = isDutchLocal
      ? `Je bent vergeten ${correctGroupDevices} juiste ${
          correctGroupDevices > 1 ? "apparaten" : "apparaat"
        } van een andere groep aan te sluiten.`
      : `You forgot to connect ${correctGroupDevices} correct ${
          correctGroupDevices > 1 ? "devices" : "device"
        } of another group.`;
  } else if (
    showFinishBtn &&
    corruptGroupDevices > 1 &&
    correctGroupDevices > 0
  ) {
    popupText = isDutchLocal
      ? `Je bent vergeten de ${
          correctGroupDevices + (corruptGroupDevices - 1)
        } juiste ${
          correctGroupDevices + (corruptGroupDevices - 1) > 1
            ? "apparaten"
            : "apparaat"
        } van verschillende groepen aan te sluiten. <br/> Wil je toch afronden?`
      : `You forgot to connect ${
          correctGroupDevices + (corruptGroupDevices - 1)
        } correct ${
          correctGroupDevices + (corruptGroupDevices - 1) > 1
            ? "devices"
            : "device"
        } of different groups, Do you still want to finish?`;
  }
  const sureText = isDutchLocal
    ? exerciseNumber === 2
      ? !showFinishBtn || corruptGroupDevices - 1 + correctGroupDevices
        ? "Je kunt het spel nog niet afronden!"
        : "Weet je zeker dat je het spel wilt Afronden?"
      : "Weet je zeker dat je het spel wilt Afronden?"
    : exerciseNumber === 2
    ? "Are you sure you want to finish the game?"
    : "Are you sure you want to finish the game?";
  // const counter = useSelector((state) => state.CounterReducer.count);
  // console.log(counter + " redux counter");

  // const counterDevice = useSelector(
  //   (state) => state.CounterDeviceReducer.count
  // );
  // console.log(counterDevice + " redux device counter");

  // const disconnectedDevices = useSelector(
  //   (state) => state.CounterRemainingDevicesReducer.count
  // );
  // console.log(disconnectedDevices + " Disconnected Device numbers");

  // useEffect(() => {
  //   dispatch(resetCouter());
  // }, []);

  // console.log(id);
  const dispatch = useDispatch();
  const dispatchCounter = useDispatch();
  let navigate = useNavigate();
  const location = useLocation().pathname;

  // console.log(location);

  const [showAttic, setShowAttic] = useState(false);
  const [showFirstFloor, setshowFirstFloor] = useState(false);
  const [showGroundFloor, setshowGroundFloor] = useState(false);
  const [finishPopup, setFinishPopup] = useState(false);

  const [btnHover, setBtnHover] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [workAll, setWorkAll] = useState();
  // // TOTAL OF COUNTERS
  // const [breakerTotal, setBreakerTotal] = useState(10);
  // const [deviceTotal, setDeviceTotal] = useState(10);
  // const [remainingDevicesTotal, setRemainingDevicesTotal] = useState(48);

  // // FINDING PERCENTAGES OF BREAKERS, DEVICES AND REMAINING DEVICES

  // const wrongPerOfBreakerHit = (counter / breakerTotal) * 100;
  // const wrongPerOfDeviceHit = (counterDevice / deviceTotal) * 100;
  // const wrongPerOfRemainingDevices =
  //   (disconnectedDevices / remainingDevicesTotal) * 100;
  // //this is the average of wrong attempts
  // const avgOfWrongProgress =
  //   (wrongPerOfBreakerHit + wrongPerOfDeviceHit + wrongPerOfRemainingDevices) /
  //   3;
  // //now find the over all plus point of average in percentage
  // const totalAvgProgress = 100 - avgOfWrongProgress;

  // console.log("Total Avarage Progress of Game ", totalAvgProgress, "%");

  // const [counterBreaker, setCounterBreaker] = useState(0);

  const rand =
    props.completeRnd ||
    props.rndKitchen ||
    props.rndGroupThree ||
    props.rndGroupFour ||
    props.rndGroupFive ||
    props.rndLaundary;

  // toilet section breaker .......................................................................................
  const [beepSound] = useSound(beep);
  const [hurraySound] = useSound(hurray);

  const corruptBreakerAttempted = useSelector(
    (state) => state.CounterReducer.corruptBreakerAttempted
  );

  useEffect(() => {
    dispatch(isHurray(false));
  }, []);

  useEffect(() => {
    if (
      props.wholeCorruptDevice >= 1 &&
      props.wholeCorruptDevice <= 9 &&
      props.wholeCorruptDevice === rand
    ) {
      // 1
      props.setFirstGroupBreakerType("black");
      props.setIsFirstGroupBreaker(false);
    }
    if (
      props.wholeCorruptDevice >= 10 &&
      props.wholeCorruptDevice <= 15 &&
      props.wholeCorruptDevice === rand
    ) {
      // 2
      props.setKitchenBreakerType("black");
      props.setIsKitchenBreaker(false);
    }
    if (
      props.wholeCorruptDevice >= 16 &&
      props.wholeCorruptDevice <= 24 &&
      props.wholeCorruptDevice === rand
    ) {
      // 3
      props.setGroupThreeBreakerType("black");
      props.setIsGroupThreeBreaker(false);
    }
    if (
      props.wholeCorruptDevice >= 25 &&
      props.wholeCorruptDevice <= 34 &&
      props.wholeCorruptDevice === rand
    ) {
      // 4
      props.setGroupFourBreakerType("black");
      props.setIsGroupFourBreaker(false);
    }
    if (
      props.wholeCorruptDevice >= 35 &&
      props.wholeCorruptDevice <= 46 &&
      props.wholeCorruptDevice === rand
    ) {
      // 5
      props.setgroupFiveBreakerType("black");
      props.setIsGroupFiveBreaker(false);
    }
    if (
      props.wholeCorruptDevice >= 47 &&
      props.wholeCorruptDevice <= 49 &&
      props.wholeCorruptDevice === rand
    ) {
      // 6
      props.setLaundaryBreakerType("black");
      props.setIsLaundaryBreaker(false);
    }
  }, [props.wholeCorruptDevice]);

  // ***********************************
  // GROUP 1
  // ***********************************
  const firstGroupPass = () => {
    // props.setIsModalOpen(true);
    // dispatch(isHurray(true));
    // hurraySound();
    // setTimeout(() => {
    //   dispatch(isHurray(false));
    // }, 3000);
    // setTimeout(() => {
    //   props.setFirstGroupBreakerType("red");
    //   props.setIsFirstGroupBreaker(true);
    // }, 3000);
    // navigate("/result");
    // setTimeout(() => {
    //   navigate("/result");
    // }, 500);
  };
  const onPopupText = isDutchLocal ? breakerOnDutch : breakerOnEnglish;
  const initialPopupText = isDutchLocal ? initialDutch : initialEnglish;

  const groupFirstBreakerHandlerOff = () => {
    if (
      location === "/ground-floor" ||
      location === "/ground-floor/toilet" ||
      location === "/ground-floor/living-room"
    ) {
      if (props.completeRnd >= 1 && props.completeRnd <= 9) {
        //for sending on next level code ................
        if (
          props.completeRnd === 1 &&
          props.toiletFan === "disconnect" &&
          props.toiletLight === "connected" &&
          props.hallLamp === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingRadio === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingAC === "connected" &&
          props.livingLight03 === "connected"
        ) {
          // firstGroupPass();
        }
        if (
          props.completeRnd === 2 &&
          props.toiletFan === "connected" &&
          props.toiletLight === "disconnect" &&
          props.hallLamp === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingRadio === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingAC === "connected" &&
          props.livingLight03 === "connected"
        ) {
          // firstGroupPass();
        }
        if (
          props.completeRnd === 3 &&
          props.toiletFan === "connected" &&
          props.toiletLight === "connected" &&
          props.hallLamp === "disconnect" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingRadio === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingAC === "connected" &&
          props.livingLight03 === "connected"
        ) {
          firstGroupPass();
        }
        if (
          props.completeRnd === 4 &&
          props.toiletFan === "connected" &&
          props.toiletLight === "connected" &&
          props.hallLamp === "connected" &&
          props.hallLight01 === "disconnect" &&
          props.hallLight02 === "connected" &&
          props.livingRadio === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingAC === "connected" &&
          props.livingLight03 === "connected"
        ) {
          firstGroupPass();
        }
        if (
          props.completeRnd === 5 &&
          props.toiletFan === "connected" &&
          props.toiletLight === "connected" &&
          props.hallLamp === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "disconnect" &&
          props.livingRadio === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingAC === "connected" &&
          props.livingLight03 === "connected"
        ) {
          firstGroupPass();
        }
        if (
          props.completeRnd === 6 &&
          props.toiletFan === "connected" &&
          props.toiletLight === "connected" &&
          props.hallLamp === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingRadio === "disconnect" &&
          props.livingLight01 === "connected" &&
          props.livingAC === "connected" &&
          props.livingLight03 === "connected"
        ) {
          firstGroupPass();
        }
        if (
          props.completeRnd === 7 &&
          props.toiletFan === "connected" &&
          props.toiletLight === "connected" &&
          props.hallLamp === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingRadio === "connected" &&
          props.livingLight01 === "disconnect" &&
          props.livingAC === "connected" &&
          props.livingLight03 === "connected"
        ) {
          firstGroupPass();
        }
        if (
          props.completeRnd === 8 &&
          props.toiletFan === "connected" &&
          props.toiletLight === "connected" &&
          props.hallLamp === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingRadio === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingAC === "disconnect" &&
          props.livingLight03 === "connected"
        ) {
          firstGroupPass();
        }
        if (
          props.completeRnd === 9 &&
          props.toiletFan === "connected" &&
          props.toiletLight === "connected" &&
          props.hallLamp === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingRadio === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingAC === "connected" &&
          props.livingLight03 === "disconnect"
        ) {
          firstGroupPass();
        }

        if (props.completeCorruptDevice === props.completeRnd) {
          exerciseNumber === 2 && SwalInitial(initialPopupText);
          props.setIsFirstGroupBreaker(false);
        } else {
          props.setFirstGroupBreakerType("red");
          props.setIsFirstGroupBreaker(true);
          // console.log("run red breaker")
          if (
            props.toiletFan === "disconnect" &&
            props.toiletLight === "disconnect" &&
            props.hallLamp === "disconnect" &&
            props.hallLight01 === "disconnect" &&
            props.hallLight02 === "disconnect" &&
            props.livingRadio === "disconnect" &&
            props.livingLight01 === "disconnect" &&
            props.livingAC === "disconnect" &&
            props.livingLight03 === "disconnect"
          ) {
            exerciseNumber === 2 && SwalBreakerOn(onPopupText);
          }

          //start my code for breaker pop up
          if (
            (props.completeRnd === 1 && props.toiletFan === "connected") ||
            (props.completeRnd === 2 && props.toiletLight == "connected") ||
            (props.completeRnd === 3 && props.hallLamp === "connected") ||
            (props.completeRnd === 4 && props.hallLight01 === "connected") ||
            (props.completeRnd === 5 && props.hallLight02 === "connected") ||
            (props.completeRnd === 6 && props.livingRadio === "connected") ||
            (props.completeRnd === 7 && props.livingLight01 === "connected") ||
            (props.completeRnd === 8 && props.livingAC === "connected") ||
            (props.completeRnd === 9 && props.livingLight03 === "connected")
          ) {
            props.setFirstGroupBreakerType("black");
            props.setIsFirstGroupBreaker(false);
            dispatchCounter(increaseCouter());
            console.log("should be hit when connected");
            exerciseNumber === 2 && SwalInitial(initialPopupText);
            //ADD COUNTER
            // dispatch(isHurray(true));

            // console.log(counterBreaker, "Heloo counter");
            // console.log("lksadf");
          }
          // end my code for breaker pop up
        }

        //start my code for breaker pop up
        if (
          props.toiletFan === "connected" &&
          props.toiletLight === "connected" &&
          props.hallLamp === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingRadio === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingAC === "connected" &&
          props.livingLight03 === "connected"
        ) {
          props.setFirstGroupBreakerType("black");
          props.setIsFirstGroupBreaker(false);
          exerciseNumber === 2 && SwalInitial(initialPopupText);
          // setCounterBreaker(counterBreaker + 1);
          // console.log(counterBreaker, "Heloo counter");
          dispatchCounter(increaseCouter());
        } else if (
          (props.completeRnd === 1 && props.toiletFan === "connected") ||
          (props.completeRnd === 2 && props.toiletLight == "connected") ||
          (props.completeRnd === 3 && props.hallLamp === "connected") ||
          (props.completeRnd === 4 && props.hallLight01 === "connected") ||
          (props.completeRnd === 5 && props.hallLight02 === "connected") ||
          (props.completeRnd === 6 && props.livingRadio === "connected") ||
          (props.completeRnd === 7 && props.livingLight01 === "connected") ||
          (props.completeRnd === 8 && props.livingAC === "connected") ||
          (props.completeRnd === 9 && props.livingLight03 === "connected")
        ) {
          props.setFirstGroupBreakerType("black");
          props.setIsFirstGroupBreaker(false);
          dispatchCounter(increaseCouter());
          exerciseNumber === 2 && SwalInitial(initialPopupText);
        }
      } else {
        props.setFirstGroupBreakerType("red");
        props.setIsFirstGroupBreaker(true);
        // console.log("run")
      }
    } else {
      if (corruptDevice < 1 || corruptDevice > 9) {
        props.setFirstGroupBreakerType("red");
        props.setIsFirstGroupBreaker(true);
      } else if (
        (corruptDevice >= 1 || corruptDevice <= 9) &&
        ((corruptDevice === 1 &&
          allDisconnectedDevices.includes("toiletFan")) ||
          (corruptDevice === 2 &&
            allDisconnectedDevices.includes("toiletLight")) ||
          (corruptDevice === 3 &&
            allDisconnectedDevices.includes("hallLamp")) ||
          (corruptDevice === 4 &&
            allDisconnectedDevices.includes("hallLight01")) ||
          (corruptDevice === 5 &&
            allDisconnectedDevices.includes("hallLight02")) ||
          (corruptDevice === 6 &&
            allDisconnectedDevices.includes("livingRadio")) ||
          (corruptDevice === 7 &&
            allDisconnectedDevices.includes("livingLight01")) ||
          (corruptDevice === 8 &&
            allDisconnectedDevices.includes("livingAC")) ||
          (corruptDevice === 9 &&
            allDisconnectedDevices.includes("livingLight03")))
      ) {
        props.setFirstGroupBreakerType("red");
        props.setIsFirstGroupBreaker(true);
      } else {
        exerciseNumber === 2 && SwalInitial(initialPopupText);
        dispatchCounter(increaseCouter());
      }
    }
    // console.log("handle on")
  };

  const groupFirstBreakerHandlerOn = () => {
    props.setFirstGroupBreakerType("black");
    props.setIsFirstGroupBreaker(false);
    // console.log("handle off")
  };

  // ***********************************
  // GROUP 2
  // ***********************************
  // kitchen section Breaker...........................................................................................
  // const lastAssignmentPass = () => {
  //   props.setIsModalOpen(true);
  //   dispatch(resultGroundFloor(props.groundFloorTrial));
  //   setTimeout(() => {
  //     SwalHurray("four", "two");
  //   }, 30);
  // };
  const lastAssignmentPass = () => {
    // dispatch(isHurray(true));
    // hurraySound();
    // props.setIsModalOpen(true);
    // setTimeout(() => {
    //   dispatch(isHurray(false));
    // }, 3000);
    // setTimeout(() => {
    //   SwalHurray("one", "one");
    // }, 30);
    // setTimeout(() => {
    //   props.setKitchenBreakerType("red");
    //   props.setIsKitchenBreaker(true);
    // }, 3000);
    // setTimeout(() => {
    //   navigate("/result");
    // }, 500);
  };

  // const kitchencolor = useSelector(
  //   (state) => state.BreakerReducer.kitchenBreakerColor
  // );

  // console.log(kitchencolor);

  const kitchenBreakerHandlerOff = () => {
    // dispatch(kitchenBreaker({ available: false, color: "black" }));
    if (location === "/ground-floor/kitchen") {
      if (props.rndKitchen >= 10 && props.rndKitchen <= 15) {
        // console.log("Second Breaker RightNav " + props.rndKitchen)
        if (
          props.rndKitchen === 10 &&
          props.kitchenMixture === "disconnect" &&
          props.kitchenOven === "connected" &&
          props.kitchenLight01 === "connected" &&
          props.kitchenLight02 === "connected" &&
          props.kitchenLight03 === "connected" &&
          props.kitchenToster === "connected"
        ) {
          lastAssignmentPass();
        }
        if (
          props.rndKitchen === 11 &&
          props.kitchenMixture === "connected" &&
          props.kitchenOven === "disconnect" &&
          props.kitchenLight01 === "connected" &&
          props.kitchenLight02 === "connected" &&
          props.kitchenLight03 === "connected" &&
          props.kitchenToster === "connected"
        ) {
          lastAssignmentPass();
        }
        if (
          props.rndKitchen === 12 &&
          props.kitchenMixture === "connected" &&
          props.kitchenOven === "connected" &&
          props.kitchenLight01 === "disconnect" &&
          props.kitchenLight02 === "connected" &&
          props.kitchenLight03 === "connected" &&
          props.kitchenToster === "connected"
        ) {
          lastAssignmentPass();
        }
        if (
          props.rndKitchen === 13 &&
          props.kitchenMixture === "connected" &&
          props.kitchenOven === "connected" &&
          props.kitchenLight01 === "connected" &&
          props.kitchenLight02 === "disconnect" &&
          props.kitchenLight03 === "connected" &&
          props.kitchenToster === "connected"
        ) {
          lastAssignmentPass();
        }
        if (
          props.rndKitchen === 14 &&
          props.kitchenMixture === "connected" &&
          props.kitchenOven === "connected" &&
          props.kitchenLight01 === "connected" &&
          props.kitchenLight02 === "connected" &&
          props.kitchenLight03 === "disconnect" &&
          props.kitchenToster === "connected"
        ) {
          lastAssignmentPass();
        }
        if (
          props.rndKitchen === 15 &&
          props.kitchenMixture === "connected" &&
          props.kitchenOven === "connected" &&
          props.kitchenLight01 === "connected" &&
          props.kitchenLight02 === "connected" &&
          props.kitchenLight03 === "connected" &&
          props.kitchenToster === "disconnect"
        ) {
          lastAssignmentPass();
        }
        // console.log("kitchen CorruptDevice",props.kitchenCorruptDevice);
        if (props.kitchenCorruptDevice === props.rndKitchen) {
          exerciseNumber === 2 && SwalInitial(initialPopupText);
          props.setIsKitchenBreaker(false);
        } else {
          props.setKitchenBreakerType("red");
          props.setIsKitchenBreaker(true);
          if (
            props.kitchenLight01 === "disconnect" &&
            props.kitchenLight02 === "disconnect" &&
            props.kitchenLight03 === "disconnect" &&
            props.kitchenMixture === "disconnect" &&
            props.kitchenOven === "disconnect" &&
            props.kitchenToster === "disconnect"
          ) {
            exerciseNumber === 2 && SwalBreakerOn(onPopupText);
          }

          //start my code for breaker pop up
          if (
            (props.rndKitchen === 10 && props.kitchenMixture === "connected") ||
            (props.rndKitchen === 11 && props.kitchenOven === "connected") ||
            (props.rndKitchen === 12 && props.kitchenLight01 === "connected") ||
            (props.rndKitchen === 13 && props.kitchenLight02 === "connected") ||
            (props.rndKitchen === 14 && props.kitchenLight03 === "connected") ||
            (props.rndKitchen === 15 && props.kitchenToster === "connected")
          ) {
            props.setKitchenBreakerType("black");
            props.setIsKitchenBreaker(false);
            exerciseNumber === 2 && SwalInitial(initialPopupText);
            dispatchCounter(increaseCouter());
          }
          // end my code for breaker pop up
        }
        //start my code for breaker pop up
        if (
          // props.livingRadio === "connected" &&
          props.kitchenLight01 === "connected" &&
          props.kitchenLight02 == "connected" &&
          props.kitchenLight03 == "connected" &&
          props.kitchenMixture == "connected" &&
          props.kitchenOven == "connected" &&
          props.kitchenToster == "connected"
        ) {
          props.setKitchenBreakerType("black");
          props.setIsKitchenBreaker(false);
          exerciseNumber === 2 && SwalInitial(initialPopupText);
          dispatchCounter(increaseCouter());
        } else if (
          (props.rndKitchen === 10 && props.kitchenMixture === "connected") ||
          (props.rndKitchen === 11 && props.kitchenOven === "connected") ||
          (props.rndKitchen === 12 && props.kitchenLight01 === "connected") ||
          (props.rndKitchen === 13 && props.kitchenLight02 === "connected") ||
          (props.rndKitchen === 14 && props.kitchenLight03 === "connected") ||
          (props.rndKitchen === 15 && props.kitchenToster === "connected")
        ) {
          props.setKitchenBreakerType("black");
          props.setIsKitchenBreaker(false);
          exerciseNumber === 2 && SwalInitial(initialPopupText);
          dispatchCounter(increaseCouter());
        }
      } else {
        props.setKitchenBreakerType("red");
        props.setIsKitchenBreaker(true);
      }
    } else {
      if (corruptDevice < 10 || corruptDevice > 15) {
        props.setKitchenBreakerType("red");
        props.setIsKitchenBreaker(true);
      } else if (
        (corruptDevice >= 10 || corruptDevice <= 15) &&
        ((corruptDevice === 10 &&
          allDisconnectedDevices.includes("kitchenMixture")) ||
          (corruptDevice === 11 &&
            allDisconnectedDevices.includes("kitchenOven")) ||
          (corruptDevice === 12 &&
            allDisconnectedDevices.includes("kitchenLight01")) ||
          (corruptDevice === 13 &&
            allDisconnectedDevices.includes("kitchenLight02")) ||
          (corruptDevice === 14 &&
            allDisconnectedDevices.includes("kitchenLight03")) ||
          (corruptDevice === 15 &&
            allDisconnectedDevices.includes("kitchenToster")))
      ) {
        props.setKitchenBreakerType("red");
        props.setIsKitchenBreaker(true);
      } else {
        exerciseNumber === 2 && SwalInitial(initialPopupText);
        dispatchCounter(increaseCouter());
      }
    }
  };

  const kitchenBreakerHandlerOn = () => {
    props.setKitchenBreakerType("black");
    props.setIsKitchenBreaker(false);
    // console.log("handle off breaker 2")
  };
  // ***********************************
  // GROUP 3
  // ***********************************
  const thirdGroupPass = () => {
    // props.setIsModalOpen(true);
    // dispatch(isHurray(true));
    // hurraySound();
    // setTimeout(() => {
    //   dispatch(isHurray(false));
    // }, 3000);
    // setTimeout(() => {
    //   props.setGroupThreeBreakerType("red");
    //   props.setIsGroupThreeBreaker(true);
    // }, 3000);
    // navigate("/result");
    // setTimeout(() => {
    //   navigate("/result");
    // }, 500);
  };
  const groupThreeBreakerHandlerOff = () => {
    if (
      location === "/first-floor/living-room01" ||
      location === "/first-floor/living-room02"
    ) {
      if (props.rndGroupThree >= 16 && props.rndGroupThree <= 24) {
        // console.log("Third Breaker RightNav " + props.rndGroupThree)
        if (
          props.rndGroupThree === 16 &&
          props.livingOneLignt01 === "disconnect" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected" &&
          props.livingOneFan === "connected" &&
          props.livingOneTV === "connected" &&
          props.livingTwoLignt01 === "connected" &&
          props.livingTwoFan === "connected" &&
          props.livingTwoLignt02 === "connected" &&
          props.livingTwoSmallLamp === "connected"
        ) {
          thirdGroupPass();
        }
        if (
          props.rndGroupThree === 17 &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "disconnect" &&
          props.livingOneLignt03 === "connected" &&
          props.livingOneFan === "connected" &&
          props.livingOneTV === "connected" &&
          props.livingTwoLignt01 === "connected" &&
          props.livingTwoFan === "connected" &&
          props.livingTwoLignt02 === "connected" &&
          props.livingTwoSmallLamp === "connected"
        ) {
          thirdGroupPass();
        }
        if (
          props.rndGroupThree === 18 &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "disconnect" &&
          props.livingOneFan === "connected" &&
          props.livingOneTV === "connected" &&
          props.livingTwoLignt01 === "connected" &&
          props.livingTwoFan === "connected" &&
          props.livingTwoLignt02 === "connected" &&
          props.livingTwoSmallLamp === "connected"
        ) {
          thirdGroupPass();
        }
        if (
          props.rndGroupThree === 19 &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected" &&
          props.livingOneFan === "disconnect" &&
          props.livingOneTV === "connected" &&
          props.livingTwoLignt01 === "connected" &&
          props.livingTwoFan === "connected" &&
          props.livingTwoLignt02 === "connected" &&
          props.livingTwoSmallLamp === "connected"
        ) {
          thirdGroupPass();
        }
        if (
          props.rndGroupThree === 20 &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected" &&
          props.livingOneFan === "connected" &&
          props.livingOneTV === "disconnect" &&
          props.livingTwoLignt01 === "connected" &&
          props.livingTwoFan === "connected" &&
          props.livingTwoLignt02 === "connected" &&
          props.livingTwoSmallLamp === "connected"
        ) {
          thirdGroupPass();
        }
        if (
          props.rndGroupThree === 21 &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected" &&
          props.livingOneFan === "connected" &&
          props.livingOneTV === "connected" &&
          props.livingTwoLignt01 === "disconnect" &&
          props.livingTwoFan === "connected" &&
          props.livingTwoLignt02 === "connected" &&
          props.livingTwoSmallLamp === "connected"
        ) {
          thirdGroupPass();
        }
        if (
          props.rndGroupThree === 22 &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected" &&
          props.livingOneFan === "connected" &&
          props.livingOneTV === "connected" &&
          props.livingTwoLignt01 === "connected" &&
          props.livingTwoFan === "disconnect" &&
          props.livingTwoLignt02 === "connected" &&
          props.livingTwoSmallLamp === "connected"
        ) {
          thirdGroupPass();
        }
        if (
          props.rndGroupThree === 23 &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected" &&
          props.livingOneFan === "connected" &&
          props.livingOneTV === "connected" &&
          props.livingTwoLignt01 === "connected" &&
          props.livingTwoFan === "connected" &&
          props.livingTwoLignt02 === "disconnect" &&
          props.livingTwoSmallLamp === "connected"
        ) {
          thirdGroupPass();
        }
        if (
          props.rndGroupThree === 24 &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected" &&
          props.livingOneFan === "connected" &&
          props.livingOneTV === "connected" &&
          props.livingTwoLignt01 === "connected" &&
          props.livingTwoFan === "connected" &&
          props.livingTwoLignt02 === "connected" &&
          props.livingTwoSmallLamp === "disconnect"
        ) {
          thirdGroupPass();
        }

        if (props.groupThreeCorruptDevice === props.rndGroupThree) {
          exerciseNumber === 2 && SwalInitial(initialPopupText);
          props.setIsGroupThreeBreaker(false);
        } else {
          props.setGroupThreeBreakerType("red");
          props.setIsGroupThreeBreaker(true);
          if (
            props.livingOneLignt01 === "disconnect" &&
            props.livingOneLignt02 === "disconnect" &&
            props.livingOneLignt03 === "disconnect" &&
            props.livingOneFan === "disconnect" &&
            props.livingOneTV === "disconnect" &&
            props.livingTwoLignt01 === "disconnect" &&
            props.livingTwoFan === "disconnect" &&
            props.livingTwoLignt02 === "disconnect" &&
            props.livingTwoSmallLamp === "disconnect"
          ) {
            exerciseNumber === 2 && SwalBreakerOn(onPopupText);
          }
          //start my code for breaker pop up
          if (
            (props.rndGroupThree === 16 &&
              props.livingOneLignt01 === "connected") ||
            (props.rndGroupThree === 17 &&
              props.livingOneLignt02 == "connected") ||
            (props.rndGroupThree === 18 &&
              props.livingOneLignt03 === "connected") ||
            (props.rndGroupThree === 19 && props.livingOneFan == "connected") ||
            (props.rndGroupThree === 20 && props.livingOneTV == "connected") ||
            (props.rndGroupThree === 21 &&
              props.livingTwoLignt01 == "connected") ||
            (props.rndGroupThree === 22 && props.livingTwoFan == "connected") ||
            (props.rndGroupThree === 23 &&
              props.livingTwoLignt02 == "connected") ||
            (props.rndGroupThree === 24 &&
              props.livingTwoSmallLamp == "connected")
          ) {
            props.setGroupThreeBreakerType("black");
            props.setIsGroupThreeBreaker(false);
            exerciseNumber === 2 && SwalInitial(initialPopupText);
            dispatchCounter(increaseCouter());
          }
          // end my code for breaker pop up
        }
        //start my code for breaker pop up
        if (
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 == "connected" &&
          props.livingOneLignt03 === "connected" &&
          props.livingOneFan == "connected" &&
          props.livingOneTV == "connected" &&
          props.livingTwoLignt01 === "connected" &&
          props.livingTwoFan === "connected" &&
          props.livingTwoLignt02 === "connected" &&
          props.livingTwoSmallLamp === "connected"
        ) {
          props.setGroupThreeBreakerType("black");
          props.setIsGroupThreeBreaker(false);
          exerciseNumber === 2 && SwalInitial(initialPopupText);
          dispatchCounter(increaseCouter());
        } else if (
          (props.rndGroupThree === 16 &&
            props.livingOneLignt01 === "connected") ||
          (props.rndGroupThree === 17 &&
            props.livingOneLignt02 == "connected") ||
          (props.rndGroupThree === 18 &&
            props.livingOneLignt03 === "connected") ||
          (props.rndGroupThree === 19 && props.livingOneFan == "connected") ||
          (props.rndGroupThree === 20 && props.livingOneTV == "connected") ||
          (props.rndGroupThree === 21 &&
            props.livingTwoLignt01 == "connected") ||
          (props.rndGroupThree === 22 && props.livingTwoFan == "connected") ||
          (props.rndGroupThree === 23 &&
            props.livingTwoLignt02 == "connected") ||
          (props.rndGroupThree === 24 &&
            props.livingTwoSmallLamp == "connected")
        ) {
          props.setGroupThreeBreakerType("black");
          props.setIsGroupThreeBreaker(false);
          exerciseNumber === 2 && SwalInitial(initialPopupText);
          dispatchCounter(increaseCouter());
        }
        // console.log("run third");
      } else {
        // console.log("run else third");
        props.setGroupThreeBreakerType("red");
        props.setIsGroupThreeBreaker(true);
      }
    } else {
      if (corruptDevice < 16 || corruptDevice > 24) {
        props.setGroupThreeBreakerType("red");
        props.setIsGroupThreeBreaker(true);
      } else if (
        (corruptDevice >= 16 || corruptDevice <= 24) &&
        ((corruptDevice === 16 &&
          allDisconnectedDevices.includes("livingOneLignt01")) ||
          (corruptDevice === 17 &&
            allDisconnectedDevices.includes("livingOneLignt02")) ||
          (corruptDevice === 18 &&
            allDisconnectedDevices.includes("livingOneLignt03")) ||
          (corruptDevice === 19 &&
            allDisconnectedDevices.includes("livingOneFan")) ||
          (corruptDevice === 20 &&
            allDisconnectedDevices.includes("livingOneTV")) ||
          (corruptDevice === 21 &&
            allDisconnectedDevices.includes("livingTwoLignt01")) ||
          (corruptDevice === 22 &&
            allDisconnectedDevices.includes("livingTwoFan")) ||
          (corruptDevice === 23 &&
            allDisconnectedDevices.includes("livingTwoLignt02")) ||
          (corruptDevice === 24 &&
            allDisconnectedDevices.includes("livingTwoSmallLamp")))
      ) {
        props.setGroupThreeBreakerType("red");
        props.setIsGroupThreeBreaker(true);
      } else {
        exerciseNumber === 2 && SwalInitial(initialPopupText);
        dispatchCounter(increaseCouter());
      }
    }
    //end my code for breaker pop up
  };

  const groupThreeBreakerHandlerOn = () => {
    props.setGroupThreeBreakerType("black");
    props.setIsGroupThreeBreaker(false);
  };

  // ***********************************
  // GROUP 4
  // ***********************************
  const forthGroupPass = () => {
    // props.setIsModalOpen(true);
    // dispatch(isHurray(true));
    // hurraySound();
    // setTimeout(() => {
    //   dispatch(isHurray(false));
    // }, 3000);
    // setTimeout(() => {
    //   props.setGroupFourBreakerType("red");
    //   props.setIsGroupFourBreaker(true);
    // }, 3000);
    // navigate("/result");
    // setTimeout(() => {
    //   navigate("/result");
    // }, 500);
  };
  const groupFourBreakerHandlerOff = () => {
    if (
      location === "/first-floor" ||
      location === "/first-floor/toilet" ||
      location === "/first-floor/bed-room"
    ) {
      if (props.rndGroupFour >= 25 && props.rndGroupFour <= 34) {
        if (
          props.rndGroupFour === 25 &&
          props.hallLedTv === "disconnect" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingLight02 === "connected" &&
          props.livingSilingFan === "connected" &&
          props.toiletLight === "connected" &&
          props.toiletLight02 === "connected" &&
          props.toiletFan === "connected" &&
          props.toiletLight03 === "connected"
        ) {
          forthGroupPass();
        }
        if (
          props.rndGroupFour === 26 &&
          props.hallLedTv === "connected" &&
          props.hallLight01 === "disconnect" &&
          props.hallLight02 === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingLight02 === "connected" &&
          props.livingSilingFan === "connected" &&
          props.toiletLight === "connected" &&
          props.toiletLight02 === "connected" &&
          props.toiletFan === "connected" &&
          props.toiletLight03 === "connected"
        ) {
          forthGroupPass();
        }
        if (
          props.rndGroupFour === 27 &&
          props.hallLedTv === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "disconnect" &&
          props.livingLight01 === "connected" &&
          props.livingLight02 === "connected" &&
          props.livingSilingFan === "connected" &&
          props.toiletLight === "connected" &&
          props.toiletLight02 === "connected" &&
          props.toiletFan === "connected" &&
          props.toiletLight03 === "connected"
        ) {
          forthGroupPass();
        }
        if (
          props.rndGroupFour === 28 &&
          props.hallLedTv === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingLight01 === "disconnect" &&
          props.livingLight02 === "connected" &&
          props.livingSilingFan === "connected" &&
          props.toiletLight === "connected" &&
          props.toiletLight02 === "connected" &&
          props.toiletFan === "connected" &&
          props.toiletLight03 === "connected"
        ) {
          forthGroupPass();
        }
        if (
          props.rndGroupFour === 29 &&
          props.hallLedTv === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingLight02 === "disconnect" &&
          props.livingSilingFan === "connected" &&
          props.toiletLight === "connected" &&
          props.toiletLight02 === "connected" &&
          props.toiletFan === "connected" &&
          props.toiletLight03 === "connected"
        ) {
          forthGroupPass();
        }
        if (
          props.rndGroupFour === 30 &&
          props.hallLedTv === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingLight02 === "connected" &&
          props.livingSilingFan === "disconnect" &&
          props.toiletLight === "connected" &&
          props.toiletLight02 === "connected" &&
          props.toiletFan === "connected" &&
          props.toiletLight03 === "connected"
        ) {
          forthGroupPass();
        }
        if (
          props.rndGroupFour === 31 &&
          props.hallLedTv === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingLight02 === "connected" &&
          props.livingSilingFan === "connected" &&
          props.toiletLight === "disconnect" &&
          props.toiletLight02 === "connected" &&
          props.toiletFan === "connected" &&
          props.toiletLight03 === "connected"
        ) {
          forthGroupPass();
        }
        if (
          props.rndGroupFour === 32 &&
          props.hallLedTv === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingLight02 === "connected" &&
          props.livingSilingFan === "connected" &&
          props.toiletLight === "connected" &&
          props.toiletLight02 === "disconnect" &&
          props.toiletFan === "connected" &&
          props.toiletLight03 === "connected"
        ) {
          forthGroupPass();
        }
        if (
          props.rndGroupFour === 33 &&
          props.hallLedTv === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingLight02 === "connected" &&
          props.livingSilingFan === "connected" &&
          props.toiletLight === "connected" &&
          props.toiletLight02 === "connected" &&
          props.toiletFan === "disconnect" &&
          props.toiletLight03 === "connected"
        ) {
          forthGroupPass();
        }
        if (
          props.rndGroupFour === 34 &&
          props.hallLedTv === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 === "connected" &&
          props.livingLight01 === "connected" &&
          props.livingLight02 === "connected" &&
          props.livingSilingFan === "connected" &&
          props.toiletLight === "connected" &&
          props.toiletLight02 === "connected" &&
          props.toiletFan === "connected" &&
          props.toiletLight03 === "disconnect"
        ) {
          forthGroupPass();
        }

        if (props.groupFourCorruptDevice === props.rndGroupFour) {
          exerciseNumber === 2 && SwalInitial(initialPopupText);
          props.setIsGroupFourBreaker(false);
        } else {
          props.setGroupFourBreakerType("red");
          props.setIsGroupFourBreaker(true);
          if (
            props.hallLight01 === "disconnect" &&
            props.hallLight02 === "disconnect" &&
            props.hallLedTv === "disconnect" &&
            props.livingLight01 === "disconnect" &&
            props.livingLight02 === "disconnect" &&
            props.livingSilingFan === "disconnect" &&
            props.toiletLight === "disconnect" &&
            props.toiletLight02 === "disconnect" &&
            props.toiletFan === "disconnect" &&
            props.toiletLight03 === "disconnect"
          ) {
            exerciseNumber === 2 && SwalBreakerOn(onPopupText);
          }

          //start my code for breaker pop up
          if (
            (props.rndGroupFour === 25 && props.hallLedTv == "connected") ||
            (props.rndGroupFour === 26 && props.hallLight01 === "connected") ||
            (props.rndGroupFour === 27 && props.hallLight02 == "connected") ||
            (props.rndGroupFour === 28 && props.livingLight01 == "connected") ||
            (props.rndGroupFour === 29 && props.livingLight02 == "connected") ||
            (props.rndGroupFour === 30 &&
              props.livingSilingFan == "connected") ||
            (props.rndGroupFour === 31 && props.toiletLight == "connected") ||
            (props.rndGroupFour === 32 && props.toiletLight02 == "connected") ||
            (props.rndGroupFour === 33 && props.toiletFan == "connected") ||
            (props.rndGroupFour === 34 && props.toiletLight03 == "connected")
          ) {
            props.setGroupFourBreakerType("black");
            props.setIsGroupFourBreaker(false);
            exerciseNumber === 2 && SwalInitial(initialPopupText);
            dispatchCounter(increaseCouter());
          }
          // end my code for breaker pop up
        }

        //start my code for breaker pop up
        if (
          // props.livingRadio === "connected" &&
          props.hallLight01 === "connected" &&
          props.hallLight02 == "connected" &&
          props.hallLedTv == "connected" &&
          props.livingLight01 == "connected" &&
          props.livingLight02 == "connected" &&
          props.livingSilingFan == "connected" &&
          props.toiletLight == "connected" &&
          props.toiletLight02 == "connected" &&
          props.toiletFan == "connected" &&
          props.toiletLight03 == "connected"
        ) {
          props.setGroupFourBreakerType("black");
          props.setIsGroupFourBreaker(false);
          exerciseNumber === 2 && SwalInitial(initialPopupText);
          dispatchCounter(increaseCouter());
        } else if (
          (props.rndGroupFour === 25 && props.hallLedTv == "connected") ||
          (props.rndGroupFour === 26 && props.hallLight01 === "connected") ||
          (props.rndGroupFour === 27 && props.hallLight02 == "connected") ||
          (props.rndGroupFour === 28 && props.livingLight01 == "connected") ||
          (props.rndGroupFour === 29 && props.livingLight02 == "connected") ||
          (props.rndGroupFour === 30 && props.livingSilingFan == "connected") ||
          (props.rndGroupFour === 31 && props.toiletLight == "connected") ||
          (props.rndGroupFour === 32 && props.toiletLight02 == "connected") ||
          (props.rndGroupFour === 33 && props.toiletFan == "connected") ||
          (props.rndGroupFour === 34 && props.toiletLight03 == "connected")
        ) {
          props.setGroupFourBreakerType("black");
          props.setIsGroupFourBreaker(false);
          exerciseNumber === 2 && SwalInitial(initialPopupText);
          dispatchCounter(increaseCouter());
        }
      } else {
        props.setGroupFourBreakerType("red");
        props.setIsGroupFourBreaker(true);
      }
    } else {
      if (corruptDevice < 25 || corruptDevice > 34) {
        props.setGroupFourBreakerType("red");
        props.setIsGroupFourBreaker(true);
      } else if (
        (corruptDevice >= 25 || corruptDevice <= 34) &&
        ((corruptDevice === 25 &&
          allDisconnectedDevices.includes("hallLedTv")) ||
          (corruptDevice === 26 &&
            allDisconnectedDevices.includes("hallLight01")) ||
          (corruptDevice === 27 &&
            allDisconnectedDevices.includes("hallLight02")) ||
          (corruptDevice === 28 &&
            allDisconnectedDevices.includes("livingLight01")) ||
          (corruptDevice === 29 &&
            allDisconnectedDevices.includes("livingLight02")) ||
          (corruptDevice === 30 &&
            allDisconnectedDevices.includes("livingSilingFan")) ||
          (corruptDevice === 31 &&
            allDisconnectedDevices.includes("toiletLight")) ||
          (corruptDevice === 32 &&
            allDisconnectedDevices.includes("toiletLight02")) ||
          (corruptDevice === 33 &&
            allDisconnectedDevices.includes("toiletFan")) ||
          (corruptDevice === 34 &&
            allDisconnectedDevices.includes("toiletLight03")))
      ) {
        props.setGroupFourBreakerType("red");
        props.setIsGroupFourBreaker(true);
      } else {
        exerciseNumber === 2 && SwalInitial(initialPopupText);
        dispatchCounter(increaseCouter());
      }
    }
  };
  const groupFourBreakerHandlerOn = () => {
    props.setGroupFourBreakerType("black");
    props.setIsGroupFourBreaker(false);
  };

  // ***********************************
  // GROUP 5
  // ***********************************
  const fifthGroupPass = () => {
    // props.setIsModalOpen(true);
    // dispatch(isHurray(true));
    // hurraySound();
    // setTimeout(() => {
    //   dispatch(isHurray(false));
    // }, 3000);
    // setTimeout(() => {
    //   props.setgroupFiveBreakerType("red");
    //   props.setIsGroupFiveBreaker(true);
    // }, 3000);
    // navigate("/result");
    // setTimeout(() => {
    //   navigate("/result");
    // }, 500);
  };

  const groupFifthBreakerHandlerOff = () => {
    if (
      location === "/attic" ||
      location === "/attic/guest-room" ||
      location === "/attic/study-room" ||
      location === "/attic/storage-room"
    ) {
      if (props.rndGroupFive >= 35 && props.rndGroupFive <= 46) {
        if (
          props.rndGroupFive === 35 &&
          props.hallLampFive === "disconnect" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 36 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "disconnect" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 37 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "disconnect" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 38 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "disconnect" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 39 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "disconnect" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 40 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "disconnect" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 41 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "disconnect" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 42 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "disconnect" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 43 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "disconnect" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 44 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "disconnect" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 45 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "disconnect" &&
          props.livingOneLignt03 === "connected"
        ) {
          fifthGroupPass();
        }
        if (
          props.rndGroupFive === 46 &&
          props.hallLampFive === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLight02Five === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "disconnect"
        ) {
          fifthGroupPass();
        }

        if (props.groupFiveCorruptDevice === props.rndGroupFive) {
          exerciseNumber === 2 && SwalInitial(initialPopupText);
          props.setIsGroupFiveBreaker(false);
        } else {
          props.setgroupFiveBreakerType("red");
          props.setIsGroupFiveBreaker(true);
          if (
            props.hallLight01Five === "disconnect" &&
            props.hallLight02Five === "disconnect" &&
            props.hallLampFive === "disconnect" &&
            props.guestLamp === "disconnect" &&
            props.guestRadio === "disconnect" &&
            props.guestFan === "disconnect" &&
            props.guestLED === "disconnect" &&
            props.studyLamp === "disconnect" &&
            props.studyLamp02 === "disconnect" &&
            props.livingOneLignt01 === "disconnect" &&
            props.livingOneLignt03 === "disconnect" &&
            props.livingOneLignt02 === "disconnect"
          ) {
            exerciseNumber === 2 && SwalBreakerOn(onPopupText);
          }
          if (
            (props.rndGroupFive === 35 && props.hallLampFive === "connected") ||
            (props.rndGroupFive === 36 &&
              props.hallLight01Five === "connected") ||
            (props.rndGroupFive === 37 &&
              props.hallLight02Five === "connected") ||
            (props.rndGroupFive === 38 && props.guestLamp === "connected") ||
            (props.rndGroupFive === 39 && props.guestRadio === "connected") ||
            (props.rndGroupFive === 40 && props.guestFan === "connected") ||
            (props.rndGroupFive === 41 && props.guestLED === "connected") ||
            (props.rndGroupFive === 42 && props.studyLamp === "connected") ||
            (props.rndGroupFive === 43 && props.studyLamp02 === "connected") ||
            (props.rndGroupFive === 44 &&
              props.livingOneLignt01 === "connected") ||
            (props.rndGroupFive === 45 &&
              props.livingOneLignt02 === "connected") ||
            (props.rndGroupFive === 46 &&
              props.livingOneLignt03 === "connected")
          ) {
            exerciseNumber === 2 && SwalInitial(initialPopupText);
            props.setgroupFiveBreakerType("black");
            props.setIsGroupFiveBreaker(false);
            dispatchCounter(increaseCouter());
          }
        }
        //start my code for breaker pop up
        if (
          props.hallLight02Five === "connected" &&
          props.hallLight01Five === "connected" &&
          props.hallLampFive === "connected" &&
          props.guestLamp === "connected" &&
          props.guestRadio === "connected" &&
          props.guestFan === "connected" &&
          props.guestLED === "connected" &&
          props.studyLamp === "connected" &&
          props.studyLamp02 === "connected" &&
          props.livingOneLignt01 === "connected" &&
          props.livingOneLignt02 === "connected" &&
          props.livingOneLignt03 === "connected"
        ) {
          props.setgroupFiveBreakerType("black");
          props.setIsGroupFiveBreaker(false);
          exerciseNumber === 2 && SwalInitial(initialPopupText);
          dispatchCounter(increaseCouter());
        } else if (
          (props.rndGroupFive === 35 && props.hallLampFive === "connected") ||
          (props.rndGroupFive === 36 &&
            props.hallLight01Five === "connected") ||
          (props.rndGroupFive === 37 &&
            props.hallLight02Five === "connected") ||
          (props.rndGroupFive === 38 && props.guestLamp === "connected") ||
          (props.rndGroupFive === 39 && props.guestRadio === "connected") ||
          (props.rndGroupFive === 40 && props.guestFan === "connected") ||
          (props.rndGroupFive === 41 && props.guestLED === "connected") ||
          (props.rndGroupFive === 42 && props.studyLamp === "connected") ||
          (props.rndGroupFive === 43 && props.studyLamp02 === "connected") ||
          (props.rndGroupFive === 44 &&
            props.livingOneLignt01 === "connected") ||
          (props.rndGroupFive === 45 &&
            props.livingOneLignt02 === "connected") ||
          (props.rndGroupFive === 46 && props.livingOneLignt03 === "connected")
        ) {
          exerciseNumber === 2 && SwalInitial(initialPopupText);
          props.setgroupFiveBreakerType("black");
          props.setIsGroupFiveBreaker(false);
          dispatchCounter(increaseCouter());
        }
      } else {
        // console.log("run else fifth");
        props.setgroupFiveBreakerType("red");
        props.setIsGroupFiveBreaker(true);
      }
    } else {
      if (corruptDevice < 35 || corruptDevice > 46) {
        props.setgroupFiveBreakerType("red");
        props.setIsGroupFiveBreaker(true);
      } else if (
        (corruptDevice >= 35 || corruptDevice <= 46) &&
        ((corruptDevice === 35 &&
          allDisconnectedDevices.includes("hallLampFive")) ||
          (corruptDevice === 36 &&
            allDisconnectedDevices.includes("hallLight01Five")) ||
          (corruptDevice === 37 &&
            allDisconnectedDevices.includes("hallLight02Five")) ||
          (corruptDevice === 38 &&
            allDisconnectedDevices.includes("guestLamp")) ||
          (corruptDevice === 39 &&
            allDisconnectedDevices.includes("guestRadio")) ||
          (corruptDevice === 40 &&
            allDisconnectedDevices.includes("guestFan")) ||
          (corruptDevice === 41 &&
            allDisconnectedDevices.includes("guestLED")) ||
          (corruptDevice === 42 &&
            allDisconnectedDevices.includes("studyLamp")) ||
          (corruptDevice === 43 &&
            allDisconnectedDevices.includes("studyLamp02")) ||
          (corruptDevice === 44 &&
            allDisconnectedDevices.includes("livingOneLignt01")) ||
          (corruptDevice === 45 &&
            allDisconnectedDevices.includes("livingOneLignt02")) ||
          (corruptDevice === 46 &&
            allDisconnectedDevices.includes("livingOneLignt03")))
      ) {
        props.setgroupFiveBreakerType("red");
        props.setIsGroupFiveBreaker(true);
      } else {
        exerciseNumber === 2 && SwalInitial(initialPopupText);
        dispatchCounter(increaseCouter());
      }
    }
  };

  const groupFifthBreakerHandlerOn = () => {
    props.setgroupFiveBreakerType("black");
    props.setIsGroupFiveBreaker(false);
  };
  // ***********************************
  // GROUP 6
  // ***********************************
  const sixGroupPass = () => {
    // props.setIsModalOpen(true);
    // dispatch(isHurray(true));
    // hurraySound();
    // setTimeout(() => {
    //   dispatch(isHurray(false));
    // }, 3000);
    // setTimeout(() => {
    //   props.setLaundaryBreakerType("red");
    //   props.setIsLaundaryBreaker(true);
    // }, 3000);
    // navigate("/result");
    // setTimeout(() => {
    //   navigate("/result");
    // }, 500);
  };

  const laundaryBreakerHandlerOff = () => {
    console.log(corruptDevice);
    if (location === "/attic/laundary") {
      if (
        (props.rndLaundary >= 47 && props.rndLaundary <= 49) ||
        (corruptDevice >= 47 && corruptDevice <= 49)
      ) {
        if (
          props.rndLaundary === 47 &&
          props.laundaryWashing === "disconnect" &&
          props.laundaryLight01 === "connected" &&
          props.laundaryLight02 === "connected"
        ) {
          sixGroupPass();
        }
        if (
          props.rndLaundary === 48 &&
          props.laundaryWashing === "connected" &&
          props.laundaryLight01 === "disconnect" &&
          props.laundaryLight02 === "connected"
        ) {
          sixGroupPass();
        }
        if (
          props.rndLaundary === 49 &&
          props.laundaryWashing === "connected" &&
          props.laundaryLight01 === "connected" &&
          props.laundaryLight02 === "disconnect"
        ) {
          sixGroupPass();
        }

        if (props.laundaryCorruptDevice === props.rndLaundary) {
          console.log("kdsajf");
          exerciseNumber === 2 && SwalInitial(initialPopupText);
          props.setIsLaundaryBreaker(false);
        } else {
          props.setLaundaryBreakerType("red");
          props.setIsLaundaryBreaker(true);
          if (
            props.laundaryLight01 === "disconnect" &&
            props.laundaryLight02 === "disconnect" &&
            props.laundaryWashing === "disconnect"
          ) {
            exerciseNumber === 2 && SwalBreakerOn(onPopupText);
          }
          //start my code for breaker pop up
          if (
            (props.rndLaundary === 47 &&
              props.laundaryWashing === "connected") ||
            (props.rndLaundary === 48 &&
              props.laundaryLight01 === "connected") ||
            (props.rndLaundary === 49 && props.laundaryLight02 === "connected")
          ) {
            props.setLaundaryBreakerType("black");
            props.setIsLaundaryBreaker(false);
            console.log("kdsajf");
            exerciseNumber === 2 && SwalInitial(initialPopupText);
            dispatchCounter(increaseCouter());
          }
          // end my code for breaker pop up
        }
        //start my code for breaker pop up
        if (
          props.laundaryLight01 === "connected" &&
          props.laundaryLight02 === "connected" &&
          props.LaundaryWashing == "connected"
        ) {
          props.setLaundaryBreakerType("black");
          props.setIsLaundaryBreaker(false);
          console.log("kdsajf");
          exerciseNumber === 2 && SwalInitial(initialPopupText);
          dispatchCounter(increaseCouter());
        } else if (
          (props.rndLaundary === 47 && props.laundaryWashing === "connected") ||
          (props.rndLaundary === 48 && props.laundaryLight01 === "connected") ||
          (props.rndLaundary === 49 && props.laundaryLight02 === "connected")
        ) {
          props.setLaundaryBreakerType("black");
          props.setIsLaundaryBreaker(false);
          console.log("kdsajf");
          exerciseNumber === 2 && SwalInitial(initialPopupText);
          dispatchCounter(increaseCouter());
        }
      } else {
        // console.log("run else Six");
        props.setLaundaryBreakerType("red");
        props.setIsLaundaryBreaker(true);
      }
    } else {
      if (corruptDevice < 47 || corruptDevice > 49) {
        props.setLaundaryBreakerType("red");
        props.setIsLaundaryBreaker(true);
      } else if (
        (corruptDevice >= 47 || corruptDevice <= 49) &&
        ((corruptDevice === 47 &&
          allDisconnectedDevices.includes("laundaryWashing")) ||
          (corruptDevice === 48 &&
            allDisconnectedDevices.includes("laundaryLight01")) ||
          (corruptDevice === 49 &&
            allDisconnectedDevices.includes("laundaryLight02")))
      ) {
        props.setLaundaryBreakerType("red");
        props.setIsLaundaryBreaker(true);
      } else {
        exerciseNumber === 2 && SwalInitial(initialPopupText);
        dispatchCounter(increaseCouter());
      }
    }
    //end my code for breaker pop up
    console.log(
      props.laundaryLight01,
      props.laundaryLight02,
      props.LaundaryWashing
    );
  };

  const testModalText = {
    head: isDutchLocal ? "Goed zo!" : "Well done!",
    text: isDutchLocal
      ? "Je bent nu zover om de toets te maken"
      : "You are now ready to take the test",
    finish: isDutchLocal ? "Ga verder" : "Continue",
  };

  const redirectTest = () => {
    dispatch(setExerciseGate(3));
    window.location.href = "/mask-group";
  };

  const testModalHandler = () => {
    SwalTest(redirectTest, testModalText);
  };

  const redirect = () => {
    if (exerciseNumber === 2) {
      testModalHandler();
    } else {
      navigate("/result");
    }
  };

  const laundaryBreakerHandlerOn = () => {
    props.setLaundaryBreakerType("black");
    props.setIsLaundaryBreaker(false);
  };
  // ***********************************
  // FINISH
  // ***********************************

  const modalTexts = {
    text: popupText,
    head: sureText,
    continue: isDutchLocal
      ? exerciseNumber === 2 &&
        (!showFinishBtn || corruptGroupDevices - 1 + correctGroupDevices)
        ? "Ik snap dit"
        : "Nee"
      : exerciseNumber === 2
      ? "I understand"
      : "No",
    finish: isDutchLocal ? "Ja" : "Yes",
  };

  const confirmationText = isDutch
    ? "Weet je zeker dat je het spel wilt Afronden?"
    : "Are you sure you want to finish the game?";

  const finishBreakerHandler = () => {
    // FinishSwal();
    // setTimeout(() => {
    //   swalResult()
    // }, 500);

    // console.log("sakldfj");
    // navigate("/result");
    SwalResult(
      redirect,
      modalTexts,
      exerciseNumber === 3,
      exerciseNumber === 2 &&
        (!showFinishBtn || corruptGroupDevices - 1 + correctGroupDevices),
      testModalHandler
    );

    console.log(counter, "this is the breaker counter");

    const wrongPerOfBreakerHit = (counter / 10) * 100;
    const wrongPerOfDeviceHit = (counterDevice / 10) * 100;
    const wrongPerOfRemainingDevices = (disconnectedDevices / 48) * 100;
    const wrongDeviceAttempted =
      ((corruptAttemptedDevices + correctAttemptedDevices) / 10) * 100;
    //this is the average of wrong attempts
    const avgOfWrongProgress =
      (wrongPerOfBreakerHit +
        wrongPerOfDeviceHit +
        wrongPerOfRemainingDevices +
        wrongDeviceAttempted) /
      4;
    //now find the over all plus point of average in percentage
    const totalAvgProgress = 100 - avgOfWrongProgress;

    const newtotalAvgProgress = Math.floor(totalAvgProgress);

    console.log(newtotalAvgProgress);

    localStorage.setItem("totalResult", newtotalAvgProgress);
    localStorage.setItem("counter", counter);
    localStorage.setItem("counterDevice", counterDevice);
    localStorage.setItem("disconnectedDevices", disconnectedDevices);
    localStorage.setItem("finishGame", showFinishBtn);
    localStorage.setItem(
      "totalErrors",
      correctAttemptedDevices + corruptAttemptedDevices
    );

    // exerciseNumber === 3 && navigate("/result");

    // if (rand >= 1 && rand <= 49) {
    //start my code for breaker pop up
    // if (
    //   (props.completeRnd === 1 && props.toiletFan === "connected") ||
    //   (props.completeRnd === 2 && props.toiletLight == "connected") ||
    //   (props.completeRnd === 3 && props.hallLamp === "connected") ||
    //   (props.completeRnd === 4 && props.hallLight01 === "connected") ||
    //   (props.completeRnd === 5 && props.hallLight02 === "connected") ||
    //   (props.completeRnd === 6 && props.livingRadio === "connected") ||
    //   (props.completeRnd === 7 && props.livingLight01 === "connected") ||
    //   (props.completeRnd === 8 && props.livingAC === "connected") ||
    //   (props.completeRnd === 9 && props.livingLight03 === "connected") ||
    //   (props.rndKitchen === 10 && props.kitchenMixture === "connected") ||
    //   (props.rndKitchen === 11 && props.kitchenOven === "connected") ||
    //   (props.rndKitchen === 12 && props.kitchenLight01 === "connected") ||
    //   (props.rndKitchen === 13 && props.kitchenLight02 === "connected") ||
    //   (props.rndKitchen === 14 && props.kitchenLight03 === "connected") ||
    //   (props.rndKitchen === 15 && props.kitchenToster === "connected")
    // ) {
    //   // props.setFirstGroupBreakerType("black");
    //   // props.setIsFirstGroupBreaker(false);
    //   exerciseNumber === 2 && SwalInitial(initialPopupText);;
    // }
    // }
  };
  // console.log(props.kitchenBreakerType)

  // console.log(props.completeRnd,"-------------")
  //                       console.log(props.allCorruptDevice,"-------------wrong")

  // console.log(props.rndLaundary, "random laundary");
  // console.log(props.rndGroupFive, "random group five");
  // console.log(props.rndGroupFour, "random group four");
  // console.log(props.rndGroupThree, "random group three");
  // console.log(props.rndKitchen, "random group kitchen");
  // console.log(props.completeRnd, "random group first");
  // console.log(props.firstGroupBreakerType, "hello type");
  // console.log(props.completeCorruptDevice, "complete corrupt");

  // const breakerClickHandler = (val) => {
  //   if (val === 1) {
  //     groupFirstBreakerHandlerOff();
  //   }
  // };
  console.log(corruptGroup);

  console.log(breaker1, breaker2, breaker3, breaker4, breaker5, breaker6);

  const translateHandler = (e) => {
    setIsDutch(!isDutch);
    console.log(e.target.checked);
    localStorage.setItem("isDutch", e.target.checked);
    dispatch(changeLanguage());
  };

  const localLanguage = JSON.parse(localStorage.getItem("isDutch"));

  const breakerClickHandler = (val) => {
    if (val === 1) {
      groupFirstBreakerHandlerOn();
    } else if (val === 2) {
      kitchenBreakerHandlerOn();
    } else if (val === 3) {
      groupThreeBreakerHandlerOn();
    } else if (val === 4) {
      groupFourBreakerHandlerOn();
    } else if (val === 5) {
      groupFifthBreakerHandlerOn();
    } else if (val === 6) {
      laundaryBreakerHandlerOn();
    }
    if (val === corruptGroup) {
      // if (corruptBreakerAt tempted) {
      dispatch(increaseCouter());
      // }
      // dispatch(corruptBreakerAttemptedHandler());
    }
    if (val !== corruptGroup) {
      dispatch(increaseCouter());
    }
  };

  useEffect(() => {
    setIsDutch(localLanguage);
    dispatch(changeLanguage(localLanguage));
  }, [isDutch]);

  return (
    <div>
      <div className=" text-center">
        <div style={{ display: "none" }}>
          <ResultModel
            isModalOpen={props.isModalOpen}
            setIsModalOpen={props.setIsModalOpen}
            trial={props.groundFloorTrial}
            setTrial={props.setGroundFloorTrial}
            floor={"groundFloor"}
          />
        </div>
        {/* <div className="translate">
          <p>English</p>
          <input
            type="checkbox"
            checked={isDutch}
            onChange={translateHandler}
          />
          <p>Dutch</p>
        </div> */}
        <div className="set-position-translator">
          {<ChangeLanguageToggle />}
        </div>
        <div
          className="check-exercise-div"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/mask-group");
          }}
        >
          <Avator phase={"game"} />
        </div>

        <hr style={{ marginTop: "2%" }} />
        <div className="legend">
          {/* GROUP 1 */}
          <div className="text-start">
            <Link to="/ground-floor" className="set-link-color">
              {isDutchLocal ? "Begane Grond" : "Ground Floor"}
            </Link>
          </div>
          <div className="set-legend-text">
            {isDutchLocal ? <p>Groep&nbsp;1:</p> : <p>Group&nbsp;1:</p>}
            <p className="grp-detail">
              {isDutchLocal
                ? "Hal, Toilet, Woonkamer"
                : "Hall, Toilet, Living room"}
            </p>
          </div>
          {/* GROUP 2 */}
          <div className="set-legend-text">
            {isDutchLocal ? <p>Groep&nbsp;2:</p> : <p>Group&nbsp;2:</p>}
            <p className="grp-detail">{isDutchLocal ? "keuken" : "Kitchen"}</p>
          </div>
          {/* GROUP 3 */}
          <div className="text-start">
            <Link to="/first-floor" className="set-link-color">
              {isDutchLocal ? "Eerste Verdieping" : "First Floor"}
            </Link>
          </div>
          <div className="set-legend-text">
            {isDutchLocal ? <p>Groep&nbsp;3:</p> : <p>Group&nbsp;3:</p>}
            <p className="grp-detail">
              {isDutchLocal
                ? "Slaapkamer 01, Slaapkamer 02"
                : "Bedroom 01, Bedroom 02"}
            </p>
          </div>
          {/* GROUP 4 */}
          <div className="set-legend-text">
            {isDutchLocal ? <p>Groep&nbsp;4:</p> : <p>Group&nbsp;4:</p>}
            <p className="grp-detail">
              {isDutchLocal
                ? "Badkamer, Overloop, Slaapkamer 03"
                : "Hall, Bathroom, Bedroom 03"}
            </p>
          </div>
          <div className="text-start">
            <Link to="/attic" className="set-link-color">
              {isDutchLocal ? "Zolder" : "Attic Floor"}
            </Link>
          </div>
          {/* GROUP 5 */}
          <div className="set-legend-text">
            {isDutchLocal ? <p>Groep&nbsp;5:</p> : <p>Group&nbsp;5:</p>}
            <p className="grp-detail">
              {isDutchLocal
                ? "Logeerkamer, Overloop, Studeerkamer, Berging"
                : "hall, guest room, study room, storage room"}
            </p>
          </div>
          {/* GROUP 6 */}
          <div className="set-legend-text">
            {isDutchLocal ? <p>Groep&nbsp;6:</p> : <p>Group&nbsp;6:</p>}
            <p className="grp-detail">{isDutchLocal ? "Washok" : "laundry"}</p>
          </div>
          {/* END GROUP */}
        </div>
        <div className="set-main-flex-container" style={{ marginTop: "2rem" }}>
          <div
            className="meter-inner-img"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}${
                !isDutchLocal
                  ? "/images/meterGroup.png"
                  : "/dutch-images/breakers-15.png"
              })`,
            }}
          >
            <>
              {/* MAIN .................................................................. */}
              <div className="groupA">
                <div className="d-flex justify-content-center">
                  <>
                    {props.firstGroupBreakerType === "black" ? (
                      //  && props.completeRnd === props.allCorruptDevice
                      <button
                        className="group-btn position-Bath font-height-width btn-shadow"
                        onClick={groupFirstBreakerHandlerOff}
                        // onClick={() => breakerClickHandler(1)}
                      >
                        <img
                          src={breakerOffIMG}
                          alt=""
                          className="breakerImg"
                        />
                      </button>
                    ) : (
                      <button
                        className="group-btn position-Bath font-height-width btn-shadow"
                        onClick={() => breakerClickHandler(1)}
                      >
                        <img src={breakerOnIMG} alt="" className="breakerImg" />
                      </button>
                    )}
                  </>
                  <>
                    {
                      // ((props.rndKitchen) >= 10 && (props.rndKitchen) <= 15) ? (
                      props.kitchenBreakerType === "black" ? (
                        // && props.rndKitchen === props.kitchenCorruptDevice
                        <button
                          className="group-btn position-living font-height-width btn-shadow"
                          onClick={kitchenBreakerHandlerOff}
                        >
                          <img
                            src={breakerOffIMG}
                            alt=""
                            className="breakerImg"
                          />
                        </button>
                      ) : (
                        <button
                          className="group-btn position-living font-height-width btn-shadow"
                          onClick={() => breakerClickHandler(2)}
                        >
                          <img
                            src={breakerOnIMG}
                            alt=""
                            className="breakerImg"
                          />
                        </button>
                      )
                    }
                  </>
                  <>
                    {props.groupThreeBreakerType === "black" ? (
                      // && props.rndGroupThree === props.groupThreeCorruptDevice
                      <button
                        className="group-btn position-living font-height-width btn-shadow"
                        onClick={groupThreeBreakerHandlerOff}
                      >
                        <img
                          src={breakerOffIMG}
                          alt=""
                          className="breakerImg"
                        />
                      </button>
                    ) : (
                      <button
                        className="group-btn position-living font-height-width btn-shadow"
                        onClick={() => breakerClickHandler(3)}
                      >
                        <img src={breakerOnIMG} alt="" className="breakerImg" />
                      </button>
                    )}
                  </>
                </div>
              </div>

              {/* Groups row 2 .................................................................. */}
              <div className="groupB">
                <>
                  {props.groupFourBreakerType === "black" ? (
                    // && props.rndGroupFour === props.groupFourCorruptDevice
                    <button
                      className="group-btn position-Hall font-height-width  btn-shadow"
                      onClick={groupFourBreakerHandlerOff}
                    >
                      <img src={breakerOffIMG} alt="" className="breakerImg" />
                    </button>
                  ) : (
                    <button
                      className="group-btn position-Hall font-height-width  btn-shadow"
                      onClick={() => breakerClickHandler(4)}
                    >
                      <img src={breakerOnIMG} alt="" className="breakerImg" />
                    </button>
                  )}
                </>
                <>
                  {props.groupFiveBreakerType === "black" ? (
                    //old was // but new is &&
                    // || props.rndGroupFive === props.groupFiveCorruptDevice
                    <button
                      className="group-btn position-Hall font-height-width  btn-shadow"
                      onClick={groupFifthBreakerHandlerOff}
                    >
                      <img src={breakerOffIMG} alt="" className="breakerImg" />
                    </button>
                  ) : (
                    <button
                      className="group-btn position-Hall font-height-width  btn-shadow"
                      onClick={() => breakerClickHandler(5)}
                    >
                      <img src={breakerOnIMG} alt="" className="breakerImg" />
                    </button>
                  )}
                </>
                <>
                  {props.laundaryBreakerType === "black" ? (
                    // || props.rndLaundary === props.laundaryCorruptDevice
                    <button
                      className="group-btn position-Hall font-height-width  btn-shadow"
                      onClick={laundaryBreakerHandlerOff}
                    >
                      <img src={breakerOffIMG} alt="" className="breakerImg" />
                    </button>
                  ) : (
                    <button
                      className="group-btn position-Hall font-height-width  btn-shadow"
                      onClick={() => breakerClickHandler(6)}
                    >
                      <img src={breakerOnIMG} alt="" className="breakerImg" />
                    </button>
                  )}
                </>
              </div>
            </>
          </div>
        </div>
        <h3 className="set-floor-title">
          {" "}
          {isDutchLocal ? "Meterkast" : "House Breakers"}
        </h3>
        <hr />
      </div>
      {/* to open attic model */}
      {showAttic && (
        <AtticModel isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}

      {/* to open first floor model  */}

      {showFirstFloor && (
        <FirstFloorModel
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      {/* to open ground floor model  */}

      {/* {
        showGroundFloor && (
          <GroundFloorModel isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}/> 

        )
      } */}

      <div className="check-exercise-div d-none-btns-sidebar">
        <button
          className={
            btnHover === "attic"
              ? "btn-Check-Exercise btnHover"
              : "btn-Check-Exercise"
          }
          onClick={() => {
            // setShowAttic(true)
            navigate("/attic");
          }}
          onMouseEnter={() => setBtnHover("attic")}
          onMouseLeave={() => setBtnHover("")}
        >
          Attic
        </button>
      </div>
      <div className="check-exercise-div d-none-btns-sidebar">
        <button
          className={
            btnHover === "firstFloor"
              ? "btn-Check-Exercise btnHover"
              : "btn-Check-Exercise"
          }
          onClick={() => {
            // setshowFirstFloor(true)
            navigate("/first-floor");
          }}
          onMouseEnter={() => setBtnHover("firstFloor")}
          onMouseLeave={() => setBtnHover("")}
        >
          First Floor
        </button>
      </div>
      <div className="check-exercise-div d-none-btns-sidebar">
        <button
          className={
            btnHover === "groundFloor"
              ? "btn-Check-Exercise btnHover"
              : "btn-Check-Exercise"
          }
          style={{ background: "white", color: "#b41c1c" }}
          onClick={() => {
            // setshowGroundFloor(true)

            navigate("/ground-floor");
            // console.log("on ground floor");
          }}
          onMouseEnter={() => setBtnHover("groundFloor")}
          onMouseLeave={() => setBtnHover("")}
        >
          Ground Floor
        </button>
      </div>

      {
        <div className="set-position-bottom-finish">
          <button className="set-btn-finish" onClick={finishBreakerHandler}>
            {isDutchLocal ? "Ik ben klaar" : "I AM READY"}
          </button>
        </div>
      }
      <swalResult />
    </div>
  );
};

export default RightNavBar;
