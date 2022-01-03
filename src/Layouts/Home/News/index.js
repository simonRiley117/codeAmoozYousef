import React, { useRef, useState } from "react";
import Title from "@Components/Shared/Title";
import Link from "@Components/Shared/Buttons/Link";
import NewsItem from "./NewsItem";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import useFetch from "../../../Context/useFetch";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const [loadingNewsList, setLoadingNewsList] = useState(true);

  const setData = (data) => {
    setNewsList(data.results);
    setLoadingNewsList(false);
  };

  const getNewsList = useFetch({
    url: `NewsService/latestNews`,
    method: "GET",
    noHeader: true,
    setter: setData,
  });

  const renderNewsItem = () =>
    newsList.map((info, key) => (
      <SwiperSlide key={key}>
        <NewsItem {...info} />
      </SwiperSlide>
    ));

  return !loadingNewsList ? (
    <section className="home__news">
      <div className="container">
        <Title>جدیدترین اخبار</Title>
        <div className="home__news--content">
          <div className="home__news--slider">
            <Swiper
              effect="coverflow"
              grabCursor
              loop
              slidesPerView={3}
              slideToClickedSlide
              coverflowEffect={{
                rotate: 0,
                slideShadows: false,
                scale: 1,
              }}
              breakpoints={{
                350: {
                  coverflowEffect: {
                    depth: 100,
                    modifier: 1,
                    stretch: 0,
                  },
                },
                480: {
                  coverflowEffect: {
                    depth: 200,
                    stretch: 10,
                  },
                },

                650: {
                  coverflowEffect: {
                    depth: 300,
                    modifier: 2,
                  },
                },
                900: {
                  coverflowEffect: {
                    stretch: 2,
                    depth: 350,
                    modifier: 3,
                  },
                },
                1500: {
                  coverflowEffect: {
                    depth: 400,
                    stretch: 0,
                    modifier: 3,
                  },
                },
              }}
              pagination={{
                clickable: true,
              }}
            >
              {renderNewsItem()}
            </Swiper>
          </div>
          <div className="home__news--action">
            <Link to="/news" type="primary">
              اخبار بیشتر
            </Link>
          </div>
        </div>
      </div>
    </section>
  ) : null;
};
export default News;
