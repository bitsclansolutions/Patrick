import React from "react";
import "./heroSection.css";
import SectionsLayout from "../../../Components/Sectionslayout";
import WhiteCouldsBar from "../images/white-clouds-bar.PNG";
import VideoContainer from "../VideoContainer";
import CustomButton from "../../../Components/CustomButton";
import { ReactComponent as CloudsArtifact } from "../../../Components/artifacts/clouds-artifact.svg";
import FuseBoxArtifact from "../../../Components/artifacts/fuse-box-artifact.PNG";
import HeroSectionVideoBg from "../images/hero-section-video-bg.png";
import { getTranslation } from "../../../../utils/getTranslation";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function HeroSection() {
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);
  const navigate = useNavigate();
  return (
    // <SectionsLayout>
    <div className="hero-section-main">
      <div className="hero-section-wrapper">
        <div className="hero-section-right-wrapper">
          <p className="hero-heading">
            {getTranslation("mainHeadingOne", isDutch)}{" "}
            <span>{getTranslation("mainHeadingBlue", isDutch)}</span>{" "}
            {getTranslation("mainHeadingTwo", isDutch)}
          </p>
          <p className="hero-des">
            <strong>Demeterkast</strong> {getTranslation("mainDesOne", isDutch)}
          </p>
          <p className="hero-des">{getTranslation("mainDesTwo", isDutch)}</p>
          <p className="hero-des">{getTranslation("mainDesThree", isDutch)}</p>
          <CustomButton
            onClick={() => navigate("/select-name")}
            label={getTranslation("startFreeTrial", isDutch)}
            type="solid"
          />
        </div>
        <div className="hero-section-left-wrapper">
          <VideoContainer />
        </div>
        <img src={WhiteCouldsBar} className="clouds-bar" />
        <div className="cloud-artifact-wrapper">
          <CloudsArtifact />
        </div>
        <img src={FuseBoxArtifact} alt="" className="fuse-box-artifact" />
      </div>
    </div>
    // </SectionsLayout>
  );
}

export default HeroSection;
