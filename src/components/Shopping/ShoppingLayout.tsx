import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { PATHS } from "@/config/paths";

import Filter from "./components/Filter";
import * as Styled from "./shoppingLayout.styled";
import ContentHead from "./components/ContentHead";
import ShoppingHeader from "./components/ShoppingHeader";

type AllProductsLayoutT = {
  children: React.ReactNode;
};

const AllProductsLayout: React.FC<AllProductsLayoutT> = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isOnProducts = pathname.includes(PATHS.all_products_page);

  useEffect(() => {
    if (pathname === PATHS.shopping_page) navigate(PATHS.all_products_page);
  }, [pathname]);

  return (
    <Styled.ShoppingLayout>
      <ShoppingHeader />

      <div
        className={`all-products__body ${
          isOnProducts ? "grid-box" : "flex-box"
        }`}
      >
        <ContentHead boxType={isOnProducts ? "grid" : "flex"} />

        {isOnProducts && <Filter boxType={isOnProducts ? "grid" : "flex"} />}

        {children}
      </div>
    </Styled.ShoppingLayout>
  );
};

export default AllProductsLayout;
