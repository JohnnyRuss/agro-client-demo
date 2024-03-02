import { LoadingStatusT } from "@/interface/store/common.types";
import { OrderT, OrderStatusT } from "@/interface/db/order.types";

type OrderStateT = {
  orders: Array<OrderT>;
  readStatus: LoadingStatusT;
  treeTrunkStatus: LoadingStatusT;
};

type OrderActionsT = {
  getOrders: (query?: string) => Promise<void>;
  treeTrunkOrder: (params: {
    orderId: string;
    status: OrderStatusT;
  }) => Promise<void>;
  cleanUpOrders: () => void;
};

type OrderStoreT = OrderStateT & OrderActionsT;

export type { OrderStateT, OrderStoreT };
