import { useState, useEffect } from "react";

import { ProductSizeT } from "@/interface/db/product.types";
import { SelectedProductSizeT } from "@/interface/store/combo.store.types";

export default function useSizeChange(sizes: Array<ProductSizeT>) {
  /* Set Size locally before current product will be added to store */
  const [size, setSize] = useState<SelectedProductSizeT>({
    _id: "",
    size: "",
    quantity: 0,
    selectedCount: 0,
  });

  /** Watch Size change and reset size state based on change*/
  const onSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const chosenSize = sizes.find((size) => size.size === e.target.value);

    if (!chosenSize) return;

    setSize((prev) => ({
      ...prev,
      ...chosenSize,
      selectedCount: chosenSize.quantity > 0 ? 1 : 0,
    }));
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
   * set default size on size state
   */
  useEffect(() => {
    if (!sizes || (Array.isArray(sizes) && !sizes[0]) || size.size) return;

    const defaultSize = sizes[0];

    setSize({
      ...defaultSize,
      selectedCount: defaultSize.quantity > 0 ? 1 : 0,
    });
  }, [sizes]);

  return {
    size,
    setSize,
    onSizeChange,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onQuantityChange,
  };
}
