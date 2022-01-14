import React, {useState, useEffect} from "react";
import useFetch from "@App/Context/useFetch";
// import {useCartData} from '@App/Context/cartContext';
import CostBox from "@Components/Layouts/shoppingcard/CostBox";
import CoursesBox from "@Components/Layouts/shoppingcard/CoursesBox";

const ShoppingCard = () => {
    // const {getCart} = useCartData()
    const [orderCard, setOrderCard] = useState({results: []});
    // console.log('orderCardXXX.results: ', orderCard.results)
    // console.log('orderCardXXX.results.length: ', orderCard?.results?.length)
    const [payment, setPayment] = useState([]);

    const getorderSummary = useFetch({
        url: `CartService/orderSummary`,
        method: "GET",
        setter: setOrderCard,
    });

    const getPayment = useFetch({
        url: `CartService/showPayment`,
        trigger: false,
        method: "GET",
        setter: setPayment,
    });

    useEffect(() => {
        if (orderCard?.results?.length !== 0) {
            getPayment.reFetch()
        }
    }, [orderCard?.results?.length])

    return (
        <div className="shoppingcard">
            <div className="container">
                <div className="shoppingcard-heading center title__box">
                    <h2> سبدخرید</h2>
                </div>
                <div className="shoppingcard__row  ">
                    <CoursesBox
                        getPayment={getPayment}
                        orderCard={orderCard}
                        getorderSummary={getorderSummary}
                    />
                    <CostBox
                        getPayment={getPayment}
                        payment={payment} orderCard={orderCard}/>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCard;
