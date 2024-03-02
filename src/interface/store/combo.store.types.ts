import { LoadingStatusT } from "@/interface/store/common.types";
import { ComboT } from "@/interface/db/combo.types";

type ComboStateT = {
  createStatus: LoadingStatusT;
  combos: Array<ComboT>;
};

type ComboActionsT = {
  createCombo: (data: any) => Promise<void>;
};

type ComboStoreT = ComboStateT & ComboActionsT;

export type { ComboStateT, ComboStoreT };
