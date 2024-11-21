import React, { useState } from "react";
import "./dashboardSidebar.css";
import CustomButton from "../CustomButton";
import { useLocation, useNavigate } from "react-router-dom";
import LogoutModal from "../Modals/LogoutModal/LogoutModal";

function DashboardSidebar() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

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
    <>
      <div className="dashboard-sidebar-main">
        <div className="dashboard-sidebar-inner-main">
          <div className="dashboard-sidebar-items-wrapper">
            <div
              className={
                pathname === "/dashboard"
                  ? "dashboard-sidebar-item-active"
                  : "dashboard-sidebar-item"
              }
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </div>
            <div
              className={
                pathname === "/manage-users"
                  ? "dashboard-sidebar-item-active"
                  : "dashboard-sidebar-item"
              }
              onClick={() => navigate("/manage-users")}
            >
              Manage Users
            </div>
            <div className="dashboard-sidebar-item">Manage Invoices</div>
            <div
              className={
                pathname === "/profile"
                  ? "dashboard-sidebar-item-active"
                  : "dashboard-sidebar-item"
              }
              onClick={() => navigate("/profile")}
            >
              Profile
            </div>
          </div>

          <CustomButton
            style={{ margin: "2rem 0rem" }}
            label={"Logout"}
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
