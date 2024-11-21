import React from "react";
import "./overviewSection.css";
import SectionsLayout from "../../../Components/Sectionslayout";
import OverviewSectionImage from "../images/overview-section.PNG";
import WhiteCloudsBarOverview from "../images/white-clouds-bar-overview.PNG";
import { ReactComponent as StarsArtifact } from "../../../Components/artifacts/stars-artifact.svg";
import OvenArtifact from "../../../Components/artifacts/oven-artifact.PNG";

function OverviewSection() {
  return (
    <div className="overview-main-wrapper">
      <div className="overview-section-wrapper">
        <div className="overview-section-left-wrapper">
          <p className="overview-heading">About Us</p>
          <p className="overview-des">
            At <strong>Demeterkast</strong>, we believe that every child
            deserves access to high-quality, tailored education.
          </p>
          <p className="overview-des">
            Our mission is to empower children with cognitive challenges by
            providing a safe and adaptive learning space that evolves with their
            needs.
          </p>
          <p className="overview-des">
            Using advanced AI and ML technologies, we have crafted an intuitive
            platform that supports both teachers and parents, offering insights
            into a child’s learning progress. We are committed to creating a
            future where no child is left behind, regardless of their cognitive
            abilities.
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
