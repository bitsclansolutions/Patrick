import React from "react";
import "./overviewSection.css";
import SectionsLayout from "../../../Components/Sectionslayout";
import OverviewSectionImage from "../images/overview-section.PNG";
import WhiteCloudsBarOverview from "../images/white-clouds-bar-overview.PNG";
import { ReactComponent as StarsArtifact } from "../../../Components/artifacts/stars-artifact.svg";
import OvenArtifact from "../../../Components/artifacts/oven-artifact.PNG";
import { getTranslation } from "../../../../utils/getTranslation";
import { useSelector } from "react-redux";

function OverviewSection() {
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  return (
    <div className="overview-main-wrapper" id="about-us">
      <div className="overview-section-wrapper">
        <div className="overview-section-left-wrapper">
          <p className="overview-heading">{getTranslation("aboutUsHeading", isDutch)}</p>
          <p className="overview-des">
            {isDutch ? "Bij" : "At"} <strong>Demeterkast</strong>,{" "}
            {getTranslation("aboutUsDesOne", isDutch)}
          </p>
          <p className="overview-des">
          {getTranslation("aboutUsDesTwo", isDutch)}
          </p>
          <p className="overview-des">
          {getTranslation("aboutUsDesThree", isDutch)}
          </p>
        </div>
        <div className="overview-section-right-wrapper">
          <img src={OverviewSectionImage} className="right-side-image" />
        </div>

        <img
          src={WhiteCloudsBarOverview}
          className="white-clouds-bar-overview"
        />
        <div className="stars-artifact-wrapper">
          <StarsArtifact />
        </div>
        <img src={OvenArtifact} alt="" className="oven-artifact" />
      </div>
    </div>
  );
}

export default OverviewSection;
