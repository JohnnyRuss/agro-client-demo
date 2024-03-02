import { useNavigate } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useAppUIContext } from "@/Providers/useProviders";

import * as Styled from "./productCard.styled";
import { LineClamp, Button } from "@/components/Layouts";
import { DeleteIcon, EditIcon } from "@/components/Layouts/Icons";

import { ProductT } from "@/interface/db/product.types";

type ProductCardT = {
  product: ProductT;
};

const ProductCard: React.FC<ProductCardT> = ({ product }) => {
  const navigate = useNavigate();

  const { activateDialog } = useAppUIContext();

  const onEdit = () =>
    navigate(`${PATHS.dashboard_add_product_page}?product=${product._id}`, {
      state: { product },
    });

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
          src={product.assets[0]}
          alt={product.title}
          title={product.title}
          width="100%"
          height="200"
          loading="lazy"
        />
      </figure>

      <div className="card-details">
        <LineClamp text={product.title} clamp={2} component="span" />

        <LineClamp text={product.description} clamp={4} component="div" />

        <div className="flex-box">
          <div className="flex-box__sub">
            <span>price:</span>
            &nbsp;
            <span>${product.price.toFixed(2).toLocaleString()}</span>
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
