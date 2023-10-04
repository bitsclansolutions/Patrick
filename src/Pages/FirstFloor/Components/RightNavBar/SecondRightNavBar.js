import React from "react";
import Meter from "../images/Meter.png";
import meterGroup from "../images/meterGroup.png";
import breakerOffIMG from "../images/breakerOffIMG.png";
import breakerOnIMG from "../images/breakerOnIMG.png";
import Swal from "sweetalert2";
import beep from "../SoundEffects/beep.mp3";
import hurray from "../SoundEffects/hurray.wav";
import { useEffect } from "react";
import "./SecondRightNavBar.css";
import useSound from "use-sound";
import { useLocation, useNavigate } from "react-router-dom";
import ResultModel from "../../../Components/ResultModel";
import Avator from "../../../Components/Avator";
import { resultFirstFloor } from "../../../../Redux/Action";
import { useDispatch } from "react-redux";
import { useState } from "react";
import AtticModel from "../../../../PopUpModels/AtticModel";
// import FirstFloorModel from "../../../../PopUpModels/FirstFloorModel";
import GroundFloorModel from "../../../../PopUpModels/GroundFloorModel"
import {
  SwalBreakerOn,
  SwalHurray,
  SwalInitial,
} from "../../../Components/SwalModules";
import { isHurray } from "../../../../Redux/Action";
import FrontScreenModel from "../../../Components/FrontScreenModel";

const SecondRightNavBar = (props) => {
  const [showAttic,setShowAttic] = useState(false)
  const [showFirstFloor,setshowFirstFloor] = useState(false)
  const [showGroundFloor,setshowGroundFloor] = useState(false)


  const dispatch = useDispatch();
  let navigate = useNavigate();
  const location = useLocation()

  const [btnHover, setBtnHover] = useState("");

  // living One section breaker .......................................................................................
  const [beepSound] = useSound(beep);
  const [hurraySound] = useSound(hurray);
  // useEffect(() => {
  //   if (props.livingOneBreakerType === "red") {
  //     beepSound();
  //   }
  // }, [props.livingOneBreakerType]);

  // useEffect(() => {
  //   if (props.livingTwoBreakerType === "red") {
  //     beepSound();
  //   }
  // }, [props.livingTwoBreakerType]);
  useEffect(()=>{
    dispatch(isHurray(false)); 
  },[])
  const firstAssignmentPass = () => {
    dispatch(isHurray(true));
    hurraySound();

    setTimeout(() => {
      dispatch(isHurray(false));
    }, 4000);

    setTimeout(() => {
      SwalHurray("one", "three");
    }, 30);

    setTimeout(() => {
      // props.setBreaker("livingTwo");
      // props.setGamePhase("livingTwo");
      props.setLivingOneBreakerType("black");
      props.setIsLivingOneBreaker(false);
    }, 3000);
  };

  const livingOneBreakerHandlerOff = () => {
    if (
      props.rndLivingOne === 1 &&
      props.livingOneLignt01 === "disconnect" &&
      props.livingOneLignt02 === "connected" &&
      props.livingOneFan === "connected" &&
      // props.livingOneAC === "connected" &&
      props.livingOneLignt03 === "connected" &&
      props.livingOneTV === "connected"
    ) {
      firstAssignmentPass();
    }
    if (
      props.rndLivingOne === 2 &&
      props.livingOneLignt01 === "connected" &&
      props.livingOneLignt02 === "disconnect" &&
      props.livingOneFan === "connected" &&
      // props.livingOneAC === "connected" &&
      props.livingOneLignt03 === "connected" &&
      props.livingOneTV === "connected"
    ) {
      firstAssignmentPass();
    }
    if (
      props.rndLivingOne === 3 &&
      props.livingOneLignt01 === "connected" &&
      props.livingOneLignt02 === "connected" &&
      props.livingOneLignt03 === "disconnect" &&
      props.livingOneFan === "connected" &&
     
      props.livingOneTV === "connected"
    ) {
      firstAssignmentPass();
    }
    if (
      props.rndLivingOne === 4 &&
      props.livingOneLignt01 === "connected" &&
      props.livingOneLignt02 === "connected" &&
      props.livingOneLignt03 === "connected" &&
      props.livingOneFan === "disconnect" &&
      props.livingOneTV === "connected"
    ) {
      firstAssignmentPass();
    }
    if (
      props.rndLivingOne === 5 &&
      props.livingOneLignt01 === "connected" &&
      props.livingOneLignt02 === "connected" &&
      props.livingOneFan === "connected" &&
     
      props.livingOneLignt03 === "connected" &&
      props.livingOneTV === "disconnect"
    ) {
      firstAssignmentPass();
    }
   

    if (props.livingOneCorruptDevice === props.rndLivingOne) {
      SwalInitial();
      props.setIsLivingOneBreaker(false);
    } else {
      props.setLivingOneBreakerType("red");
      props.setIsLivingOneBreaker(true);
      if (
        props.livingOneLignt01 === "disconnect" &&
        props.livingOneLignt03 === "disconnect" &&
        props.livingOneLignt02 === "disconnect" &&
        props.livingOneFan === "disconnect" &&
        props.livingOneTV === "disconnect"
      ) {
        SwalBreakerOn();
      }
 //start my code for breaker pop up
 if(
  (props.rndLivingOne === 1 && props.livingOneLignt01 === "connected") || 
 (props.rndLivingOne === 2 && props.livingOneLignt02 =="connected" )   ||
 (props.rndLivingOne ===3 &&   props.livingOneLignt03 === "connected" )   ||
 (props.rndLivingOne ===4 &&  props.livingOneFan =="connected" )   ||
 (props.rndLivingOne ===5  &&    props.livingOneTV =="connected")  
 
 )
 {
  props.setLivingOneBreakerType("black");
  props.setIsLivingOneBreaker(false);
  SwalInitial()
}
// end my code for breaker pop up

    }
    //start my code for breaker pop up 
 if (
  props.livingOneLignt01 === "connected" &&
  props.livingOneLignt03 === "connected" &&
  props.livingOneLignt02 =="connected" &&
  props.livingOneFan =="connected" &&
  props.livingOneTV =="connected"
  

) {
  props.setLivingOneBreakerType("black");
  props.setIsLivingOneBreaker(false);
  SwalInitial()

}
 
//end my code for breaker pop up

  };

  const livingOneBreakerHandlerOn = () => {
    props.setLivingOneBreakerType("black");
    props.setIsLivingOneBreaker(false);
  };

  // living Two section breaker .......................................................................................

  const secondAssignmentPass = () => {
    dispatch(isHurray(true));
    hurraySound();

    setTimeout(() => {
      dispatch(isHurray(false));
    }, 4000);

    setTimeout(() => {
      SwalHurray("two", "three");
    }, 30);

    setTimeout(() => {
      // props.setBreaker("toilet");
      // props.setGroupFirstFloor("GroupTwo");
      // props.setGamePhaseGroup4("toilet");
      props.setLivingTwoBreakerType("black");
      props.setIsLivingTwoBreaker(false);
    }, 3000);
  };

  // useEffect(() => {
  //   if (props.livingTwoBreakerType === "red") {
  //     beepSound();
  //   }
  // }, [props.livingTwoBreakerType]);

  // useEffect(() => {
  //   if (props.livingTwoBreakerType === "red") {
  //     beepSound();
  //   }
  // }, [props.livingTwoBreakerType]);

  const livingTwoBreakerHandlerOff = () => {
    if (
      props.rndLivingTwo === 1 &&
      props.livingTwoLignt01 === "disconnect" &&
      props.livingTwoFan === "connected" &&
      props.livingTwoLignt02 === "connected" &&
      props.livingTwoSmallLamp === "connected"
    ) {
      secondAssignmentPass();
    }
    if (
      props.rndLivingTwo === 2 &&
      props.livingTwoLignt01 === "connected" &&
      props.livingTwoFan === "disconnect" &&
      props.livingTwoLignt02 === "connected" &&
      props.livingTwoSmallLamp === "connected"
    ) {
      secondAssignmentPass();
    }
    if (
      props.rndLivingTwo === 3 &&
      props.livingTwoLignt01 === "connected" &&
      props.livingTwoFan === "connected" &&
      props.livingTwoLignt02 === "disconnect" &&
      props.livingTwoSmallLamp === "connected"
    ) {
      secondAssignmentPass();
    }
    if (
      props.rndLivingTwo === 4 &&
      props.livingTwoLignt01 === "connected" &&
      props.livingTwoFan === "connected" &&
      props.livingTwoLignt02 === "connected" &&
      props.livingTwoSmallLamp === "disconnect"
    ) {
      secondAssignmentPass();
    }

    if (props.livingTwoCorruptDevice === props.rndLivingTwo) {
      SwalInitial();
      props.setIsLivingTwoBreaker(false);
    } else {
      props.setLivingTwoBreakerType("red");
      props.setIsLivingTwoBreaker(true);
      if (
        props.livingTwoLignt01 === "disconnect" &&
        props.livingTwoSmallLamp === "disconnect" &&
        props.livingTwoLignt02 === "disconnect" &&
        props.livingTwoFan === "disconnect"
      ) {
        SwalBreakerOn();
      }
        //start my code for breaker pop up
if(
  ( props.rndLivingTwo === 1 &&  props.livingTwoLignt01 === "connected") || 
  (props.rndLivingTwo === 2 &&  props.livingTwoFan =="connected"    )   ||
 ( props.rndLivingTwo ===3 && props.livingTwoLignt02 =="connected" )    ||
 ( props.rndLivingTwo ===4  && props.livingTwoSmallLamp === "connected")   
  
  )
  {
   props.setLivingTwoBreakerType("black");
   props.setIsLivingTwoBreaker(false);
   SwalInitial()
 }
 // end my code for breaker pop up
    }
    //start my code for breaker pop up 
 if (
  props.livingTwoLignt01 === "connected" &&
  props.livingTwoSmallLamp === "connected" &&
  props.livingTwoLignt02 =="connected" &&
  props.livingTwoFan =="connected"   

) {
  props.setLivingTwoBreakerType("black");
  props.setIsLivingTwoBreaker(false);
  SwalInitial()

}

//end my code for breaker pop up

  };
        



  

  const livingTwoBreakerHandlerOn = () => {
    props.setLivingTwoBreakerType("black");
    props.setIsLivingTwoBreaker(false);
  };

  // toilet section breaker .......................................................................................

  // useEffect(() => {
  //   if (props.toiletBreakerType === "red") {
  //     beepSound();
  //   }
  // }, [props.toiletBreakerType]);

  // useEffect(() => {
  //   if (props.hallBreakerType === "red") {
  //     beepSound();
  //   }
  // }, [props.hallBreakerType]);

  // useEffect(() => {
  //   if (props.livingBreakerType === "red") {
  //     beepSound();
  //   }
  // }, [props.livingBreakerType]);

  const thirdAssignmentPass = () => {
    dispatch(isHurray(true));
    hurraySound();

    setTimeout(() => {
      dispatch(isHurray(false));
    }, 4000);

    setTimeout(() => {
      SwalHurray("one", "Four");
    },30);

    setTimeout(() => {
      // props.setBreaker("livingRoom");
      // props.setGroupFirstFloor("GroupTwo");
      // props.setGamePhaseGroup4("livingRoom");
      props.setToiletBreakerType("black");
      props.setIsToiletBreaker(false);
    }, 3000);
  };

  const toiletBreakerHandlerOff = () => {
    // for sending on next level code ................
    if (
      props.rndToilet === 1 &&
      props.toiletLight === "disconnect" &&
      props.toiletLight02 === "connected" &&
      props.toiletFan === "connected" &&
      props.toiletLight03 === "connected"
    ) {
      thirdAssignmentPass();
    }
    if (
      props.rndToilet === 2 &&
      props.toiletLight === "connected" &&
      props.toiletLight02 === "disconnect" &&
      props.toiletFan === "connected" &&
      props.toiletLight03 === "connected"
    ) {
      thirdAssignmentPass();
    }
    if (
      props.rndToilet === 3 &&
      props.toiletLight === "connected" &&
      props.toiletLight02 === "connected" &&
      props.toiletFan === "disconnect" &&
      props.toiletLight03 === "connected"
    ) {
      thirdAssignmentPass();
    }
    if (
      props.rndToilet === 4 &&
      props.toiletLight === "connected" &&
      props.toiletLight02 === "connected" &&
      props.toiletFan === "connected" &&
      props.toiletLight03 === "disconnect"
    ) {
      thirdAssignmentPass();
    }

    if (props.toiletCorruptDevice === props.rndToilet) {
      SwalInitial();
      props.setIsToiletBreaker(false);
    } else {
      props.setToiletBreakerType("red");
      props.setIsToiletBreaker(true);
      if (
        props.toiletFan === "disconnect" &&
        props.toiletLight === "disconnect" &&
        props.toiletLight02 === "disconnect" &&
        props.toiletLight03 === "disconnect"
      ) {
        SwalBreakerOn();
      }

      //start my code for breaker pop up
if(
  ( props.rndToilet === 1 &&  props.toiletLight === "connected" ) || 
  (props.rndToilet === 2 &&  props.toiletLight02 =="connected")   ||
  (props.rndToilet ===3  &&  props.toiletFan === "connected" )   ||
  (props.rndToilet ===4  && props.toiletLight03 =="connected"   )   
  
  )
  {
   props.setToiletBreakerType("black");
   props.setIsToiletBreaker(false);
   SwalInitial()
 
 }
 // end my code for breaker pop up
    }

      //start my code for breaker pop up 
 if (
  props.toiletFan === "connected" &&
  props.toiletLight === "connected" &&
  props.toiletLight02 =="connected" &&
  props.toiletLight03 =="connected"   

) {
  props.setToiletBreakerType("black");
  props.setIsToiletBreaker(false);
  SwalInitial()

}
  
//end my code for breaker pop up

  };

  const toiletBreakerHandlerOn = () => {
    props.setToiletBreakerType("black");
    props.setIsToiletBreaker(false);
  };

  // living section Breaker   bed room group 4...........................................................................................
  const fourAssignmentPass = () => {
    dispatch(isHurray(true));
    hurraySound();

    setTimeout(() => {
      dispatch(isHurray(false));
    }, 4000);

    setTimeout(() => {
      SwalHurray("two", "Four");
    }, 30);
    setTimeout(() => {
      // props.setBreaker("hall");
      // props.setGroupFirstFloor("GroupTwo");
      // props.setGamePhaseGroup4("hall");
      props.setToiletBreakerType("black");
      props.setIsToiletBreaker(false);
    }, 3000);
  };

 


  const livingBreakerHandlerOff = () => {
    if (
      props.rndLiving === 1 &&
      props.livingLight01 === "disconnect" &&
      // props.livingAC === "connected" &&
      props.livingLight02 === "connected" &&
      props.livingSilingFan === "connected"
    ) {
      fourAssignmentPass();
    }
    if (
      props.rndLiving === 2 &&
      props.livingLight01 === "connected" &&
      // props.livingAC === "disconnect" &&
      props.livingLight02 === "disconnect" &&
      props.livingSilingFan === "connected"
    ) {
      fourAssignmentPass();
    }
    if (
      props.rndLiving === 3 &&
      props.livingLight01 === "connected" &&
      // props.livingAC === "connected" &&
      props.livingLight02 === "connected" &&
      props.livingSilingFan === "disconnect"
    ) {
      fourAssignmentPass();
    }
    // if (
    //   props.rndLiving === 4 &&
    //   props.livingLight01 === "connected" &&
    //   // props.livingAC === "connected" &&
    //   props.livingLight02 === "connected" &&
    //   props.livingSilingFan === "disconnect"
    // ) {
    //   fourAssignmentPass();
    // }

    if (props.livingCorruptDevice === props.rndLiving) {
      SwalInitial();
      props.setIsLivingBreaker(false);
    } else {
      props.setLivingBreakerType("red");
      props.setIsLivingBreaker(true);
      if (
        // props.livingRadio === "disconnect" &&
        // props.livingAC === "disconnect" &&
        // props.livingLight03 === "disconnect"
        props.livingLight01 === "disconnect" &&
        props.livingLight02 === "disconnect" &&
      props.livingSilingFan === "disconnect"

      ) {
        SwalBreakerOn();
      }

       //start my code for breaker pop up
if(
  (props.rndLiving === 1 && props.livingLight01 === "connected" ) || 
 (props.rndLiving === 2 && props.livingLight02 =="connected")   ||
 (props.rndLiving ===3 && props.livingSilingFan =="connected")       
 
 )
 {
  props.setLivingBreakerType("black");
  props.setIsLivingBreaker(false);
  SwalInitial()

}
// end my code for breaker pop up
    }

     //start my code for breaker pop up 
 if (
  // props.livingRadio === "connected" &&
  props.livingLight01 === "connected" &&
  props.livingLight02 =="connected" &&
  props.livingSilingFan =="connected"   

) {
  props.setLivingBreakerType("black");
  props.setIsLivingBreaker(false);
  SwalInitial()

}
 
//end my code for breaker pop up


  };

  const livingBreakerHandlerOn = () => {
    props.setLivingBreakerType("black");
    props.setIsLivingBreaker(false);
  };

  // Hall section Breaker...........................................................................................

  const fifthAssignmentPass = () => {
    dispatch(resultFirstFloor(props.firstFloorTrial));
    props.setIsModalOpen(true);

    setTimeout(() => {
      SwalHurray('fife','four')
    }, 30);

  };

  const hallBreakerHandlerOff = () => {
    if (
      props.rndHall === 1 &&
      props.hallLedTv === "disconnect" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "connected"
    ) {
      fifthAssignmentPass();
    }
    if (
      props.rndHall === 2 &&
      props.hallLedTv === "connected" &&
      props.hallLight01 === "disconnect" &&
      props.hallLight02 === "connected"
    ) {
      fifthAssignmentPass();
    }
    if (
      props.rndHall === 3 &&
      props.hallLedTv === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "disconnect"
    ) {
      fifthAssignmentPass();
    }

    if (props.hallCorruptDevice === props.rndHall) {
      SwalInitial();
      props.setIsHallBreaker(false);
    } else {
      props.setHallBreakerType("red");
      props.setIsHallBreaker(true);
      if (
        props.hallLight01 === "disconnect" &&
        props.hallLight02 === "disconnect" &&
        props.hallLedTv === "disconnect"
      ) {
        SwalBreakerOn();
      }

       //start my code for breaker pop up
    if(
      (props.rndHall === 1 && props.hallLedTv =="connected") || 
     (props.rndHall === 2 &&  props.hallLight01 === "connected" )  ||
     (props.rndHall ===3 &&  props.hallLight02 =="connected")       
     
     )
     {
      props.setHallBreakerType("black");
      props.setIsHallBreaker(false);
      SwalInitial()
    }
    // end my code for breaker pop up

    }

     //start my code for breaker pop up 
     if (
      // props.livingRadio === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 =="connected" &&
      props.hallLedTv =="connected"   
    
    ) {
      props.setHallBreakerType("black");
      props.setIsHallBreaker(false);
      SwalInitial()
    
    }
     
    //end my code for breaker pop up
    

  };

  const hallBreakerHandlerOn = () => {
    props.setHallBreakerType("black");
    props.setIsHallBreaker(false);
  };

  return (
    <div>
     
      <div className=" text-center">
        <div
          className="check-exercise-div"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/mask-group");
          }}
        >
          <Avator phase={"game"} />
        </div>
        <hr style={{ marginTop: "2%" }} />
        <div style={{ display: "none" }}>
          <ResultModel
            isModalOpen={props.isModalOpen}
            setIsModalOpen={props.setIsModalOpen}
            trial={props.firstFloorTrial}
            floor={"firstFloor"}
          />
        </div>
        <div className="legend">
          {/* GROUP 1 */}
          <div className="set-legend-text">
            <p>Group&nbsp;1:</p> 
            <p className="grp-detail">Toilet, Living room, Hall</p>
          </div>
          {/* GROUP 2 */}
          <div className="set-legend-text">
            <p>Group&nbsp;2:</p> 
            <p className="grp-detail">Kitchen</p>
          </div>
          {/* GROUP 3 */}
          <div className="set-legend-text">
            <p>Group&nbsp;3:</p> 
            <p className="grp-detail">living room 01, living room 02</p>
          </div>
          {/* GROUP 4 */}
          <div className="set-legend-text">
            <p>Group&nbsp;4:</p> 
            <p className="grp-detail">Toilet, Bed Room, Hall</p>
          </div>
          {/* GROUP 5 */}
          <div className="set-legend-text">
            <p>Group&nbsp;5:</p> 
            <p className="grp-detail">guest room, study room, hall, storage room</p>
          </div>
          {/* GROUP 6 */}
          <div className="set-legend-text">
            <p>Group&nbsp;6:</p> 
            <p className="grp-detail">laundry</p>
          </div>
        </div>

        <div className="set-main-flex-container" style={{marginTop:'2em'}}>

        {props.meterType === "meterBoardClose" ? (
          <>
            <abbr data-title="Click to open" className="metterHover">
              <img
                className="meter-img"
                onClick={() => props.setMeterType("meterBoardOpen")}
                src={Meter}
                alt="meter"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Click To Open"
              />
              {/* <h3 className="set-floor-title">First Floor</h3> */}
            </abbr>
          </>
        ) : props.meterType === "meterBoardOpen" ? (
          <div
            className="meter-inner-img"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/meterGroup.png"
              })`,
            }}
          >
            <>
              <abbr data-title="Click to close" className="closeHover">
                <div className="position-close">
                  <button
                    className="btn-nav-close"
                    onClick={() => {
                      props.setMeterType("meterBoardClose");
                    }}
                  >
                    <i class="fa fa-close" />
                  </button>
                </div>
              </abbr>

              {/* Group One ........................................................................ */}
              <div className="groupA">
                {props.groupFirstFloor === "GroupOne" && (location.pathname ==="/first-floor/living-room01" || location.pathname ==="/first-floor/living-room02") ? (
                  <div className="d-flex justify-content-center ">
                    <>
                      {props.breaker === "livingOne" ? (
                        <>
                          {props.livingOneBreakerType === "black" ||
                          props.rndLivingOne ===
                            props.livingOneCorruptDevice ? (
                            <button
                              className="group-btn position-livingOne font-height-width-groupC btn-shadow"
                              onClick={livingOneBreakerHandlerOff}
                            >
                              <img
                                src={breakerOffIMG}
                                alt=""
                                className="breakerImg"
                              />
                            </button>
                          ) : (
                            <button
                              className="group-btn position-livingOne font-height-width-groupC btn-shadow"
                              onClick={livingOneBreakerHandlerOn}
                            >
                              <img
                                src={breakerOnIMG}
                                alt=""
                                className="breakerImg"
                              />
                            </button>
                          )}
                        </>
                      ) : (
                        <button
                          className="group-btn position-livingOne font-height-width-groupC"
                        disabled={location.pathname !=="/first-floor/living-room01"}

                          onClick={() => {
                            props.setBreaker("livingOne");
                            props.setGamePhase("livingOne");
                          }}
                        >
                          Living Room 01
                        </button>
                      )}
                    </>
                    <>
                      {props.breaker === "livingTwo" ? (
                        <>
                          {props.livingTwoBreakerType === "black" ||
                          props.rndLivingTwo ===
                            props.livingTwoCorruptDevice ? (
                            <button
                              className="group-btn position-livingTwo font-height-width-groupC btn-shadow"
                              onClick={livingTwoBreakerHandlerOff}
                            >
                              <img
                                src={breakerOffIMG}
                                alt=""
                                className="breakerImg"
                              />
                            </button>
                          ) : (
                            <button
                              className="group-btn position-livingTwo font-height-width-groupC btn-shadow"
                              onClick={livingTwoBreakerHandlerOn}
                            >
                              <img
                                src={breakerOnIMG}
                                alt=""
                                className="breakerImg"
                              />
                            </button>
                          )}
                        </>
                      ) : (
                        <button
                          className="group-btn position-livingTwo font-height-width-groupC"
                        disabled={location.pathname !=="/first-floor/living-room02"}

                          onClick={() => {
                            props.setBreaker("livingTwo");
                            props.setGamePhase("livingTwo");
                          }}
                        >
                          Living Room 02
                        </button>
                      )}
                    </>
                  </div>
                ) : (
                  <button
                    className="group-btn position-set1"
                    onClick={() => props.setGroupFirstFloor("GroupOne")}
                  >
                    Group 3
                  </button>
                )}
              </div>

              {/* Group two ........................................................................ */}
              <div className="groupB">
                {props.groupFirstFloor === "GroupTwo" && (location.pathname ==="/first-floor/toilet" || location.pathname ==="/first-floor/bed-room" || location.pathname ==="/first-floor") ? (
                  <div className="d-flex justify-content-center ">
                    {props.breaker === "kitchen" ? (
                      <>
                        {props.kitchenBreakerType === "black" ||
                        props.rndKitchen === props.kitchenCorruptDevice ? (
                          <button className="group-btn position-Kitchen btn-shadow">
                            <img
                              src={breakerOffIMG}
                              alt=""
                              className="breakerImg"
                            />
                          </button>
                        ) : (
                          <button className="group-btn position-Kitchen btn-shadow">
                            <img
                              src={breakerOnIMG}
                              alt=""
                              className="breakerImg"
                            />
                          </button>
                        )}
                      </>
                    ) : (
                      <>
                      {/* {show &&<FrontScreenModel 
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}/>} */}
                        {props.breaker === "toilet" ? (
                          <>
                            {props.toiletBreakerType === "black" ||
                            props.rndToilet === props.toiletCorruptDevice ? (
                              <button
                                className="group-btn position-Bath-firstFloor font-height-width-groupD btn-shadow"
                                onClick={toiletBreakerHandlerOff}
                              >
                                <img
                                  src={breakerOffIMG}
                                  alt=""
                                  className="breakerImg"
                                />
                              </button>
                            ) : (
                              <button
                                className="group-btn position-Bath-firstFloor font-height-width-groupD btn-shadow"
                                onClick={toiletBreakerHandlerOn}
                              >
                                <img
                                  src={breakerOnIMG}
                                  alt=""
                                  className="breakerImg"
                                />
                              </button>
                            )}
                          </>
                        ) : (
                          <button
                            className="group-btn position-Bath-firstFloor font-height-width-groupD"
                        disabled={location.pathname !=="/first-floor/toilet"}

                            onClick={() => {
                              // showModel();
                              
                             
                              props.setBreaker("toilet");
                              props.setGamePhaseGroup4("toilet");
                              
                            
                          
                            }}
                          >
                            TOILET
                          </button>
                        )}
                         
                        <>
                       
                          {props.breaker === "livingRoom" ? (
                            <>
                              {props.livingBreakerType === "black" ||
                              props.rndLiving === props.livingCorruptDevice ? (
                                <button
                                  className="group-btn position-living-firstFloor font-height-width-groupD btn-shadow"
                                  onClick={livingBreakerHandlerOff}
                                >
                                  <img
                                    src={breakerOffIMG}
                                    alt=""
                                    className="breakerImg"
                                  />
                                </button>
                              ) : (
                                <button
                                  className="group-btn position-living-firstFloor font-height-width-groupD btn-shadow"
                                  onClick={livingBreakerHandlerOn}
                                >
                                  <img
                                    src={breakerOnIMG}
                                    alt=""
                                    className="breakerImg"
                                  />
                                </button>
                              )}
                            </>
                          ) : (
                            <button
                              className="group-btn position-living-firstFloor font-height-width-groupD"
                        disabled={location.pathname !=="/first-floor/bed-room"}

                              onClick={() => {
                                props.setBreaker("livingRoom");
                                props.setGamePhaseGroup4("livingRoom");
                              }}
                            >
                              Bed ROOM
                            </button>
                          )}
                        </>
                        <>
                          {props.breaker === "hall" ? (
                            <>
                              {props.hallBreakerType === "black" ||
                              props.rndHall === props.hallCorruptDevice ? (
                                <button
                                  className="group-btn position-Hall-firstFloor font-height-width-groupD btn-shadow"
                                  onClick={hallBreakerHandlerOff}
                                >
                                  <img
                                    src={breakerOffIMG}
                                    alt=""
                                    className="breakerImg"
                                  />
                                </button>
                              ) : (
                                <button
                                  className="group-btn position-Hall-firstFloor font-height-width-groupD btn-shadow"
                                  onClick={hallBreakerHandlerOn}
                                >
                                  <img
                                    src={breakerOnIMG}
                                    alt=""
                                    className="breakerImg"
                                  />
                                </button>
                              )}
                            </>
                          ) : (
                            <button
                              className="group-btn position-Hall-firstFloor font-height-width-groupD"
                        disabled={location.pathname !=="/first-floor"}

                              onClick={() => {
                                props.setBreaker("hall");
                                props.setGamePhaseGroup4("hall");
                              }}
                            >
                              Hall
                            </button>
                          )}
                        </>
                      </>
                    )}
                  </div>
                ) : (
                  <button
                    className="group-btn position-set2"
                    onClick={() => props.setGroupFirstFloor("GroupTwo")}
                  >
                    Group 4
                  </button>
                )}
              </div>
            </>
          </div>
        ) : (
          // <>
          //   <img
          //     className="meter-inner-img"
          //     onClick={() => props.setMeterType("meterBoardOpen")}
          //     src={meterGroup}
          //     alt="meter"
          //   />
          //   <abbr data-title="Click to close" className="closeHover">
          //     <div className="position-close">
          //       <button
          //         className="btn-nav-close"
          //         onClick={() => {
          //           props.setMeterType("meterBoardClose");
          //         }}
          //       >
          //         <i class="fa fa-close" />
          //       </button>
          //     </div>
          //   </abbr>
          //   <>
          //     {props.groupFirstFloor === "GroupOne" ? (
          //       <>
          //         <>
          //           {props.breaker === "livingOne" ? (
          //             <>
          //               {props.livingOneBreakerType === "black" ||
          //               props.rndLivingOne === props.livingOneCorruptDevice ? (
          //                 <button
          //                   className="group-btn position-livingOne btn-shadow"
          //                   onClick={livingOneBreakerHandlerOff}
          //                 >
          //                   <img
          //                     src={breakerOffIMG}
          //                     alt=""
          //                     className="breakerImg"
          //                   />
          //                 </button>
          //               ) : (
          //                 <button
          //                   className="group-btn position-livingOne btn-shadow"
          //                   onClick={livingOneBreakerHandlerOn}
          //                 >
          //                   <img
          //                     src={breakerOnIMG}
          //                     alt=""
          //                     className="breakerImg"
          //                   />
          //                 </button>
          //               )}
          //             </>
          //           ) : (
          //             <button
          //               className="group-btn position-livingOne"
          //               style={{ padding: "0%" }}
          //               onClick={() => {
          //                 props.setBreaker("livingOne");
          //                 props.setGamePhase("livingOne");
          //               }}
          //             >
          //               Living Room 01
          //             </button>
          //           )}
          //         </>
          //         <>
          //           {props.breaker === "livingTwo" ? (
          //             <>
          //               {props.livingTwoBreakerType === "black" ||
          //               props.rndLivingTwo === props.livingTwoCorruptDevice ? (
          //                 <button
          //                   className="group-btn position-livingTwo btn-shadow"
          //                   onClick={livingTwoBreakerHandlerOff}
          //                 >
          //                   <img
          //                     src={breakerOffIMG}
          //                     alt=""
          //                     className="breakerImg"
          //                   />
          //                 </button>
          //               ) : (
          //                 <button
          //                   className="group-btn position-livingTwo btn-shadow"
          //                   onClick={livingTwoBreakerHandlerOn}
          //                 >
          //                   <img
          //                     src={breakerOnIMG}
          //                     alt=""
          //                     className="breakerImg"
          //                   />
          //                 </button>
          //               )}
          //             </>
          //           ) : (
          //             <button
          //               className="group-btn position-livingTwo"
          //               onClick={() => {
          //                 props.setBreaker("livingTwo");
          //                 props.setGamePhase("livingTwo");
          //               }}
          //               style={{ padding: "0%" }}
          //             >
          //               Living Room 02
          //             </button>
          //           )}
          //         </>
          //       </>
          //     ) : (
          //       <button
          //         className="group-btn position-set1"
          //         onClick={() => props.setGroupFirstFloor("GroupOne")}
          //       >
          //         Group 3
          //       </button>
          //     )}
          //   </>
          //   {props.groupFirstFloor === "GroupTwo" ? (
          //     <>
          //       {props.breaker === "kitchen" ? (
          //         <>
          //           {props.kitchenBreakerType === "black" ||
          //           props.rndKitchen === props.kitchenCorruptDevice ? (
          //             <button className="group-btn position-Kitchen btn-shadow">
          //               <img
          //                 src={breakerOffIMG}
          //                 alt=""
          //                 className="breakerImg"
          //               />
          //             </button>
          //           ) : (
          //             <button className="group-btn position-Kitchen btn-shadow">
          //               <img src={breakerOnIMG} alt="" className="breakerImg" />
          //             </button>
          //           )}
          //         </>
          //       ) : (
          //         <>
          //           {props.breaker === "toilet" ? (
          //             <>
          //               {props.toiletBreakerType === "black" ||
          //               props.rndToilet === props.toiletCorruptDevice ? (
          //                 <button
          //                   className="group-btn position-Bath-firstFloor btn-shadow"
          //                   onClick={toiletBreakerHandlerOff}
          //                 >
          //                   <img
          //                     src={breakerOffIMG}
          //                     alt=""
          //                     className="breakerImg"
          //                   />
          //                 </button>
          //               ) : (
          //                 <button
          //                   className="group-btn position-Bath-firstFloor btn-shadow"
          //                   onClick={toiletBreakerHandlerOn}
          //                 >
          //                   <img
          //                     src={breakerOnIMG}
          //                     alt=""
          //                     className="breakerImg"
          //                   />
          //                 </button>
          //               )}
          //             </>
          //           ) : (
          //             <button
          //               className="group-btn position-Bath-firstFloor"
          //               style={{ padding: "0%" }}
          //               onClick={() => {
          //                 props.setBreaker("toilet");
          //                 props.setGamePhaseGroup4("toilet");
          //               }}
          //             >
          //               TOILET
          //             </button>
          //           )}
          //           <>
          //             {props.breaker === "livingRoom" ? (
          //               <>
          //                 {props.livingBreakerType === "black" ||
          //                 props.rndLiving === props.livingCorruptDevice ? (
          //                   <button
          //                     className="group-btn position-living-firstFloor btn-shadow"
          //                     onClick={livingBreakerHandlerOff}
          //                   >
          //                     <img
          //                       src={breakerOffIMG}
          //                       alt=""
          //                       className="breakerImg"
          //                     />
          //                   </button>
          //                 ) : (
          //                   <button
          //                     className="group-btn position-living-firstFloor btn-shadow"
          //                     onClick={livingBreakerHandlerOn}
          //                   >
          //                     <img
          //                       src={breakerOnIMG}
          //                       alt=""
          //                       className="breakerImg"
          //                     />
          //                   </button>
          //                 )}
          //               </>
          //             ) : (
          //               // <button className="group-btn position-living">
          //               //   <img
          //               //     src={breakerOffIMG}
          //               //     alt=""
          //               //     className="breakerImg"
          //               //   />
          //               // </button>
          //               <button
          //                 className="group-btn position-living-firstFloor"
          //                 onClick={() => {
          //                   props.setBreaker("livingRoom");
          //                   props.setGamePhaseGroup4("livingRoom");
          //                 }}
          //               >
          //                 Bed ROOM
          //               </button>
          //             )}
          //           </>
          //           <>
          //             {props.breaker === "hall" ? (
          //               <>
          //                 {props.hallBreakerType === "black" ||
          //                 props.rndHall === props.hallCorruptDevice ? (
          //                   <button
          //                     className="group-btn position-Hall-firstFloor btn-shadow"
          //                     onClick={hallBreakerHandlerOff}
          //                   >
          //                     <img
          //                       src={breakerOffIMG}
          //                       alt=""
          //                       className="breakerImg"
          //                     />
          //                   </button>
          //                 ) : (
          //                   <button
          //                     className="group-btn position-Hall-firstFloor btn-shadow"
          //                     onClick={hallBreakerHandlerOn}
          //                   >
          //                     <img
          //                       src={breakerOnIMG}
          //                       alt=""
          //                       className="breakerImg"
          //                     />
          //                   </button>
          //                 )}
          //               </>
          //             ) : (
          //               <button
          //                 className="group-btn position-Hall-firstFloor"
          //                 onClick={() => {
          //                   props.setBreaker("hall");
          //                   props.setGamePhaseGroup4("hall");
          //                 }}
          //               >
          //                 Hall
          //               </button>
          //             )}
          //           </>
          //         </>
          //       )}
          //     </>
          //   ) : (
          //     <button
          //       className="group-btn position-set2"
          //       onClick={() => props.setGroupFirstFloor("GroupTwo")}
          //     >
          //       Group 4
          //     </button>
          //   )}
          // </>
          ""
        )}
      </div>
      </div>
      <h3 className="set-floor-title">First Floor</h3>
      <hr />
        {/* to open attic model */}
        {
        // showAttic && (
        //   <AtticModel isModalOpen={isModalOpen}
        //     setIsModalOpen={setIsModalOpen}
          
        //     /> 

        // )
      }

       {/* to open ground floor model  */}

      {
//         showGroundFloor && (
//           <GroundFloorModel isModalOpen={isModalOpen}
//             setIsModalOpen={setIsModalOpen} 
      
// />
//         )
      } 


 {/* to open first floor model  */}
 {/* {
        show && (
          <FirstFloorModel isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}/> 

        )
      } */}

      <div className="check-exercise-div d-none-btns-sidebar">
        <button
          className={
            btnHover === "attic"
              ? "btn-Check-Exercise btnHover"
              : "btn-Check-Exercise"
          }
          onClick={() => {
            // setShowAttic(true)

            navigate("/attic");
          }}
          onMouseEnter={() => setBtnHover("attic")}
          onMouseLeave={() => setBtnHover("")}
        >
          Attic
        </button>
      </div>
      <div className="check-exercise-div d-none-btns-sidebar">
        <button
          className={
            btnHover === "firstFloor"
              ? "btn-Check-Exercise btnHover"
              : "btn-Check-Exercise"
          }
          style={{ background: "white", color: "#b41c1c" }}
          onClick={() => {
            // setShow(true)
            navigate("/first-floor");
            console.log("on first floor");
          }}
          onMouseEnter={() => setBtnHover("firstFloor")}
          onMouseLeave={() => setBtnHover("")}
        >
          First Floor
        </button>
      </div>
      <div className="check-exercise-div d-none-btns-sidebar">
        <button
          className={
            btnHover === "groundFloor"
              ? "btn-Check-Exercise btnHover"
              : "btn-Check-Exercise"
          }
          onClick={() => {
            // setshowGroundFloor(true)
            navigate("/ground-floor");
          }}
          onMouseEnter={() => setBtnHover("groundFloor")}
          onMouseLeave={() => setBtnHover("")}
        >
          Ground Floor
        </button>
      </div>
    </div>
  );
};

export default SecondRightNavBar;
