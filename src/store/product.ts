import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";

import {
  isURL,
  isBase64Str,
} from "@/utils/validations/helpers/customValidators";
import { logger } from "@/utils";
import FileControl from "@/utils/FileControl";
import { axiosPrivateQuery, axiosPrivateFormDataQuery } from "@/services/axios";
import { getStatus, createSelectors } from "./helpers";

import {
  ProductStateT,
  ProductStoreT,
} from "@/interface/store/product.store.types";
import { ProductT, GetProductsResponseT } from "@/interface/db/product.types";

const initialState: ProductStateT = {
  product: {
    _id: "",
    title: "",
    description: "",
    category: {
      _id: "",
      query: "",
      title: "",
    },
    assets: [],
    price: NaN,
    sizes: [],
  },

  products: [],
  currentPage: 0,
  hasMore: false,

  readStatus: getStatus("IDLE"),
  createStatus: getStatus("IDLE"),
  deleteStatus: getStatus("IDLE"),
};

const useProductStore = create<ProductStoreT>()(
  devtools(
    immer((set) => ({
      ...initialState,

      async createProduct(data) {
        try {
          set(() => ({ createStatus: getStatus("PENDING") }));

          const requestBody = {
            ...data,
            assets: [],
            new_assets: data.assets,
            category: data.category.value,
          };

          await axiosPrivateFormDataQuery.post("/products", requestBody);

          set(() => ({ createStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ createStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async updateProduct(data, params) {
        try {
          set(() => ({ createStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.put(`/${params.productId}`, data);

          set(() => ({ createStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ createStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async deleteProduct(params) {
        try {
          set(() => ({ deleteStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.delete(`${params.productId}`);

          set((state) => ({
            products: state.products.filter(
              (product) => product._id !== params.productId
            ),
            deleteStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ deleteStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async getProduct(params) {
        try {
          set(() => ({ readStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<ProductT> = await axiosPrivateQuery.get(
            `${params.productId}`
          );

          set(() => ({ product: data, readStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ readStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpProduct() {
        set(() => ({
          product: initialState.product,
          readStatus: initialState.readStatus,
        }));
      },

      async getProducts() {
        try {
          set(() => ({ readStatus: getStatus("PENDING") }));

          const {
            data: { data, currentPage, hasMore },
          }: AxiosResponse<GetProductsResponseT> = await axiosPrivateQuery.get(
            `/products`
          );

          set(() => ({
            hasMore,
            currentPage,
            products: data,
            readStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ readStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpProducts() {
        set(() => ({
          hasMore: initialState.hasMore,
          currentPage: initialState.currentPage,
          products: initialState.products,
          readStatus: initialState.readStatus,
        }));
      },
    })),
    { name: "agro_products" }
  )
);

export default createSelectors(useProductStore);
