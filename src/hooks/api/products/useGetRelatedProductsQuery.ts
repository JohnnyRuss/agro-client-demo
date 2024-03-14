import { useEffect } from "react";

import { productStore } from "@/store";

export default function useGetRelatedProductsQuery(
  productId?: string,
  categoryId?: string
) {
  const status = productStore.use.relatedStatus();
  const data = productStore.use.relatedProducts();
  const getAllRelated = productStore.use.getAllRelated();

  useEffect(() => {
    if (!productId || !categoryId) return;

    getAllRelated({ productId, categoryId });
  }, [productId, categoryId]);

  return { status, data };
}
