import { generateArray } from "@/utils";

import SectionTitle from "./SectionTitle";
import ProductsFilter from "./ProductsFilter";
import { ProductCard } from "@/components/Layouts";
import * as Styled from "./styles/productsWeSell.styled";

type ProductsWeSellT = {};

const ProductsWeSell: React.FC<ProductsWeSellT> = () => {
  return (
    <Styled.ProductsWeSell>
      <div className="products-head">
        <SectionTitle subTitle="PRODUCTS" title="Products" />

        <ProductsFilter />
      </div>

      <ul className="products-list">
        {generateArray(6).map((id) => (
          <ProductCard key={id} />
        ))}
      </ul>
    </Styled.ProductsWeSell>
  );
};

export default ProductsWeSell;
