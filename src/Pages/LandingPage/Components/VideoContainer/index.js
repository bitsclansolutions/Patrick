import React, { useState } from "react";
import "./videoContainer.css";
import { ReactComponent as PlayIcon } from "../../../Components/icons/play-icon.svg";
import Video from "../../../../exercise/exercise-videos/stroom-uitgevalle.mp4";
import { useSelector } from "react-redux";
import { getTranslation } from "../../../../utils/getTranslation";

function VideoContainer() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  const handlePlayClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseClick = () => {
    setIsVideoOpen(false);
  };

  return (
    <div
      className="video-wrapper"
      style={{
        backgroundImage: isVideoOpen
          ? "none"
          : "",
      }}
    >
      {isVideoOpen ? (
        <div className="video-player-container">
          <video width="100%" controls autoPlay>
            <source src={Video} type="video/mp4" />
          </video>
          <button className="close-btn" onClick={handleCloseClick}>
          {getTranslation("close", isDutch)}
          </button>
        </div>
      ) : (
        <div className="play-video-wrapper" onClick={handlePlayClick}>
          <PlayIcon />
          <div className="play-btn-text-wrapper">
            <p className="play-btn-text-one">{getTranslation("watchIntroduceVideo", isDutch)}</p>
            <p className="play-btn-text-last">
              3 mins . <span>{getTranslation("playVideo", isDutch)}</span>{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoContainer;
