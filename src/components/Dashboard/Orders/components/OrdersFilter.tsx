import { FilterIcon } from "@/components/Layouts/Icons";
import * as Styled from "./styles/ordersFilter.styled";

type OrdersFilterT = {};

const OrdersFilter: React.FC<OrdersFilterT> = () => {
  return (
    <Styled.OrdersFilter>
      <FilterIcon />
      <span>All</span>
      <span>Successful Orders</span>
      <span>Pending Orders</span>
      <span>Rejected Orders</span>
    </Styled.OrdersFilter>
  );
};

export default OrdersFilter;
