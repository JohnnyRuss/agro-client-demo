import {
  CreateComboArgsT,
  DeleteComboArgsT,
  UpdateComboArgsT,
} from "@/interface/API/combo.api.tes";
import { ComboT } from "@/interface/db/combo.types";
import { LoadingStatusT } from "@/interface/store/common.types";
import { ProductT, ProductSizeT } from "@/interface/db/product.types";

type ComboStateT = {
  combos: Array<ComboT>;
  createStatus: LoadingStatusT;
  deleteStatus: LoadingStatusT;
  readStatus: LoadingStatusT;
  addedProducts: Array<SelectedProductT>;
  existingAssets: Array<string>;
  addedExistingAssets: Array<string>;
  newAssets: Array<File>;
  assets_to_delete: Array<string>;
};

type ComboActionsT = {
  create: (
    data: Omit<CreateComboArgsT, "products" | "assets" | "new_assets">
  ) => Promise<void>;

  getAll: () => Promise<void>;

  delete: (params: DeleteComboArgsT) => Promise<void>;

  update: (
    params: Omit<UpdateComboArgsT, "data"> & {
      data: Omit<CreateComboArgsT, "products" | "assets" | "new_assets">;
    }
  ) => Promise<void>;

  // ========== LOCALES ==========
  setComboDefaults: (params: ComboT) => void;

  cleanUpComboForm: () => void;

  addProduct: (product: SelectedProductT) => void;

  removeProduct: (params: { productId: string; size: string }) => void;

  decreaseAddedProductCount: (params: {
    productId: string;
    size: string;
  }) => void;

  increaseAddedProductCount: (params: {
    productId: string;
    size: string;
  }) => void;

  changeAddedProductCount: (params: {
    productId: string;
    size: string;
    count: number;
  }) => void;

  toggleExistingAsset: (asset: string) => void;

  addNewFiles: (params: Array<File>) => void;

  removeNewFile: (fileName: number) => void;
};

// ========== UTILS ==========

type SelectedProductT = Omit<ProductT, "sizes"> & {
  size: SelectedProductSizeT;
};

type SelectedProductSizeT = ProductSizeT & { selectedCount: number };

type ComboStoreT = ComboStateT & ComboActionsT;

export type {
  ComboStateT,
  ComboStoreT,
  SelectedProductSizeT,
  SelectedProductT,
};
