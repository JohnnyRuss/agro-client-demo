import filterOrdersByStatus from "./functions/filterOrdersByStatus";

import ShortenOrderItem from "./ShortenOrderItem";
import * as Styled from "./styles/shortenOrdersList.styled";

import { GroupedOrdersT } from "@/interface/db/order.types";

type ShortenOrdersListT = {
  groupedOrders: GroupedOrdersT;
};

const ShortenOrdersList: React.FC<ShortenOrdersListT> = ({ groupedOrders }) => {
  return (
    <Styled.ShortenOrdersList>
      {groupedOrders.orders.filter(filterOrdersByStatus).map((order) => (
        <ShortenOrderItem order={order} key={order._id} />
      ))}
    </Styled.ShortenOrdersList>
  );
};

export default ShortenOrdersList;
