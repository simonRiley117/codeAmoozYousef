import React, { useState } from "react";
import { ReactComponent as LockIcon } from "@Assets/Icons/lock.svg";
import Password from "@Components/Shared/Inputs/Password";
import Button from "@Components/Shared/Buttons/Button";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useFetch from "@App/Context/useFetch";
import Appbar from "@Components/Shared/Menu/Appbar";
import DotLoader from "react-spinners/DotLoader";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ChangePassword = () => {
  const validationSchema = Yup.object().shape({
    new_password1: Yup.string()
      .required("رمز عبور را وارد کنید")
      .min(8, "رمز عبور کوتاه است.حداقل هشت رقم وارد کنید"),
    new_password2: Yup.string()
      .required("رمز عبور را دوباره وارد کنید")
      .oneOf([Yup.ref("new_password1"), null], "رمز عبور تطابق ندارد"),
  });
  const formOptions = {
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  };

  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm(formOptions);

  const [loading, setLoading] = useState(false);
  const [passData, setPassData] = useState();
  const { uuid, key } = useParams();
  const navigate = useNavigate();
  const ChangepassRequest = useFetch({
    url: `auth/password/reset/confirm/${uuid}/${key}`,
    method: "POST",
    trigger: false,
    data: passData,
    noHeader: true,
    argFunc: (res) => {
      setLoading(false);

      navigate("/");
    },
    argErrFunc: (mess) => {

      if ("new_password1" in mess)
        if (
          mess.new_password1.includes(
            "This password is too short. It must contain at least 8 characters."
          )
        ) {
          toast.error("پسورد کوتاه است.حداقل هشت رقم وارد کنید");
        } else if (
          mess.new_password1.includes("This password is too common.")
        ) {
          toast.error("پسوورد ساده است");
        } else if (
          mess.new_password1.includes("This password is entirely numeric.")
        ) {
          toast.error("پسوورد باید ترکیبی از حروف و اعداد باشد ");
        } else {
          toast.error(mess.new_password1);
        }

      setLoading(false);
    },
    errMessage: "",
  });
  const onSubmit = (data) => {
    if (data.new_password1 === data.new_password2) {
      setPassData({ uid: 'z', token: key, ...data });
      setLoading(true);
      ChangepassRequest.reFetch();
    } else {
      toast.error("پسوورد  شبیه نیست");
    }
  };

  return (
    <div className="ChangePassword layout">
      <header className="layout__header">
        <Appbar />
      </header>
      <div className="ChangePassword__body center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="ChangePassword__form primary-box"
        >
          <h2 className="mb-8 text-center">رمز جدید را وارد کنید</h2>
          <Password
            label="رمز عبور"
            register={{
              required: true,
            }}
            message="رمز عبور را وارد کنید"
            name="new_password1"
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
            name="new_password2"
            control={control}
            errors={errors}
            prefix={<LockIcon />}
          />
          <div className="w-full my10 ">
            <Button disabled={ChangepassRequest.loading  || !isValid} htmlType="submit">
              {loading ? (
                <DotLoader
                  color="#fff"
                  loading={loading}
                  size={22}
                />
              ) : (
                "تغییر رمز"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
