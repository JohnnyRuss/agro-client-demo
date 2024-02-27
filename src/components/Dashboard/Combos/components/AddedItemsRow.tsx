import { memo } from "react";

import { generateArray } from "@/utils";

import * as Styled from "./styles/addedItemsRow.styled";
import ItemToChooseCard from "./ItemToChooseCard";

type AddedItemsRowT = {};

const AddedItemsRow: React.FC<AddedItemsRowT> = memo(() => {
  return (
    <Styled.AddedItemsRow>
      <div className="added-items__list-head">
        <span>Added 3 Products</span>

        <div>
          <span>Total Price:</span>
          &nbsp;
          <span>416</span>
        </div>
      </div>

      <div className="added-items__list-wrapper">
        <div className="added-items__list">
          {generateArray(3).map((id) => (
            <ItemToChooseCard key={id} isInAddedRow={true} />
          ))}
        </div>
      </div>
    </Styled.AddedItemsRow>
  );
});

export default AddedItemsRow;
