import React from "react";



// OnPageChange
// const handleParams = (value)=>{
//   setParams({...params , page:value})
// }

const Pagination = ({ onPageChange, productList }) => {
  const currentPage = productList?.current_page;
  const lastPage = productList?.last_page;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= lastPage; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={` rounded-md ${
            i === currentPage
              ? "active bg-black text-white"
              : "hover:border-gray-300  hover:border text-secondary"
          }`}
        >
          <button
            type="button"
            title={`Page ${i}`}
            onClick={() => onPageChange(i)}
            className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-gray-50  ${
              i === currentPage && "text-black border-black"
            }`}
          >
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };

  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="p-3 border-t mt-5">
      <div className="flex gap-3 justify-end place-content-center">
        {/* Labels */}
        <div className="flex text-xs items-center justify-start">
          Page {currentPage || 0} of {lastPage || 0}
        </div>

        {/* Previous Button */}
        <button
          title="previous"
          type="button"
          onClick={handlePrevPage}
          disabled={currentPage === 1 ? true : false}
          className="inline-flex disabled:bg-gray-300 items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Pages */}
        <ul className="page-numbers flex items-center gap-4">
          {renderPageNumbers()}
        </ul>

        {/* Next Button */}
        <button
          title="next"
          type="button"
          onClick={handleNextPage}
          disabled={currentPage == lastPage ? true : false}
          className="inline-flex disabled:bg-gray-300 items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
