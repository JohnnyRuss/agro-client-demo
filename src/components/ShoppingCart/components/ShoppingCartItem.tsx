import { useCounter } from "@/hooks/utils";
import { LineClamp, Counter } from "@/components/Layouts";

type ShoppingCartItemT = {};

const ShoppingCartItem: React.FC<ShoppingCartItemT> = () => {
  const { counter, onChangeCount, onDecreaseCount, onIncreaseCount } =
    useCounter();

  return (
    <li>
      <div className="remove-btn">
        <button>x</button>
      </div>

      <figure className="product-fig">
        <img
          src="https://images.unsplash.com/photo-1631337902392-b4bb679fbfdb?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={120}
          height={65}
        />
      </figure>

      <div className="product-title">
        <LineClamp
          text="პროდუქტის სათაური"
          clamp={2}
          showTitle={true}
          sx={{ textAlign: "center", fontWeight: 600 }}
        />
      </div>

      <div className="product-price">
        <p>100₾</p>
      </div>

      <div className="product-counter">
        <Counter
          value={counter}
          onChangeCount={onChangeCount}
          onIncreaseCount={onIncreaseCount}
          onDecreaseCount={onDecreaseCount}
        />
      </div>
    </li>
  );
};

export default ShoppingCartItem;
