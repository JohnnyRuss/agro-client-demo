import { useGetProductsQuery } from "@/hooks/api/dashboard/products";

import ProductCard from "./components/ProductCard";
import * as Styled from "./styles/yourProducts.styled";
import { StandSpinner } from "@/components/Layouts";

const YourProducts: React.FC = () => {
  const { data, status } = useGetProductsQuery();

  return (
    <Styled.YourProducts>
      {data.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}

      {status.loading && <StandSpinner />}
    </Styled.YourProducts>
  );
};

export default YourProducts;
