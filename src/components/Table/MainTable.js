import { PageHeader } from "../Header/PageHeader";
import { OrdersFilter } from "../Filter/OrdersFilter";
import { OrdersTable } from "./OrdersTable";
import { SvgSprite } from "../Icons/SvgSprite";
import { selectors } from "../../store/selectors/selectors";
import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "../../store/theme";

export const MainTable = () => {
  const isDarkTheme = useSelector(selectors.getIsDarkTheme);
  const dispatch = useDispatch();

  const handleButtonTheme = (event) => {
    dispatch(themeActions.changeTheme());
    const mainBackgroundColor = isDarkTheme ? "#FFF" : "#2B2D33";
    const headerColor = isDarkTheme ? "#000" : "#BCC4CC";
    const inputColor = isDarkTheme ? "#FFF" : "#2B2D33";
    const dayLightColor = isDarkTheme ? "#ebf0f5" : "#1F2629";
    const lightColor = isDarkTheme ? "#bad8f5" : "#454E52";
    const style = document.body.style;
    style.setProperty("--main-background", mainBackgroundColor);
    style.setProperty("--background-admin-panel-black", headerColor);
    style.setProperty("--background-admin-panel-white", inputColor);
    style.setProperty("--background-admin-panel-day-light", dayLightColor);
    style.setProperty("--background-admin-panel-light", lightColor);
  };
  return (
    <div className="main-wrapper">
      <PageHeader onClick={handleButtonTheme} isDarkTheme={isDarkTheme} />
      <OrdersFilter />
      <OrdersTable />
      <SvgSprite />
    </div>
  );
};
