import React from "react";
import "./contactUs.css";
import ContactUsImg from "../images/contact-us-img.PNG";
import DrillArtifact from "../../../Components/artifacts/drill-artifact.PNG";
import LightningArtifactTwo from "../../../Components/artifacts/lightning-artifact.PNG";


function ContactUs() {
  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-left-wrapper">
        <img src={ContactUsImg} />
      </div>
      <div className="contact-us-right-wrapper">
        <p>Ready to Kickstart a learning adventure?</p>
        <p>
          Join Demeterkast today and unlock personalized, AI-driven learning
          experiences designed to empower every child on their educational
          journey.
        </p>
        <button className="contact-us-btn">Contact Us</button>
      </div>

      <img src={DrillArtifact} alt="" className="drill-artifact"/>
      <img src={LightningArtifactTwo} alt="" className="lightning-artifact-two"/>

    </div>
  );
}

export default ContactUs;
