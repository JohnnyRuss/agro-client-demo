import { useEffect } from "react";

import { productStore } from "@/store";
import { GetAllProductsArgsT } from "@/interface/API/products.api.types";

export default function useGetProductsQuery(runOnMount = false) {
  const status = productStore.use.readStatus();
  const getAll = productStore.use.getAll();
  const getAllPaginated = productStore.use.getAllPaginated();

  const data = productStore.use.products();
  const hasMore = productStore.use.hasMore();
  const currentPage = productStore.use.currentPage();
  const total = data.length;

  const cleanUpAll = productStore.use.cleanUpAll();

  const getPaginatedProductsQuery = async (
    params?: GetAllProductsArgsT | undefined
  ) => {
    await getAllPaginated(params ? params : { page: currentPage + 1 });
  };

  useEffect(() => {
    if (!runOnMount) return;

    getAll({ page: 1 });

    return () => {
      cleanUpAll();
    };
  }, [runOnMount]);

  return {
    status,
    data,
    total,
    hasMore,
    getPaginatedProductsQuery,
    cleanUpAll,
  };
}
