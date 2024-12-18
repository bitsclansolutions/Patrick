import React, { useRef } from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../404/ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import { userinfo } from "../../Redux/Action";
import ChangeLanguageToggle from "../../utils/ChangeLanguageToggle";
// import audio from "../../audios/Audio-1.m4a";
import { Howl } from "howler";

const Home = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const myRef = useRef();

  const [userName, setUserName] = useState("");
  const [errUserName, setErrUserName] = useState("");
  const [phase, setPhase] = useState("first");
  const [smallBtn, setSmallBtn] = useState("next");
  const [largeBtn, setLargeBtn] = useState("IQ test");
  const [audioPlay, setAudioPlay] = useState(false);

  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  // const playAudioHandler = () => {
  //   if (!audioPlay) {
  //     console.log("play audio");
  //     audio1.play();
  //   } else {
  //     console.log("pause audio");
  //     audio1.pause();
  //   }
  //   setAudioPlay(!audioPlay);
  // };

  const startAudio = () => {
    if (!audioPlay) {
      myRef.current.play();
    } else {
      myRef.current.pause();
    }

    setAudioPlay(!audioPlay);
  };

  useEffect(() => {
    setErrUserName("");
  }, [userName]);

  const userHandler = (e) => {
    e.preventDefault();
    // const regName = /^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/;
    const regName = /^[a-zA-Z]/;

    dispatch(userinfo(userName));
    //start my code from here
    if (userName !== "") {
      if (regName.test(userName)) {
        setPhase("second");
        navigate("/select-option");
      } else {
        setErrUserName("* Name must contain First, Middle, and Last name");
      }
    } else {
      setErrUserName(isDutch ? "* Naam is vereist" : "* Name is Required");
    }
  };

  return (
    <>
      <div className="error-page">
        <ErrorPage />
      </div>

      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/HomeIMG.png"})`,
          height: "100vh",
          width: "auto",
        }}
        className="main-home-div"
      >
        <div id="clouds">
          <div class="cloud x1"></div>
          <div class="cloud x2"></div>
          <div class="cloud x3"></div>
          <div class="cloud x4"></div>
          <div class="cloud x5"></div>
          <div class="cloud x6"></div>
          <div class="cloud x7"></div>
          <div class="cloud x8"></div>
        </div>
        <div style={{ textAlign: "center", position: "fixed" }}>
          <div class="home-language-toggle">
            <ChangeLanguageToggle color="black" />
          </div>
          {phase === "first" ? (
            <>
              <form onSubmit={userHandler}>
                <div>
                  <label
                    style={{ marginLeft: "-27px" }}
                    className="home-heading"
                    htmlFor="name"
                  >
                    {isDutch ? "Vul je naam in" : "Enter Your Name"}
                  </label>
                </div>
                <div className="d-flex">
                  <input
                    className="home-input"
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    type="text"
                    placeholder={
                      isDutch ? "Vul je naam in" : "Enter Your Name?"
                    }
                  />
                  <button
                    type="button"
                    onClick={() => startAudio()}
                    className="btn-blue set-opacity-btn"
                    style={{
                      paddingRight: "10px",
                      padding: "4px 12px 1px 12px",
                      width: "65px",
                    }}
                  >
                    <i
                      className={`fa-solid  ${
                        audioPlay ? "fa-microphone" : "fa-microphone-slash"
                      }`}
                      style={{ fontSize: "23px" }}
                    ></i>
                  </button>
                </div>
                <div
                  style={{
                    color: "red",
                    marginLeft: "-27px",
                    fontSize: "13px",
                    marginTop: "2px",
                  }}
                >
                  {errUserName}
                </div>
                <div>
                  <button
                    className="btn-blue set-opacity-btn"
                    style={{
                      padding: "8px 30px",
                      marginTop: "6%",
                      marginLeft: "-27px",
                    }}
                    type="submit"
                  >
                    {isDutch ? "Volgende" : "Next"}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <div>
                <label
                  style={{ marginLeft: "-27px" }}
                  className="home-heading"
                  htmlFor="name"
                >
                  Select Between Two Option
                </label>
              </div>
              <div className="d-flex">
                {/* <input
                className="home-input"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="Enter Your Name?"
              /> */}
                {/* <button
                  className={
                    largeBtn === "exercise"
                      ? "btn-blue set-opacity-btn mx-3"
                      : "btn-white mx-3"
                  }
                  style={{ padding: "14px 30px", cursor: "not-allowed" }}
                  onClick={() => setLargeBtn("exercise")}
                >
                  Do you want to move for an exercise?
                </button> */}
                <button
                  className={
                    largeBtn === "IQ test"
                      ? "btn-blue set-opacity-btn mx-3"
                      : "btn-white mx-3"
                  }
                  style={{ padding: "14px 30px" }}
                  onClick={() => setLargeBtn("IQ test")}
                >
                  Do you want to perform a IQ test?
                </button>
                <button
                  onClick={() => startAudio()}
                  className="btn-blue set-opacity-btn"
                  style={{ paddingRight: "10px", padding: "4px 12px 1px 12px" }}
                >
                  <i
                    className={`fa-solid fa-microphone-slash ${"fa-microphone"}`}
                    style={{ fontSize: "23px" }}
                  ></i>
                </button>
              </div>
              <div
                style={{
                  color: "red",
                  marginLeft: "-27px",
                  fontSize: "13px",
                  marginTop: "2px",
                }}
              >
                {errUserName}
              </div>
              <div className="d-flex justify-content-evenly">
                <button
                  className={
                    smallBtn === "back"
                      ? "btn-blue set-opacity-btn"
                      : "btn-white"
                  }
                  onMouseEnter={() => setSmallBtn("back")}
                  style={{
                    padding: "8px 30px",
                    marginTop: "6%",
                  }}
                  onClick={() => setPhase("first")}
                >
                  Back
                </button>
                <button
                  className={
                    smallBtn === "next"
                      ? "btn-blue set-opacity-btn"
                      : "btn-white"
                  }
                  onMouseEnter={() => setSmallBtn("next")}
                  style={{
                    padding: "8px 30px",
                    marginTop: "6%",
                  }}
                  onClick={() => {
                    if (largeBtn === "IQ test") {
                      navigate("/mask-group");
                    } else {
                      alert("Select exercise");
                    }
                  }}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
