import React, { useState } from "react";
import { ReactComponent as PaymentBasicIcon } from "../../../Components/icons/payment-basic-icon.svg";
import { ReactComponent as PackageBlueIcon } from "../../../Components/icons/package-blue-tick.svg";
import { ReactComponent as PackageWhiteIcon } from "../../../Components/icons/package-white-tick-icon.svg";

const PackageCard = ({
  name,
  price,
  priceDes,
  description,
  features,
  isPopular,
  icon: Icon,
  onHoverEnter,
  onHoverLeave,
  onClick,
  isDisabled,
  isLoading,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="single-package-wrapper"
      onMouseEnter={() => {
        setHovered(true);
        onHoverEnter && onHoverEnter();
      }}
      onMouseLeave={() => {
        setHovered(false);
        onHoverLeave && onHoverLeave();
      }}
    >
      <div className="package-head-wrapper">
        {Icon && <Icon />}
        <p className="package-heading">{name}</p>
      </div>

      <div className="package-des">{description}</div>
      <p className="package-price">
        <span>{price}</span>
        {priceDes}
      </p>

      <div className="package-objective-wrapper">
        <p className="package-objective-heading">What’s included</p>
        <div className="objectives-wrapper">
          {features.map((feature, index) => (
            <div key={index} className="single-objective">
              {hovered ? <PackageWhiteIcon /> : <PackageBlueIcon />}
              <p className="single-objective-text">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      <button onClick={onClick} disabled={isDisabled} className="package-button">Get Started</button>
      {isPopular && <button className="popular-button">Popular</button>}
    </div>
  );
};

export default PackageCard;
