import { FilterIcon } from "@/components/Layouts/Icons";
import * as Styled from "./styles/ordersFilter.styled";

type OrdersFilterT = {};

const OrdersFilter: React.FC<OrdersFilterT> = () => {
  return (
    <Styled.OrdersFilter>
      <FilterIcon />
      <span>ყველა</span>
      <span>წარმატებული შეკვეთები</span>
      <span>მომლოდინე შეკვეთები</span>
      <span>უარყოფილი შეკვეთები</span>
    </Styled.OrdersFilter>
  );
};

export default OrdersFilter;
