import React from "react";
import "./paymentSection.css";
import PaymentCard from "./paymentCard";
import SectionsLayout from "../../../Components/Sectionslayout";
import CoffeeArtifact from "../../../Components/artifacts/coffee-artifact.PNG";

function PaymentSection() {
  return (
    <div className="payment-main-wrapper">
      <div className="payment-section-wrapper">
        <p className="payment-heading">Upfront, Transparent Costs</p>
        <p className="payment-des">
          With Demeterkast, you get clear, straightforward pricing—no hidden
          fees, just exceptional value for a fully personalized learning
          platform.
        </p>
        <PaymentCard />
        <img src={CoffeeArtifact} alt="" className="coffee-artifact" />
      </div>
    </div>
  );
}

export default PaymentSection;
