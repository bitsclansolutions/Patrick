import React, { useState } from "react";
import "./dashboardSidebar.css";
import CustomButton from "../CustomButton";
import { useLocation, useNavigate } from "react-router-dom";
import LogoutModal from "../Modals/LogoutModal/LogoutModal";
import { useSelector } from "react-redux";
import { getTranslation } from "../../../utils/getTranslation";

function DashboardSidebar() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const userInfo = useSelector((state) => state.AuthReducer.user);
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

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

  console.log("UserInfo", userInfo);

  return (
    <>
      <div className="dashboard-sidebar-main">
        <div className="dashboard-sidebar-inner-main">
          <div className="dashboard-sidebar-items-wrapper">
            {userInfo?.role === "admin" ? (
              <>
                <div
                  className={
                    pathname === "/dashboard"
                      ? "dashboard-sidebar-item-active"
                      : "dashboard-sidebar-item"
                  }
                  onClick={() => navigate("/dashboard")}
                >
                  {getTranslation("dashboard", isDutch)}
                </div>
                <div
                  className={
                    pathname === "/manage-users"
                      ? "dashboard-sidebar-item-active"
                      : "dashboard-sidebar-item"
                  }
                  onClick={() => navigate("/manage-users")}
                >
                  {getTranslation("manageUsers", isDutch)}
                </div>
                {/* <div className="dashboard-sidebar-item">
                  {" "}
                  {getTranslation("manageInvoices", isDutch)}
                </div> */}
              </>
            ) : (
              <div
                className={
                  pathname === "/user-dashboard"
                    ? "dashboard-sidebar-item-active"
                    : "dashboard-sidebar-item"
                }
                onClick={() => navigate("/user-dashboard")}
              >
                {getTranslation("dashboard", isDutch)}
              </div>
            )}

            <div
              className={
                pathname === "/profile"
                  ? "dashboard-sidebar-item-active"
                  : "dashboard-sidebar-item"
              }
              onClick={() => navigate("/profile")}
            >
             {getTranslation("profile", isDutch)}
            </div>
          </div>

          <CustomButton
            style={{ margin: "2rem 0rem" }}
            label={getTranslation("logout", isDutch)}
            type={"solid"}
            onClick={showLogoutModal}
          />
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

export default DashboardSidebar;
