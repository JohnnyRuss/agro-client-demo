import { ProductT } from "@/interface/db/product.types";
import { LoadingStatusT } from "@/interface/store/common.types";
import { ProductSchemaT } from "@/utils/validations/dashboard/ProductSchema";

type ProductStateT = {
  product: ProductT;
  products: Array<ProductT>;
  currentPage: number;
  hasMore: boolean;
  readStatus: LoadingStatusT;
  createStatus: LoadingStatusT;
  deleteStatus: LoadingStatusT;
};

type ProductActionsT = {
  createProduct: (data: ProductSchemaT) => Promise<void>;

  updateProduct: (
    data: ProductSchemaT,
    params: { productId: string }
  ) => Promise<void>;

  deleteProduct: (params: { productId: string }) => Promise<void>;

  getProduct: (params: { productId: string }) => Promise<void>;

  getProducts: () => Promise<void>;

  cleanUpProduct: () => void;

  cleanUpProducts: () => void;
};

type ProductStoreT = ProductStateT & ProductActionsT;

export type { ProductStateT, ProductStoreT };
