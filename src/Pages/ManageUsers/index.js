import React from "react";
import DashboardLayout from "../Components/DashboardLayout";
import ManageUsersSectionTable from "./Components/ManageUsersSection";

function ManageUsers() {
  return (
    <DashboardLayout>
      <ManageUsersSectionTable />
    </DashboardLayout>
  );
}

export default ManageUsers;
