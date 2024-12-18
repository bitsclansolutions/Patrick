import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../Redux/Action";
import "./ChangeLanguageToggle.css";

const ChangeLanguageToggle = ({ color }) => {
  const dispatch = useDispatch();
  const [isDutch, setIsDutch] = useState(true);
  const translateHandler = (e) => {
    setIsDutch(!isDutch);
    console.log(e.target.checked);
    localStorage.setItem("isDutch", e.target.checked);
    dispatch(changeLanguage());
  };

  const localLanguage = JSON.parse(localStorage.getItem("isDutch"));

  useEffect(() => {
    setIsDutch(localLanguage);
    dispatch(changeLanguage(localLanguage));
  }, [isDutch]);
  return (
    <div>
      <div className="translate" style={{ color: color }}>
        <p>English</p>
        <input type="checkbox" checked={isDutch} onChange={translateHandler} />
        <p>Nederlands</p>
      </div>
    </div>
  );
};

export default ChangeLanguageToggle;
