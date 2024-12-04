import React from "react";
import DashboardLayout from "../Components/DashboardLayout";
import PaymentCards from "./Components/PaymentCards";

function UserDashboard() {
  return (
    <DashboardLayout>
      <PaymentCards />
    </DashboardLayout>
  );
}

export default UserDashboard;
