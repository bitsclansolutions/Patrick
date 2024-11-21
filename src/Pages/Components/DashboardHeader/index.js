import React from "react";
import { ReactComponent as HeaderIcon } from "../icons/header-icon.svg";
import "./dashboardHeader.css";
import ProfileDropdown from "../ProfileDropdown";
import { Link } from "react-router-dom";

export default function DashboardHeader() {
  return (
    <>
      <div className="dashboard-header-container">
        <div className="dashboard-header-inner-container">
          <div className="dashboard-header-icon-wrapper">
            <Link to={"/"}>
              <HeaderIcon />
            </Link>
          </div>
          <div className="dashboard-header-right-wrapper">
            <div className="langauge-select-wrapper">
              <p>English</p>
              <input class="" type="checkbox" role="switch" />
              <p>Netherlands</p>
            </div>
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </>
  );
}
