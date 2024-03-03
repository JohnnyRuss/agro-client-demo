import { Button } from "@/components/Layouts";
import * as Styled from "./styles/orderItem.styled";

type OrderItemT = {};

const OrderItem: React.FC<OrderItemT> = () => {
  return (
    <Styled.OrderItem>
      <figure className="order-fig">
        <img
          src="https://images.unsplash.com/photo-1625758477842-ac2296b6b78a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          title=""
          width="200"
          loading="lazy"
        />
      </figure>

      <div className="order-details">
        <div className="grid-box">
          <div className="grid-box__sub">
            <span>მომხმარებელი:</span>
            &nbsp;
            <span>Lana Del Ray</span>
          </div>

          <div className="grid-box__sub">
            <span>შეკვეთის თარიღი:</span>
            &nbsp;
            <span>25.02.2024</span>
          </div>
        </div>

        <div className="grid-box">
          <div className="grid-box__sub">
            <span>პროდუქტი:</span>
            &nbsp;
            <span>Product Title</span>
          </div>

          <div className="grid-box__sub">
            <span>პროდუქტის ფასი:</span>
            &nbsp;
            <span>100</span>
          </div>
        </div>

        <div className="grid-box">
          <div className="grid-box__sub">
            <span>პროდუქტის ზომა:</span>
            &nbsp;
            <span>32</span>
          </div>

          <div className="grid-box__sub">
            <span>პროდუქტის რაოდენობა:</span>
            &nbsp;
            <span>4</span>
          </div>
        </div>

        <div className="grid-box">
          <div className="grid-box__sub">
            <span>სტატუსი:</span>
            &nbsp;
            <span>წარმატებული</span>
          </div>

          <div className="grid-box__sub">
            <Button show="secondary" className="view-invoice__btn">
              ნახე შეკვეთის ინვოისი
            </Button>
          </div>
        </div>
      </div>
    </Styled.OrderItem>
  );
};

export default OrderItem;
