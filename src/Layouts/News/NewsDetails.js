import React, {useState, useEffect} from "react";
import {cardData} from "@Components/Layouts/News/cardData";
import NewsItemContainer from "@Components/Layouts/News/NewsItemContainer";
import {Link, useLocation} from "react-router-dom";
import AntParagraph from "../../Components/Shared/AntParagraph";
import NewsDetailsBox from "../../Components/Layouts/News/NewsDetailsBox";
import useFetch from "@App/Context/useFetch";
import RiseLoader from "react-spinners/RiseLoader";

//images
import datebook from "@Assets/Pic/Frame 87.png";
import eye from "@Assets/Pic/Frame 88.png";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";

const NewsDetails = () => {
    const location = useLocation();
    const [id, setId] = useState(1)
    // useEffect(() => {
    //     console.log('LOCATION: ', location)
    //     setId(location.state.id)
    // }, [location])
    console.log('NEWSID: ', id)
    const [NewsData, setNewsData] = useState();
    const [latestNews, setlatestNews] = useState([]);
    const [similarNews, setsimilarNews] = useState([]);

    const getNews = useFetch({
        url: `NewsService/${id}`,
        method: "GET",
        noHeader: true,
        setter: setNewsData,
    });
    const getLatestNewsList = useFetch({
        url: `NewsService/latestNews`,
        method: "GET",
        noHeader: true,
        setter: setlatestNews,
    });
    const getSimilarNewsList = useFetch({
        url: `NewsService/${id}/similarNews`,
        method: "GET",
        noHeader: true,
        setter: setsimilarNews,
    });
    //information of the news
    const info = (
        <div className="Title-details d-flex">
            <div className="ml-6 d-flex">
                <img src={datebook} alt="date"/>
                <span>{NewsData?.read_time}</span>
                <span>{NewsData?.published_time}</span>
            </div>
            <div className=" d-flex">
                <img src={eye} alt="eye"/>
                <span>{NewsData?.view_number}</span>
            </div>
        </div>
    );
    return (

        <div className="container">
            <BreadCrump title={NewsData?.title}/>
            <h3 className="Title-heading">{NewsData?.title}</h3>
            <div className="Title">
                <div className="Title-column text-color">
                    <NewsDetailsBox
                        borderRadius="15px 15px 0 0"
                        img={NewsData?.cover}
                        info={info}
                    >
                        <p>{NewsData?.text}</p>
                        {/* <p>{NewsData.paragraph}</p>
                <h4>{NewsData.title}</h4>
                <p>{NewsData.paragraph}</p>
                <p>{NewsData.paragraph}</p> */}
                    </NewsDetailsBox>
                </div>
                <div className="Title-column">
                    <h3 className="Title-heading-sidebar">جدیدترین اخبار:</h3>
                    <div className="Title-heads__container mr-bt-md">
                        {latestNews?.results?.map((card) => {
                            return (
                                <p
                                    key={card.id}
                                    className="d-flex-align Title-heads subtitle"
                                >
                                    <img
                                        className="ml-4"
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "8px",
                                        }}
                                        src={card.cover}
                                        alt=""
                                    />
                                    <Link
                                        to={{
                                            pathname: "/news/news-info",
                                            state: {
                                                id: card.id,
                                            },
                                        }}
                                        className='latest-news-link'
                                    >
                                        {card.title}
                                    </Link>
                                </p>
                            );
                        })}
                    </div>
                    <h3 className="Title-heading-sidebar ">موضوعات مرتبط:</h3>
                    <div className="Title-cards">
                        {similarNews?.map((card) => {
                            return (
                                <div key={card.id} className="mr-bt-sm Title-linked">
                                    <Link
                                        to={{
                                            pathname: "/news/news-info",
                                            state: {
                                                id: card.id,
                                            },
                                        }}
                                    >
                                        <NewsItemContainer
                                            borderRadius="15px 15px 0 0"
                                            img={card.cover}
                                        >
                                            <h3 className="orange subtitle">{card.title}</h3>

                                        </NewsItemContainer>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>

    );
};
export default NewsDetails;
