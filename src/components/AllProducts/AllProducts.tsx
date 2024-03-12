import { generateArray } from "@/utils";

import { ProductCard } from "@/components/Layouts";
import * as Styled from "./allProducts.styled";

const AllProducts: React.FC = () => {
  return (
    <Styled.AllProducts>
      {generateArray(12).map((id) => (
        <ProductCard key={id} />
      ))}
    </Styled.AllProducts>
  );
};

export default AllProducts;
