import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Input from "@Components/Shared/Inputs/Input";
import Password from "@Components/Shared/Inputs/Password";

import { ReactComponent as UserIcon } from "@Assets/Icons/user.svg";
import { ReactComponent as LockIcon } from "@Assets/Icons/lock.svg";
import { Checkbox } from "antd";
// import useFetch from "../../../Contexts/useFetch";
// import { useAuth } from "../../../Contexts/authContext";
import Button from "@Components/Shared/Buttons/Button";
import useFetch from "../../../Context/useFetch";
import { useAuth } from "@App/Context/authContext";
import { useLocation } from "react-router-dom";
import { TEAChER_URL } from "@App/constants";

const SignInForm = () => {
  const { authDispatch } = useAuth();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [postData, setPostData] = useState();
  const { pathname, search } = useLocation();

  const loginRequest = useFetch({
    url: `auth/login`,
    method: "POST",
    data: postData,
    trigger: false,
    noHeader: true,
    argFunc: (res) => {
      // setLoading(false);

      authDispatch({
        type: "LOGIN",
        token: res.access_token,
        refresh: res.refresh_token,
      });
      if (search == "?redirectTeacher") {
        window.location.href = TEAChER_URL + `/callback/${res.access_token}`;
      }
      // history.push("/panel");
    },
  });

  const onSubmit = (data) => {
    setPostData({ username: data.username, password: data.password });
    loginRequest.reFetch();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="register__form--inner">
        <Input
          label="نام کاربری"
          register={{
            required: true,
          }}
          message="نام کاربری را وارد کنید"
          name="username"
          control={control}
          errors={errors}
          prefix={<UserIcon />}
        />
        <Password
          label="رمز عبور"
          register={{
            required: true,
          }}
          message="رمز عبور را وارد کنید"
          name="password"
          control={control}
          errors={errors}
          prefix={<LockIcon />}
        />
        <Checkbox>منو به خاطر بسپار</Checkbox>
        <Button disabled={loginRequest.loading} htmlType="submit">
          ورود
        </Button>
      </div>
    </form>
  );
};
export default SignInForm;
