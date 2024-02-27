import { generateArray } from "@/utils";

import OrdersBlock from "./OrdersBlock";
import * as Styled from "./styles/orders.styled";

type OrdersT = {};

const Orders: React.FC<OrdersT> = () => {
  return (
    <Styled.Orders>
      <div className="orders">
        {generateArray(3).map((id) => (
          <OrdersBlock key={id} />
        ))}
      </div>
    </Styled.Orders>
  );
};

export default Orders;
