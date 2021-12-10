import Button from "../Common/Button";
import { PageDropdown } from "./PageDropdown/PageDropdown";

export const FooterPagination = ({
  onClick,
  page,
  maxPage,
  onClickLast,
  onSubmit,
  isVisible,
}) => {
  const currentPage = Number(page);
  const firstButtonValue =
    currentPage === maxPage && currentPage !== 1
      ? currentPage - 1
      : currentPage;
  const secondButtonValue =
    currentPage + 1 <= maxPage ? currentPage + 1 : currentPage;
  const thirdButtonValue = currentPage + 2;

  const isActiveFirst = +firstButtonValue === currentPage ? true : false;
  const isActiveSecond = +secondButtonValue === currentPage ? true : false;
  const isActiveThird = +thirdButtonValue === currentPage ? true : false;
  const isLastActive = +maxPage === +currentPage ? true : false;

  const lastPageButton = (
    <>
      <span className="table__pagination-continue">…</span>
      <Button
        paging={!isLastActive}
        pagingActive={isLastActive}
        onClick={onClick}
      >
        {maxPage}
      </Button>
    </>
  );

  return (
    <div className="table__footer-pagination">
      <Button
        paging={!isActiveFirst}
        pagingActive={isActiveFirst}
        onClick={onClick}
      >
        {firstButtonValue}
      </Button>

      {maxPage !== 1 && maxPage !== 0 && (
        <Button
          paging={!isActiveSecond}
          pagingActive={isActiveSecond}
          onClick={onClick}
        >
          {secondButtonValue}
        </Button>
      )}

      {thirdButtonValue <= maxPage && (
        <Button
          paging={!isActiveThird}
          pagingActive={isActiveThird}
          onClick={onClick}
        >
          {thirdButtonValue}
        </Button>
      )}
      {maxPage > 3 && page <= maxPage && page !== 0 && lastPageButton}

      <Button paging onClick={onClickLast}>
        #
      </Button>
      <PageDropdown isVisible={isVisible} onSubmit={onSubmit} />
    </div>
  );
};
