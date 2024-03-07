import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { produce } from "immer";
import { AxiosResponse } from "axios";

import { logger } from "@/utils";
import { getStatus, createSelectors } from "./helpers";
import { axiosPrivateFormDataQuery, axiosPrivateQuery } from "@/services/axios";

import {
  ComboStateT,
  ComboStoreT,
  SelectedProductT,
} from "@/interface/store/combo.store.types";
import { ComboShortT } from "@/interface/db/combo.types";

const initialState: ComboStateT = {
  combos: [],
  createStatus: getStatus("IDLE"),
  readStatus: getStatus("IDLE"),
  deleteStatus: getStatus("IDLE"),

  // ========== LOCALES ==========
  addedProducts: [],
  existingAssets: [],
  addedExistingAssets: [],
  newAssets: [],
  assets_to_delete: [],
};

const useProductStore = create<ComboStoreT>()(
  devtools(
    immer(
      persist(
        (set, get) => ({
          ...initialState,

          async create(data) {
            try {
              set(() => ({ createStatus: getStatus("PENDING") }));

              const addedProducts = get().addedProducts;
              const addedExistingAssets = get().addedExistingAssets;
              const newAssets = get().newAssets;

              const requestBody = {
                title: data.title,
                description: data.description,
                price: +data.price,
                products: addedProducts.map((product) => ({
                  product: product._id,
                  size: {
                    size: product.size.size,
                    quantity: product.size.selectedCount,
                  },
                })),
                assets: addedExistingAssets,
                new_assets: newAssets,
              };

              await axiosPrivateFormDataQuery.post("/combos", requestBody);

              set(() => ({
                createStatus: getStatus("SUCCESS"),
                addedProducts: initialState.addedProducts,
                existingAssets: initialState.existingAssets,
                newAssets: initialState.newAssets,
              }));
            } catch (error: any) {
              const message = logger(error);
              set(() => ({ createStatus: getStatus("FAIL", message) }));
              throw error;
            }
          },

          async update({ comboId, data }) {
            try {
              set(() => ({ createStatus: getStatus("PENDING") }));

              const addedProducts = get().addedProducts;
              const addedExistingAssets = get().addedExistingAssets;
              const newAssets = get().newAssets;
              const assets_to_delete = get().assets_to_delete;

              const requestBody = {
                title: data.title,
                description: data.description,
                price: +data.price,
                products: addedProducts.map((product) => ({
                  product: product._id,
                  size: {
                    size: product.size.size,
                    quantity: product.size.selectedCount,
                  },
                })),
                assets: addedExistingAssets,
                new_assets: newAssets,
                assets_to_delete,
              };

              await axiosPrivateFormDataQuery.put(
                `/combos/${comboId}`,
                requestBody
              );

              set(() => ({
                createStatus: getStatus("SUCCESS"),
                addedProducts: initialState.addedProducts,
                existingAssets: initialState.existingAssets,
                newAssets: initialState.newAssets,
                assets_to_delete: initialState.assets_to_delete,
              }));
            } catch (error: any) {
              const message = logger(error);
              set(() => ({
                createStatus: getStatus("FAIL", message),
              }));
              throw error;
            }
          },

          async delete(params) {
            try {
              set(() => ({ deleteStatus: getStatus("PENDING") }));

              axiosPrivateQuery.delete(`/combos/${params.comboId}`);

              const combos = get().combos;

              set(() => ({
                deleteStatus: getStatus("SUCCESS"),
                combos: [...combos].filter(
                  (combo) => combo._id !== params.comboId
                ),
              }));
            } catch (error: any) {
              const message = logger(error);
              set(() => ({ deleteStatus: getStatus("SUCCESS", message) }));
              throw error;
            }
          },

          async getAll() {
            try {
              set(() => ({ readStatus: getStatus("PENDING") }));

              const { data }: AxiosResponse<Array<ComboShortT>> =
                await axiosPrivateQuery.get("combos?dashboard=1");

              set(() => ({ readStatus: getStatus("SUCCESS"), combos: data }));
            } catch (error) {
              const message = logger(error);
              set(() => ({ readStatus: getStatus("FAIL", message) }));
              throw error;
            }
          },

          // ========== LOCALES ==========
          addProduct(product) {
            const addedProducts = get().addedProducts;
            const existingAssets = get().existingAssets;

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
                  candidateProduct.size.selectedCount +=
                    product.size.selectedCount;
                })
              );
            } else {
              set(() => ({
                addedProducts: [...addedProducts, product],
                existingAssets: [...existingAssets, ...product.assets],
              }));
            }
          },

          removeProduct(params) {
            set((state) =>
              produce(state, (draft) => {
                const candidateProductIndex = findAddedProductIndex({
                  ...params,
                  data: draft.addedProducts,
                });

                const removedProductAssets =
                  draft.addedProducts[candidateProductIndex].assets;

                draft.addedProducts.splice(candidateProductIndex, 1);

                draft.existingAssets = draft.existingAssets.filter(
                  (asset) => !removedProductAssets.includes(asset)
                );

                draft.addedExistingAssets = draft.addedExistingAssets.filter(
                  (asset) => !removedProductAssets.includes(asset)
                );
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

          toggleExistingAsset(asset) {
            const addedAssets = get().addedExistingAssets;
            const assets_to_delete = get().assets_to_delete;

            const addedProductsAssets = get().addedProducts.flatMap(
              (product) => product.assets
            );

            const isAdding = !addedAssets.includes(asset);
            const isOwnAsset = !addedProductsAssets.includes(asset);

            if (isOwnAsset)
              set(() => ({
                assets_to_delete: isAdding
                  ? assets_to_delete.filter((asset) => asset !== asset)
                  : [...assets_to_delete, asset],
              }));

            set(() => ({
              addedExistingAssets: isAdding
                ? [...addedAssets, asset]
                : addedAssets.filter((assetUrl) => assetUrl !== asset),
            }));
          },

          addNewFiles(params) {
            set(() => ({ newAssets: params }));
          },

          removeNewFile(fileIndex) {
            set((state) =>
              produce(state, (draft) => {
                draft.newAssets.splice(fileIndex, 1);
              })
            );
          },

          setComboDefaults(params) {
            set(() => ({
              existingAssets: Array.from(
                new Set(
                  params.products
                    .flatMap((product) => product.product.assets)
                    .concat(params.assets)
                )
              ),
              addedExistingAssets: params.assets,
              addedProducts: params.products.map(({ product, size }) => ({
                _id: product._id,
                title: product.title,
                description: product.description,
                size: {
                  size: size.size,
                  selectedCount: size.quantity,
                  _id:
                    product.sizes.find(
                      (productSize) => productSize.size === size.size
                    )?._id || "",
                  quantity:
                    product.sizes.find(
                      (productSize) => productSize.size === size.size
                    )?.quantity || 0,
                },
                price: product.price,
                assets: product.assets,
              })),
            }));
          },

          cleanUpComboForm() {
            set(() => ({
              newAssets: initialState.newAssets,
              addedProducts: initialState.addedProducts,
              existingAssets: initialState.existingAssets,
              assets_to_delete: initialState.assets_to_delete,
            }));
          },
        }),
        {
          name: "agro_combo_form",
          partialize: (state) => ({
            addedProducts: state.addedProducts,
            existingAssets: state.existingAssets,
          }),
        }
      )
    ),
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
