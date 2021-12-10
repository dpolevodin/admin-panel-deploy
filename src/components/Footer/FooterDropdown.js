import Button from "../Common/Button";

const formClassname = "table__footer-dropdown";
const textClassName = "table__dropdown-title";

export const FooterDropdown = ({
  ordersCount,
  deleteHandler,
  cancelHandler,
}) => {
  return (
    <form className={formClassname}>
      <span className={textClassName}>Удалить {ordersCount} записей?</span>
      <Button dangerDelete onClick={deleteHandler}>
        Удалить
      </Button>
      <Button dangerCancel onClick={cancelHandler}>
        Отмена
      </Button>
    </form>
  );
};
