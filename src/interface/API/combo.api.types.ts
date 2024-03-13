import { ComboShortT } from "@/interface/db/combo.types";

type CreateComboArgsT = {
  title: string;
  description: string;
  price: string;
  products: Array<{
    product: string;
    size: { size: string; quantity: number };
  }>;
  assets: Array<string>;
  new_assets: Array<File>;
};

type DeleteComboArgsT = {
  comboId: string;
};

type GetAllCombosArgsT = {
  page: number;
  query?: string;
  limit?: number;
};

type GetAllCombosResponseT = {
  hasMore: boolean;
  currentPage: number;
  data: Array<ComboShortT>;
};

type UpdateComboArgsT = {
  comboId: string;
  data: CreateComboArgsT & { assets_to_delete: Array<string> };
};

export type {
  CreateComboArgsT,
  DeleteComboArgsT,
  UpdateComboArgsT,
  GetAllCombosArgsT,
  GetAllCombosResponseT,
};
