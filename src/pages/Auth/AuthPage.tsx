import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useRedirectAuthorized } from "@/hooks/auth";

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { loading } = useRedirectAuthorized();

  useEffect(() => {
    if (loading) return;

    if (pathname === PATHS.auth_page) navigate(PATHS.login_page);
  }, [pathname, navigate]);

  return loading ? <></> : <Outlet />;
};

export default AuthPage;
