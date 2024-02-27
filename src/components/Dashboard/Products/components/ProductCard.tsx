import { useNavigate } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useAppUIContext } from "@/Providers/useProviders";

import * as Styled from "./productCard.styled";
import { LineClamp, Button } from "@/components/Layouts";
import { DeleteIcon, EditIcon } from "@/components/Layouts/Icons";

type ProductCardT = {};

const ProductCard: React.FC<ProductCardT> = () => {
  const navigate = useNavigate();

  const { activateDialog } = useAppUIContext();

  const onEdit = () =>
    navigate(`${PATHS.dashboard_add_product_page}?category=${"1234"}`);

  const onStartDelete = () =>
    activateDialog({
      target: "<PRODUCT>",
      message: "Are you sure you want to delete this Product ?",
      onConfirm: () => {},
      title: "Delete Product",
      type: "danger",
    });

  return (
    <Styled.ProductCard>
      <figure className="card-fig">
        <img
          src="https://images.unsplash.com/photo-1631337902392-b4bb679fbfdb?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          title=""
          width="100%"
          height="200"
        />
      </figure>

      <div className="card-details">
        <LineClamp text="Spring Mix" clamp={2} component="span" />

        <LineClamp
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, in iste! Facere obcaecati cum deserunt est similique non tempora veniam!"
          clamp={4}
          component="p"
        />

        <div className="flex-box">
          <div className="flex-box__sub">
            <span>price:</span>
            &nbsp;
            <span>$15.00</span>
          </div>

          <div className="flex-box__sub">
            <span className="sale">SALE</span>
          </div>
        </div>

        <div className="flex-box">
          <Button show="danger" onClick={onStartDelete}>
            <DeleteIcon />
            delete
          </Button>

          <Button onClick={onEdit}>
            <EditIcon />
            update
          </Button>
        </div>
      </div>
    </Styled.ProductCard>
  );
};

export default ProductCard;
