import React from 'react';
import {cardData} from "./cardData";
import Cardxx from "./Cardxx";
import {Link} from "react-router-dom";

const SingleTitle = ({match}) => {
    const id = match.params.id - 1;
    //we should be requesting for api but we don't gave any api so
    const api = cardData[id];
    const limitedApi = cardData.slice(0,3);
    return (
        <div className="Title">
            <div className="Title-column text-color">
                <h3 className="Title-heading mr-bt-md text-color title">
                    {api.header}
                </h3>
                <Cardxx borderRadius="15px 15px 0 0" img={api.img}>
                    <p className="Title-paragraph mr-bt-av subtitle">
                        {api.paragraph}
                    </p>
                    <p className="Title-paragraph mr-bt-av subtitle">
                        {api.paragraph}
                    </p>
                    <p className=" mr-bt-md Title-title title">
                        {api.title}
                    </p>
                    <p className="Title-paragraph mr-bt-av subtitle">
                        {api.paragraph}
                    </p>
                    <p className="Title-paragraph mr-bt-av subtitle">
                        {api.paragraph}
                    </p>
                </Cardxx>
            </div>
            <div className="Title-column text-color">
                <h3 className="Title-heading text-color title">
                    جدیدترین اخبار:
                </h3>
             <div className="Title-heads__container mr-bt-md">{cardData.map(card => {
                    return (
                        <p key={card.id} className="Title-heads subtitle">
                           <Link to={`/news/${card.id}`}>{card.header}</Link>
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
                     <Link to={`/news/${card.id}`}>
                       <Cardxx borderRadius="15px 15px 0 0" img={card.img}>
                         <p className="orange subtitle">
                             {card.header}
                         </p>
                       </Cardxx>
                     </Link>
                 </div>
                     );})}
             </div>
            </div>
        </div>
    );
};

export default SingleTitle;