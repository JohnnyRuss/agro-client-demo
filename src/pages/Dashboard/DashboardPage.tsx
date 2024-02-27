import { lazy } from "react";
import { Outlet } from "react-router-dom";

import { SuspenseContainer } from "@/components/Layouts";
const Dashboard = lazy(() => import("@/components/Dashboard/Dashboard"));

const DashboardPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <Dashboard>
        <Outlet />
      </Dashboard>
    </SuspenseContainer>
  );
};

export default DashboardPage;
