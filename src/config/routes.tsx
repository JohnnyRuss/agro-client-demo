import * as Pages from "@/pages";
import { PATHS } from "@/config/paths";
import { RouteT } from "@/interface/config.types";
import { Navigate } from "react-router-dom";

const Routes: Array<RouteT> = [
  {
    path: PATHS.root_page,
    title: "root-page",
    element: <Navigate to={PATHS.home_page} />,
    children: [],
  },

  {
    path: PATHS.home_page,
    title: "home-page",
    element: <Pages.HomePage />,
    children: [],
  },

  // ========== DASHBOARD ==========
  {
    path: PATHS.dashboard_page,
    title: "dashboard-page",
    element: <Pages.DashboardPage />,
    children: [
      {
        path: PATHS.dashboard_categories_page,
        title: "dashboard-categories-page",
        element: <Pages.DashboardCategoriesPage />,
        children: [
          {
            path: PATHS.dashboard_your_categories_page,
            title: "dashboard-your-categories-page",
            element: <Pages.DashboardYourCategoriesPage />,
            children: [],
          },
          {
            path: PATHS.dashboard_create_category_page,
            title: "dashboard-create-category-page",
            element: <Pages.DashboardCreateCategoryPage />,
            children: [],
          },
        ],
      },

      {
        path: PATHS.dashboard_combos_page,
        title: "dashboard-combos-page",
        element: <Pages.DashboardCombosPage />,
        children: [
          {
            path: PATHS.dashboard_your_combos_page,
            title: "dashboard-your-combos-page",
            element: <Pages.DashboardYourCombosPage />,
            children: [],
          },
          {
            path: PATHS.dashboard_create_combo_page,
            title: "dashboard-create-combo-page",
            element: <Pages.DashboardCreateComboPage />,
            children: [],
          },
        ],
      },

      {
        path: PATHS.dashboard_orders_page,
        title: "dashboard-orders-page",
        element: <Pages.DashboardOrdersPage />,
        children: [],
      },

      {
        path: PATHS.dashboard_products_page,
        title: "dashboard-product-page",
        element: <Pages.DashboardProductsPage />,
        children: [
          {
            path: PATHS.dashboard_your_products_page,
            title: "dashboard-your-products-page",
            element: <Pages.DashboardYourProductsPage />,
            children: [],
          },
          {
            path: PATHS.dashboard_add_product_page,
            title: "dashboard-add-product-page",
            element: <Pages.DashboardAddProductPage />,
            children: [],
          },
        ],
      },
    ],
  },

  // AUTH
  // {
  //   path: PATHS.auth_page,
  //   title: "auth-page",
  //   element: <Pages.AuthPage />,
  //   children: [
  //     {
  //       path: PATHS.login_page,
  //       title: "auth-login-page",
  //       element: <Pages.LoginPage />,
  //       children: [],
  //     },
  //     {
  //       path: PATHS.register_page,
  //       title: "auth-register-page",
  //       element: <Pages.RegisterPage />,
  //       children: [],
  //     },
  //     {
  //       path: PATHS.forgot_password_page,
  //       title: "auth-forgot-password-page",
  //       element: <Pages.ForgotPasswordPage />,
  //       children: [],
  //     },
  //     {
  //       path: PATHS.confirm_email_page,
  //       title: "auth-confirm-email-page",
  //       element: <Pages.ConfirmEmailPage />,
  //       children: [],
  //     },
  //     {
  //       path: PATHS.update_password_page,
  //       title: "auth-update-password-page",
  //       element: <Pages.UpdatePasswordPage />,
  //       children: [],
  //     },
  //   ],
  // },

  // 404
  {
    path: PATHS.unknown_page,
    title: "unknown-page",
    element: <Pages.UnknownPage />,
    children: [],
  },
];

export default Routes;
