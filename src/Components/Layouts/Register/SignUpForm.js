import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@Components/Shared/Inputs/Input";
import Password from "@Components/Shared/Inputs/Password";

import { ReactComponent as UserIcon } from "@Assets/Icons/user.svg";
import { ReactComponent as LockIcon } from "@Assets/Icons/lock.svg";
import { Checkbox } from "antd";
import Button from "@Components/Shared/Buttons/Button";
import { Link } from "react-router-dom";
import useFetch from "../../../Context/useFetch";

const SignUpForm = ({ handleActive }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const [postData, setPostData] = useState();
  const [checkBoxState, setCheckBoxState] = useState(false);

  const registerRequest = useFetch({
    url: `auth/register`,
    method: "POST",
    data: postData,
    trigger: false,
    noHeader: true,
    errMessage: (mess) => {
      let showMessage = "";
      if ("password1" in mess)
        if (
          mess.password1.includes(
            "This password is too short. It must contain at least 8 characters."
          ) ||
          mess.password1.includes("This password is too common.") ||
          mess.password1.includes("This password is entirely numeric.")
        ) {
          showMessage = "pass";
        }
      if ("username" in mess)
        if (
          mess.username.includes("A user with that username already exists.")
        ) {
          showMessage = "user";
        }
      if ("email" in mess)
        if (
          mess.email.includes(
            "A user is already registered with this e-mail address."
          ) ||
          mess.email.includes("Enter a valid email address.")
        ) {
          showMessage = "email";
        }
      //   toast.error(showMessage, {
      //     position: toast.POSITION.TOP_CENTER,
      //   });
    },

    argFunc: (res) => {
      if (res.detail == "Verification e-mail sent.") {
        handleActive();
        // reset();
        //   toast.error(showMessage, {
        //     position: toast.POSITION.TOP_CENTER,
        //   });
      }
    },
  });

  const onSubmit = (data) => {
    if (data.password1 == data.password2) {
      setPostData({
        username: data.username,
        password1: data.password1,
        password2: data.password2,
        email: data.email,
      });
      registerRequest.reFetch();
    } else {
      //! send error message
    }
  };

  function onChange(e) {
    setCheckBoxState(e.target.checked);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="register__form--inner signUp">
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
          errors={errors}
          prefix={<UserIcon />}
        />
        <Input
          label="ایمیل"
          register={{
            required: {
              value: true,
              message: "ایمیل را وارد کنید",
            },
          }}
          name="email"
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
          name="password1"
          control={control}
          errors={errors}
          prefix={<LockIcon />}
        />
        <Password
          label="تکرار رمز عبور"
          register={{
            required: true,
          }}
          message="رمز عبور را وارد کنید"
          name="password2"
          control={control}
          errors={errors}
          prefix={<LockIcon />}
        />
        <Checkbox checked={checkBoxState} onChange={onChange}>
          <Link to='/'>قوانین و مقررات</Link> سایت را قبول دارم
        </Checkbox>
        <Button
          disabled={registerRequest.loading || !checkBoxState ? true : false}
          htmlType="submit"
        >
          ثبت نام
        </Button>
      </div>
    </form>
  );
};
export default SignUpForm;
