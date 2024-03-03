import { useEffect } from "react";

import { productStore } from "@/store";

export default function useGetProductsQuery() {
  const status = productStore.use.readStatus();
  const getAll = productStore.use.getAll();
  const getAllPaginated = productStore.use.getAllPaginated();

  const data = productStore.use.products();
  const hasMore = productStore.use.hasMore();
  const currentPage = productStore.use.currentPage();
  const total = data.length;

  const cleanUpAll = productStore.use.cleanUpAll();

  const getPaginatedProductsQuery = async () => {
    await getAllPaginated({
      page: currentPage + 1,
    });
  };

  useEffect(() => {
    getAll({ page: 1 });

    return () => {
      cleanUpAll();
    };
  }, []);

  return { status, data, total, hasMore, getPaginatedProductsQuery };
}
