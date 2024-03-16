import { ProductT } from "@/interface/db/product.types";
import { LoadingStatusT } from "@/interface/store/common.types";
import * as ProductAPI_T from "@/interface/API/products.api.types";
import { CategoryT } from "@/interface/db/category.types";

type ProductStateT = {
  hasMore: boolean;
  currentPage: number;
  products: Array<ProductT>;
  readStatus: LoadingStatusT;
  relatedProducts: Array<ProductT>;
  relatedStatus: LoadingStatusT;
  product: ProductT;
  readSingleStatus: LoadingStatusT;
  createStatus: LoadingStatusT;
  deleteStatus: LoadingStatusT;
  productsFilter: {
    minPrice: number;
    maxPrice: number;
    sizes: Array<string>;
    categories: Array<CategoryT>;
  };
  productsFilterStatus: LoadingStatusT;
  productsSizeFilterStatus: LoadingStatusT;
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

  getProductsFilter: () => Promise<void>;

  getProductsSizeFilter: (
    params: ProductAPI_T.GetProductsSizeFilterArgsT
  ) => Promise<void>;

  cleanUpProductsFilter: () => void;

  getAllRelated: (params: ProductAPI_T.GetAllRelatedArgsT) => Promise<void>;

  cleanUpAllRelated: () => void;
};

type ProductStoreT = ProductStateT & ProductActionsT;

export type { ProductStateT, ProductStoreT };
