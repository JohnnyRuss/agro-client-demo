import { getTimeString, generateArray } from "@/utils";

import OrderItem from "./OrderItem";
import * as Styled from "./styles/ordersBlock.styled";

type OrdersBlockT = {};

const OrdersBlock: React.FC<OrdersBlockT> = () => {
  return (
    <Styled.OrdersBlock>
      <span className="order-block__date">
        {getTimeString(new Date("02.24.2024").toString(), "dayMonthYearConfig")}
      </span>

      <ul className="order-block__list">
        {generateArray(5).map((id) => (
          <OrderItem key={id} />
        ))}
      </ul>
    </Styled.OrdersBlock>
  );
};

export default OrdersBlock;
