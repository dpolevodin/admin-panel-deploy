import FilterPrimary from "./FilterPrimary";
import FilterOptions from "./FilterOptions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ordersActions } from "../../store/orders";
import { paginationActions } from "../../store/pagination";
import Mocks from "../../data/Orders.json";
import { iconsActions } from "../../store/icons";
import { debounce } from "../../helpers/debounce";
import { checkedOrdersActions } from "../../store/groupActions";

export const OrdersFilter = ({ className = "filter" }) => {
  const [optionsVision, setOptionsVision] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setInputValue(value);
    const debouncedAction = debounce(() => {
      const currentValue = event.target.value;
      dispatch(ordersActions.searchOrders(currentValue.toLowerCase()));
    }, 750);
    debouncedAction();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleOptionsVisible = (event) => {
    event.preventDefault();
    setOptionsVision(!optionsVision);
  };

  const resetFiltersHandler = (event) => {
    event.preventDefault();
    dispatch(ordersActions.setOrders(Mocks));
    setInputValue("");
    const fiterOptionsForm = document.forms["options"];
    const inputs = fiterOptionsForm.getElementsByTagName("input");
    for (let item of inputs) {
      item.value = "";
    }
    dispatch(iconsActions.refreshIcon());
    dispatch(paginationActions.setCurrentPage(1));
    dispatch(checkedOrdersActions.clearCheckedOrders());
  };

  const handleButtonReset = (event) => {
    event.preventDefault();
    setInputValue("");
    dispatch(ordersActions.setOrders(Mocks));
  };

  return (
    <div className={className}>
      <FilterPrimary
        onChange={handleChange}
        onSubmit={handleSubmit}
        buttonFiltersHandler={handleOptionsVisible}
        resetFiltersHandler={resetFiltersHandler}
        onClick={handleButtonReset}
        value={inputValue}
      />
      <FilterOptions isVisible={optionsVision} />
    </div>
  );
};
