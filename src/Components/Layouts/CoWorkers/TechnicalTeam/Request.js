import React from "react";
import { useForm } from "react-hook-form";
import Input from "@Components/Shared/Inputs/Input";
import InputTextArea from "@Components/Shared/Inputs/Textarea";
import CheckBox from "@Components/Shared/Inputs/CheckBox";
import Button from "@Components/Shared/Buttons/Button";
import UploadProfile from "@Components/Shared/Inputs/UploadProfile";

function Request() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};
  return (
    <div className="Deatil">
      <div className="ProduceRules__content">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="MasterSignUp__formBox"
        >
          <div className="grid grid-cols-2 MasterSignUp__gridBox items-start justify-start">
            <Input
              label="نام:"
              register={{
                required: true,
              }}
              message="نام را وارد کنید"
              name="first_name"
              control={control}
              errors={errors}
            />
            <Input
              label="نام خانوادگی:"
              register={{
                required: true,
              }}
              message="نام خانوادگی را وارد کنید"
              name="last_name"
              control={control}
              errors={errors}
            />
            <Input
              label="میزان تحصیلات:"
              register={{
                required: true,
              }}
              message="میزان تحصیلات را وارد کنید"
              name="course"
              control={control}
              errors={errors}
            />
            <Input
              label="رشته تحصیلی:"
              register={{
                required: true,
              }}
              message="رشته تحصیلی را وارد کنید"
              name="subject"
              control={control}
              errors={errors}
            />
            <Input
              label="شماره تماس:"
              register={{
                required: true,
              }}
              message="شماره تماس را وارد کنید"
              name="phone"
              control={control}
              errors={errors}
            />
            <Input
              label="ایمیل:"
              register={{
                required: true,
              }}
              message="ایمیل را وارد کنید"
              name="email"
              control={control}
              errors={errors}
            />
            <UploadProfile />
          </div>
          <div className="MasterSignUp__textarea">
            <InputTextArea
              rows={4}
              label="شرح مختصری از شما:"
              register={{
                required: true,
              }}
              message="شرح را وارد کنید"
              name="txt"
              control={control}
              errors={errors}
            />
          </div>
          <div className="flex items-start text-right MasterSignUp__ruleBox">
            <CheckBox
              label="سایت را قبول دارم"
              message="قوانین و مقررات"
              name="rule"
              control={control}
              errors={errors}
              register={{
                required: false,
              }}
            />
          </div>
          <div className="text-center flex items-center justify-center MasterSignUp__btnBox ">
            <Button type="primary" classes="MasterSignUp__btn">
              ارسال
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Request;
