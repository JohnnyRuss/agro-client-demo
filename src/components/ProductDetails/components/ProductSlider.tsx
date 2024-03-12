import ReactImageMagnify from "react-image-magnify";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import * as Styled from "./productSlider.styled";

const images = [
  "https://images.unsplash.com/photo-1682685797365-6f57bbebffed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1707343848723-bd87dea7b118?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682687221213-56e250b36fdd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709286636205-c419afdf70aa?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 4,
  },
};

const ProductSlider: React.FC = () => {
  return (
    <Styled.ProductSlider>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            isFluidWidth: true,
            height: 400,
            width: 550,
            src: "https://images.unsplash.com/photo-1631337902392-b4bb679fbfdb?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          largeImage: {
            src: "https://images.unsplash.com/photo-1631337902392-b4bb679fbfdb?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            width: 800,
            height: 800,
          },
        }}
        imageClassName="magnify-app--box__img"
        className="magnify-app--box"
        enlargedImagePosition="over"
      />

      <Carousel
        responsive={responsive}
        infinite={true}
        centerMode={true}
        transitionDuration={300}
        slidesToSlide={2}
      >
        {images.map((image) => (
          <figure>
            <img src={image} alt="" />
          </figure>
        ))}
      </Carousel>
    </Styled.ProductSlider>
  );
};

export default ProductSlider;
