import { useEffect } from "react";

import { categoryStore } from "@/store";

export default function useGetCategoriesQuery() {
  const status = categoryStore.use.readStatus();
  const data = categoryStore.use.categories();
  const get = categoryStore.use.getCategories();
  const cleanUp = categoryStore.use.cleanUpCategories();

  useEffect(() => {
    get();

    return () => {
      cleanUp();
    };
  }, []);

  return { status, data };
}
