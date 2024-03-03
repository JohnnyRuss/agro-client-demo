import { useGetProductsQuery } from "@/hooks/api/dashboard/products";
import { useDeleteProductQuery } from "@/hooks/api/dashboard/products";

import ProductCard from "./components/ProductCard";
import * as Styled from "./styles/yourProducts.styled";
import { StandSpinner, InfiniteScroll } from "@/components/Layouts";

const YourProducts: React.FC = () => {
  const { data, status, hasMore, total, getPaginatedProductsQuery } =
    useGetProductsQuery();
  const { onDeleteQuery, status: deleteStatus } = useDeleteProductQuery();

  const loading = status.loading || deleteStatus.loading;

  return (
    <Styled.YourProducts>
      <InfiniteScroll
        total={total}
        hasMore={hasMore}
        onNext={getPaginatedProductsQuery}
      >
        {data.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onDelete={onDeleteQuery}
          />
        ))}
      </InfiniteScroll>

      {loading && <StandSpinner />}
    </Styled.YourProducts>
  );
};

export default YourProducts;
