import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

import { useScrollTop } from "@/hooks/utils";

const Register = lazy(() => import("@/components/Auth/Register"));

const RegisterPage: React.FC = () => {
  useScrollTop();

  return (
    <SuspenseContainer>
      <Register />
    </SuspenseContainer>
  );
};

export default RegisterPage;
