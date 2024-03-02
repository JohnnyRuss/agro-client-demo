type OrderT = {
  product: {
    title: string;
    description: string;
    price: string;
  };
  combo: any;
  totalPrice: number;
  quantity: number;
  status: OrderStatusT;
};

type OrderStatusT = "PENDING" | "REJECTED" | "APPROVED";

export type { OrderT, OrderStatusT };
