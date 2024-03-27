import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

const ShoppingCart = lazy(
  () => import("@/components/ShoppingCart/ShoppingCart")
);

const ShoppingCartPage: React.FC = () => {
  return (
    <>
      <Navigation />

      <SuspenseContainer>
        <ShoppingCart />
      </SuspenseContainer>

      <Footer />
    </>
  );
};

export default ShoppingCartPage;
