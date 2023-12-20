import React from "react";
import "./MaskGroup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../404/ErrorPage";
import Avator from "../Components/Avator";
import FrontScreenModel from "../Components/FrontScreenModel";
import { SwalStarter } from "../Components/SwalModules";
import { useDispatch, useSelector } from "react-redux";
import ChangeLanguageToggle from "../../utils/ChangeLanguageToggle";
import { setExercise, setExerciseGate } from "../../Redux/Action";
import AudioPlayer from "../../utils/AudioPlayer";
import audio10 from "../../audios/audio10.m4a";
// import AtticModel from "../../PopUpModels/AtticModel";
// import FirstFloorModel from "../../PopUpModels/FirstFloorModel";
// import GroundFloorModel from "../../PopUpModels/GroundFloorModel"
const MaskGroup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [btnPhase, setBtnPhase] = useState("attic");
  const [firstBtn, setfirstBtn] = useState("attic");
  const [showAttic, setShowAttic] = useState(false);
  // const [showFirstFloor,setshowFirstFloor] = useState(false)
  // const [showGroundFloor,setshowGroundFloor] = useState(false)
  // const showModal = () => {
  //   props.setIsModalOpen2(true);
  // };

  const dispatch = useDispatch();

  const exerciseGateNumber = useSelector(
    (state) => state.ExerciseReducer.exerciseGate
  );

  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);
  const exerciseNumber = useSelector((state) => state.ExerciseReducer.exercise);

  console.log(exerciseNumber);

  const popupHtml =
    exerciseGateNumber === 3
      ? `
    <p style="font-size: 20px;margin-bottom: 6px;">${
      isDutch
        ? "Ergens in huis is een zekering uitgeschakeld. <br/> Los dit probleem op zoals je geleerd hebt."
        : "Somewhere in the house a fuse has been switched off. Solve this problem as you have been taught."
    } </p>
    <div className="legend">
    <table border="1" width="100%">
      <tr>
        <td colspan="2" style="text-align: left;padding-left: 14px;"><p style="margin-bottom: 0px; font-size: 18px;color:#B41D1D;"><strong style="border-bottom: 2px solid #B41D1D;">${
          isDutch ? "Begane Grond" : "Ground Floor"
        }  </strong></p></td>
      </tr>
      <tr class="d-flex">
        <td style="width: 50%;text-align: left;padding-left: 14px;margin-top: 18px;">
          <div className="set-legend-text" style="margin-bottom: 1px solid red;">
            <p style="margin-bottom: 0px;font-size: 18px;color:#B41D1D;line-height: 6px;"><sup><strong>
            ${isDutch ? "Groep&nbsp;1" : "Group&nbsp;1"} </strong></sup></p>
            <p style="margin-bottom: 0px; font-size: 16px;"><small>${
              isDutch ? "Hal, Toilet, Woonkamer" : "Hall, Toilet, Living room"
            } </small></p>
            </div>
        </td>
        <td style="width: 50%;text-align: left;padding-left: 14px;margin-top: 18px;">
        <div className="set-legend-text">
        <p style="margin-bottom: 0px;font-size: 18px;color:#B41D1D;line-height: 6px;"><strong><sup>${
          isDutch ? "Groep&nbsp;2" : "Group&nbsp;2"
        }</sup></strong></p>
        <p style="margin-bottom: 0px; font-size: 16px;"><small>${
          isDutch ? "Keuken" : "Kitchen"
        }</small></p>
          </div>
          </td>
          </tr>
      <tr>
        <td colspan="2" style="text-align: left;padding-left: 14px;"><p style="margin-bottom: 0px; font-size: 18px;color:#B41D1D;"><strong style="border-bottom: 2px solid #B41D1D;">${
          isDutch ? "Eerste verdieping" : "First Floor"
        } </strong></p></td>
        </tr>
        <tr class="d-flex">
        <td style="width: 50%;text-align: left;padding-left: 14px;margin-top: 18px;">
        <div className="set-legend-text">
        <p style="margin-bottom: 0px;font-size: 18px;color:#B41D1D;line-height: 6px;"><sup><strong>${
          isDutch ? "Groep&nbsp;3" : "Group&nbsp;3"
        }</strong></sup></p>
        <p style="margin-bottom: 0px; font-size: 16px;"><small>${
          isDutch ? "Slaapkamer 01, Slaapkamer 02" : "Bedroom 01, Bedroom 02"
        }</small></p>
          </div>
        </td>
        <td style="width: 50%;text-align: left;padding-left: 14px;margin-top: 18px;">
        <div className="set-legend-text">
        <p style="margin-bottom: 0px;font-size: 18px;color:#B41D1D;line-height: 6px;"><strong><sup>${
          isDutch ? "Groep&nbsp;4" : "Group&nbsp;4"
        }</sup></strong></p>
        <p style="margin-bottom: 0px; font-size: 16px;"><small>${
          isDutch
            ? "Badkamer, Overloop, Slaapkamer 03"
            : "Hall, Bathroom, Bedroom 03"
        }</small></p>
          </div>
          </td>
      </tr>

      <tr>
        <td colspan="2" style="text-align: left;padding-left: 14px;"><p style="margin-bottom: 0px; font-size: 18px;color:#B41D1D;"><strong style="border-bottom: 2px solid #B41D1D;">${
          isDutch ? "Zolder" : "Attic Floor"
        }</strong></p></td>
      </tr>
      <tr class="d-flex">
      <td style="width: 50%;text-align: left;padding-left: 14px;margin-top: 18px;">
          <div className="set-legend-text">
          <p style="margin-bottom: 0px;font-size: 18px;color:#B41D1D;line-height: 6px;"><sup><strong>${
            isDutch ? "Groep&nbsp;5" : "Group&nbsp;5"
          }</strong></sup></p>
            <p style="margin-bottom: 0px; font-size: 16px;"><small>${
              isDutch
                ? "Logeerkamer, Overloop, Studeerkamer, Berging"
                : "Hall, Guest room, Study room, Storage room"
            }</small></p>
            </div>
            </td>
            <td style="width: 50%;text-align: left;padding-left: 14px;margin-top: 18px;">
            <div className="set-legend-text">
            <p style="margin-bottom: 0px;font-size: 18px;color:#B41D1D;line-height: 6px;"><strong><sup>${
              isDutch ? "Groep&nbsp;6" : "Group&nbsp;6"
            }</sup></strong></p>
            <p style="margin-bottom: 0px; font-size: 16px;"><small>${
              isDutch ? "Washok" : "Laundry"
            }</small></p>
            </div>
            </td>
            </tr>
            </table>
            </div>
            <p style="font-size: 20px;margin-bottom: 0px; margin-top: 6px;">${
              isDutch
                ? "Als je klaar bent druk je op de knop <br/> “Ik ben klaar” "
                : "You have to disconnect all devices of the group then you can on the breaker and connect all the devices one by one to check which device is defected.</p>"
            }`
      : `<div style="font-size: 15px" ><p>Ergens in huis is een zekering uitgeschakeld. <br/>
            In deze oefening zitten er meerdere ruimtes
            op dezelfde groep.
            </p><p>In dit geval moet je de stroom in meerdere
            ruimtes controleren en eventueel in of
            uitschakelen.
            </p><p><b>Kijk daarom goed in het overzicht welke
            ruimtes op dezelfde groep zitten!</b></p><div className="legend">
    <table border="1" width="100%">
      <tr>
        <td colspan="2" style="text-align: left;padding-left: 14px;"><p style="margin-bottom: 0px; font-size: 16px;color:#B41D1D;"><strong style="border-bottom: 2px solid #B41D1D;">${
          isDutch ? "Begane Grond" : "Ground Floor"
        }  </strong></p></td>
      </tr>
      <tr class="d-flex">
        <td style="width: 50%;text-align: left;padding-left: 14px;margin-top: 18px;">
          <div className="set-legend-text" style="margin-bottom: 1px solid red;">
            <p style="margin-bottom: 0px;font-size: 16px;color:#B41D1D;line-height: 6px;"><sup><strong>
            ${isDutch ? "Groep&nbsp;1" : "Group&nbsp;1"} </strong></sup></p>
            <p style="margin-bottom: 0px; font-size: 16px;"><small>${
              isDutch ? "Hal, Toilet, Woonkamer" : "Hall, Toilet, Living room"
            } </small></p>
            </div>
        </td>
        <td style="width: 50%;text-align: left;padding-left: 14px;margin-top: 18px;">
        <div className="set-legend-text">
        <p style="margin-bottom: 0px;font-size: 16px;color:#B41D1D;line-height: 6px;"><strong><sup>${
          isDutch ? "Groep&nbsp;2" : "Group&nbsp;2"
        }</sup></strong></p>
        <p style="margin-bottom: 0px; font-size: 16px;"><small>${
          isDutch ? "Keuken" : "Kitchen"
        }</small></p>
          </div>
          </td>
          </tr>
      <tr>
        <td colspan="2" style="text-align: left;padding-left: 14px;"><p style="margin-bottom: 0px; font-size: 16px;color:#B41D1D;"><strong style="border-bottom: 2px solid #B41D1D;">${
          isDutch ? "Eerste verdieping" : "First Floor"
        } </strong></p></td>
        </tr>
        <tr class="d-flex">
        <td style="width: 50%;text-align: left;padding-left: 14px;margin-top: 18px;">
        <div className="set-legend-text">
        <p style="margin-bottom: 0px;font-size: 16px;color:#B41D1D;line-height: 6px;"><sup><strong>${
          isDutch ? "Groep&nbsp;3" : "Group&nbsp;3"
        }</strong></sup></p>
        <p style="margin-bottom: 0px; font-size: 16px;"><small>${
          isDutch ? "Slaapkamer 01, Slaapkamer 02" : "Bedroom 01, Bedroom 02"
        }</small></p>
          </div>
        </td>
        <td style="width: 50%;text-align: left;padding-left: 14px;margin-top: 18px;">
        <div className="set-legend-text">
        <p style="margin-bottom: 0px;font-size: 16px;color:#B41D1D;line-height: 6px;"><strong><sup>${
          isDutch ? "Groep&nbsp;4" : "Group&nbsp;4"
        }</sup></strong></p>
        <p style="margin-bottom: 0px; font-size: 16px;"><small>${
          isDutch
            ? "Badkamer, Overloop, Slaapkamer 03"
            : "Hall, Bathroom, Bedroom 03"
        }</small></p>
          </div>
          </td>
      </tr>

      <tr>
        <td colspan="2" style="text-align: left;padding-left: 14px;"><p style="margin-bottom: 0px; font-size: 16px;color:#B41D1D;"><strong style="border-bottom: 2px solid #B41D1D;">${
          isDutch ? "Zolder" : "Attic Floor"
        }</strong></p></td>
      </tr>
      <tr class="d-flex">
      <td style="width: 50%;text-align: left;padding-left: 14px;margin-top: 18px;">
          <div className="set-legend-text">
          <p style="margin-bottom: 0px;font-size: 16px;color:#B41D1D;line-height: 6px;"><sup><strong>${
            isDutch ? "Groep&nbsp;5" : "Group&nbsp;5"
          }</strong></sup></p>
            <p style="margin-bottom: 0px; font-size: 16px;"><small>${
              isDutch
                ? "Logeerkamer, Overloop, Studeerkamer, Berging"
                : "Hall, Guest room, Study room, Storage room"
            }</small></p>
            </div>
            </td>
            <td style="width: 50%;text-align: left;padding-left: 14px;margin-top: 18px;">
            <div className="set-legend-text">
            <p style="margin-bottom: 0px;font-size: 16px;color:#B41D1D;line-height: 6px;"><strong><sup>${
              isDutch ? "Groep&nbsp;6" : "Group&nbsp;6"
            }</sup></strong></p>
            <p style="margin-bottom: 0px; font-size: 16px;"><small>${
              isDutch ? "Washok" : "Laundry"
            }</small></p>
            </div>
            </td>
            </tr>
            </table>
            </div><p style="margin-bottom : 0">Als je klaar bent druk je op de blauwe knop <br/>
            “Ik ben klaar”</p></div>
            <div><audio src="../../audios/audio10.m4a" autoplay></audio></div>`;

  const popupText = {
    title: isDutch ? "Opdracht" : "User Task",
    html: popupHtml,
    okay: isDutch ? "Ik snap dit" : "I understand",
  };

  return (
    <>
      {/* <div style={{display:'none'}}>
      <FrontScreenModel 
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      />
    </div> */}

      <div className="error-page">
        <ErrorPage />
      </div>
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/MaskGroupIMG.png"
          })`,
          height: "100vh",
          width: "auto",
          position: "relative",
        }}
        className="main-mask-div"
      >
        <p className="exercise-label">
          {exerciseGateNumber === 1 && (isDutch ? "Oefening 1" : "Exercise 1")}
          {exerciseGateNumber === 2 && (isDutch ? "Oefening 2" : "Exercise 2")}
          {exerciseGateNumber === 3 && (isDutch ? "Toets" : "IQ Test")}
        </p>
        <div
          style={{
            position: "absolute",
            top: "2%",
            width: "100%",
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            padding: "2px 30px",
          }}
        >
          <Avator phase={"home"} />
          <ChangeLanguageToggle color="black" />
        </div>

        <div id="clouds">
          <div class="cloud x1"></div>
          <div class="cloud x2"></div>
          <div class="cloud x3"></div>
          <div class="cloud x4"></div>
          <div class="cloud x5"></div>
          <div class="cloud x6"></div>
        </div>

        <div className="div-btn-01-maskGroup">
          <button
            // className={firstBtn === "attic" ? 'btn-01-maskGroup' : "btn-maskGroup mb-4 "}
            className={"btn-maskGroup set-btn-mask-btn-open boom-bum"}
            onMouseEnter={() => {
              setBtnPhase("attic");
              setfirstBtn("");
            }}
            onMouseLeave={() => setBtnPhase("")}
            onClick={() => {
              if (exerciseGateNumber === 1) {
                dispatch(setExercise(1));
                navigate("/exercise-meter");
              } else if (exerciseGateNumber === 2) {
                // setShowAttic(true)
                dispatch(setExercise(2));
                navigate("/ground-floor");
                SwalStarter(popupText);
                localStorage.setItem("state", JSON.stringify(-4));
              } else if (exerciseGateNumber === 3) {
                // setShowAttic(true)
                dispatch(setExercise(3));
                navigate("/ground-floor");
                SwalStarter(popupText);
                localStorage.setItem("state", JSON.stringify(-4));
              }
            }}
          >
            Open!
          </button>
          <div className="d-flex">
            {/* start my changes from 21/12/2022..................................... */}
            {/* <div
              className="mask-line"
              style={{
                borderTop:
                  btnPhase === "attic"
                    ? "14px solid white"
                    : "14px solid #055dad",
              }}
            ></div>  */}
            {/* end my changes from 21/12/2022..................................... */}

            {/* to open attic model */}
            {/* {
        showAttic && (
          <AtticModel isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}/> 

        )
      } */}
            {/* to open first floor model  */}

            {/* {
        showFirstFloor && (
          <FirstFloorModel isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}/> 

        )
      } */}

            {/* to open ground floor model  */}

            {/* {
        showGroundFloor && (
          <GroundFloorModel isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}/> 

        )
      } */}
            {/* start my changes from 21/12/2022..................................... */}

            {/* <button
              className={firstBtn === "attic" ? 'btn-01-maskGroup  mb-4' : "btn-maskGroup mb-4 "}
              onMouseEnter={() => {
                setBtnPhase("attic")
                setfirstBtn('')
              }}
            
              onMouseLeave={()=> setBtnPhase("")}
              onClick={() => {
                // setShowAttic(true)
                navigate("/attic");
              }}
            >
              Attic
            </button> */}
            {/* end my changes from 21/12/2022..................................... */}
          </div>
          <div className="d-flex">
            {/* start my changes from 21/12/2022..................................... */}

            {/* <div
              className="mask-line"
              style={{
                borderTop:
                  btnPhase === "1stFloor"
                    ? "14px solid white"
                    : "14px solid #055dad",
              }}
            ></div> */}
            {/* end my changes from 21/12/2022..................................... */}
            {/* start my changes from 21/12/2022..................................... */}

            {/* <button
              className="btn-maskGroup mb-4"
              onMouseEnter={() => {
                setBtnPhase("1stFloor")
                setfirstBtn('')
              }}
              onMouseLeave={()=> setBtnPhase("")}
              onClick={() => {

                navigate("/first-floor");
              }}
           
            >
              First Floor
            </button> */}
            {/* end my changes from 21/12/2022..................................... */}
          </div>
          <div className="d-flex">
            {/* start my changes from 21/12/2022..................................... */}
            {/* 
            <div
              className="mask-line"
              style={{
                borderTop:
                  btnPhase === "groundFloor"
                    ? "14px solid white"
                    : "14px solid #055dad",
              }}
            ></div>
            <button
              className="btn-maskGroup mb-4"
              onMouseEnter={() => {
                setBtnPhase("groundFloor")
                setfirstBtn('')
              }}
              onMouseLeave={()=> setBtnPhase("")}
              onClick={() => {
           
                navigate("/ground-floor");
              }}
             
            >
              Ground Floor
            </button> */}
            {/* end my changes from 21/12/2022..................................... */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MaskGroup;
