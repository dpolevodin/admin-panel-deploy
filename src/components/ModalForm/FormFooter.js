import modalForm from "./css/ModalForm.module.css";
import Button from "../Common/Button";
import { Loader } from "../Common/Loader";

const FormFooter = ({ buttonHandler, error }) => {
  return (
    <footer className={modalForm.footer}>
      <div className={modalForm.footer__text}>
        <Loader isLoading />
        {error}
      </div>

      <Button
        modalformFooter
        svgName="checkmark"
        iconClassName={modalForm.footer__icon}
        onClick={buttonHandler}
      >
        Сохранить
      </Button>
    </footer>
  );
};

export default FormFooter;
