const PATHS = {
  root_page: "/",
  home_page: "/home",

  // ========== PRODUCT ==========
  shopping_page: "/shop",
  all_combos_page: "/shop/combos",
  combo_page: "/shop/combos/:comboId",
  all_products_page: "/shop/products",
  product_page: "/shop/products/:productId",

  // ========== ABOUT_US ==========
  about_us_page: "/about-us",

  // ========== SHOPPING_CART ==========
  shopping_cart_page: "/cart",

  // ========== DASHBOARD ==========
  dashboard_page: "/dashboard",

  // ========== CATEGORIES ==========
  dashboard_categories_page: "/dashboard/categories",
  dashboard_your_categories_page: "/dashboard/categories/all",
  dashboard_create_category_page: "/dashboard/categories/create",

  // ========== COMBOS ==========
  dashboard_combos_page: "/dashboard/combos",
  dashboard_your_combos_page: "/dashboard/combos/all",
  dashboard_create_combo_page: "/dashboard/combos/create",
  dashboard_combo_details_page: "/dashboard/combos/all/:comboId",

  // ========== ORDERS ==========
  dashboard_orders_page: "/dashboard/orders",

  // ========== PRODUCTS ==========
  dashboard_products_page: "/dashboard/products",
  dashboard_your_products_page: "/dashboard/products/all",
  dashboard_add_product_page: "/dashboard/products/create",
  dashboard_product_details_page: "/dashboard/products/all/:productId",

  // ========== AUTH ==========
  auth_page: "/auth",
  login_page: "/auth/login",
  register_page: "/auth/register",
  forgot_password_page: "/auth/forgot_password",
  confirm_email_page: "/auth/confirm_email",
  update_password_page: "/auth/update_password",

  // ========== UNKNOWN ==========
  unknown_page: "*",
};

const DYNAMIC_ROUTES = {
  product_page: (productId: string) =>
    PATHS.product_page.replace(":productId", productId),
  combo_page: (comboId: string) =>
    PATHS.combo_page.replace(":comboId", comboId),
  dashboard_combo_details_page: (comboId: string) =>
    PATHS.dashboard_combo_details_page.replace(":comboId", comboId),
  dashboard_product_details_page: (productId: string) =>
    PATHS.dashboard_product_details_page.replace(":productId", productId),
};

const PRIVATE_ROUTES: Array<string> = [];

const getNativeLocation = (currentLocation: string) => {
  let originalPath = "";

  for (const key in PATHS) {
    const pattern = PATHS[key as keyof typeof PATHS];
    const regex = new RegExp("^" + pattern.replace(/:[^/]+/g, "([^/]+)") + "$");

    if (regex.test(currentLocation)) {
      originalPath = PATHS[key as keyof typeof PATHS];

      break;
    }
  }

  return originalPath;
};

export { PATHS, DYNAMIC_ROUTES, PRIVATE_ROUTES, getNativeLocation };
