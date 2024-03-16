import { useEffect, useState, memo } from "react";
import { NavLink } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useSearchParams } from "@/hooks/utils";

import * as Styled from "./styles/contentHead.styled";
import { Dropdown, TextField } from "@/components/Layouts";
import { SortIcon } from "@/components/Layouts/Icons";

type ContentHeadT = {
  boxType: "grid" | "flex";
};

const sort = [
  {
    label: "Created At ↑",
    value: "createdAt",
  },
  {
    label: "Created At ↓",
    value: "-createdAt",
  },
  {
    label: "Price ↑",
    value: "price",
  },
  {
    label: "Price At ↓",
    value: "-price",
  },
];

const ContentHead: React.FC<ContentHeadT> = memo(({ boxType }) => {
  const { getParam, removeParam, setParam } = useSearchParams();

  const currentSort = getParam("sort");
  const currentSearch = getParam("search");

  const onSort = (item: any) => {
    item.value === currentSort
      ? removeParam("sort")
      : setParam("sort", item.value);
  };

  const [search, setSearch] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  useEffect(() => {
    if (!isMounted) return;

    const timeoutId = setTimeout(() => {
      if (search) setParam("search", search);
      else removeParam("search");
    }, 450);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search, isMounted]);

  useEffect(() => {
    if (!search && currentSearch) setSearch(currentSearch);
    setIsMounted(true);
  }, []);

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
          Button={
            <span className="sort-btn__content">
              <SortIcon />
              {currentSort && (
                <span>
                  {sort.find((s) => s.value === currentSort)?.label || ""}
                </span>
              )}
            </span>
          }
          onSelect={onSort}
          data={sort.map((sortable) => ({
            ...sortable,
            active: sortable.value === currentSort,
          }))}
          buttonClass={`sort-btn ${currentSort ? "active" : ""}`}
        />

        <div className="search-box">
          <div>
            <TextField
              hasError={false}
              message=""
              placeholder="search"
              fieldProps={{
                name: "search",
                value: search,
                onChange: (e) =>
                  onSearch(e as React.ChangeEvent<HTMLInputElement>),
              }}
            />
          </div>
        </div>
      </div>
    </Styled.ContentHead>
  );
});

export default ContentHead;
