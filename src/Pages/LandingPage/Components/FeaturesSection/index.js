import React from "react";
import "./featuresSection.css";
import SectionsLayout from "../../../Components/Sectionslayout";
import FeacturesSectionImage from "../images/features-section.PNG";
import CircuitArtifact from "../../../Components/artifacts/circuit-artifact.PNG";
import CustomButton from "../../../Components/CustomButton";
import { Link } from "react-router-dom";
function FeaturesSection() {
  return (
    <div className="features-main-wrapper">
      <div className="features-section-wrapper">
        <div className="features-section-left-wrapper">
          <img src={FeacturesSectionImage} className="features-left-image" />
        </div>
        <div className="features-section-right-wrapper">
          <p className="features-heading">Features and Benefits</p>

          <div className="feature-objective">
            <p className="feature-objective-heading">
              AI-Driven Personalization
            </p>
            <p className="feature-objective-des">
              Our platform uses AI to track and analyze each student's progress,
              creating a personalized learning plan that adapts in real-time.
            </p>
          </div>
          <div className="feature-objective">
            <p className="feature-objective-heading">
              Machine Learning-Powered Insights
            </p>
            <p className="feature-objective-des">
              With ML algorithms, we offer detailed reports and insights for
              educators and parents, helping them understand each child's unique
              learning journey.
            </p>
          </div>

          <div className="feature-objective">
            <p className="feature-objective-heading">
              Multi-Device Compatibility
            </p>
            <p className="feature-objective-des">
              Students can access the platform from any device, ensuring
              seamless learning continuity.
            </p>
          </div>

          <div className="feature-objective">
            <p className="feature-objective-heading">
              Multi-Device Compatibility
            </p>
            <p className="feature-objective-des">
              Students can access the platform from any device, ensuring
              seamless learning continuity.
            </p>
          </div>

          <div className="feature-objective">
            <p className="feature-objective-heading">
              Engaging Learning Experience
            </p>
            <p className="feature-objective-des">
              With interactive content and challenges, children remain engaged
              and motivated throughout their learning path.
            </p>
          </div>

          <div className="feature-objective">
            <p className="feature-objective-heading">Progress Monitoring</p>
            <p className="feature-objective-des">
              Parents and teachers can easily track performance, identifying
              strengths and areas for improvement.
            </p>
          </div>
          <Link to={"/select-name"}>
            <CustomButton type={"solid"} label={"For Demo"} />
          </Link>
        </div>

        <img src={CircuitArtifact} alt="" className="circuit-artifact" />
      </div>
    </div>
  );
}

export default FeaturesSection;
