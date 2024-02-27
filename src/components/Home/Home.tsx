import * as Styled from "./home.styled";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import GetInTouch from "./components/GetInTouch";
import CombosWeSell from "./components/CombosWeSell";
import ProductsWeSell from "./components/ProductsWeSell";

const Home: React.FC = () => {
  return (
    <Styled.Home>
      <Hero />

      <div className="home-body">
        <ProductsWeSell />

        <CombosWeSell />

        <GetInTouch />

        <Contact />

        <AboutUs />
      </div>
    </Styled.Home>
  );
};

export default Home;
