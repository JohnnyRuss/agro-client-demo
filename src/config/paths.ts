const PATHS = {
  root_page: "/",
  home_page: "/home",
  // ========== DASHBOARD ==========
  dashboard_page: "/dashboard",

  dashboard_categories_page: "/dashboard/categories",
  dashboard_your_categories_page: "/dashboard/categories/all",
  dashboard_create_category_page: "/dashboard/categories/create",

  dashboard_combos_page: "/dashboard/combos",
  dashboard_your_combos_page: "/dashboard/combos/all",
  dashboard_create_combo_page: "/dashboard/combos/create",

  dashboard_orders_page: "/dashboard/orders",

  dashboard_products_page: "/dashboard/products",
  dashboard_your_products_page: "/dashboard/products/all",
  dashboard_add_product_page: "/dashboard/products/create",

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

const DYNAMIC_ROUTES = {};

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
