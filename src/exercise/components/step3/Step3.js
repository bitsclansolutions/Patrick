import React from "react";
import { useSelector } from "react-redux";
import "./Step3.css";
import Popup from "../../utils/Popup";
import { Link } from "react-router-dom";
import ChangeLanguageToggle from "../../../utils/ChangeLanguageToggle";
import Video from "../../exercise-videos/stroom-uitgevalle.mp4";
import ExerciseName from "../../utils/ExerciseName";

const Step3 = () => {
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
      <ExerciseName />
      <div className="translator-exercise">
        <ChangeLanguageToggle />
      </div>
      <Popup opacity={6}>
        {/* <iframe
          width="100%"
          height="263"
          src="https://www.youtube.com/embed/R2211e3cKbc?si=XMRDNYJm5zLETtbA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}
        <video width="100%" controls>
          <source src={Video} type="video/mp4" />
        </video>
        <div className="popup-button">
          <Link to="/exercise-meter">
            {isDutch
              ? "klik op de deze knop om verder te gaan"
              : "Click here to continue"}
          </Link>
        </div>
      </Popup>
    </div>
  );
};

export default Step3;
