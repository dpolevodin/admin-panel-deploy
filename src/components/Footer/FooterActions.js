import { FooterOrdersSelected } from "../Footer/FooterOrdersSelected";
import Button from "../Common/Button";
import { FooterDropdown } from "./FooterDropdown";
import { StatusFooterDropdown } from "./statusFooterDropdown/StatusFooterDropdown";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordersActions } from "../../store/orders";
import { checkedOrdersActions } from "../../store/groupActions";
import { selectors } from "../../store/selectors/selectors";

export const FooterActions = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [statusDropdownVisible, setStatusDropdownVisible] = useState(false);

  const countsSelected = useSelector(selectors.getCheckedOrders);
  const dispatch = useDispatch();

  const handleDropdownVisible = (event) => {
    event.preventDefault();
    setDropdownVisible(!dropdownVisible);
  };

  const handleButtonStatusDropdown = (event) => {
    event.preventDefault();
    setStatusDropdownVisible(!statusDropdownVisible);
  };

  const handleButtonDelete = (event) => {
    event.preventDefault();
    dispatch(ordersActions.deleteCheckedOrders([...countsSelected]));
    dispatch(checkedOrdersActions.clearCheckedOrders());
    setDropdownVisible(!dropdownVisible);
    const headerCheckbox = document.getElementsByName("headerCheckbox")[0];
    headerCheckbox.checked = false;
  };

  const handleChangeOrdersStatus = (event) => {
    const status = event.target.value;
    dispatch(ordersActions.changeGroupStatus(countsSelected, status));
  };

  return (
    <div className="table__footer-action">
      <FooterOrdersSelected count={countsSelected.length} />
      <Button
        footerStatus
        svgName="pencil"
        onClick={handleButtonStatusDropdown}
      >
        Изменить статус
      </Button>

      <StatusFooterDropdown
        isVisible={statusDropdownVisible}
        onMouseLeave={handleButtonStatusDropdown}
        onChange={handleChangeOrdersStatus}
      />

      <Button danger svgName="bin" onClick={handleDropdownVisible}>
        Удалить
      </Button>
      {dropdownVisible && (
        <FooterDropdown
          deleteHandler={handleButtonDelete}
          cancelHandler={handleDropdownVisible}
          ordersCount={countsSelected.length}
        />
      )}
    </div>
  );
};
