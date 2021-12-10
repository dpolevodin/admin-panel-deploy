import Dropdown from "./css/Dropdown.module.css";
import Button from "../Common/Button";

const FooterDropdown = ({ isOpen = true, handleResetButton, handleButton }) => {
  const blockClass = isOpen
    ? Dropdown._
    : Dropdown._ + [Dropdown._, Dropdown.hidden].join(" ");

  return (
    <form className={blockClass}>
      <span className={Dropdown.title}>Есть несохраненные изменения</span>
      <Button
        formDropdownSubmit
        textClassName={Dropdown.text}
        iconClassName={Dropdown.icon}
        onClick={handleResetButton}
      >
        Сбросить
      </Button>
      <Button
        formDropdownReset
        textClassName={Dropdown.text}
        iconClassName={Dropdown.icon}
        onClick={handleButton}
      >
        Остаться
      </Button>
    </form>
  );
};

export default FooterDropdown;
