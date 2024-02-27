import { memo } from "react";

import { Text } from "@/components/Layouts";
import * as Styled from "./styles/comboActiveItem.styled";

type ComboActiveItemT = {};

const ComboActiveItem: React.FC<ComboActiveItemT> = memo(() => {
  return (
    <Styled.ComboActiveItem>
      <figure className="active-item--fig">
        <img
          src="https://images.unsplash.com/photo-1562658601-0ae4a690ae1f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          title=""
          width="100%"
          loading="lazy"
        />
      </figure>

      <p className="product-title">single product one big title is here</p>

      <Text
        className="product-description"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati possimus beatae nemo dicta ut eos.
        Ut dolore quos voluptatum dignissimos voluptatem, sed itaque, aspernatur suscipit maxime asperiores quo delectus dolor numquam? Magni voluptatum facere possimus, minus rem repudiandae. Consectetur, neque?"
      />

      <div className="grid-box">
        <div className="grid-box__sub">
          <span>Price:</span>
          &nbsp;
          <span>18</span>
        </div>

        <div className="grid-box__sub">
          <span>Size:</span>
          &nbsp;
          <span>32</span>
        </div>

        <div className="grid-box__sub">
          <span>Quantity:</span>
          &nbsp;
          <span>6</span>
        </div>
      </div>
    </Styled.ComboActiveItem>
  );
});

export default ComboActiveItem;
