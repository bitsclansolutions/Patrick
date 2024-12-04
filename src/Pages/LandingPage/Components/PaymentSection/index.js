import React from "react";
import "./paymentSection.css";
import PaymentCard from "./paymentCard";
import SectionsLayout from "../../../Components/Sectionslayout";
import CoffeeArtifact from "../../../Components/artifacts/coffee-artifact.PNG";
import { getTranslation } from "../../../../utils/getTranslation";
import { useSelector } from "react-redux";

function PaymentSection() {
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  return (
    <div className="payment-main-wrapper" id="pricing" >
      <div className="payment-section-wrapper">
        <p className="payment-heading">{getTranslation("upfrontCost", isDutch)}</p>
        <p className="payment-des">
        {getTranslation("upfrontCostDes", isDutch)}
        </p>
        <PaymentCard />
        <img src={CoffeeArtifact} alt="" className="coffee-artifact" />
      </div>
    </div>
  );
}

export default PaymentSection;
