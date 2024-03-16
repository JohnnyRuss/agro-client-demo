import { useState, memo, useEffect } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import { useSearchParams } from "@/hooks/utils";
import { useGetProductsFilter } from "@/hooks/api/products";

import { SelectField } from "@/components/Layouts";
import * as Styled from "./styles/filter.styled";

type FilterT = {
  boxType: "grid" | "flex";
};

const Filter: React.FC<FilterT> = memo(({ boxType }) => {
  const { getParam, removeParam, setParam } = useSearchParams();

  const { filter, status, sizeStatus } = useGetProductsFilter();

  const [showFilter, setShowFilter] = useState(false);
  const [priceRange, setPriceRange] = useState<Array<number>>([0, 5000]);
  const [size, setSize] = useState<{ title: string; value: string }>({
    title: "",
    value: "",
  });
  const [category, setCategory] = useState<{ title: string; value: string }>({
    title: "",
    value: "",
  });

  const currentMinPrice: string | null = getParam("price[gte]");
  const currentMaxPrice: string | null = getParam("price[lte]");
  const currentCategory: string | null = getParam("category");
  const currentSize: string | null = getParam("size");

  const onPriceRangeChange = (value: [number, number]) => setPriceRange(value);

  const onClearSize = () => {
    removeParam("size");
    setSize(() => ({ title: "", value: "" }));
  };

  const onClearCategory = () => {
    removeParam("category");
    setCategory((prev) => ({ ...prev, title: "", value: "" }));

    if (currentSize) onClearSize();
  };

  const onSelectCategory = (category: { title: string; value: string }) => {
    const isRemoving = category.value === currentCategory;

    if (isRemoving) onClearCategory();
    else {
      setCategory((prev) => ({
        ...prev,
        title: category.title,
        value: category.value,
      }));
      setParam("category", category.value);
    }
  };

  const onSelectSize = (size: { title: string; value: string }) => {
    const isRemoving = size.value === currentSize;

    if (isRemoving) onClearSize();
    else {
      setSize((prev) => ({
        ...prev,
        title: size.title,
        value: size.value,
      }));
      setParam("size", size.value);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setParam("price[gte]", priceRange[0].toString());
      setParam("price[lte]", priceRange[1].toString());
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [priceRange]);

  useEffect(() => {
    if (status.status !== "SUCCESS") return;

    if (currentMinPrice && currentMaxPrice)
      setPriceRange([+currentMinPrice, +currentMaxPrice]);
    else setPriceRange([filter.minPrice, filter.maxPrice]);

    if (currentCategory) {
      const candidateCategory = filter.categories.find(
        (category) => category._id === currentCategory
      );

      if (!candidateCategory) return;

      setCategory(() => ({
        title: candidateCategory.title,
        value: candidateCategory._id,
      }));

      const candidateSize = filter.sizes.find((size) => size === currentSize);

      if (!candidateSize) return;

      setSize(() => ({
        title: candidateSize,
        value: candidateSize,
      }));
    }
  }, [status.status]);

  return (
    <Styled.Filter
      className={`all-products__filter ${showFilter ? "expanded" : "closed"} ${
        boxType === "grid" ? "grid-box" : "flex-box"
      }`}
    >
      <button
        className="expand-filter__btn"
        onClick={() => setShowFilter((prev) => !prev)}
      >
        {showFilter ? "ფილტრის დახურვა" : "ფილტრი"}
      </button>

      <div className="price-filter--box">
        <RangeSlider
          min={filter.minPrice}
          max={filter.maxPrice}
          value={priceRange}
          onInput={onPriceRangeChange}
        />

        <div className="price-filter--box__value">
          <p>
            <span>მინ:</span>
            &nbsp;
            <span>{priceRange[0]}</span>
          </p>

          <p>
            <span>მაქს:</span>
            &nbsp;
            <span>{priceRange[1]}</span>
          </p>
        </div>
      </div>

      <SelectField
        value={category}
        placeholder="კატეგორია"
        onSelect={onSelectCategory}
        onCleanUpField={onClearCategory}
        options={filter.categories.map((category) => ({
          title: category.title,
          value: category._id,
        }))}
      />

      {category.value && (
        <SelectField
          value={size}
          placeholder="ზომა"
          onSelect={onSelectSize}
          onCleanUpField={onClearSize}
          loading={sizeStatus.loading}
          options={filter.sizes.map((size) => ({ title: size, value: size }))}
        />
      )}
    </Styled.Filter>
  );
});

export default Filter;
