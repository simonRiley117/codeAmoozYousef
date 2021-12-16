import React, {useState} from "react";
import ShoppingCoursecard from "./ShoppingCoursecard";
import NoShoppingCard from "@Assets/Icons/NoShoppingCard.svg";
import Button from "@Components/Shared/Buttons/Button";
import {useNavigate} from "react-router-dom";

const CoursesBox = ({orderCard, getPayment, getorderSummary}) => {
    const navigate = useNavigate();
    // console.log('orderCard: ', orderCard)
    // console.log('orderCard.results: ', orderCard?.results)
    // console.log('orderCard.results.length: ', orderCard?.results?.length)

    return (
        <div className="primary-box CoursesBox">
            {orderCard?.results?.map((i) => (
                <ShoppingCoursecard
                    getPayment={getPayment}
                    getorderSummary={getorderSummary}
                    key={i.uuid}
                    card={i}
                />
            ))}
            {(orderCard?.results?.length === 0 || orderCard?.results?.length === undefined) && (
                <div className="ShoppingList__NoCard">
                    <p>هنوز دوره ای در سبد خرید شما وجود ندارد;(</p>
                    <img src={NoShoppingCard} alt="shoppingcard"/>

                    <Button onClick={() => navigate("/courses")}>
                        افزودن دوره های جدید
                    </Button>

                </div>
            )}
        </div>
    );
};

export default CoursesBox;
