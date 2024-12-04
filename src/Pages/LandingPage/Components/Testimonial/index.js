import React from "react";
import "./testimonial.css";
import SectionsLayout from "../../../Components/Sectionslayout";
import TestimonialSlider from "./testimonialSlider";
import FanArtifact from "../../../Components/artifacts/fan-artifact-two.PNG";
import FuseBoxArtifact from "../../../Components/artifacts/fuse-box-one-artifact.PNG";
import { useSelector } from "react-redux";
import { getTranslation } from "../../../../utils/getTranslation";

function TestimonialSection() {
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  return (
    <div className="testimonial-main-wrapper">
      <div className="testimonial-wrapper">
        <p className="testimonial-heading">
        {getTranslation("clientSatisfaction", isDutch)}
        </p>
        <p className="testimonial-des">
        {getTranslation("clientSatisfactionDes", isDutch)}

        </p>
        <TestimonialSlider />
        <img src={FanArtifact} alt="" className="fan-artifact-two" />
        <img src={FuseBoxArtifact} alt="" className="fuse-box-one-artifact" />
      </div>
    </div>
  );
}

export default TestimonialSection;
