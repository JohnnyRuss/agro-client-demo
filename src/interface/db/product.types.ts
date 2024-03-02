import { CategoryT } from "@/interface/db/category.types";

type ProductT = {
  _id: string;
  title: string;
  description: string;
  sizes: Array<ProductSizeT>;
  price: number;
  assets: Array<string>;
  category: CategoryT;
};

type ProductSizeT = {
  size: string;
  quantity: number;
};

// API
type GetProductsResponseT = {
  currentPage: number;
  data: Array<ProductT>;
  hasMore: boolean;
};

export type { ProductT, GetProductsResponseT };
