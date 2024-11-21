import React from "react";
import "./learningSection.css";
import SectionsLayout from "../../../Components/Sectionslayout";
import LearningSlider from "./LearningSlider";
import FanArtifact from "../../../Components/artifacts/fan-artifact-one.PNG";
import WireJointArtifact from "../../../Components/artifacts/wire-joint-artifact.PNG";

function LearningMaterialSection() {
  return (
    <div className="learning-mat-main-wrapper">
      <div className="learning-mat-wrapper">
        <p className="learning-mat-heading">Learning Materials</p>
        <p className="learning-mat-des">
          Demeterkast offers a diverse range of AI-curated learning materials
          specifically designed for children with cognitive challenges. These
          resources include interactive quizzes, engaging videos, and
          step-by-step instructional guides that adapt to the learner's pace.
          Our library continuously updates, using ML algorithms to identify the
          most effective resources based on user data. Whether it’s foundational
          literacy skills or complex problem-solving exercises, our materials
          cater to all learning needs.
        </p>
        <LearningSlider />

        <img src={FanArtifact} alt="" className="fan-artifact" />
        <img src={WireJointArtifact} alt="" className="wire-joint-artifact" />
      </div>
    </div>
  );
}

export default LearningMaterialSection;
