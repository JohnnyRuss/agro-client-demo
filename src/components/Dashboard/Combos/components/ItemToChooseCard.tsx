import { LineClamp, Button } from "@/components/Layouts";
import { PlusIcon, MinusIcon, DeleteIcon } from "@/components/Layouts/Icons";
import * as Styled from "./styles/itemToChooseCard.styled";

type ItemToChooseCardT = { isInAddedRow: boolean };

const ItemToChooseCard: React.FC<ItemToChooseCardT> = ({ isInAddedRow }) => {
  return (
    <Styled.ItemToChooseCard>
      <figure className="item--fig">
        <img
          src="https://images.unsplash.com/photo-1562658601-0ae4a690ae1f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          title=""
          width="100"
          loading="lazy"
        />
      </figure>

      <div className="item--details">
        <LineClamp
          clamp={2}
          component="h4"
          text="some very ver very very very big text"
        />

        <div>
          <span>
            <strong>Price:</strong>
          </span>
          &nbsp;
          <span>16</span>
        </div>

        <div className="item--actions">
          <div className="size-box">
            <span>
              <strong>Size:</strong>
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
              <strong>Total Quantity:</strong>
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
            {isInAddedRow ? <DeleteIcon /> : "add"}
          </Button>
        </div>
      </div>
    </Styled.ItemToChooseCard>
  );
};

export default ItemToChooseCard;
