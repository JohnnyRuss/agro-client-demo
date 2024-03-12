import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
const Home = lazy(() => import("@/components/Home/Home"));

const HomePage: React.FC = () => {
  return (
    <>
      <Navigation />
      <SuspenseContainer>
        <Home />
      </SuspenseContainer>
      <Footer />
    </>
  );
};

export default HomePage;
