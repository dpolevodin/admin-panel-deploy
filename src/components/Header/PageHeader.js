import Button from "../Common/Button";

const wrapperClass = "page-header";
const headerClass = "page-header__text";

export const PageHeader = ({ isDarkTheme, onClick }) => {
  const icon = isDarkTheme ? "moon" : "sun";
  const buttonText = isDarkTheme ? "Темная тема" : "Светлая тема";

  return (
    <div className={wrapperClass}>
      <h1 className={headerClass}>Список заказов</h1>
      <Button themeChange svgName={icon} onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  );
};
