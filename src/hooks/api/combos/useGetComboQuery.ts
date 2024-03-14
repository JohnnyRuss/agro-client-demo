import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { comboStore } from "@/store";

export default function useGetComboQuery() {
  const { comboId } = useParams();

  const get = comboStore.use.get();
  const data = comboStore.use.combo();
  const status = comboStore.use.readSingleStatus();

  useEffect(() => {
    if (!comboId) return;

    get({ comboId });
  }, [comboId]);

  return { data, status };
}
