import React, { useState } from "react";
import { ReactComponent as RoundTick } from "../../../Components/icons/round-tick.svg";
import { useSelector } from "react-redux";
import { getTranslation } from "../../../../utils/getTranslation";

function PaymentCard() {
  // State to manage the price
  const [isAnnual, setIsAnnual] = useState(false);
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  // Toggle the state when checkbox changes
  const handleToggle = () => {
    setIsAnnual((prev) => !prev);
  };

  return (
    <div className="payment-card-wrapper">
      <div className="payment-card-left-wrapper">
        <div className="payment-toggle-wrapper">
          <p>{getTranslation("monthly", isDutch)}</p>
          <input
            className="toggle-checkbox"
            type="checkbox"
            role="switch"
            onChange={handleToggle}
          />
          <p>{getTranslation("annually", isDutch)}</p>
        </div>

        <p className="payment-card-heading">
          {getTranslation("upfrontCost", isDutch)}
        </p>
        <p className="payment-card-des">
          {getTranslation("upfrontCostCardDes", isDutch)}
        </p>
      </div>
      <div className="payment-card-right-wrapper">
        <p className="payment-plan-heading">
          ${isAnnual ? "200" : "20"}{" "}
          <span>
            /{" "}
            {isAnnual
              ? getTranslation("annually", isDutch)
              : getTranslation("monthly", isDutch)}
          </span>
        </p>
        <p className="payment-objective-heading">
          {getTranslation("whatsIncluded", isDutch)}
        </p>
        <div className="payment-objective-wrapper">
          <div className="payment-objective">
            <RoundTick />
            <p>{getTranslation("whatsIncludedListOne", isDutch)}</p>
          </div>
          <div className="payment-objective">
            <RoundTick />
            <p>{getTranslation("whatsIncludedListTwo", isDutch)}</p>
          </div>
          <div className="payment-objective">
            <RoundTick />
            <p>{getTranslation("whatsIncludedListThree", isDutch)}</p>
          </div>
          <div className="payment-objective">
            <RoundTick />
            <p>{getTranslation("whatsIncludedListFour", isDutch)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
