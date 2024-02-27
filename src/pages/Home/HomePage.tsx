import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
import Navigation from "@/components/Navigation/Navigation";
const Home = lazy(() => import("@/components/Home/Home"));

const HomePage: React.FC = () => {
  return (
    <>
      <Navigation />
      <SuspenseContainer>
        <Home />
      </SuspenseContainer>
    </>
  );
};

export default HomePage;
