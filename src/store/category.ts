import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";

import { logger } from "@/utils";
import { axiosPrivateQuery } from "@/services/axios";
import { getStatus, createSelectors } from "./helpers";

import {
  CategoryStateT,
  CategoryStoreT,
} from "@/interface/store/category.store.types";
import { CategoryT } from "@/interface/db/category.types";

const initialState: CategoryStateT = {
  categories: [],
  readStatus: getStatus("IDLE"),
  createStatus: getStatus("IDLE"),
  deleteStatus: getStatus("IDLE"),
};

const useCategoryStore = create<CategoryStoreT>()(
  devtools(
    immer((set) => ({
      ...initialState,

      async createCategory(data) {
        try {
          set(() => ({ createStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.post("/categories", data);

          set(() => ({ createStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ createStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async updateCategory(data, params) {
        try {
          set(() => ({ createStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.patch(
            `/categories/${params.categoryId}`,
            data
          );

          set(() => ({ createStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ createStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async deleteCategory(params) {
        try {
          set(() => ({ deleteStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.delete(`/categories/${params.categoryId}`);

          set((state) => ({
            categories: state.categories.filter(
              (category) => category._id !== params.categoryId
            ),
            deleteStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ deleteStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async getCategory(params) {
        try {
          set(() => ({ readStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<CategoryT> =
            await axiosPrivateQuery.get(`${params.categoryId}`);
          console.log(data);

          set(() => ({ readStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ readStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async getCategories() {
        try {
          set(() => ({ readStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<Array<CategoryT>> =
            await axiosPrivateQuery.get(`/categories`);

          set(() => ({ categories: data, readStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ readStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpCategories() {
        set(() => ({
          categories: initialState.categories,
          readStatus: initialState.readStatus,
        }));
      },
    })),
    { name: "agro_categories" }
  )
);

export default createSelectors(useCategoryStore);
