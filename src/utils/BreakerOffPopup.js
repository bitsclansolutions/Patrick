import React from "react";
import Popup from "./Popup";
import "./BreakerOffPopup.css";
import AudioPlayer from "./AudioPlayer";
import audio11 from "../audios/audio11.m4a";

const BreakerOffPopup = ({ close }) => {
  return (
    <Popup>
      <p className="welcome" style={{ fontSize: "45px" }}>
        Oeps… De zekering is uitgeschakeld 🙀
      </p>
      <ul style={{ fontSize: "24px", textAlign: "center", color: "#474747" }}>
        <li>
          Het apparaat dat je zojuist hebt aangesloten maakt kortsluiting en dat
          is niet veilig!
        </li>
        <li>
          Koppel eerst dit apparaat los en sluit alle overige apparaten aan.
        </li>
        <li>Zet vervolgens de zekering weer aan!</li>
      </ul>
      <div className="popup-bottom">
        <div className="vol-icon"></div>
        <div className="popup-button">
          <button onClick={close}>Doorgaan</button>
        </div>
        <div className="vol-icon">
          <AudioPlayer file={audio11} />
        </div>
      </div>
    </Popup>
  );
};

export default BreakerOffPopup;
