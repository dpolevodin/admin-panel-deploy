import Checkbox from "../Common/Checkbox";
import dropdown from "./css/filter-dropdown.module.css";
import { capitalize } from "../../helpers/FormatFunctions";

const DROPDOWN_STATUSES = [
  "новый",
  "расчет",
  "подтвержден",
  "отложен",
  "выполнен",
  "отменен",
];

export const FilterDropdown = ({
  className = dropdown._,
  isVisible,
  DropdownStatuses = DROPDOWN_STATUSES,
  onChange,
  onMouseLeave,
}) => {
  const dropdownClass = isVisible
    ? className
    : [className, dropdown.hidden].join(" ");

  const dropdownStatusRender = DropdownStatuses.map((element) => {
    return (
      <label className={dropdown.control} key={element}>
        <div className={dropdown.item}>
          <Checkbox onChange={onChange} name={capitalize(element)} />
          <span className={dropdown.title}>{capitalize(element)}</span>
        </div>
      </label>
    );
  });

  return (
    <div className={dropdownClass} onMouseLeave={onMouseLeave}>
      {dropdownStatusRender}
    </div>
  );
};
