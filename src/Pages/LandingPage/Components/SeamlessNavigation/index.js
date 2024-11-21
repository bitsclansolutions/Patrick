import React from "react";
import "./seamlessNavigation.css";
import SectionsLayout from "../../../Components/Sectionslayout";
import WhiteCloudBar from "../images/white-clouds-bar.PNG";
import InnerCards from "./innerCards";
import LightningArtifact from "../../../Components/artifacts/lightning-artifact.PNG";
import AcArtifact from "../../../Components/artifacts/ac-artifact.PNG";

function SeamlessNavigationSection() {
  return (
    <div className="seamless-main-wrapper">
      <div className="seamless-section-wrapper">
        <p className="seamless-heading">Seamless Navigation</p>
        <p className="seamless-des">
          At loream, we pride ourselves on delivering top-notch AI-driven
          business analytics. But don't just take our word for it. Hear what our
          satisfied users have to say.
        </p>

        <InnerCards />

        <img src={LightningArtifact} alt="" className="lightning-artifact" />
        <img src={AcArtifact} alt="" className="ac-artifact" />
        <img src={WhiteCloudBar} alt="" className="seamless-clouds-img" />
      </div>
    </div>
  );
}

export default SeamlessNavigationSection;
