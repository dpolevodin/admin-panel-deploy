import Button from "../Common/Button";
import Searchbar from "../Common/Searchbar";
import { Loader } from "../Common/Loader";

const FilterPrimary = ({
  buttonFiltersHandler,
  resetFiltersHandler,
  onSubmit,
  onChange,
  onClick,
  value,
}) => {
  return (
    <div className="filter__wrapper">
      <div className="filter__group">
        <form className="filter__form" onSubmit={onSubmit}>
          <Searchbar
            labelClass="filter__searchbar-group"
            wrapperClass="filter__searchbar-field filter__searchbar-field_empty"
            inputAreaClass="filter__searchbar-search-area"
            value={value}
            onChange={onChange}
          >
            <Button innerInput svgName="incorrect" onClick={onClick} />
          </Searchbar>
          <Button filter svgName="filter" onClick={buttonFiltersHandler}>
            Фильтры
          </Button>
          <Button
            resetFilter
            svgName="filter"
            buttonText="Сбросить фильтры"
            onClick={resetFiltersHandler}
          >
            Сбросить фильтры
          </Button>
        </form>
        <Loader isLoading />
      </div>
    </div>
  );
};

export default FilterPrimary;
