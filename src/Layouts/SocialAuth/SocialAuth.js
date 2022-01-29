import React, {useEffect, useReducer} from 'react';
import {authReducer} from "../../reducers/AuthReducer";
import Cookies from "js-cookie";
import {useNavigate, useParams} from "react-router";
import {useAuth} from "../../Context/authContext";
import {HOME_URL, TEAChER_URL, USER_URL} from "../../constants";

function SocialAuth(props) {
    const {Token, refToken} = useParams();
    console.log('Token: ', Token)
    const {authDispatch, authRefreshDispatch} = useAuth();
    const navigate = useNavigate()
    useEffect(() => {
        authDispatch({
            type: "LOGIN",
            token: Token,
        })
        authRefreshDispatch({
            type: "LOGIN",
            refreshToken: refToken,
        });
        // console.log('window.location.href: ', window.location.href)
        const url = localStorage.getItem("url")
        url === 'http://localhost:3000/?redirectTeacher' ? (
            window.location.href = TEAChER_URL
        ) : (
            window.location.href = USER_URL
        )
        localStorage.removeItem('url')
    }, []);

    return (
        <div></div>
    );
}

export default SocialAuth;