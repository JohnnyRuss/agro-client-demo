import * as Styled from "./styles/hero.styled";

type HeroT = {};

const Hero: React.FC<HeroT> = () => {
  return (
    <Styled.Hero>
      <figure className="hero-fig">
        <img
          src="https://images.unsplash.com/photo-1625758476104-f2ed6c81248f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          title=""
          width="100%"
        />
      </figure>

      <div className="hero__content-box">
        <div className="hero-stand">
          <p>Welcome To Our</p>
          <p className="primary">Farming House</p>
          <button>See Products</button>
        </div>
      </div>
    </Styled.Hero>
  );
};

export default Hero;
