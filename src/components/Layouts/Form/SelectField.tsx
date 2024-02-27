import { useState } from "react";
import * as Styled from "./form.styled";
import { ArrowTriangleIcon } from "@/components/Layouts/Icons";

type SelectFieldT = {
  isFilterable?: boolean;
};

const options = [
  "test 1",
  "test 2",
  "test 3",
  "test 4",
  "test 5",
  "test 6",
  "test 7",
  "test 8",
  "test 9",
  "test 10",
  "test 11",
];

const SelectField: React.FC<SelectFieldT> = ({ isFilterable = true }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");

  const onOpenDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenDropdown(true);
  };
  const onCloseDropdown = () => setOpenDropdown(false);

  const onSelectItem = (value: any) => {
    setEnteredValue(value);
    setOpenDropdown(false);
  };

  return (
    <Styled.SelectField>
      <label htmlFor="">Category</label>

      <div className="dropdown-wrapper">
        <div className="text-field__wrapper">
          <input
            type="text"
            placeholder="select"
            className="text-field__input"
            value={enteredValue}
            onChange={(e) => setEnteredValue(e.target.value)}
            onClick={onOpenDropdown}
          />

          <button onClick={onOpenDropdown}>
            <ArrowTriangleIcon />
          </button>
        </div>

        {openDropdown && (
          <>
            <div className="dropdown-backdrop" onClick={onCloseDropdown} />
            <div className="dropdown-window">
              <ul className="dropdown-window__list">
                {isFilterable
                  ? options
                      .filter((opt) =>
                        enteredValue ? opt.match(enteredValue) : opt
                      )
                      .map((opt) => (
                        <li key={opt} onClick={() => onSelectItem(opt)}>
                          {opt}
                        </li>
                      ))
                  : options.map((opt) => (
                      <li key={opt} onClick={() => onSelectItem(opt)}>
                        {opt}
                      </li>
                    ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </Styled.SelectField>
  );
};

export default SelectField;
