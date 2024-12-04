import React from "react";
import "./learningSection.css";
import SectionsLayout from "../../../Components/Sectionslayout";
import LearningSlider from "./LearningSlider";
import FanArtifact from "../../../Components/artifacts/fan-artifact-one.PNG";
import WireJointArtifact from "../../../Components/artifacts/wire-joint-artifact.PNG";
import { getTranslation } from "../../../../utils/getTranslation";
import { useSelector } from "react-redux";

function LearningMaterialSection() {
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  return (
    <div className="learning-mat-main-wrapper">
      <div className="learning-mat-wrapper">
        <p className="learning-mat-heading">
          {" "}
          {getTranslation("learningMaterial", isDutch)}
        </p>
        <p className="learning-mat-des">
        {getTranslation("learningMaterialDesOne", isDutch)}
          <br />
          {getTranslation("learningMaterialDesTwo", isDutch)}
        </p>
        <LearningSlider />

        <img src={FanArtifact} alt="" className="fan-artifact" />
        <img src={WireJointArtifact} alt="" className="wire-joint-artifact" />
      </div>
    </div>
  );
}

export default LearningMaterialSection;
