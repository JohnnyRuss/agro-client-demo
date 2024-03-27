import { Fragment } from "react";

import filterOrdersByStatus from "./functions/filterOrdersByStatus";

import ExpandedOrderItem from "./ExpandedOrderItem";
import * as Styled from "./styles/expandedOrdersList.styled";

import { GroupedOrdersT } from "@/interface/db/order.types";

type ExpandedOrdersListT = {
  groupedOrders: GroupedOrdersT;
};

const ExpandedOrdersList: React.FC<ExpandedOrdersListT> = ({
  groupedOrders,
}) => {
  return (
    <Styled.ExpandedOrdersList>
      {groupedOrders.orders.filter(filterOrdersByStatus).map((order) => {
        return (
          <Fragment key={order._id}>
            {order.products.map((product) => (
              <ExpandedOrderItem
                order={order}
                product={product}
                key={`${product._id}-${product.size}--${order.createdAt}`}
              />
            ))}
          </Fragment>
        );
      })}
    </Styled.ExpandedOrdersList>
  );
};

export default ExpandedOrdersList;
