import React from "react";
import "./contactUs.css";
import ContactUsImg from "../images/contact-us-img.PNG";
import DrillArtifact from "../../../Components/artifacts/drill-artifact.PNG";
import LightningArtifactTwo from "../../../Components/artifacts/lightning-artifact.PNG";
import { useSelector } from "react-redux";
import { getTranslation } from "../../../../utils/getTranslation";

function ContactUs() {
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-left-wrapper">
        <img src={ContactUsImg} />
      </div>
      <div className="contact-us-right-wrapper">
        <p> {getTranslation("readyToKickStart", isDutch)}</p>
        <p>{getTranslation("readyToKickStartDes", isDutch)}</p>
        <button
          className="contact-us-btn"
          onClick={() => scrollToSection("contact")}
        >
          {" "}
          {getTranslation("contactUs", isDutch)}
        </button>
      </div>

      <img src={DrillArtifact} alt="" className="drill-artifact" />
      <img
        src={LightningArtifactTwo}
        alt=""
        className="lightning-artifact-two"
      />
    </div>
  );
}

export default ContactUs;
