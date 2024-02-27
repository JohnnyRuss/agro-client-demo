import { Suspense } from "react";

import { StandSpinner } from "@/components/Layouts";

type SuspenseContainerT = {
  children: React.ReactNode;
};

const SuspenseContainer: React.FC<SuspenseContainerT> = ({ children }) => {
  return <Suspense fallback={<StandSpinner />}>{children}</Suspense>;
};

export default SuspenseContainer;
