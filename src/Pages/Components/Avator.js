import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./Avator.css";
import CustomButton from "../Components/CustomButton";
import { useNavigate } from "react-router-dom";
import LogoutModal from "./Modals/LogoutModal/LogoutModal";

const Avator = (props) => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const userName = localStorage.getItem("userName");
  const userInfo = useSelector((state) => state.AuthReducer.user);

  const navigate = useNavigate();

  const showLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };
  const handleLogoutModalOk = () => {
    setIsLogoutModalOpen(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  const handleLogoutModalCancel = () => {
    setIsLogoutModalOpen(false);
  };
  return (
    <div
      className={`avatar-container ${
        props.phase === "home" ? "d-flex flex-lg-row-reverse" : ""
      }`}
    >
      <div className="d-flex align-items-center">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/Avatar.png"}
            alt="dasdas"
            style={{ height: "40px", width: "40px", borderRadius: "100%" }}
          />
        </div>
        <div className="avatar-name">{userName}</div>
      </div>
      <div className="avatar-dropdown-menu-custom position-absolute bg-light shadow">
        {userInfo ? (
          <CustomButton
            label={"Logout"}
            type={"solid"}
            onClick={showLogoutModal}
          />
        ) : (
          <CustomButton
            label={"Return"}
            type={"solid"}
            onClick={() => navigate("/select-name")}
          />
        )}
      </div>
      <LogoutModal
        isLogoutModalOpen={isLogoutModalOpen}
        handleLogoutModalOk={handleLogoutModalOk}
        handleLogoutModalCancel={handleLogoutModalCancel}
      />
    </div>
  );
};

export default Avator;
