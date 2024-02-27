import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

import { useScrollTop } from "@/hooks/utils";

const UpdatePassword = lazy(() => import("@/components/Auth/UpdatePassword"));

const UpdatePasswordPage: React.FC = () => {
  useScrollTop();

  return (
    <SuspenseContainer>
      <UpdatePassword />
    </SuspenseContainer>
  );
};

export default UpdatePasswordPage;
