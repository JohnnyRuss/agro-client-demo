import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

const AboutUs = lazy(() => import("@/components/AboutUs/AboutUs"));

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Navigation />

      <SuspenseContainer>
        <AboutUs />
      </SuspenseContainer>

      <Footer />
    </>
  );
};

export default AboutUsPage;
