import React from "react";
import "./faqSection.css";
import SectionsLayout from "../../../Components/Sectionslayout";
import FaqImage from "../images/faq-img.png";
import FaqAccordion from "./faqAccordion";
import BreakerArtifact from "../../../Components/artifacts/breaker-artifact.PNG"

function FaqSection() {
  return (
    <div className="faq-main-wrapper">
      <div className="faq-section-wrapper">
        <div className="faq-section-left-wrapper">
          <p className="faq-section-heading">Frequently asked questions</p>
          {/* <p className="faq-section-des">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has been the industry's standard.
          </p> */}

          <img src={FaqImage} className="faq-section-img" />
        </div>
        <div className="faq-section-right-wrapper">
          <FaqAccordion />
        </div>

        <img src={BreakerArtifact} alt="" className="breaker-artifact"/>
      </div>
    </div>

  );
}

export default FaqSection;
