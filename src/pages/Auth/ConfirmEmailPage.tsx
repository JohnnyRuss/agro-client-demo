import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

import { useScrollTop } from "@/hooks/utils";

const ConfirmEmail = lazy(() => import("@/components/Auth/ConfirmEmail"));

const ConfirmEmailPage: React.FC = () => {
  useScrollTop();

  return (
    <SuspenseContainer>
      <ConfirmEmail />
    </SuspenseContainer>
  );
};

export default ConfirmEmailPage;
