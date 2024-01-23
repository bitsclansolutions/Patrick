import React, { useEffect, useRef, useState } from "react";

const AudioPlayer = ({ file }) => {
  const myRef = useRef();

  const [playAudio, setPlayAudio] = useState(false);
  // useEffect(() => {
  //   myRef.current.play();
  //   setPlayAudio(true);
  // }, []);

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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        color: "#ffc000",
      }}
    >
      <audio ref={myRef} onEnded={audioEndedHandler} src={file}></audio>

      <i
        class={`fa-solid ${playAudio ? "fa-volume-high" : "fa-volume-xmark"}`}
        onClick={startAudio}
      ></i>
      <p
        style={{
          margin: "0",
          fontWeight: "700",
          fontSize: "14px",
          color: "#075bac",
        }}
      >
        Luister
      </p>
    </div>
  );
};

export default AudioPlayer;
