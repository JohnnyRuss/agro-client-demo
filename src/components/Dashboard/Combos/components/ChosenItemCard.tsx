import React, { useEffect, useState } from "react";

import { comboStore } from "@/store";

import { LineClamp, Button } from "@/components/Layouts";
import * as Styled from "./styles/itemToChooseCard.styled";
import { PlusIcon, MinusIcon, DeleteIcon } from "@/components/Layouts/Icons";

import {
  SelectedProductT,
  SelectedProductSizeT,
} from "@/interface/store/combo.store.types";

type ChosenItemCardT = {
  product: SelectedProductT;
};

const ChosenItemCard: React.FC<ChosenItemCardT> = ({ product }) => {
  const removeProduct = comboStore.use.removeProduct();
  const changeAddedProductCount = comboStore.use.changeAddedProductCount();
  const increaseAddedProductCount = comboStore.use.increaseAddedProductCount();
  const decreaseAddedProductCount = comboStore.use.decreaseAddedProductCount();

  const onIncreaseQuantity = () =>
    increaseAddedProductCount({
      productId: product._id,
      size: product.size.size,
    });

  const onDecreaseQuantity = () =>
    decreaseAddedProductCount({
      productId: product._id,
      size: product.size.size,
    });

  const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    changeAddedProductCount({
      count: +e.target.value,
      productId: product._id,
      size: product.size.size,
    });

  const onRemoveProduct = () =>
    removeProduct({ productId: product._id, size: product.size.size });

  const thumbnail = product.assets.find((asset) => asset?.endsWith(".webp"));

  return (
    <Styled.ItemToChooseCard>
      <figure className="item--fig">
        <img
          src={thumbnail}
          alt={product.title}
          title={product.title}
          width="100"
          loading="lazy"
        />
      </figure>

      <div className="item--details">
        <LineClamp clamp={2} component="h4" text={product.title} />

        <div>
          <span>
            <strong>ფასი:</strong>
          </span>
          &nbsp;
          <span>{product.price}₾</span>
        </div>

        <div className="item--actions">
          <div className="size-box">
            <span>
              <strong>ზომა:</strong>
            </span>
            &nbsp;
            <span>{product.size.size}</span>
          </div>

          <div className="total-quantity--box">
            <span>
              <strong>მაქს. რაოდენობა:</strong>
              &nbsp;
            </span>
            <span
              className={`size-quantity ${
                product.size.quantity === 0 ? "danger" : ""
              }`}
            >
              {product.size.quantity}
            </span>
          </div>

          <div className="control-quantity">
            <button onClick={onDecreaseQuantity}>
              <MinusIcon />
            </button>
            <input
              type="number"
              onChange={onQuantityChange}
              value={product.size.selectedCount}
            />
            <button onClick={onIncreaseQuantity}>
              <PlusIcon />
            </button>
          </div>

          <Button
            show="danger"
            onClick={onRemoveProduct}
            className="add-btn danger"
            disabled={product.size.selectedCount === 0}
          >
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </Styled.ItemToChooseCard>
  );
};

export default ChosenItemCard;
