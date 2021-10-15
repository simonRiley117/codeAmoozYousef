import React from 'react'
import Cardxx from "./Cardxx";
import {Button} from "antd";
import {cardData} from "./cardData";
import {Link} from "react-router-dom";

const News = () => {
    console.log(window.location.href);
    const test = window.location.pathname - "http://localhost:3000"
    console.log(test);
    return (
        <div className="news">
            <h2 className="news-heading ">
                اخبار
            </h2>
            <div className="news-grid">
                {cardData.map(card => {
                    return (
                        <Cardxx key={card.id} borderRadius="15px" img={card.img}>
                           <h3 className="card-heading mr-bt-sm">
                               {card.header}
                           </h3>
                           <p className="card-paragraph mr-bt-sm">
                               {card.text}
                           </p>
                            <Button type="primary" shape="round" size={"large"}>
                              <Link to={`/news/${card.id}`} >  بیشتر بخوانید...</Link>
                            </Button>
                        </Cardxx>
                    )
                })}
            </div>
        </div>
    );
};

export default News