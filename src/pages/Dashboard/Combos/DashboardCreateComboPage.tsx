import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
const CreateCombo = lazy(
  () => import("@/components/Dashboard/Combos/CreateCombo")
);

const DashboardCreateComboPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <CreateCombo />
    </SuspenseContainer>
  );
};

export default DashboardCreateComboPage;
