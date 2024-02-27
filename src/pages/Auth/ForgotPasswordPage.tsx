import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

import { useScrollTop } from "@/hooks/utils";

const ForgotPassword = lazy(() => import("@/components/Auth/ForgotPassword"));

const ForgotPasswordPage: React.FC = () => {
  useScrollTop();

  return (
    <SuspenseContainer>
      <ForgotPassword />
    </SuspenseContainer>
  );
};

export default ForgotPasswordPage;
