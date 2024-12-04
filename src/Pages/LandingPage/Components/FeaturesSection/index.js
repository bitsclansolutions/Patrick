import React from "react";
import "./featuresSection.css";
import SectionsLayout from "../../../Components/Sectionslayout";
import FeacturesSectionImage from "../images/features-section.PNG";
import CircuitArtifact from "../../../Components/artifacts/circuit-artifact.PNG";
import CustomButton from "../../../Components/CustomButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTranslation } from "../../../../utils/getTranslation";
function FeaturesSection() {
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  return (
    <div className="features-main-wrapper" id="features">
      <div className="features-section-wrapper">
        <div className="features-section-left-wrapper">
          <img src={FeacturesSectionImage} className="features-left-image" />
        </div>
        <div className="features-section-right-wrapper">
          <p className="features-heading">
            {getTranslation("featuresAndBenefits", isDutch)}
          </p>

          <div className="feature-objective">
            <p className="feature-objective-heading">
              {getTranslation("aiDrivenPersonalization", isDutch)}
            </p>
            <p className="feature-objective-des">
              {getTranslation("aiDrivenPersonalizationDes", isDutch)}
            </p>
          </div>
          <div className="feature-objective">
            <p className="feature-objective-heading">
              {getTranslation("mlPoweredInsights", isDutch)}
            </p>
            <p className="feature-objective-des">
              {getTranslation("mlPoweredInsightsDes", isDutch)}
            </p>
          </div>

          <div className="feature-objective">
            <p className="feature-objective-heading">
              {getTranslation("multiDeviceCompatibility", isDutch)}
            </p>
            <p className="feature-objective-des">
              {getTranslation("multiDeviceCompatibilityDes", isDutch)}
            </p>
          </div>

          <div className="feature-objective">
            <p className="feature-objective-heading">
              {getTranslation("engagingLearningExperience", isDutch)}
            </p>
            <p className="feature-objective-des">
              {getTranslation("engagingLearningExperienceDes", isDutch)}
            </p>
          </div>

          <div className="feature-objective">
            <p className="feature-objective-heading">
              {" "}
              {getTranslation("progressMonitoring", isDutch)}
            </p>
            <p className="feature-objective-des">
              {getTranslation("progressMonitoringDes", isDutch)}
            </p>
          </div>
          <Link to={"/select-name"}>
            <CustomButton type={"solid"} label={"Demo"} />
          </Link>
        </div>

        <img src={CircuitArtifact} alt="" className="circuit-artifact" />
      </div>
    </div>
  );
}

export default FeaturesSection;
