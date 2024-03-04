import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { produce } from "immer";
// import { AxiosResponse } from "axios";

import { logger } from "@/utils";
import { getStatus, createSelectors } from "./helpers";
import { axiosPrivateQuery } from "@/services/axios";

// import { ComboT } from "@/interface/db/combo.types";
import {
  ComboStateT,
  ComboStoreT,
  SelectedProductT,
} from "@/interface/store/combo.store.types";

const initialState: ComboStateT = {
  combos: [],
  createStatus: getStatus("IDLE"),

  // ========== LOCALES ==========
  addedProducts: [],
};

const useProductStore = create<ComboStoreT>()(
  devtools(
    immer((set, get) => ({
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

      // ========== LOCALES ==========
      addProduct(product) {
        const addedProducts = get().addedProducts;

        const candidateProductIndex = findAddedProductIndex({
          productId: product._id,
          size: product.size.size,
          data: addedProducts,
        });

        const productIsAdded = candidateProductIndex >= 0;

        if (productIsAdded) {
          set((state) =>
            produce(state, (draft) => {
              const candidateProduct =
                draft.addedProducts[candidateProductIndex];
              candidateProduct.size.selectedCount += product.size.selectedCount;
            })
          );
        } else {
          set(() => ({ addedProducts: [...addedProducts, product] }));
        }
      },

      removeProduct(params) {
        set((state) =>
          produce(state, (draft) => {
            const candidateProductIndex = findAddedProductIndex({
              ...params,
              data: draft.addedProducts,
            });

            draft.addedProducts.splice(candidateProductIndex, 1);
          })
        );
      },

      increaseAddedProductCount(params) {
        set((state) =>
          produce(state, (draft) => {
            const candidateProductIndex = findAddedProductIndex({
              ...params,
              data: draft.addedProducts,
            });

            const candidateProductSize =
              draft.addedProducts[candidateProductIndex].size;

            candidateProductSize.selectedCount =
              candidateProductSize.selectedCount ===
              candidateProductSize.quantity
                ? candidateProductSize.quantity
                : candidateProductSize.selectedCount + 1;
          })
        );
      },

      decreaseAddedProductCount(params) {
        set((state) =>
          produce(state, (draft) => {
            const candidateProductIndex = findAddedProductIndex({
              ...params,
              data: draft.addedProducts,
            });

            const candidateProductSize =
              draft.addedProducts[candidateProductIndex].size;

            candidateProductSize.selectedCount =
              candidateProductSize.selectedCount === 1
                ? 1
                : candidateProductSize.selectedCount - 1;
          })
        );
      },

      changeAddedProductCount(params) {
        set((state) =>
          produce(state, (draft) => {
            const candidateProductIndex = findAddedProductIndex({
              ...params,
              data: draft.addedProducts,
            });

            const candidateProductSize =
              draft.addedProducts[candidateProductIndex].size;

            candidateProductSize.selectedCount =
              params.count > candidateProductSize.quantity
                ? candidateProductSize.quantity
                : params.count <= 0
                ? 1
                : params.count;
          })
        );
      },
    })),
    { name: "agro_combos" }
  )
);

export default createSelectors(useProductStore);

function findAddedProductIndex(params: {
  data: Array<SelectedProductT>;
  productId: string;
  size: string;
}): number {
  const candidateProductIndex = params.data.findIndex(
    (product) =>
      product._id === params.productId && product.size.size === params.size
  );

  return candidateProductIndex;
}
