import React, {useContext, createContext, useReducer, useState} from 'react';

import useAxios from "@use-hooks/axios";
import {API_URL} from "../constants";
import {useAuth} from "./authContext";

const CartDataContext = createContext();

function CartDataProvider(props) {
    const [cartData, setCartData] = useState(null);
    const {token, authDispatch} = useAuth();

    const getCart = useAxios({
        url: `${API_URL}/CartService/cart_context/`,
        options: {
            headers: {
                Authorization: `JWT ${token}`,
            },
        },
        trigger: token ? [] : undefined,
        customHandler: (err, res) => {
            if (res) {
                console.log('res: ', res)
                console.log('res.data: ', res.data)
                setCartData(res.data);
            }
            if (err) {
                console.log('cart err: ', err)
                // authDispatch({type: "LOGOUT"});
            }
        },
    });

    return (
        <CartDataContext.Provider value={{cartData, getCart}} {...props}>
            {props.children}
        </CartDataContext.Provider>
    );
}

const useCartData = () => useContext(CartDataContext);

export {useCartData, CartDataProvider};