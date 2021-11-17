import React, { useMemo, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import searchic from "@Assets/Pic/search.png";
import { useParams } from "react-router-dom";
import Pagination from "@Components/Shared/Pagination";

function Search() {
  const { name } = useParams();
  const cards = [
    { id: 1, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 2, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 3, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 5, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 6, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 7, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 8, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 9, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 10, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 11, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 12, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 13, name: "دوره آنلاین برنامه نویسی HTML" },
  ];
  const PageSize = 11;
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return cards.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div>
      <div>
        <p className="Courses__searchTitle font-bold	">
          {" "}
          نتیجه جستجو شما برای "{name}":
        </p>
        <div className="grid grid-cols-4 gap-x-6 gap-y-8">
          {/* {currentTableData.map((card) => {
            return text === card.name ? <Coursecardsm key={card.id} /> : null;
          })} */}
        </div>
      </div>
      <div className="Courses__imgBox flex justify-center items-center">
        <img src={searchic} alt={searchic} className="Courses__img" />
      </div>
      <div className="Title-paging">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={cards.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default Search;
