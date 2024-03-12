import { NavLink } from "react-router-dom";

import { PATHS } from "@/config/paths";

import * as Styled from "./styles/contentHead.styled";
import { Dropdown, TextField, Button } from "@/components/Layouts";
import { SortIcon, SearchIcon } from "@/components/Layouts/Icons";

type ContentHeadT = {
  boxType: "grid" | "flex";
};

const ContentHead: React.FC<ContentHeadT> = ({ boxType }) => {
  return (
    <Styled.ContentHead
      className={boxType === "grid" ? "grid-box" : "flex-box"}
    >
      <ul className="all-products__content-header--nav">
        <li>
          <NavLink
            to={PATHS.all_products_page}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            პროდუქტები
          </NavLink>
        </li>

        <li>
          <NavLink
            to={PATHS.all_combos_page}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            ნაკრებები
          </NavLink>
        </li>
      </ul>

      <div className="all-products__content-header--actions">
        <Dropdown
          Button={<SortIcon />}
          data={[
            {
              label: "Created At",
              value: "-createdAt",
            },
          ]}
          buttonClass="sort-btn"
        />

        <div className="search-box">
          <div>
            <TextField
              hasError={false}
              message=""
              placeholder="search"
              fieldProps={{
                name: "",
                onChange: () => {},
                value: "",
              }}
            />
          </div>

          <Button show="secondary">
            <span>Search</span>
            <SearchIcon />
          </Button>
        </div>
      </div>
    </Styled.ContentHead>
  );
};

export default ContentHead;
