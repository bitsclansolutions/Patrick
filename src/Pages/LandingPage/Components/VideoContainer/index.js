import React, { useState } from "react";
import "./videoContainer.css";
import { ReactComponent as PlayIcon } from "../../../Components/icons/play-icon.svg";
import Video from "../../../../exercise/exercise-videos/stroom-uitgevalle.mp4";

function VideoContainer() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
            Close
          </button>
        </div>
      ) : (
        <div className="play-video-wrapper" onClick={handlePlayClick}>
          <PlayIcon />
          <div className="play-btn-text-wrapper">
            <p className="play-btn-text-one">Watch introduce video</p>
            <p className="play-btn-text-last">
              3 mins . <span>Play video</span>{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoContainer;
