import React from 'react';
import {cardData} from "./cardData";
import Cardxx from "./Cardxx";
import {Link} from "react-router-dom";

const SingleTitle = ({match}) => {
    const id = match.params.id - 1;
    //we should be requesting api but we don't gave any api so
    const api = cardData[id];
    const limitedApi = cardData.slice(0,3);
    return (
        <div className="title">
            <div className="title-column text-color">
                <h3 className="title-heading mr-bt-md text-color">
                    {api.header}
                </h3>
                <Cardxx borderRadius="15px 15px 0 0" img={api.img}>
                    <p className="title-paragraph mr-bt-av">
                        {api.paragraph}
                    </p>
                    <p className="title-paragraph mr-bt-av">
                        {api.paragraph}
                    </p>
                    <p className="orange mr-bt-md title-title">
                        {api.title}
                    </p>
                    <p className="title-paragraph mr-bt-av">
                        {api.paragraph}
                    </p>
                    <p className="title-paragraph mr-bt-av">
                        {api.paragraph}
                    </p>
                </Cardxx>
            </div>
            <div className="title-column text-color">
                <h3 className="title-heading text-color">
                    جدیدترین اخبار:
                </h3>
             <div className="title-heads__container mr-bt-md">{cardData.map(card => {
                    return (
                        <p key={card.id} className="title-heads">
                           <Link to={`/news/${card.id}`}>{card.header}</Link>
                        </p>
                    );
                })}
             </div>
             <div className="title-cards">
                 <h3 className="title-heading mr-bt-sm text-color">
                     موضوعات مرتبط:
                 </h3>
                 {limitedApi.map(card => {
                     return (
                 <div key={card.id} className="mr-bt-sm">
                     <Link to={`/news/${card.id}`}>
                       <Cardxx borderRadius="15px 15px 0 0" img={card.img}>
                         <p className="orange">
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