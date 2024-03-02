import { useEffect } from "react";

import { productStore } from "@/store";

export default function useGetProductsQuery() {
  const status = productStore.use.readStatus();
  const get = productStore.use.getProducts();
  const cleanUp = productStore.use.cleanUpProducts();
  const data = productStore.use.products();

  useEffect(() => {
    get();

    return () => {
      cleanUp();
    };
  }, []);

  return { status, data };
}
