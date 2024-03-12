import { Link, NavLink } from "react-router-dom";
import { PATHS } from "@/config/paths.ts";

import {
  PhoneIcon,
  EmailIcon,
  ViberIcon,
  WhatsUpIcon,
  LocationIcon,
  ShoppingCartIcon,
  SearchIcon,
} from "@/components/Layouts/Icons";
import { TextField } from "@/components/Layouts";
import * as Styled from "./navigation.styled.ts";

type NavigationT = {};

const Navigation: React.FC<NavigationT> = () => {
  return (
    <>
      <Styled.NavSocials className="socials-wrapper">
        <ul className="socials-list">
          <li>
            <Link to={""}>
              <span className="icon">
                <LocationIcon />
              </span>
              <span className="title">1901 Thornidge Cir. Shiloh</span>
            </Link>
          </li>
          <li>
            <Link to={""}>
              <span className="icon">
                <EmailIcon />
              </span>
              <span className="title">support@example.com</span>
            </Link>
          </li>
          <li>
            <Link to={""}>
              <span className="icon">
                <ViberIcon />
              </span>
            </Link>
          </li>
          <li>
            <Link to={""}>
              <span className="icon">
                <WhatsUpIcon />
              </span>
            </Link>
          </li>
        </ul>
      </Styled.NavSocials>

      <Styled.Navigation>
        <div className="nav-row">
          <div className="nav-row__left">
            <Link to={PATHS.home_page} className="logo-link">
              <img src="/assets/logo-small.webp" alt="" width="45" />
            </Link>
          </div>

          <div className="nav-row__center">
            <ul className="routes-list">
              <li className="routes-list__item">
                <NavLink
                  to={PATHS.home_page}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  მთავარი
                </NavLink>
              </li>

              <li className="routes-list__item">
                <NavLink
                  to={PATHS.shopping_page}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  პროდუქტები
                </NavLink>
              </li>

              <li className="routes-list__item">
                <NavLink
                  to={PATHS.about_us_page}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  ჩვენს შესახებ
                </NavLink>
              </li>
            </ul>

            <div className="search-field">
              <SearchIcon />
              <TextField
                fieldProps={{
                  name: "",
                  onChange: () => {},
                  value: "",
                }}
                message=""
                hasError={false}
              />
            </div>

            <Link to={PATHS.shopping_cart_page} className="cart-btn">
              <ShoppingCartIcon />
            </Link>
          </div>

          <div className="nav-row__right">
            <PhoneIcon />
            <span>+01234567889</span>
          </div>
        </div>
      </Styled.Navigation>
    </>
  );
};

export default Navigation;
