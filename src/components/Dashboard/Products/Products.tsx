import { PATHS } from "@/config/paths";

import * as Styled from "./styles/products.styled";
import Navigation from "../utils/Navigation";

type ProductsT = {
  children: React.ReactNode;
};

const routes = [
  {
    title: "Your Products",
    path: PATHS.dashboard_your_products_page,
  },
  {
    title: "Add Product",
    path: PATHS.dashboard_add_product_page,
  },
];

const Products: React.FC<ProductsT> = ({ children }) => {
  return (
    <Styled.Products>
      <Navigation routes={routes} />
      <div>{children}</div>
    </Styled.Products>
  );
};

export default Products;
