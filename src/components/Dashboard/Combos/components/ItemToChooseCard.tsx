import React, { useEffect, useState } from "react";

import { comboStore } from "@/store";

import {
  PlusIcon,
  MinusIcon,
  PackageCheckIcon,
} from "@/components/Layouts/Icons";
import { LineClamp, Button } from "@/components/Layouts";
import * as Styled from "./styles/itemToChooseCard.styled";

import { ProductT } from "@/interface/db/product.types";
import { SelectedProductSizeT } from "@/interface/store/combo.store.types";

type ItemToChooseCardT = {
  product: ProductT;
};

const ItemToChooseCard: React.FC<ItemToChooseCardT> = ({ product }) => {
  const addProduct = comboStore.use.addProduct();
  const addedProducts = comboStore.use.addedProducts();

  /* Set Size locally before current product will be added to store */
  const [size, setSize] = useState<SelectedProductSizeT>({
    _id: "",
    size: "",
    quantity: 0,
    selectedCount: 0,
  });

  /** Watch Size change and reset size state based on change*/
  const onSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSize = product.sizes.find(
      (size) => size.size === e.target.value
    );

    if (!selectedSize) return;

    setSize({
      ...selectedSize,
      selectedCount: selectedSize.quantity > 0 ? 1 : 0,
    });
  };

  /**
   * control product quantity according to specific size max count
   * size should be changed by the button or from the input itself
   */
  const onIncreaseQuantity = () =>
    setSize((prev) => ({
      ...prev,
      selectedCount:
        prev.selectedCount === prev.quantity
          ? prev.selectedCount
          : prev.selectedCount + 1,
    }));

  const onDecreaseQuantity = () =>
    setSize((prev) => ({
      ...prev,
      selectedCount: prev.selectedCount === 0 ? 0 : prev.selectedCount - 1,
    }));

  const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSize((prev) => ({
      ...prev,
      selectedCount:
        +e.target.value > prev.quantity
          ? prev.quantity
          : +e.target.value < 0
          ? 0
          : +e.target.value,
    }));

  /**
   * add product to store to access globally.
   * quantity manipulation on added products effects directly on the store state.
   * added product quantity is bind bidirectional way between itemsToChoose and chosenItems (controlled by useEffects bellow)
   */
  const onAddProduct = () => {
    if (size.quantity === 0 || size.selectedCount === 0) return;

    const { sizes, ...sizeOmittedProduct } = product;

    addProduct({ ...sizeOmittedProduct, size });
  };

  /**
   * set default size on size state
   */
  useEffect(() => {
    const defaultSize = product.sizes[0];

    setSize({
      ...defaultSize,
      selectedCount: defaultSize.quantity > 0 ? 1 : 0,
    });
  }, []);

  const thumbnail = product.assets.find((asset) => asset?.endsWith(".webp"));
  const isSelected = addedProducts.some((p) => p._id === product._id);
  const isSelectedCurrentSize = addedProducts.some(
    (p) => p._id === product._id && size.size === p.size.size
  );

  /**
   * if current product is already added and quantity is manipulated from chosenItems
   * this will effects on itemsToChoose as well in the case to detect available product count of specific size
   */
  useEffect(() => {
    if (isSelectedCurrentSize) {
      const selectedCurrentSizeIndex = addedProducts.findIndex(
        (p) => p._id === product._id && size.size === p.size.size
      );

      const nativeQuantity =
        product.sizes.find((nativeSize) => nativeSize.size === size.size)
          ?.quantity || 0;

      setSize((prev) => ({
        ...prev,
        quantity:
          nativeQuantity -
          addedProducts[selectedCurrentSizeIndex].size.selectedCount,
      }));
    } else {
      const defaultSize = product.sizes[0];

      setSize({
        ...defaultSize,
        selectedCount: defaultSize.quantity > 0 ? 1 : 0,
      });
    }
  }, [isSelectedCurrentSize, addedProducts]);

  return (
    <Styled.ItemToChooseCard className={isSelected ? "selected" : ""}>
      {isSelectedCurrentSize && (
        <PackageCheckIcon className="package-checked" />
      )}

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
            <select name="size" value={size.size} onChange={onSizeChange}>
              {product.sizes.map((size) => (
                <option value={size.size} key={size._id}>
                  {size.size}
                </option>
              ))}
            </select>
          </div>

          <div className="total-quantity--box">
            <span>
              <strong>მაქს.</strong>
              &nbsp;
            </span>
            <span
              className={`size-quantity ${size.quantity === 0 ? "danger" : ""}`}
            >
              {size.quantity}
            </span>
          </div>

          <div className="control-quantity">
            <button onClick={onDecreaseQuantity}>
              <MinusIcon />
            </button>
            <input
              type="number"
              value={size.selectedCount}
              onChange={onQuantityChange}
            />
            <button onClick={onIncreaseQuantity}>
              <PlusIcon />
            </button>
          </div>

          <Button
            onClick={onAddProduct}
            className="add-btn"
            disabled={size.quantity === 0 || size.selectedCount === 0}
            show={
              size.quantity === 0 || size.selectedCount === 0
                ? "danger"
                : "primary"
            }
          >
            ADD
          </Button>
        </div>
      </div>
    </Styled.ItemToChooseCard>
  );
};

export default ItemToChooseCard;
