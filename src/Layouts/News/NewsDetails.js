import React, { useState, useEffect } from 'react';
import { cardData } from '@Components/Layouts/News/cardData';
import Cardxx from '@Components/Layouts/News/Cardxx';
import { Link, useLocation } from 'react-router-dom';
import AntParagraph from '../../Components/Shared/AntParagraph';
import Detailsxx from '../../Components/Layouts/News/Detailsxx';
//images
import datebook from '@Assets/Pic/Frame 87.png';
import eye from '@Assets/Pic/Frame 88.png';

const NewsDetails = () => {
    const [id, setId] = useState('1');
    const location = useLocation();
    useEffect(() => {
        setId(location.state.id - 1)
    }, [location]);
    //we should be requesting for api but we don't gave any api so
    const api = cardData[id];
    const limitedApi = cardData.slice(0, 3);
    //information of the news
    const info = <div className="Title-details d-flex">
        <img className="Title-date" src={datebook} alt="date"/>
        <p className=" light">
            {api.time}
        </p>
        <p className="margin-left light">
            {api.date}
        </p>
        <img className="Title-seen" src={eye} alt="eye"/>
        <p className=" light">
            {api.seen}
        </p>
    </div>
    return (
        <div className="Title container">
            <div className="Title-column text-color">
                <h3 className="Title-heading mr-bt-md text-color title">
                    {api.header}
                </h3>
                <Detailsxx borderRadius="15px 15px 0 0" img={api.img} info={info}>
                    <AntParagraph classes="Title-paragraph mr-bt-av subtitle">
                        {api.paragraph}
                    </AntParagraph>
                    <AntParagraph classes="Title-paragraph mr-bt-av subtitle">
                        {api.paragraph}
                    </AntParagraph>
                    <p className=" mr-bt-md Title-title title">
                        {api.title}
                    </p>
                    <AntParagraph classes="Title-paragraph mr-bt-av subtitle">
                        {api.paragraph}
                    </AntParagraph>
                    <AntParagraph classes="Title-paragraph mr-bt-av subtitle">
                        {api.paragraph}
                    </AntParagraph>
                </Detailsxx>
            </div>
            <div className="Title-column text-color">
                <h3 className="Title-heading text-color title">
                    جدیدترین اخبار:
                </h3>
                <div className="Title-heads__container mr-bt-md">{cardData.map(card => {
                    return (
                        <p key={card.id} className="Title-heads subtitle">
                            <Link
                                to={{
                                    pathname: '/news/NewsDetails',
                                    state: {
                                        id: card.id,
                                    }
                                }}
                            >
                                {card.header}
                            </Link>
                        </p>
                    );
                })}
                </div>
                <h3 className="Title-heading mr-bt-sm text-color title">
                    موضوعات مرتبط:
                </h3>
                <div className="Title-cards">
                    {limitedApi.map(card => {
                        return (
                            <div key={card.id} className="mr-bt-sm">
                                <Link
                                    to={{
                                        pathname: '/news/NewsDetails',
                                        state: {
                                            id: card.id,
                                        }
                                    }}
                                >
                                    <Cardxx borderRadius="15px 15px 0 0" img={card.img}>
                                        <p className="orange subtitle">
                                            {card.header}
                                        </p>
                                    </Cardxx>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default NewsDetails;
