import { PATHS } from "@/config/paths";

import * as Styled from "./styles/categories.styled";
import Navigation from "../utils/Navigation";

type CategoriesT = {
  children: React.ReactNode;
};

const routes = [
  {
    title: "your categories",
    path: PATHS.dashboard_your_categories_page,
  },
  {
    title: "create category",
    path: PATHS.dashboard_create_category_page,
  },
];

const Categories: React.FC<CategoriesT> = ({ children }) => {
  return (
    <Styled.Categories>
      <Navigation routes={routes} />
      <div className="categories__content-box">{children}</div>
    </Styled.Categories>
  );
};

export default Categories;
