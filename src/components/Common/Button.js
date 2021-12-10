import SvgElement from "../Icons/SvgElement";
import cc from "classcat";

const Button = ({
  svgName,
  textClassName = "button__text",
  onClick,
  iconClassName,
  children,
  type,
  themeChange,
  filter,
  resetFilter,
  innerInput,
  filterApply,
  footerStatus,
  danger,
  dangerDelete,
  dangerCancel,
  pagingActive,
  paging,
  modalform,
  modalformFooter,
  formDropdownReset,
  formDropdownSubmit,
}) => {
  const buttonClass = cc({
    "page-header__button": themeChange,
    "page-header__button_transparent": themeChange,
    "filter-button": filter || resetFilter || filterApply,
    "filter-button_hidden-icon": resetFilter || filterApply,
    "filter-button_short": filterApply,
    "filter__input-button": innerInput,
    "table__footer-button": footerStatus || danger || pagingActive || paging,
    "table__footer-button_blue": footerStatus,
    "table__footer-button_red": danger,
    "table__footer-button_small": paging || pagingActive,
    "table__footer-button_transparent": paging,
    "table__dropdown-button": dangerDelete || dangerCancel,
    "table__dropdown-button_transparent": dangerCancel,
    ModalForm_button__3J0Mi: modalform,
    ModalForm_footer__button__1J_Mp: modalformFooter,
    Dropdown_button__3G0Rl: formDropdownReset || formDropdownSubmit,
    Dropdown_transparent__15EHo: formDropdownSubmit,
  });

  return (
    <button className={buttonClass} onClick={onClick} type={type}>
      <SvgElement svgName={svgName} className={iconClassName} />
      <span className={textClassName}>{children}</span>
    </button>
  );
};

export default Button;
