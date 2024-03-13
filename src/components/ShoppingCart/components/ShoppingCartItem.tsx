import { useSizeChange } from "@/hooks/utils";
import { LineClamp, Counter } from "@/components/Layouts";
import { CloseIcon } from "@/components/Layouts/Icons";

const ShoppingCartItem: React.FC = () => {
  const { size, onDecreaseQuantity, onIncreaseQuantity, onQuantityChange } =
    useSizeChange([]);

  return (
    <li>
      <div className="remove-btn">
        <button>
          <CloseIcon />
        </button>
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
          value={size.selectedCount}
          onChangeCount={onQuantityChange}
          onDecreaseCount={onDecreaseQuantity}
          onIncreaseCount={onIncreaseQuantity}
        />
      </div>
    </li>
  );
};

export default ShoppingCartItem;
