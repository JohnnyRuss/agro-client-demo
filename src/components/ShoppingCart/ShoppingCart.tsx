import { generateArray } from "@/utils";

import * as Styled from "./shoppingCart.styled";
import { Button } from "@/components/Layouts";
import ShoppingCartHeader from "./components/ShoppingCartHeader";
import ShoppingCartItem from "./components/ShoppingCartItem";

const ShoppingCart: React.FC = () => {
  return (
    <Styled.ShoppingCart>
      <ShoppingCartHeader />

      <div className="shopping-cart__body">
        <div className="products-list__wrapper">
          <div className="products-list__head">
            <div />

            <div />

            <div>
              <p>პროდუქტი</p>
            </div>

            <div>
              <p>ფასი</p>
            </div>

            <div>რაოდენობა</div>
          </div>

          <ul className="products-list">
            {generateArray(16).map((id) => (
              <ShoppingCartItem key={id} />
            ))}
          </ul>
        </div>

        <aside className="shopping-cart__aside">
          <p>
            <span>ჯამური ფასი:</span>
            &nbsp;
            <span>1000₾</span>
          </p>

          <Button show="secondary">შეძენა</Button>
        </aside>
      </div>
    </Styled.ShoppingCart>
  );
};

export default ShoppingCart;
