import React from "react";
import mastersignup from "@Assets/Pic/mastersignup.png";
import { useForm } from "react-hook-form";
import Input from "@Components/Shared/Inputs/Input";
import UploadProfile from "@Components/Shared/Inputs/UploadProfile";

function MasterSignUp() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};
  return (
    <div className="WorkWithUs text-center">
      <div className="WorkWithUs__logoBox ">
        <div className="WorkWithUs__logoBack rounded-full"></div>
        <img src={mastersignup} alt={mastersignup} />
      </div>
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
        </form>
      </div>
    </div>
  );
}

export default MasterSignUp;
