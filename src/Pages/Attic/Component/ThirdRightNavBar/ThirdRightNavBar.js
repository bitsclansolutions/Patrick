import React from "react";
import Meter from "../images/Meter.png";
import meterGroup from "../images/meterGroup.png";
import breakerOffIMG from "../images/breakerOffIMG.png";
import breakerOnIMG from "../images/breakerOnIMG.png";
import Swal from "sweetalert2";
import beep from "../SoundEffects/beep.mp3";
import hurray from "../SoundEffects/hurray.wav";
import { useEffect } from "react";
import "./ThirdRightNavBar.css";
import useSound from "use-sound";
import { useLocation, useNavigate } from "react-router-dom";
import ResultModel from "../../../Components/ResultModel";
import { resultAtticFloor } from "../../../../Redux/Action";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Avator from "../../../Components/Avator";
import {
  SwalBreakerOn,
  SwalHurray,
  SwalInitial,
  SwalDisconnected
} from "../../../Components/SwalModules";
import { isHurray } from "../../../../Redux/Action";
import AtticModel from "../../../../PopUpModels/AtticModel";
import FirstFloorModel from "../../../../PopUpModels/FirstFloorModel";
import GroundFloorModel from "../../../../PopUpModels/GroundFloorModel";

const ThirdRightNavBar = (props) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const [showAttic, setShowAttic] = useState(false);
  const [showFirstFloor, setshowFirstFloor] = useState(false);
  const [showGroundFloor, setshowGroundFloor] = useState(false);
  const location = useLocation()


  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [btnHover, setBtnHover] = useState("");
  const [beepSound] = useSound(beep);
  const [hurraySound] = useSound(hurray);

  // useEffect(() => {
  //   if (props.guestBreakerType === "red") {
  //     beepSound();
  //   }
  // }, [props.guestBreakerType]);

  // useEffect(() => {
  //   if (props.hallBreakerType === "red") {
  //     beepSound();
  //   }
  // }, [props.hallBreakerType]);

  // useEffect(() => {
  //   if (props.studyBreakerType === "red") {
  //     beepSound();
  //   }
  // }, [props.studyBreakerType]);

  // guest section breaker .......................................................................................

/////////
  useEffect(()=>{
  dispatch(isHurray(false)); 
},[])

/////////
  const firstAssignmentPass = () => {
    dispatch(isHurray(true));
    // console.log("is hurray true")
    hurraySound();

    setTimeout(() => {
      dispatch(isHurray(false)); 
      // console.log("is hurray false")

    }, 4000);

    setTimeout(() => {
      SwalHurray("one", "fife");
    }, 30);

    setTimeout(() => {
      // props.setBreaker("StudyRoom");
      // props.setGamePhase("StudyRoom");
      props.setGuestBreakerType("black");
      props.setIsGuestBreaker(false);
    }, 3000);
  };

  const guestBreakerHandlerOff = () => {
    // for sending on next level code ................
    if (
      props.rndGuest === 1 &&
      props.guestLamp === "disconnect" &&
      props.guestRadio === "connected" &&
      props.guestFan === "connected" &&
      props.guestLED === "connected"
    ) {
      firstAssignmentPass();
    }
    if (
      props.rndGuest === 2 &&
      props.guestLamp === "connected" &&
      props.guestRadio === "disconnect" &&
      props.guestFan === "connected" &&
      props.guestLED === "connected"
    ) {
      firstAssignmentPass();
    }
    if (
      props.rndGuest === 3 &&
      props.guestLamp === "connected" &&
      props.guestRadio === "connected" &&
      props.guestFan === "disconnect" &&
      props.guestLED === "connected"
    ) {
      firstAssignmentPass();
    }
    if (
      props.rndGuest === 4 &&
      props.guestLamp === "connected" &&
      props.guestRadio === "connected" &&
      props.guestFan === "connected" &&
      props.guestLED === "disconnect"
    ) {
      firstAssignmentPass();
    }

    if (props.guestCorruptDevice === props.rndGuest) {
      SwalInitial();
      props.setIsGuestBreaker(false);
    } else {
      props.setGuestBreakerType("red");
      props.setIsGuestBreaker(true);
      if (
        props.guestLamp === "disconnect" &&
        props.guestRadio === "disconnect" &&
        props.guestFan === "disconnect" &&
        props.guestLED === "disconnect"
      ) {
        SwalBreakerOn();
      }

      if (
        (props.rndGuest === 1 && props.guestLamp === "connected" ) ||
       ( props.rndGuest === 2 && props.guestRadio === "connected" ) ||
      (  props.rndGuest === 3 && props.guestFan === "connected" )||
       ( props.rndGuest === 4 &&  props.guestLED === "connected")
      ) {
        SwalInitial();
        props.setGuestBreakerType("black");
        props.setIsGuestBreaker(false);
      }
  
    }
    //start my code for breaker pop up
    if (
      props.guestLamp === "connected" &&
      props.guestRadio === "connected" &&
      props.guestFan === "connected" &&
      props.guestLED === "connected"
    ) {
      props.setGuestBreakerType("black");
      props.setIsGuestBreaker(false);
      SwalInitial();
    }
   

    // end my code for breaker pop up
    //end my code for breaker pop up
  };

  const guestBreakerHandlerOn = () => {
    props.setGuestBreakerType("black");
    props.setIsGuestBreaker(false);
  };

  // Hall section Breaker...........................................................................................

  const thirdAssignmentPass = () => {
    dispatch(isHurray(true));
    hurraySound();

    setTimeout(() => {
      dispatch(isHurray(false));
    }, 3000);

    setTimeout(() => {
      SwalHurray("three", "fife");
    }, 30);

    setTimeout(() => {
      // props.setBreaker("StoreRoom");
      // props.setGamePhase("StoreRoom");
      props.setHallBreakerType("black");
      props.setIsHallBreaker(false);
    }, 3000);
  };
  // .................................................
  const hallBreakerHandlerOff = () => {

        
    if (
      props.rndHall === 1 &&
      props.hallLamp === "disconnect" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "connected"
    ) {
      // console.log("1");
      thirdAssignmentPass();
    }
    else if (
      props.rndHall === 2 &&
      props.hallLamp === "connected" &&
      props.hallLight01 === "disconnect" &&
      props.hallLight02 === "connected"
    ) { 
      // console.log('2');
      thirdAssignmentPass();
    }
    else if (
      props.rndHall === 3 &&
      props.hallLamp === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLight02 === "disconnect"
    ) {
      // console.log("3");
      thirdAssignmentPass();
    }
    console.log("breaker off func");
    

    if (props.hallCorruptDevice === props.rndHall) {
      SwalInitial();
      props.setIsHallBreaker(false);
    }   
      else {
      props.setHallBreakerType("red");
      props.setIsHallBreaker(true);
      if (
        // props.hallPadestal === "disconnect" &&
        props.hallLight01 === "disconnect" &&
        props.hallLight02 === "disconnect" &&
        props.hallLamp === "disconnect"
        // props.hallLedTv === "disconnect" &&
      ) {
        SwalBreakerOn();
      }
        /////////////
    
   if(
    (props.rndHall === 1 && props.hallLamp === "connected")   ||
    (props.rndHall === 2 && props.hallLight01 === "connected") ||
    (props.rndHall === 3 && props.hallLight02 === "connected")
   ) {
    console.log("hall breaker down...");
    SwalInitial();
     props.setHallBreakerType("black");
     props.setIsHallBreaker(false);
     
   }
   //////////////



        
    }

    //start my code for breaker pop up
    if (
      props.hallLight02 === "connected" &&
      props.hallLight01 === "connected" &&
      props.hallLamp === "connected"
      // props.guestLED === "connected"
    ) {
      props.setHallBreakerType("black");
      props.setIsHallBreaker(false);
      SwalInitial();
    }
    //start my code for breaker pop up
    
    // end my code for breaker pop up
    //end my code for breaker pop up
  };

  const hallBreakerHandlerOn = () => {
    console.log("breaker on func");

    props.setHallBreakerType("black");
    props.setIsHallBreaker(false);
  };

  // Study section Breaker...........................................................................................

  const secondAssignmentPass = () => {
    dispatch(isHurray(true));
    hurraySound();

    setTimeout(() => {
      dispatch(isHurray(false));
    }, 3000);

    setTimeout(() => {
      SwalHurray("two", "fife");
    }, 30);

    setTimeout(() => {
      // props.setBreaker("hall");
      // props.setGamePhase("hall");
      props.setStudyBreakerType("black");
      props.setIsStudyBreaker(false);
    }, 3000);
  };

  const studyBreakerHandlerOff = () => {
    if (
      props.rndStudy === 1 &&
      props.studyLamp === "disconnect" &&
      props.studyLamp02 === "connected"
    ) {
      secondAssignmentPass();
    }
    if (
      props.rndStudy === 2 &&
      props.studyLamp === "connected" &&
      props.studyLamp02 === "disconnect"
    ) {
      secondAssignmentPass();
    }
    if (props.studyCorruptDevice === props.rndStudy) {
      SwalInitial();
      props.setIsStudyBreaker(false);
    } else {
      props.setStudyBreakerType("red");
      props.setIsStudyBreaker(true);
      if (
        props.studyLamp === "disconnect" &&
        props.studyLamp02 === "disconnect"
      ) {
        SwalBreakerOn();
      }
          //start my code for breaker pop up
    if (
      (props.rndStudy === 1 && props.studyLamp === "connected" )||
      ( props.rndStudy === 2 &&  props.studyLamp02 === "connected")
             ) {
      props.setStudyBreakerType("black");
      props.setIsStudyBreaker(false);
      SwalInitial();
    }
    // end my code for breaker pop up

    }
    //start my code for breaker pop up
    if (props.studyLamp === "connected" && props.studyLamp02 === "connected") {
      props.setStudyBreakerType("black");
      props.setIsStudyBreaker(false);
      SwalInitial();
    }
    //end my code for breaker pop up
  };

  const studyBreakerHandlerOn = () => {
    props.setStudyBreakerType("black");
    props.setIsStudyBreaker(false);
  };

  // store room ...........................................
  const fourthAssignmentPass = () => {
    dispatch(isHurray(true));
    hurraySound();

    setTimeout(() => {
      dispatch(isHurray(false));
    }, 3000);

    setTimeout(() => {
      SwalHurray("four", "fife");
    }, 30);

    setTimeout(() => {
      props.setGroupAttic("GroupTwo");
      // props.setBreaker("laundary");
      // props.setGamePhase("laundary");
      props.setLivingOneBreakerType("black");
      props.setIsLivingOneBreaker(false);
    }, 3000);
  };

  const storeRoomBreakerHandlerOff = () => {
    if (
      props.rndLivingOne === 1 &&
      props.livingOneLignt01 === "disconnect" &&
      props.livingOneLignt03 === "connected" &&
      props.livingOneLignt02 === "connected"
    ) {
      fourthAssignmentPass();
    }
    if (
      props.rndLivingOne === 2 &&
      props.livingOneLignt01 === "connected" &&
      props.livingOneLignt02 === "disconnect" &&
      props.livingOneLignt03 === "connected"
    ) {
      fourthAssignmentPass();
    }
    if (
      props.rndLivingOne === 3 &&
      props.livingOneLignt01 === "connected" &&
      props.livingOneLignt02 === "connected" &&
      props.livingOneLignt03 === "disconnect"
    ) {
      fourthAssignmentPass();
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
        props.livingOneLignt02 === "disconnect"
      ) {
        SwalBreakerOn();
      }
 //start my code for breaker pop up
 if (
 ( props.rndLivingOne === 1 &&  props.livingOneLignt01 === "connected"  ) ||
(  props.rndLivingOne === 2 &&  props.livingOneLignt03 === "connected") ||
  (props.rndLivingOne === 3 &&  props.livingOneLignt02 === "connected" )
) {
  props.setLivingOneBreakerType("black");
  props.setIsLivingOneBreaker(false);
  SwalInitial();
}
// end my code for breaker pop up

    }

    //start my code for breaker pop up
    if (
      props.livingOneLignt01 === "connected" &&
      props.livingOneLignt02 === "connected" &&
      props.livingOneLignt03 == "connected"
    ) {
      props.setLivingOneBreakerType("black");
      props.setIsLivingOneBreaker(false);
      SwalInitial();
    }
   
    //end my code for breaker pop up
  };

  const storeBreakerHandlerOn = () => {
    props.setLivingOneBreakerType("black");
    props.setIsLivingOneBreaker(false);
  };

  // laundary section Breaker...........................................................................................
  const lastAssignmentPass = () => {
    dispatch(resultAtticFloor(props.atticTrial));
    props.setIsModalOpen1(true);

    setTimeout(() => {
      SwalHurray("fife", "six");
    }, 30);
  };

  const laundaryBreakerHandlerOff = () => {
    if (
      props.rndLaundary === 1 &&
      props.laundaryWashing === "disconnect" &&
      props.laundaryLight01 === "connected" &&
      props.laundaryLight02 === "connected"
    ) {
      lastAssignmentPass();
    }
    if (
      props.rndLaundary === 2 &&
      props.laundaryWashing === "connected" &&
      props.laundaryLight01 === "disconnect" &&
      props.laundaryLight02 === "connected"
    ) {
      lastAssignmentPass();
    }
    if (
      props.rndLaundary === 3 &&
      props.laundaryWashing === "connected" &&
      props.laundaryLight01 === "connected" &&
      props.laundaryLight02 === "disconnect"
    ) {
      lastAssignmentPass();
    }

    if (props.laundaryCorruptDevice === props.rndLaundary) {
      SwalInitial();
      props.setIsLaundaryBreaker(false);
    } else {
      props.setLaundaryBreakerType("red");
      props.setIsLaundaryBreaker(true);
      if (
        props.laundaryLight01 === "disconnect" &&
        props.laundaryLight02 === "disconnect" &&
        props.laundaryWashing === "disconnect"
      ) {
        SwalBreakerOn();
      }
      //start my code for breaker pop up
    if (
     ( props.rndLaundary === 1 && props.laundaryWashing === "connected") ||
      (props.rndLaundary === 2 &&  props.laundaryLight01 === "connected") ||
    (  props.rndLaundary === 3 &&  props.laundaryLight02 === "connected")
    ) {
      props.setLaundaryBreakerType("black");
      props.setIsLaundaryBreaker(false);
      SwalInitial();
    }
    // end my code for breaker pop up
    }
    //start my code for breaker pop up
    if (
      props.laundaryLight01 === "connected" &&
      props.laundaryLight02 === "connected" &&
      props.LaundaryWashing == "connected"
    ) {
      props.setLaundaryBreakerType("black");
      props.setIsLaundaryBreaker(false);
      SwalInitial();
    }
    
    //end my code for breaker pop up
  };

  const laundaryBreakerHandlerOn = () => {
    props.setLaundaryBreakerType("black");
    props.setIsLaundaryBreaker(false);
  };

  return (
    <div>
      <div className=" text-center">
        <div style={{ display: "none" }}>
          <ResultModel
            isModalOpen={props.isModalOpen1}
            setIsModalOpen={props.setIsModalOpen1}
            trial={props.atticTrial}
            floor={"atticFloor"}
          />
        </div>
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
        <div className="set-main-flex-container" style={{marginTop:'2rem'}}>
        {props.meterType === "meterBoardClose" ? (
          <>
            <abbr data-title="Click to open" className="metterHover">
              <img
                className="meter-img-2"
                onClick={() => props.setMeterType("meterBoardOpen")}
                src={Meter}
                alt="meter"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Click To Open"
              />
              {/* <h3 className="set-floor-title">Attic</h3> */}
            </abbr>
          </>
        ) : props.meterType === "meterBoardOpen" ? (
          <div
            className="meter-inner-img-attic"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/meterGroup2.png"
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

              {/* Group one .................................................................................. */}
              <div className="groupE">
                {props.groupAttic === "GroupOne" && (location.pathname ==="/attic" || location.pathname ==="/attic/guest-room" || location.pathname ==="/attic/study-room" || location.pathname ==="/attic/storage-room") ? (
                  <>
                    <div className="d-flex justify-content-center ">
                      {props.breaker === "GuestRoom" ? (
                        <>
                          {props.guestBreakerType === "black" ||
                          props.rndGuest === props.guestCorruptDevice ? (
                            <button
                              className="group-btn position-Guest btn-shadow height-width-meterItems "
                              onClick={guestBreakerHandlerOff}
                            >
                              <img
                                src={breakerOffIMG}
                                alt=""
                                className="breakerImg-2"
                              />
                            </button>
                          ) : (
                            <button
                              className="group-btn position-Guest btn-shadow height-width-meterItems"
                              onClick={guestBreakerHandlerOn}
                            >
                              <img
                                src={breakerOnIMG}
                                alt=""
                                className="breakerImg-2"
                              />
                            </button>
                          )}
                        </>
                      ) : (
                        <button
                          className="group-btn position-Guest height-width-meterItems"
                          disabled={location.pathname !=="/attic/guest-room"}
                          
                          style={{ padding: "0%" }}
                          onClick={() => {
                            props.setBreaker("GuestRoom");
                            props.setGamePhase("GuestRoom");
                          }}
                        >
                          Guest Room
                        </button>
                      )}
                      <>
                        {props.breaker === "StudyRoom" ? (
                          <>
                            {props.studyBreakerType === "black" ||
                            props.rndStudy === props.studyCorruptDevice ? (
                              <button
                                className="group-btn position-Study btn-shadow height-width-meterItems"
                                onClick={studyBreakerHandlerOff}
                              >
                                <img
                                  src={breakerOffIMG}
                                  alt=""
                                  className="breakerImg-2"
                                />
                              </button>
                            ) : (
                              <button
                                className="group-btn position-Study btn-shadow height-width-meterItems"
                                onClick={studyBreakerHandlerOn}
                              >
                                <img
                                  src={breakerOnIMG}
                                  alt=""
                                  className="breakerImg-2"
                                />
                              </button>
                            )}
                          </>
                        ) : (
                          <button
                            className="group-btn position-Study height-width-meterItems"
                            disabled={location.pathname !=="/attic/study-room"}
                            
                            onClick={() => {
                              props.setBreaker("StudyRoom");
                              props.setGamePhase("StudyRoom");
                            }}
                          >
                            Study Room
                          </button>
                        )}
                      </>
                    </div>
                    <div className="d-flex justify-content-center ">
                      <>
                        {props.breaker === "hall" ? (
                          <>
                            {props.hallBreakerType === "black" ||
                            props.rndHall === props.hallCorruptDevice ? (
                              <button
                                className="group-btn position-Hall-Attic btn-shadow height-width-meterItems"
                                onClick={hallBreakerHandlerOff}
                              >
                                <img
                                  src={breakerOffIMG}
                                  alt=""
                                  className="breakerImg-2"
                                />
                              </button>
                            ) : (
                              <button
                                className="group-btn position-Hall-Attic btn-shadow height-width-meterItems"
                            disabled={location.pathname !=="/attic"}
                               
                                onClick={hallBreakerHandlerOn}
                              >
                                <img
                                  src={breakerOnIMG}
                                  alt=""
                                  className="breakerImg-2"
                                />
                              </button>
                            )}
                          </>
                        ) : (
                          <button
                           
                          className="group-btn position-Hall-Attic height-width-meterItems"
                          disabled={location.pathname !=="/attic"}
                          
                          onClick={() => {
                              props.setBreaker("hall");
                              props.setGamePhase("hall");
                            }}
                          >
                            Hall
                          </button>
                        )}
                      </>
                      <>
                        {props.breaker === "StoreRoom" ? (
                          <>
                            {props.livingOneBreakerType === "black" ||
                            props.rndLivingOne ===
                              props.livingOneCorruptDevice ? (
                              <button
                                className="group-btn position-Store btn-shadow height-width-meterItems"
                                onClick={storeRoomBreakerHandlerOff}
                              >
                                <img
                                  src={breakerOffIMG}
                                  alt=""
                                  className="breakerImg-2"
                                />
                              </button>
                            ) : (
                              <button
                                className="group-btn position-Store btn-shadow height-width-meterItems"
                                onClick={storeBreakerHandlerOn}
                              >
                                <img
                                  src={breakerOnIMG}
                                  alt=""
                                  className="breakerImg-2"
                                />
                              </button>
                            )}
                          </>
                        ) : (
                          <button
                            className="group-btn position-Store height-width-meterItems"
                            disabled={location.pathname !=="/attic/storage-room"}
                            
                            onClick={() => {
                              props.setBreaker("StoreRoom");
                              props.setGamePhase("StoreRoom");
                            }}
                          >
                            Storage Room
                          </button>
                        )}
                      </>
                    </div>
                  </>
                ) : (
                  <button
                    className="group-btn position-set1-attic"
                    onClick={() => props.setGroupAttic("GroupOne")}
                  >
                    Group 5
                  </button>
                )}
              </div>

              {/* GroupTwo............................................................................................. */}
              <div className="groupF">
                {props.groupAttic === "GroupTwo" && (location.pathname ==="/attic/laundary") ? (
                  <>
                    {props.breaker === "laundary" ? (
                      <>
                        {props.laundaryBreakerType === "black" ||
                        props.rndLaundary === props.laundaryCorruptDevice ? (
                          <button
                            className="group-btn position-Laundary btn-shadow"
                            onClick={laundaryBreakerHandlerOff}
                          >
                            <img
                              src={breakerOffIMG}
                              alt=""
                              className="breakerImg-2"
                            />
                          </button>
                        ) : (
                          <button
                            className="group-btn position-Laundary btn-shadow"
                            onClick={laundaryBreakerHandlerOn}
                          >
                            <img
                              src={breakerOnIMG}
                              alt=""
                              className="breakerImg-2"
                            />
                          </button>
                        )}
                      </>
                    ) : (
                      <button
                        className="group-btn position-Laundary"
                        disabled={location.pathname !=="/attic/laundary"}

                        onClick={() => {
                          props.setBreaker("laundary");
                        }}
                      >
                        Laundry
                      </button>
                    )}
                  </>
                ) : (
                  <button
                    className="group-btn position-set2-attic"
                    onClick={() => props.setGroupAttic("GroupTwo")}
                  >
                    Group 6
                  </button>
                )}
              </div>
            </>
          </div>
        ) : (
          // <>
          //   <img
          //     className="meter-inner-img-attic"
          //     onClick={() => props.setMeterType("meterBoardOpen")}
          //     src={meterGroup}
          //     alt="meter"
          //   />
          //    <abbr data-title="Click to close" className="closeHover">
          //   <div className="position-close">
          //     <button
          //       className="btn-nav-close"
          //       onClick={() => {
          //         props.setMeterType("meterBoardClose");
          //       }}
          //     >
          //       <i class="fa fa-close" />
          //     </button>
          //   </div>
          //   </abbr>
          //   <>
          //     {props.groupAttic === "GroupOne" ? (
          //       <>
          //         {props.breaker === "GuestRoom" ? (
          //           <>
          //             {props.guestBreakerType === "black" ||
          //             props.rndGuest === props.guestCorruptDevice ? (
          //               <button
          //                 className="group-btn position-Guest btn-shadow height-width-meterItems "
          //                 onClick={guestBreakerHandlerOff}
          //               >
          //                 <img
          //                   src={breakerOffIMG}
          //                   alt=""
          //                   className="breakerImg-2"
          //                 />
          //               </button>
          //             ) : (
          //               <button
          //                 className="group-btn position-Guest btn-shadow height-width-meterItems"
          //                 onClick={guestBreakerHandlerOn}
          //               >
          //                 <img
          //                   src={breakerOnIMG}
          //                   alt=""
          //                   className="breakerImg-2"
          //                 />
          //               </button>
          //             )}
          //           </>
          //         ) : (
          //           <button
          //             className="group-btn position-Guest height-width-meterItems"
          //             style={{ padding: "0%" }}
          //             onClick={() => {
          //               props.setBreaker("GuestRoom");
          //               props.setGamePhase("GuestRoom");
          //             }}
          //           >
          //             Guest Room
          //           </button>
          //         )}
          //         <>
          //           {props.breaker === "StudyRoom" ? (
          //             <>
          //               {props.studyBreakerType === "black" ||
          //               props.rndStudy === props.studyCorruptDevice ? (
          //                 <button
          //                   className="group-btn position-Study btn-shadow height-width-meterItems"
          //                   onClick={studyBreakerHandlerOff}
          //                 >
          //                   <img
          //                     src={breakerOffIMG}
          //                     alt=""
          //                     className="breakerImg-2"
          //                   />
          //                 </button>
          //               ) : (
          //                 <button
          //                   className="group-btn position-Study btn-shadow height-width-meterItems"
          //                   onClick={studyBreakerHandlerOn}
          //                 >
          //                   <img
          //                     src={breakerOnIMG}
          //                     alt=""
          //                     className="breakerImg-2"
          //                   />
          //                 </button>
          //               )}
          //             </>
          //           ) : (
          //             <button
          //               className="group-btn position-Study height-width-meterItems"
          //               onClick={() => {
          //                 props.setBreaker("StudyRoom");
          //                 props.setGamePhase("StudyRoom");
          //               }}
          //             >
          //               Study Room
          //             </button>
          //           )}
          //         </>
          //         <>
          //           {props.breaker === "hall" ? (
          //             <>
          //               {props.hallBreakerType === "black" ||
          //               props.rndHall === props.hallCorruptDevice ? (
          //                 <button
          //                   className="group-btn position-Hall-Attic btn-shadow height-width-meterItems"
          //                   onClick={hallBreakerHandlerOff}
          //                 >
          //                   <img
          //                     src={breakerOffIMG}
          //                     alt=""
          //                     className="breakerImg-2"
          //                   />
          //                 </button>
          //               ) : (
          //                 <button
          //                   className="group-btn position-Hall-Attic btn-shadow height-width-meterItems"
          //                   onClick={hallBreakerHandlerOn}
          //                 >
          //                   <img
          //                     src={breakerOnIMG}
          //                     alt=""
          //                     className="breakerImg-2"
          //                   />
          //                 </button>
          //               )}
          //             </>
          //           ) : (
          //             <button
          //               className="group-btn position-Hall-Attic height-width-meterItems"
          //               onClick={() => {
          //                 props.setBreaker("hall");
          //                 props.setGamePhase("hall");
          //               }}
          //             >
          //               Hall
          //             </button>
          //           )}
          //         </>
          //         <>
          //           {props.breaker === "StoreRoom" ? (
          //             <>
          //               {props.livingOneBreakerType === "black" ||
          //               props.rndLivingOne === props.livingOneCorruptDevice ? (
          //                 <button
          //                   className="group-btn position-Store btn-shadow height-width-meterItems"
          //                   onClick={storeRoomBreakerHandlerOff}
          //                 >
          //                   <img
          //                     src={breakerOffIMG}
          //                     alt=""
          //                     className="breakerImg-2"
          //                   />
          //                 </button>
          //               ) : (
          //                 <button
          //                   className="group-btn position-Store btn-shadow height-width-meterItems"
          //                   onClick={storeBreakerHandlerOn}
          //                 >
          //                   <img
          //                     src={breakerOnIMG}
          //                     alt=""
          //                     className="breakerImg-2"
          //                   />
          //                 </button>
          //               )}
          //             </>
          //           ) : (
          //             <button
          //               className="group-btn position-Store height-width-meterItems"
          //               onClick={() => {
          //                 props.setBreaker("StoreRoom");
          //                 props.setGamePhase("StoreRoom");
          //               }}
          //             >
          //               Storage Room
          //             </button>
          //           )}
          //         </>
          //       </>
          //     ) : (
          //       <button
          //         className="group-btn position-set1-attic"
          //         onClick={() => props.setGroupAttic("GroupOne")}
          //       >
          //         Group 1
          //       </button>
          //     )}
          //   </>
          //   {props.groupAttic === "GroupTwo" ? (
          //     <>
          //       {props.breaker === "laundary" ? (
          //         <>
          //           {props.laundaryBreakerType === "black" ||
          //           props.rndLaundary === props.laundaryCorruptDevice ? (
          //             <button
          //               className="group-btn position-Laundary btn-shadow"
          //               onClick={laundaryBreakerHandlerOff}
          //             >
          //               <img
          //                 src={breakerOffIMG}
          //                 alt=""
          //                 className="breakerImg-2"
          //               />
          //             </button>
          //           ) : (
          //             <button
          //               className="group-btn position-Laundary btn-shadow"
          //               onClick={laundaryBreakerHandlerOn}
          //             >
          //               <img src={breakerOnIMG} alt="" className="breakerImg-2" />
          //             </button>
          //           )}
          //         </>
          //       ) : (
          //         <button
          //           className="group-btn position-Laundary"
          //           onClick={() => {
          //             props.setBreaker("laundary");
          //           }}
          //         >
          //           Laundry
          //         </button>
          //       )}
          //     </>
          //   ) : (
          //     <button
          //       className="group-btn position-set2-attic"
          //       onClick={() => props.setGroupAttic("GroupTwo")}
          //     >
          //       Group 6
          //     </button>
          //   )}
          // </>
          ""
        )}
      </div>
      </div>
      <h3 className="set-floor-title">Attic</h3>
      <hr />
      {/* { show && (
          <AtticModel isModalOpen1={isModalOpen1}
            setIsModalOpen1={setIsModalOpen1}/> 

        )
      } */}

      {/* to open ground floor model  */}

      {/* {
        showGroundFloor && (
          <GroundFloorModel isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            /> 

        )
      }  */}

      {/* to open first floor model  */}
      {/* {
        showFirstFloor && (
          <FirstFloorModel isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          
            
            /> 

        )
      }  */}

      <div className="check-exercise-div d-none-btns-sidebar">
        <button
          className={
            btnHover === "attic"
              ? "btn-Check-Exercise btnHover"
              : "btn-Check-Exercise"
          }
          onClick={() => {
            // setShow(true)

            navigate("/attic");
            console.log("on attic floor");
          }}
          style={{ background: "white", color: "#b41c1c" }}
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
          onClick={() => {
            // setshowFirstFloor(true)
            navigate("/first-floor");
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

export default ThirdRightNavBar;
