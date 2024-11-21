import React from "react";
import { ReactComponent as HeaderIcon } from "../icons/header-icon.svg";
import "./landingPageHeader.css";
import CustomButton from "../CustomButton";
import { Link } from "react-router-dom";
import ProfileDropdown from "../ProfileDropdown";
import { useSelector } from "react-redux";

export default function LandingPageHeader() {
  const userInfo = useSelector((state) => state.AuthReducer.user);
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
            <p>Features</p>
            <p>Pricing</p>
            <p>About Us</p>
            <p>Contact</p>
          </div>
          <div className="langauge-select-wrapper">
            <p>English</p>
            <input class="" type="checkbox" role="switch" />
            <p>Netherlands</p>
          </div>
          {userInfo ? (
            <ProfileDropdown />
          ) : (
            <div className="header-buttons-wrapper">
              <Link to="/login">
                <CustomButton label="Login" type="outlined" />
              </Link>
              <CustomButton label="Buy Now" type="solid" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
