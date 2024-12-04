import React from "react";
import { ReactComponent as HeaderIcon } from "../icons/header-icon.svg";
import "./dashboardHeader.css";
import ProfileDropdown from "../ProfileDropdown";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton";
import ChangeLanguageToggle from "../../../utils/ChangeLanguageToggle";
import { useSelector } from "react-redux";
import { getTranslation } from "../../../utils/getTranslation";

export default function DashboardHeader() {
  const userInfo = useSelector((state) => state.AuthReducer.user);
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  const navigate = useNavigate();

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
            <ChangeLanguageToggle color="black" />
            {userInfo?.role === "user" && (
              <CustomButton
                label={getTranslation("letsPlay", isDutch)}
                onClick={() => navigate("/select-name")}
              />
            )}
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </>
  );
}
