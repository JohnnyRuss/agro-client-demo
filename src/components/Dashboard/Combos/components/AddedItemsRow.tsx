import { memo } from "react";

import * as Styled from "./styles/addedItemsRow.styled";
import ItemToChooseCard from "./ItemToChooseCard";

type AddedItemsRowT = {};

const AddedItemsRow: React.FC<AddedItemsRowT> = memo(() => {
  return (
    <Styled.AddedItemsRow>
      <div className="added-items__list-head">
        <span>დამატებულია 3 პროდუქტი</span>

        <div>
          <span>ჯამური ფასი:</span>
          &nbsp;
          <span>416</span>
        </div>
      </div>

      <div className="added-items__list-wrapper">
        <div className="added-items__list">
          {[].map((id) => (
            <ItemToChooseCard
              key={id}
              isInAddedRow={true}
              product={{
                _id: "",
                assets: [],
                category: { _id: "", query: "", title: "" },
                description: "",
                price: 1,
                sizes: [],
                title: "",
              }}
            />
          ))}
        </div>
      </div>
    </Styled.AddedItemsRow>
  );
});

export default AddedItemsRow;
