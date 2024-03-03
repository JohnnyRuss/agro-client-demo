import { ProductT } from "@/interface/db/product.types";
import { ProductSchemaT } from "@/utils/validations/dashboard/ProductSchema";

type GetAllProductsArgsT = {
  page: number;
  query?: string;
};

type GetAllProductsResponseT = {
  hasMore: boolean;
  currentPage: number;
  data: Array<ProductT>;
};

type CreateProductArgsT = ProductSchemaT;

type UpdateProductArgsT = {
  data: ProductSchemaT;
  params: { productId: string };
};

type DeleteProductArgsT = { productId: string };

type GetProductArgsT = { productId: string };

export type {
  GetAllProductsResponseT,
  GetAllProductsArgsT,
  CreateProductArgsT,
  UpdateProductArgsT,
  DeleteProductArgsT,
  GetProductArgsT,
};
