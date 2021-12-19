import React from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import { useForm } from "react-hook-form";
import Password from "@Components/Shared/Inputs/Password";
import Button from "@Components/Shared/Buttons/Button";
import { ReactComponent as LockIcon } from "@Assets/Icons/lock.svg";

function PasswordChange() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data) => {};
  return (
    <div>
      <p className="NewCourse__title text-center ">تعویض کلمه عبور</p>
      <form onSubmit={handleSubmit(onSubmit)} className="NewCourse__formBox ">
        <Password
          label="کلمه عبور فعلی:"
          register={{
            required: true,
          }}
          message="کلمه عبور فعلی را وارد کنید"
          name="Password"
          classes="NewCourse__input "
          control={control}
          errors={errors}
        />

        <Password
          label="کلمه عبور جدید:"
          register={{
            required: true,
          }}
          message=" کلمه عبور جدید را وارد کنید"
          name="Password1"
          classes="NewCourse__input mt-8"
          control={control}
          errors={errors}
        />
        <Password
          label="تکرار کلمه عبور جدید:"
          register={{
            required: true,
          }}
          message=" تکرار کلمه عبور جدید را وارد کنید "
          name="Password1"
          classes="NewCourse__input mt-8	"
          control={control}
          errors={errors}
        />
        <Button
          ico={false}
          type="primary"
          classes="NewCourse__btn mt-10 "
          htmlType="submit"
        >
          ثبت تغییرات
        </Button>
      </form>
    </div>
  );
}

export default PasswordChange;
