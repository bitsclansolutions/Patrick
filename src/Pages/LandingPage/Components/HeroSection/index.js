import React from "react";
import "./heroSection.css";
import SectionsLayout from "../../../Components/Sectionslayout";
import WhiteCouldsBar from "../images/white-clouds-bar.PNG";
import VideoContainer from "../VideoContainer";
import CustomButton from "../../../Components/CustomButton";
import { ReactComponent as CloudsArtifact } from "../../../Components/artifacts/clouds-artifact.svg";
import FuseBoxArtifact from "../../../Components/artifacts/fuse-box-artifact.PNG";
import HeroSectionVideoBg from "../images/hero-section-video-bg.png"
function HeroSection() {
  return (
    // <SectionsLayout>
    <div className="hero-section-main">
      <div className="hero-section-wrapper">
        <div className="hero-section-right-wrapper">
          <p className="hero-heading">
            Empowering Personalized Education through <span>AI & ML in</span>{" "}
            Adaptive Learning
          </p>
          <p className="hero-des">
            <strong>Demeterkast</strong> is an innovative learning platform
            designed for children with cognitive challenges, utilizing
            cutting-edge Artificial Intelligence (AI) and Machine Learning (ML)
            to create personalized learning experiences.
          </p>
          <p className="hero-des">
            By understanding each child's unique learning style, Demeterkast
            adapts educational content in real-time, fostering growth and
            development in a supportive, engaging environment.
          </p>
          <p className="hero-des">
          With a focus on inclusivity, the platform empowers children to overcome challenges at their own pace while preparing them for academic success and beyond.

          </p>
          <CustomButton label="Start your free trial" type="solid" />
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
