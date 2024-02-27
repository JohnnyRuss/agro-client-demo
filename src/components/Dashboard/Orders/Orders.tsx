import * as Styled from "./orders.styled";
import OrdersList from "./components/Orders";
import OrdersFilter from "./components/OrdersFilter";

const Orders: React.FC = () => {
  return (
    <Styled.Orders>
      <OrdersFilter />

      <div className="orders__content-box">
        <OrdersList />

        <div className="invoice">
          <figure>
            <img src="/assets/invoice.jpg" alt="" />
          </figure>
        </div>
      </div>
    </Styled.Orders>
  );
};

export default Orders;
