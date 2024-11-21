import React from "react";
import { ReactComponent as DrillIcon } from "./icons/drill.svg";
import { ReactComponent as BulbIcon } from "./icons/bulb.svg";
import { ReactComponent as AcIcon } from "./icons/ac.svg";
import { ReactComponent as StoveIcon } from "./icons/stove.svg";
import { ReactComponent as FanIcon } from "./icons/fan.svg";
import { ReactComponent as ElecticityIcon } from "./icons/electicity.svg";

function InnerCards() {
  const data = [
    {
      id: 1,
      icon: <DrillIcon />,
      text: "At loream, we pride ourselves.",
    },
    {
      id: 2,
      icon: <BulbIcon />,
      text: "At loream, we pride ourselves.",
    },
    {
      id: 3,
      icon: <AcIcon />,
      text: "At loream, we pride ourselves.",
    },
    {
      id: 4,
      icon: <StoveIcon />,
      text: "At loream, we pride ourselves.",
    },
    {
      id: 5,
      icon: <FanIcon />,
      text: "At loream, we pride ourselves.",
    },
    {
      id: 6,
      icon: <ElecticityIcon />,
      text: "At loream, we pride ourselves.",
    },
    {
      id: 7,
      icon: <ElecticityIcon />,
      text: "At loream, we pride ourselves.",
    },
    {
      id: 8,
      icon: <ElecticityIcon />,
      text: "At loream, we pride ourselves.",
    },
    {
      id: 9,
      icon: <ElecticityIcon />,
      text: "At loream, we pride ourselves.",
    },
    {
      id: 10,
      icon: <ElecticityIcon />,
      text: "At loream, we pride ourselves.",
    },
  ];
  return (
    <div className="inner-cards-wrapper">
      {data?.map((item) => (
        <div key={item?.id} className="inner-card">
          {item?.icon}

          <p className="inner-card-text">{item?.text}</p>
        </div>
      ))}
    </div>
  );
}

export default InnerCards;
