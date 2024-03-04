import { memo } from "react";

import { comboStore } from "@/store";

import ChosenItemCard from "./ChosenItemCard";
import * as Styled from "./styles/addedItemsRow.styled";

type AddedItemsRowT = {};

const AddedItemsRow: React.FC<AddedItemsRowT> = memo(() => {
  const addedProducts = comboStore.use.addedProducts();

  const priceSum = addedProducts.reduce(
    (acc, p) => (acc += p.price * p.size.selectedCount),
    0
  );

  return (
    <Styled.AddedItemsRow>
      <div className="added-items__list-head">
        <span>დამატებულია {addedProducts.length} პროდუქტი</span>

        <div>
          <span>ჯამური ფასი:</span>
          &nbsp;
          <span>{priceSum}</span>
        </div>
      </div>

      <div className="added-items__list-wrapper">
        <div className="added-items__list">
          {[...addedProducts]
            .sort((a, b) => b._id.toString().localeCompare(a._id.toString()))
            .map((product) => (
              <ChosenItemCard
                product={product}
                key={`${product._id}-${product.size._id}`}
              />
            ))}
        </div>
      </div>
    </Styled.AddedItemsRow>
  );
});

export default AddedItemsRow;
