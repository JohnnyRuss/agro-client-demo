import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

import { useScrollTop } from "@/hooks/utils";

const Login = lazy(() => import("@/components/Auth/Login"));

const LoginPage: React.FC = () => {
  useScrollTop();

  return (
    <SuspenseContainer>
      <Login />
    </SuspenseContainer>
  );
};

export default LoginPage;
