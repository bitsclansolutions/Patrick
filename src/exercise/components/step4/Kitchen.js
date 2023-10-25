import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Kitchen.css";
import SmokeOn from "../../kitchen-items/SmookOn.png";
import MixerOn from "../../kitchen-items/mixerOn.png";
import MixerOff from "../../kitchen-items/mixerOff.png";
import BulbOn from "../../kitchen-items/bulbOn.png";
import BulbOff from "../../kitchen-items/bulboff.png";
import OvenOn from "../../kitchen-items/ovenOn.png";
import OvenOff from "../../kitchen-items/ovenOff.png";
import ToasterOn from "../../kitchen-items/toasterOn.png";
import ToasterOff from "../../kitchen-items/toasterOff.png";
import {
  decreaseExerciseCounter,
  increaseCouter,
  increaseExerciseCounter,
} from "../../../Redux/Action";

const Kitchen = () => {
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);
  const dispatch = useDispatch();
  const [smoke, setSmoke] = useState(true);
  const [mixer, setMixer] = useState(true);
  const [oven, setOven] = useState(true);
  const [toaster, setToaster] = useState(true);
  const [bulb1, setBulb1] = useState(true);
  const [bulb2, setBulb2] = useState(true);

  return;
};

export default Kitchen;
