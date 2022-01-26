import React, {useState} from "react";
import {useForm} from "react-hook-form";

import Input from "@Components/Shared/Inputs/Input";
import Password from "@Components/Shared/Inputs/Password";

import {ReactComponent as UserIcon} from "@Assets/Icons/user.svg";
import {ReactComponent as LockIcon} from "@Assets/Icons/lock.svg";
import {Checkbox} from "antd";
// import useFetch from "../../../Contexts/useFetch";
// import { useAuth } from "../../../Contexts/authContext";
import Button from "@Components/Shared/Buttons/Button";
import useFetch from "../../../Context/useFetch";
import {useAuth} from "@App/Context/authContext";
import {useLocation} from "react-router-dom";
import {TEAChER_URL} from "@App/constants";
import DotLoader from "react-spinners/DotLoader";
import {css} from "@emotion/react";
import {toast} from "react-toastify";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #fff;
  
`;

const SignInForm = () => {
    const {authDispatch, authRefreshDispatch} = useAuth();

    const {handleSubmit, control} = useForm();
    const [postData, setPostData] = useState();
    const [loading, setLoading] = useState(false);
    const {search} = useLocation();

    const loginRequest = useFetch({
        url: `auth/login`,
        method: "POST",
        data: postData,
        trigger: false,
        noHeader: true,
        argFunc: (res) => {
            setLoading(false);

            if (search == "?redirectTeacher") {
                authDispatch({
                    type: "LOGIN",
                    token: res.access_token,
                    // refresh: res.refresh_token,
                });
                authRefreshDispatch({
                    type: "LOGIN",
                    refreshToken: res.refresh_token,
                });
                // window.location.href = TEAChER_URL + `/callback/${res.access_token}`;
                window.location.href = TEAChER_URL;
            } else {
                authDispatch({
                    type: "LOGIN",
                    token: res.access_token,
                    // refresh: res.refresh_token,
                });
                authRefreshDispatch({
                    type: "LOGIN",
                    refreshToken: res.refresh_token,
                });
            }
            // history.push("/panel");
        },
        argErrFunc: (mess) => {
            if ("non_field_errors" in mess) {
                if (
                    mess.non_field_errors.includes("There is no user with that username")
                ) {
                    toast.error("شما هنوز ثبت نام نکرده اید");
                }
                if (mess.non_field_errors.includes("Wrong Password")) {
                    toast.error("پسورد اشتباه است");
                }
                if (mess.non_field_errors.includes("E-mail is not verified.")) {
                    toast.error("ایمیل تایید نشده است");
                }
            }

            setLoading(false);
        },
        errMessage: "",
    });

    const onSubmit = (data) => {
        setPostData({username: data.username, password: data.password});
        setLoading(true);
        loginRequest.reFetch();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="register__form--inner">
                <Input
                    label="نام کاربری"
                    register={{
                        required: {
                            value: true,
                            message: "نام کاربری را وارد کنید",
                        },
                    }}
                    name="username"
                    control={control}
                    prefix={<UserIcon/>}
                />
                <Password
                    label="رمز عبور"
                    register={{
                        required: {
                            value: true,
                            message: "رمز عبور را وارد کنید",
                        },
                    }}
                    name="password"
                    control={control}
                    prefix={<LockIcon/>}
                />
                <Button disabled={loginRequest.loading} classes='mt-6' htmlType="submit">
                    {loading ? (
                        <DotLoader
                            color="#fff"
                            loading={loading}
                            css={override}
                            size={22}
                        />
                    ) : (
                        "ورود"
                    )}
                </Button>
            </div>
        </form>
    );
};
export default SignInForm;
