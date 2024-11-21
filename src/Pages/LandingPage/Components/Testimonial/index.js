import React from "react";
import "./testimonial.css";
import SectionsLayout from "../../../Components/Sectionslayout";
import TestimonialSlider from "./testimonialSlider";
import FanArtifact from "../../../Components/artifacts/fan-artifact-two.PNG";
import FuseBoxArtifact from "../../../Components/artifacts/fuse-box-one-artifact.PNG";

function TestimonialSection() {
  return (
    <div className="testimonial-main-wrapper">
      <div className="testimonial-wrapper">
        <p className="testimonial-heading">
          Delivering Unmatched Client Satisfaction
        </p>
        <p className="testimonial-des">
          At Demeterkast, we prioritize every child’s unique journey, ensuring
          tailored learning solutions that exceed expectations and foster
          lasting growth.
        </p>
        <TestimonialSlider />
        <img src={FanArtifact} alt="" className="fan-artifact-two" />
        <img src={FuseBoxArtifact} alt="" className="fuse-box-one-artifact" />
      </div>
    </div>
  );
}

export default TestimonialSection;
