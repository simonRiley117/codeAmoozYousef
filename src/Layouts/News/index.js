import React, { useMemo, useState } from "react";
import Cardxx from "../../Components/Layouts/News/Cardxx";
import { cardData } from "../../Components/Layouts/News/cardData";
import Link from "../../Components/Shared/Buttons/Link";
import Pagination from "../../Components/Shared/Pagination";

let PageSize = 10;
const News = () => {
  //pagination props preparation
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return cardData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div className="news">
      <h2 className="news-heading ">اخبار</h2>
      <div className="news-grid">
        {currentTableData.map((card) => {
          return (
            <Cardxx key={card.id} borderRadius="15px" img={card.img}>
              <h3 className="card-heading mr-bt-sm title">{card.header}</h3>
              <p className="card-paragraph mr-bt-sm subtitle">{card.text}</p>
              <Link
                classes="news-button"
                to={{
                  pathname: "/news/NewsDetails",
                  state: {
                    id: card.id,
                  },
                }}
              >
                بیشتر بخوانید...
              </Link>
            </Cardxx>
          );
        })}
      </div>
      <div className="Title-paging">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={cardData.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default News;
