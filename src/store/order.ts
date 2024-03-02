import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";

import { logger } from "@/utils";
import { getStatus, createSelectors } from "./helpers";
import { axiosPrivateQuery } from "@/services/axios";

import { OrderT } from "@/interface/db/order.types";
import { OrderStateT, OrderStoreT } from "@/interface/store/order.store.types";

const initialState: OrderStateT = {
  orders: [],

  readStatus: getStatus("IDLE"),
  treeTrunkStatus: getStatus("IDLE"),
};

const useProductStore = create<OrderStoreT>()(
  devtools(
    immer((set) => ({
      ...initialState,

      async treeTrunkOrder(params) {
        try {
          set(() => ({ treeTrunkStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.post(`${params.orderId}`, {
            status: params.status,
          });

          set(() => ({ treeTrunkStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ treeTrunkStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async getOrders() {
        try {
          set(() => ({ readStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<Array<OrderT>> =
            await axiosPrivateQuery.get(``);

          set(() => ({
            orders: data,
            readStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ readStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpOrders() {
        set(() => ({
          orders: initialState.orders,
          readStatus: initialState.readStatus,
        }));
      },
    })),
    { name: "agro_orders" }
  )
);

export default createSelectors(useProductStore);
