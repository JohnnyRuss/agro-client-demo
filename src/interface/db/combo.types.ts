type ComboT = {
  title: string;
  description: string;
  price: string;
  assets: Array<string>;
  combo: any;
  products: Array<{
    product: {
      title: string;
      description: string;
      price: string;
    };
    quantity: number;
  }>;
  createdAt: string;
};

export type { ComboT };
