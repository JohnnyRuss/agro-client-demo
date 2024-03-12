import React from "react";

import { useCounter } from "@/hooks/utils";

import { Counter, Button } from "@/components/Layouts";
import * as Styled from "./productDetails.styled";
import ProductSlider from "./components/ProductSlider";
import RelatedProducts from "./components/RelatedProducts";

type ProductDetailsT = {};

const ProductDetails: React.FC<ProductDetailsT> = () => {
  const { counter, onChangeCount, onDecreaseCount, onIncreaseCount } =
    useCounter();

  return (
    <Styled.ProductDetails>
      <div className="details-wrapper">
        <ProductSlider />

        <div className="details">
          <p className="details-title">პროდუქტის სათაური</p>

          <div className="details-category">
            <span>კატეგორია:</span>
            &nbsp;
            <span>სარწყავი</span>
          </div>

          <p className="details-price">150₾</p>

          <p className="details-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
            explicabo eius beatae dolores incidunt tenetur, aliquam fugit
            reprehenderit, vel sapiente, dolor maiores nesciunt id deleniti
            omnis. Delectus quibusdam similique quia?
          </p>

          <div className="details-actions">
            <div className="details-actions__size">
              <label>ზომა:</label>
              &nbsp;
              <select name="size" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
              </select>
              &nbsp;
              <span>20</span>
            </div>

            <div className="details-actions__quantity">
              <label>რაოდენობა:</label>
              &nbsp;
              <Counter
                value={counter}
                onChangeCount={onChangeCount}
                onIncreaseCount={onIncreaseCount}
                onDecreaseCount={onDecreaseCount}
              />
            </div>

            <Button className="details-actions__add-btn" show="secondary">
              დამატება
            </Button>
          </div>
        </div>
      </div>

      <RelatedProducts />
    </Styled.ProductDetails>
  );
};

export default ProductDetails;
