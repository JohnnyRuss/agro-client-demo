import { LoadingStatusT } from "@/interface/store/common.types";
import { ComboT } from "@/interface/db/combo.types";
import { ProductT, ProductSizeT } from "@/interface/db/product.types";

type ComboStateT = {
  combos: Array<ComboT>;
  createStatus: LoadingStatusT;
  addedProducts: Array<SelectedProductT>;
  existingAssets: Array<string>;
  newAssets: Array<File>;
};

type ComboActionsT = {
  createCombo: (data: any) => Promise<void>;
  // ========== LOCALES ==========
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
