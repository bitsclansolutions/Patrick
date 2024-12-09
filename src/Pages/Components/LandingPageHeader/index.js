import React from "react";
import { ReactComponent as HeaderIcon } from "../icons/header-icon.svg";
import "./landingPageHeader.css";
import CustomButton from "../CustomButton";
import { Link } from "react-router-dom";
import ProfileDropdown from "../ProfileDropdown";
import { useSelector } from "react-redux";
import ChangeLanguageToggle from "../../../utils/ChangeLanguageToggle";
import { getTranslation } from "../../../utils/getTranslation";

export default function LandingPageHeader() {
  const userInfo = useSelector((state) => state.AuthReducer.user);
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header-container">
      <div className="header-inner-container">
        <div className="header-icon-wrapper">
          <Link to={"/"}>
            <HeaderIcon />
          </Link>
        </div>
        <div className="header-right-wrapper">
          <div className="header-nav-list-wrapper">
            <p onClick={() => scrollToSection("features")}>
              {getTranslation("features", isDutch)}
            </p>
            <p onClick={() => scrollToSection("pricing")}>
              {getTranslation("pricing", isDutch)}
            </p>
            <p onClick={() => scrollToSection("aboutUs")}>
              {getTranslation("aboutUs", isDutch)}
            </p>
            <p onClick={() => scrollToSection("contact")}>
              {getTranslation("contact", isDutch)}
            </p>
          </div>
          {/* <div className="langauge-select-wrapper">
            <p>English</p>
            <input class="" type="checkbox" role="switch" />
            <p>Netherlands</p>
          </div> */}
          <ChangeLanguageToggle color="black" />
          {userInfo ? (
            <ProfileDropdown />
          ) : (
            <div className="header-buttons-wrapper">
              <Link to="/login">
                <CustomButton
                  label={getTranslation("login", isDutch)}
                  type="outlined"
                />
              </Link>
              {/* <CustomButton
                label={getTranslation("buyNow", isDutch)}
                type="solid"
              /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
