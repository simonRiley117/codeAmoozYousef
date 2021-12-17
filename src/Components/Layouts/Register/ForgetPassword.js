import React, { useState } from "react";
import IconBtn from "@Components/Shared/Buttons/IconBtn";

import { ReactComponent as ExitIcon } from "@Assets/Icons/Exit.svg";
import { ReactComponent as UserIcon } from "@Assets/Icons/user.svg";

import { useForm } from "react-hook-form";
import Input from "@Components/Shared/Inputs/Input";
import Button from "@Components/Shared/Buttons/Button";
import classNames from "classnames";
import useFetch from "../../../Context/useFetch";
import { useNavigate } from "react-router-dom";

const ForgetPassword = ({ onCancel, active, handleForgetPassword }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const [postData, setPostData] = useState();
  const navigate = useNavigate();

  const forgotRequest = useFetch({
    url: `auth/password/reset`,
    method: "POST",
    data: postData,
    noHeader: true,
    trigger: false,
    message: "ایمیل با موفقیت ارسال شد",
    argFunc: (res) => {
      reset();
      handleForgetPassword();
    },
    errMessage: (mess) => {
      if (mess.detail == "Not found.") {
        //! toast error message
        navigate("/");
      }
    },
  });

  const onSubmit = (data) => {
    setPostData({ email: data.email });
    forgotRequest.reFetch();
  };

  return (
    <div
      className={classNames("register__form forgetPassword", {
        active: active,
      })}
    >
      <IconBtn title="بستن" icon={<ExitIcon />} onClick={onCancel} />
      <Button type="text" classes="back" onClick={handleForgetPassword}>
        بازگشت
      </Button>
      <div className="register__form--wrapper">
        <h2>فراموشی رمز عبور</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="register__form--inner">
            <Input
              label="ایمیل خود را جهت تعویض رمز عبور موارد کنید."
              register={{
                required: true,
              }}
              message="ایمیل را وارد کنید"
              name="email"
              type="email"
              control={control}
              errors={errors}
              prefix={<UserIcon />}
            />
            <Button disabled={forgotRequest.loading} htmlType="submit">
              ارسال ایمیل
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForgetPassword;
