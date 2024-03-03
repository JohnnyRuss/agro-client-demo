import { ProductT } from "@/interface/db/product.types";
import { LoadingStatusT } from "@/interface/store/common.types";
import * as ProductAPI_T from "@/interface/API/products.api.types";

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
  create: (data: ProductAPI_T.CreateProductArgsT) => Promise<void>;

  update: (args: ProductAPI_T.UpdateProductArgsT) => Promise<void>;

  delete: (params: ProductAPI_T.DeleteProductArgsT) => Promise<void>;

  get: (params: ProductAPI_T.GetProductArgsT) => Promise<void>;

  cleanUp: () => void;

  getAll: (params: ProductAPI_T.GetAllProductsArgsT) => Promise<void>;

  getAllPaginated: (params: ProductAPI_T.GetAllProductsArgsT) => Promise<void>;

  cleanUpAll: () => void;
};

type ProductStoreT = ProductStateT & ProductActionsT;

export type { ProductStateT, ProductStoreT };
