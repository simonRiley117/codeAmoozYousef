import React, { useMemo, useState, useEffect } from "react";
import NewsItemContainer from "@Components/Layouts/News/NewsItemContainer";
import { cardData } from "@Components/Layouts/News/cardData";
import Link from "@Components/Shared/Buttons/Link";
import Pagination from "@Components/Shared/Pagination";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import useFetch from "@App/Context/useFetch";
import RiseLoader from "react-spinners/RiseLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  z-index: 100;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
let PageSize = 10;
const News = () => {
  //pagination props preparation
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setpagination] = useState({current:1,pageSize:newsList?.page_count});

  const setData = (data) => {
    setNewsList(data);
  };
  const getNewsList = useFetch({
    url: `NewsService`,
    method: "GET",
    noHeader: true,
    setter: setNewsList,
    pagination:pagination

  });

  return (
   
        <div className="news container">
          <BreadCrump />
          <h2 className="news-heading ">اخبار</h2>
          <div className="news-grid">
            { newsList?.results?.map((card) => (
              <NewsItemContainer
                key={card.id}
                borderRadius="15px"
                img={card.cover}
              >
                <h3 className="card-heading mr-bt-sm title">{card.title}</h3>
                <p className="card-paragraph mr-bt-sm subtitle">
                  {card.short_description}
                </p>
                <Link
                  classes="news-button"
                  to={{
                    pathname: "/news/news-info",
                    state: {
                      id: card.id,
                    },
                  }}
                >
                  بیشتر بخوانید...
                </Link>
              </NewsItemContainer>
            ))}
          </div>
          <div className="Title-paging">
            <Pagination
              current={pagination.current}
              // total={cardData.length}
              total={newsList?.page_count}
              onChange={(page) => setpagination({...pagination,current:page})}
            />
          </div>
        </div>
     
  );
};

export default News;
