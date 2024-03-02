import { LoadingStatusT } from "@/interface/store/common.types";
import { CategoryT } from "@/interface/db/category.types";
import { CategorySchemaT } from "@/utils/validations/dashboard/CategorySchema";

type CategoryStateT = {
  categories: Array<CategoryT>;
  readStatus: LoadingStatusT;
  createStatus: LoadingStatusT;
  deleteStatus: LoadingStatusT;
};

type CategoryActionsT = {
  createCategory: (data: CategorySchemaT) => Promise<void>;

  updateCategory: (
    data: CategorySchemaT,
    params: { categoryId: string }
  ) => Promise<void>;

  deleteCategory: (params: { categoryId: string }) => Promise<void>;

  getCategory: (params: { categoryId: string }) => Promise<void>;

  getCategories: () => Promise<void>;

  cleanUpCategories: () => void;
};

type CategoryStoreT = CategoryStateT & CategoryActionsT;

export type { CategoryStateT, CategoryStoreT };
