import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import { SelectField } from "@/components/Layouts";
import * as Styled from "./styles/filter.styled";

type FilterT = {
  boxType: "grid" | "flex";
};

const Filter: React.FC<FilterT> = ({ boxType }) => {
  const [value, setValue] = useState([0, 1000]);
  const [showFilter, setShowFilter] = useState(false);

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
        <RangeSlider min={0} max={1000} value={value} onInput={setValue} />

        <div className="price-filter--box__value">
          <p>
            <span>მინ:</span>
            &nbsp;
            <span>{value[0]}</span>
          </p>

          <p>
            <span>მაქს:</span>
            &nbsp;
            <span>{value[1]}</span>
          </p>
        </div>
      </div>

      <SelectField
        onSelect={() => {}}
        options={[
          { title: "სარწყავი", value: "" },
          { title: "სხვა", value: "" },
        ]}
        value={{ title: "", value: "" }}
        placeholder="კატეგორია"
      />

      <SelectField
        onSelect={() => {}}
        options={[]}
        value={{ title: "", value: "" }}
        placeholder="ზომა"
      />
    </Styled.Filter>
  );
};

export default Filter;
