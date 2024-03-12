import { useState } from "react";
import { Link } from "react-router-dom";

import { DYNAMIC_ROUTES } from "@/config/paths";

import ComboSlider from "./ComboSlider";
import * as Styled from "./comboDetails.styled";
import { LineClamp, Button } from "@/components/Layouts";
import { OpenInNewIcon, ShoppingCartIcon } from "@/components/Layouts/Icons";

const images = [
  "https://images.unsplash.com/photo-1682685797365-6f57bbebffed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1707343848723-bd87dea7b118?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682687221213-56e250b36fdd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709286636205-c419afdf70aa?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682686581498-5e85c7228119?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709374601273-57d0a44c9437?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const ComboDetails: React.FC = () => {
  const [startIndex, setStartIndex] = useState<number | undefined>(undefined);

  return (
    <>
      <ComboSlider
        images={images}
        startIndex={startIndex || NaN}
        onClose={() => setStartIndex(NaN)}
      />

      <Styled.ComboDetails>
        <div className="gallery-box">
          {images.map((image, index) => (
            <figure key={image} onClick={() => setStartIndex(index)}>
              <img src={image} alt="" />
            </figure>
          ))}
        </div>

        <div className="combo-details__wrapper">
          <div className="combo-price">1500₾</div>

          <p className="combo-title">ნაკრების სათური</p>

          <p className="combo-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            deserunt quidem, reprehenderit earum, quod deleniti dolorum
            veritatis odit officia repellat nobis corrupti eligendi obcaecati!
            Laborum, labore similique. Dolores quis neque amet ea illo? Nisi, id
            ex animi veniam accusamus mollitia.
          </p>

          <Button show="secondary" className="add-to--cart__btn">
            <ShoppingCartIcon />
            კალათაში დამატება
          </Button>

          <p className="sub-title">ნაკრებში შედის:</p>

          <div className="contained-products">
            {images.map((image) => (
              <div
                key={`contained-${image}`}
                className="contained-products__item"
              >
                <figure>
                  <img src={image} alt="" />
                </figure>

                <div className="contained-product__item-details">
                  <LineClamp
                    showTitle={true}
                    component="h4"
                    text="პროდუქტის სათაური პროდუქტის სათაური პროდუქტის სათაური პროდუქტის სათაური პროდუქტის სათაური"
                    clamp={2}
                  />

                  <div className="contained-product__item-details-grid">
                    <div>
                      <span>ზომა:</span>
                      &nbsp;
                      <span>24</span>
                    </div>

                    <div>
                      <span>რაოდენობა:</span>
                      &nbsp;
                      <span>6</span>
                    </div>

                    <div>
                      <span>ფასი:</span>
                      &nbsp;
                      <span>6₾</span>
                    </div>

                    <div>
                      <span>ჯამური ფასი:</span>
                      &nbsp;
                      <span>36₾</span>
                    </div>
                  </div>

                  <Link
                    target="_blank"
                    title="პროდუქტის ნახვა"
                    referrerPolicy="no-referrer"
                    className="view-product__btn"
                    to={DYNAMIC_ROUTES.product_page("123")}
                  >
                    <OpenInNewIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Styled.ComboDetails>
    </>
  );
};

export default ComboDetails;
