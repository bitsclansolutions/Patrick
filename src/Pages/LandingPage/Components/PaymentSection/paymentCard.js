import React, { useState } from "react";
import { ReactComponent as RoundTick } from "../../../Components/icons/round-tick.svg";

function PaymentCard() {
  // State to manage the price
  const [isAnnual, setIsAnnual] = useState(false);

  // Toggle the state when checkbox changes
  const handleToggle = () => {
    setIsAnnual((prev) => !prev);
  };

  return (
    <div className="payment-card-wrapper">
      <div className="payment-card-left-wrapper">
        <div className="payment-toggle-wrapper">
          <p>Monthly</p>
          <input
            className="toggle-checkbox"
            type="checkbox"
            role="switch"
            onChange={handleToggle}
          />
          <p>Annually</p>
        </div>

        <p className="payment-card-heading">Upfront, Transparent Costs</p>
        <p className="payment-card-des">
          Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
          vel venenatis eu sit massa volutpat. Lorem ipsum dolor sit amet
          consectetur adipiscing elit dolor posuere vel venenatis eu sit massa
          volutpat.
        </p>
      </div>
      <div className="payment-card-right-wrapper">
        <p className="payment-plan-heading">
          ${isAnnual ? "200" : "20"} <span>/ {isAnnual ? "annually" : "monthly"}</span>
        </p>
        <p className="payment-objective-heading">What’s included</p>
        <div className="payment-objective-wrapper">
          <div className="payment-objective">
            <RoundTick />
            <p>All analytics features</p>
          </div>
          <div className="payment-objective">
            <RoundTick />
            <p>Up to 1,000,000 tracked visits</p>
          </div>
          <div className="payment-objective">
            <RoundTick />
            <p>Premium support</p>
          </div>
          <div className="payment-objective">
            <RoundTick />
            <p>Up to 10 team members</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
