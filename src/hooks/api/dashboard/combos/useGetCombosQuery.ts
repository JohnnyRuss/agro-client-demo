import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { comboStore } from "@/store";
import { GetAllCombosArgsT } from "@/interface/API/combo.api.types";

export default function useGetCombosQuery(runOnMount = false) {
  const { search } = useLocation();

  const getAll = comboStore.use.getAll();
  const getAllPaginated = comboStore.use.getAllPaginated();
  const status = comboStore.use.readStatus();

  const data = comboStore.use.combos();
  const hasMore = comboStore.use.hasMore();
  const currentPage = comboStore.use.currentPage();
  const total = data.length;

  const cleanUpAll = comboStore.use.cleanUpAll();

  const getPaginatedCombosQuery = async (
    params?: GetAllCombosArgsT | undefined
  ) => {
    await getAllPaginated(params ? params : { page: currentPage + 1 });
  };

  useEffect(() => {
    if (!runOnMount) return;

    getAll({ page: 1, query: search });

    return () => {
      cleanUpAll();
    };
  }, []);

  return { data, status, total, hasMore, getPaginatedCombosQuery, cleanUpAll };
}
