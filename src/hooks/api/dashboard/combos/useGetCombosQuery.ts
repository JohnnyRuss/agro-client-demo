import { useEffect } from "react";

import { comboStore } from "@/store";

export default function useGetCombosQuery() {
  const getAll = comboStore.use.getAll();
  const status = comboStore.use.readStatus();
  const data = comboStore.use.combos();

  const getCombosQuery = async () => {
    await getAll();
  };

  useEffect(() => {
    getCombosQuery();
  }, []);

  return { data, status };
}
