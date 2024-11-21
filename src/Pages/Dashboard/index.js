import React from "react";
import DashboardLayout from "../Components/DashboardLayout";
import AddUserSection from "./Components/AddUserSection";
import UserTable from "./Components/UserTable";

function Dashboard() {

  return (
    <DashboardLayout>
      <AddUserSection />
      <UserTable />
    </DashboardLayout>
  );
}

export default Dashboard;
