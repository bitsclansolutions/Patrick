import React, { useEffect, useRef, useState } from "react";

const AudioPlayer = ({ file }) => {
  const myRef = useRef();

  const [playAudio, setPlayAudio] = useState(true);
  useEffect(() => {
    myRef.current.play();
    setPlayAudio(true);
  }, []);

  const startAudio = () => {
    if (!playAudio) {
      myRef.current.play();
    } else {
      myRef.current.pause();
    }

    setPlayAudio(!playAudio);
  };

  const audioEndedHandler = () => {
    myRef.current.pause();
    setPlayAudio(false);
  };
  return (
    <div>
      <audio ref={myRef} onEnded={audioEndedHandler} src={file}></audio>

      <i
        class={`fa-solid ${playAudio ? "fa-volume-high" : "fa-volume-xmark"}`}
        onClick={startAudio}
      ></i>
    </div>
  );
};

export default AudioPlayer;
