import type React from "react";
import "./paginationList.css";
import { useMemo, useState } from "react";

type PaginationListProps = {
  items: React.ReactNode[];
  itemsAmountOnPage?: number;
  title?: string;
};

function PaginationList({
  items = [],
  itemsAmountOnPage = 5,
  title,
}: PaginationListProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pagesStart = 1;
  const pageRange = 10;
  const pagesTotal = Math.ceil(items.length / itemsAmountOnPage);
  const numberOfPages = useMemo(() => {
    return getPageNumbers();
  }, [currentPage]);

  const arrayIndex = useMemo(() => {
    const firstIndex = itemsAmountOnPage * currentPage - itemsAmountOnPage;
    const lastIndex = firstIndex + (itemsAmountOnPage - 1);
    return { firstIndex: firstIndex, lastIndex: lastIndex };
  }, [currentPage]);

  function getPageNumbers() {
    const half = Math.floor(pageRange / 2);
    let start = currentPage - half;
    let end = currentPage + half;

    if (start < 1) {
      end = end + Math.max(pagesStart - start, 0);
      start = 1;
    }

    if (end > pagesTotal) {
      start =
        start - (end - pagesTotal) < pagesStart
          ? pagesStart
          : start - (end - pagesTotal);
      end = pagesTotal;
    }

    let pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  console.log(arrayIndex);
  return (
    <div className="pagination-list">
      <h3>{title}</h3>
      <div className="pagination-display">
        {items.length < 1 ? (
          <p>No items to display</p>
        ) : (
          items.map((item, index) => {
            if (
              index >= arrayIndex.firstIndex &&
              index <= arrayIndex.lastIndex
            ) {
              return item;
            }
          })
        )}
      </div>
      <div className="button-container">
        {pagesTotal > 1 && (
          <>
            <button
              onClick={() => {
                setCurrentPage(1);
              }}
            >
              first
            </button>
            <button
              onClick={() => {
                setCurrentPage(currentPage <= 1 ? 1 : currentPage - pagesStart);
              }}
            >
              {"<"}
            </button>
            {numberOfPages.map((page) => {
              return (
                <button
                  className={`${page === currentPage ? "active" : ""}`}
                  onClick={() => {
                    setCurrentPage(page);
                  }}
                >
                  {page}
                </button>
              );
            })}
            <button
              onClick={() => {
                setCurrentPage(
                  currentPage >= pagesTotal
                    ? pagesTotal
                    : currentPage + pagesStart
                );
              }}
            >
              {">"}
            </button>
            <button
              onClick={() => {
                setCurrentPage(pagesTotal);
              }}
            >
              last
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default PaginationList;
