import React, { useState } from "react";
import CustomButton from "../CustomButton";
import { useDispatch, useSelector } from "react-redux";
import LogoutModal from "../Modals/LogoutModal/LogoutModal";
import { useNavigate } from "react-router-dom";
import "./profileDown.css";
import { logout } from "../../../Redux/Action";
import { getTranslation } from "../../../utils/getTranslation";

function ProfileDropdown() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);
  const disptach = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.AuthReducer.user);

  const showLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };
  const handleLogoutModalOk = () => {
    setIsLogoutModalOpen(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    disptach(logout());
    navigate("/login");
  };
  const handleLogoutModalCancel = () => {
    setIsLogoutModalOpen(false);
  };
  return (
    <>
      <div className="dashboard-header-buttons-wrapper">
        {/* <CustomButton label="Logout" type="outlined" /> */}
        <div className="dashboard-header-profile-section">
          {userInfo?.name?.charAt(0).toUpperCase()}
        </div>
        <div className="profile-section-dropdown">
          {userInfo?.role === "admin" ? (
            <div>
              <div
                className="profile-dropdown-item"
                onClick={() => navigate("/dashboard")}
              >
                <p>{getTranslation("dashboard", isDutch)}</p>
              </div>
              <div
                className="profile-dropdown-item"
                onClick={() => navigate("/profile")}
              >
                <p>{getTranslation("profile", isDutch)}</p>
              </div>
            </div>
          ) : (
            <div>
              <div
                className="profile-dropdown-item"
                onClick={() => navigate("/user-dashboard")}
              >
                <p>{getTranslation("dashboard", isDutch)}</p>
              </div>
              <div
                className="profile-dropdown-item"
                onClick={() => navigate("/select-name")}
              >
                <p>{getTranslation("letsPlay", isDutch)}</p>
              </div>
            </div>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <CustomButton
              label={getTranslation("logout", isDutch)}
              type={"solid"}
              style={{ zIndex: "1000" }}
              onClick={showLogoutModal}
            />
          </div>
        </div>
      </div>
      <LogoutModal
        isLogoutModalOpen={isLogoutModalOpen}
        handleLogoutModalOk={handleLogoutModalOk}
        handleLogoutModalCancel={handleLogoutModalCancel}
      />
    </>
  );
}

export default ProfileDropdown;
