import { LineClamp, Button } from "@/components/Layouts";
import { PlusIcon, MinusIcon, DeleteIcon } from "@/components/Layouts/Icons";
import * as Styled from "./styles/itemToChooseCard.styled";

import { ProductT } from "@/interface/db/product.types";

type ItemToChooseCardT = {
  isInAddedRow: boolean;
  product: ProductT;
};

const ItemToChooseCard: React.FC<ItemToChooseCardT> = ({
  product,
  isInAddedRow,
}) => {
  const thumbnail = product.assets.find((asset) => asset?.endsWith(".webp"));

  return (
    <Styled.ItemToChooseCard>
      <figure className="item--fig">
        <img
          src={thumbnail}
          alt={product.title}
          title={product.title}
          width="100"
          loading="lazy"
        />
      </figure>

      <div className="item--details">
        <LineClamp clamp={2} component="h4" text={product.title} />

        <div>
          <span>
            <strong>ფასი:</strong>
          </span>
          &nbsp;
          <span>{product.price}</span>
        </div>

        <div className="item--actions">
          <div className="size-box">
            <span>
              <strong>ზომა:</strong>
            </span>
            &nbsp;
            {isInAddedRow ? (
              <span>14</span>
            ) : (
              <select name="size" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            )}
          </div>

          <div className="total-quantity--box">
            <span>
              <strong>მაქს. რაოდენობა:</strong>
              &nbsp;
            </span>
            <span>4</span>
          </div>

          <div className="control-quantity">
            <button>
              <MinusIcon />
            </button>
            <input type="number" name="" id="" defaultValue={1} />
            <button>
              <PlusIcon />
            </button>
          </div>

          <Button
            show={isInAddedRow ? "danger" : "primary"}
            className={`add-btn ${isInAddedRow ? "danger" : ""}`}
          >
            {isInAddedRow ? <DeleteIcon /> : "ADD"}
          </Button>
        </div>
      </div>
    </Styled.ItemToChooseCard>
  );
};

export default ItemToChooseCard;
