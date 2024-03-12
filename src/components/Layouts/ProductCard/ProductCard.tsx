import { Link } from "react-router-dom";

import { DYNAMIC_ROUTES } from "@/config/paths";

import * as Styled from "./productCard.styled";
import { ShoppingCartIcon } from "@/components/Layouts/Icons";

type ProductCardT = {};

const ProductCard: React.FC<ProductCardT> = () => {
  return (
    <Styled.ProductCard>
      {/* <div className="card-header">
        <button>
          <HeartIcon />
        </button>

        <span>sale!</span>
      </div> */}

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
        <div className="flex-col">
          <Link to={DYNAMIC_ROUTES.product_page("123")} className="card-title">
            Spring Mix
          </Link>
          <span className="card-price">$15.00</span>
        </div>

        <button>
          <ShoppingCartIcon />
        </button>
      </div>
    </Styled.ProductCard>
  );
};

export default ProductCard;
