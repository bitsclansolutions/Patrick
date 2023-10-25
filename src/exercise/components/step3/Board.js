import React from "react";
import { useSelector } from "react-redux";
import Highlight from "../../utils/Highlight";
import Popup from "../../utils/Popup";
import "./Board.css";
import { Link } from "react-router-dom";

const Board = () => {
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%) url(${
          process.env.PUBLIC_URL
        }${
          !isDutch
            ? "/exercise-images/Screenshot 2023-10-20 220310.png"
            : "/exercise-images/hall.png"
        })`,
        height: "100vh",
        width: "100vw",
      }}
      className={
        isDutch
          ? "kitchen-main-div-exercise-dutch"
          : "kitchen-main-div-exercise-eng"
      }
    >
      <Highlight bottom={-5} width="20%" left={-1} opacity={70} />
      <Popup bottom={15} left={20}>
        <p className="popup-text">
          In this board you can see that power group2 is switched off and
          changed color.
        </p>
        <div className="popup-button">
          <Link to="/exercise-devices">Click here to continue</Link>
        </div>
      </Popup>
    </div>
  );
};

export default Board;
