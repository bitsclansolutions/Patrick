import React from "react";
import "./MaskGroup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../404/ErrorPage";
import Avator from "../Components/Avator";
import FrontScreenModel from "../Components/FrontScreenModel";
import { SwalStarter } from "../Components/SwalModules";
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
        <div style={{ position: "absolute", right: "2%", top: "2%" }}>
          <Avator phase={"home"} />
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
              // setShowAttic(true)
              navigate("/ground-floor");
              SwalStarter();
              localStorage.setItem("state", JSON.stringify(-4));
            }}
          >
            Open !
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
