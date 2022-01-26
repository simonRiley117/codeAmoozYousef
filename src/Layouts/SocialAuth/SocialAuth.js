import React, {useEffect, useReducer} from 'react';
import {authReducer} from "../../reducers/AuthReducer";
import Cookies from "js-cookie";
import {useNavigate, useParams} from "react-router";
import {useAuth} from "../../Context/authContext";
import {HOME_URL} from "../../constants";

function SocialAuth(props) {
    const {Token} = useParams();
    console.log('Token: ', Token)
    const {authDispatch} = useAuth();
    const navigate = useNavigate()
    useEffect(() => {
        authDispatch({
            type: "LOGIN",
            token: Token,
        });
        navigate('/', {replace: true})
    }, []);

    return (
        <div></div>
    );
}

export default SocialAuth;