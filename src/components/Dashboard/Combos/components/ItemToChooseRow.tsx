import { memo } from "react";

import { generateArray } from "@/utils";

import { Button } from "@/components/Layouts";
import ItemToChooseCard from "./ItemToChooseCard";
import { SearchIcon } from "@/components/Layouts/Icons";
import * as Styled from "./styles/itemsToChooseRow.styled";

type ItemToChooseRowT = {};

const ItemToChooseRow: React.FC<ItemToChooseRowT> = memo(() => {
  return (
    <Styled.ItemsToChooseRow>
      <div className="search-field">
        <input type="text" name="" id="" placeholder="Search ..." />

        <Button show="secondary">
          Search
          <SearchIcon />
        </Button>
      </div>

      <div className="item-to--choose__list-wrapper">
        <div className="item-to--choose__list">
          {generateArray(10).map((id) => (
            <ItemToChooseCard key={id} isInAddedRow={false} />
          ))}
        </div>
      </div>
    </Styled.ItemsToChooseRow>
  );
});

export default ItemToChooseRow;
