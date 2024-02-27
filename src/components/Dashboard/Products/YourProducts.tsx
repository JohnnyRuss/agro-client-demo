import { generateArray } from "@/utils";

import ProductCard from "./components/ProductCard";
import * as Styled from "./styles/yourProducts.styled";

const YourProducts: React.FC = () => {
  return (
    <Styled.YourProducts>
      {generateArray(12).map((id) => (
        <ProductCard key={id} />
      ))}
    </Styled.YourProducts>
  );
};

export default YourProducts;
