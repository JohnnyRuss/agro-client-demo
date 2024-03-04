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
  _id: string;
};

export type { ProductT, ProductSizeT };
