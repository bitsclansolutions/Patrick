import React from "react";
import "./dashboardLayout.css";
import DashboardHeader from "../DashboardHeader";
import DashboardSidebar from "../DashboardSidebar";

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout-main">
      <DashboardHeader />
      <div className="dashboard-inner-wrapper">
        <div className="dashboard-layout-sidebar">
          <DashboardSidebar />
        </div>
        <div className="dashboard-layout-content">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
