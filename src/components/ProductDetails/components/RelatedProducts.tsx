import { useEffect } from "react";

import { useGetProductsQuery } from "@/hooks/api/products";

import * as Styled from "./relatedProducts.styled";
import { ProductCard } from "@/components/Layouts";

type RelatedProductsT = {};

const RelatedProducts: React.FC<RelatedProductsT> = () => {
  const { getPaginatedProductsQuery, data, cleanUpAll } = useGetProductsQuery();

  useEffect(() => {
    getPaginatedProductsQuery({ page: 1, limit: 6 });

    return () => {
      cleanUpAll();
    };
  }, []);

  return (
    <Styled.RelatedProducts>
      <p>მსგავსი პროდუქცია</p>

      <div className="related-list">
        {data.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </Styled.RelatedProducts>
  );
};

export default RelatedProducts;
