import * as Styled from "./aboutUs.styled";
import { ContactSection } from "@/components/Layouts";
import AboutUsHeader from "./components/AboutUsHeader";

const AboutUs: React.FC = () => {
  return (
    <Styled.AboutUs>
      <AboutUsHeader />

      <div className="about-us__body">
        <ContactSection />
      </div>
    </Styled.AboutUs>
  );
};

export default AboutUs;
