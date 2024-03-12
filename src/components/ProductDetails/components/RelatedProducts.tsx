import { generateArray } from "@/utils";

import * as Styled from "./relatedProducts.styled";
import { ProductCard } from "@/components/Layouts";

type RelatedProductsT = {};

const RelatedProducts: React.FC<RelatedProductsT> = () => {
  return (
    <Styled.RelatedProducts>
      <p>მსგავსი პროდუქცია</p>

      <div className="related-list">
        {generateArray(6).map((id) => (
          <ProductCard key={id} />
        ))}
      </div>
    </Styled.RelatedProducts>
  );
};

export default RelatedProducts;
