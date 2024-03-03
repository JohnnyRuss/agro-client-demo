import { memo } from "react";

import { useGetProductsQuery } from "@/hooks/api/dashboard/products";

import ItemToChooseCard from "./ItemToChooseCard";
import { SearchIcon } from "@/components/Layouts/Icons";
import * as Styled from "./styles/itemsToChooseRow.styled";
import { Button, InfiniteScroll } from "@/components/Layouts";

type ItemToChooseRowT = {};

const ItemToChooseRow: React.FC<ItemToChooseRowT> = memo(() => {
  const { data, status, hasMore, total, getPaginatedProductsQuery } =
    useGetProductsQuery();

  return (
    <Styled.ItemsToChooseRow>
      <div className="search-field">
        <input type="text" name="" id="" placeholder="ძებნა ..." />

        <Button show="secondary">
          ძებნა
          <SearchIcon />
        </Button>
      </div>

      <InfiniteScroll
        height="76vh"
        total={total}
        hasMore={hasMore}
        onNext={getPaginatedProductsQuery}
      >
        {data.map((product) => (
          <ItemToChooseCard
            key={product._id}
            isInAddedRow={false}
            product={product}
          />
        ))}
      </InfiniteScroll>
    </Styled.ItemsToChooseRow>
  );
});

export default ItemToChooseRow;
