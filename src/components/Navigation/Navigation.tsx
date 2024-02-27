import { Link } from "react-router-dom";

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
            <figure>A</figure>
          </div>

          <div className="nav-row__center">
            <ul className="routes-list">
              <li className="routes-list__item">
                <Link to={""}>Home</Link>
              </li>
              <li className="routes-list__item">
                <Link to={""}>Shop</Link>
              </li>
              <li className="routes-list__item">
                <Link to={""}>About Us</Link>
              </li>
              <li className="routes-list__item">
                <Link to={""}>Contact Us</Link>
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

            <Link to={""} className="cart-btn">
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
