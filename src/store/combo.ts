import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";

import { logger } from "@/utils";
import { getStatus, createSelectors } from "./helpers";
import { axiosPrivateQuery } from "@/services/axios";

import { ComboT } from "@/interface/db/combo.types";
import { ComboStateT, ComboStoreT } from "@/interface/store/combo.store.types";

const initialState: ComboStateT = {
  combos: [],
  createStatus: getStatus("IDLE"),
};

const useProductStore = create<ComboStoreT>()(
  devtools(
    immer((set) => ({
      ...initialState,

      async createCombo(data) {
        try {
          set(() => ({ createStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.post(``, data);

          set(() => ({ createStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ createStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },
    })),
    { name: "agro_combos" }
  )
);

export default createSelectors(useProductStore);
