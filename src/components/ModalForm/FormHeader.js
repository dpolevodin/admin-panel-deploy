import modalForm from "./css/ModalForm.module.css";
import Button from "../Common/Button";
const headerIconName = "incorrect";

const FormHeader = ({ buttonHandler, orderNumber = "" }) => {
  return (
    <header className={modalForm.header}>
      <div className={modalForm.header__title}>{`Заявка #${orderNumber}`}</div>
      <Button
        modalform
        svgName={headerIconName}
        iconClassName={modalForm.header__icon}
        onClick={buttonHandler}
      />
    </header>
  );
};

export default FormHeader;
