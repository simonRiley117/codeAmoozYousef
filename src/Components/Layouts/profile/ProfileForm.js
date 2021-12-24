import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "@Components/Shared/Inputs/Input";
import Textarea from "@Components/Shared/Inputs/Textarea";
import DatePickerInput from "@Components/Shared/Inputs/DatePickerInput";
import Select from "@Components/Shared/Inputs/Select";
import UploadProfile from "@Components/Shared/Inputs/UploadProfile";
import Button from "@Components/Shared/Buttons/Button";
import useFetch from "../../../Context/useFetch";
import Upload from "@Components/Shared/Inputs/Upload";
import { useUserData } from "@App/Context/userContext";
//icons
// import { ReactComponent as Github } from "@Assets/Icons/github.svg";
// import { ReactComponent as Instagram } from "@Assets/Icons/instagram.svg";
// import { ReactComponent as Linkdin } from "@Assets/Icons/linkdin.svg";
// import { ReactComponent as Telegram } from "@Assets/Icons/TelegramLogo.svg";
// import { isEmpty } from "lodash";

// const convertToFile = async (url) => {
//   const response = await fetch(url, {
//     // cache: '',
//     mode: "navigate",
//   });
//   const blob = await response.blob();
//   const fileName = url.split("/").pop();
//   let file = new File([blob], fileName, { type: blob.type });

//   return file;
// };

const optionList = [
    {label: "دیپلم", value: "U.DP"},
    {label: "فوق دیپلم ", value: "DP"},
    {label: "کارشناسی ", value: "B.S"},
    {label: "کارشناسی ارشد ", value: "M.S"},
    {label: "دکترا ", value: "Ph.D"},
];

const ProfileForm = () => {
  const { userData } = useUserData();

  const [profileData, setProfileData] = useState(null);
  const [profilepostData, setProfilepostData] = useState(null);

  const [ProfileLoading, setProfileLoading] = useState(true);

  const { handleSubmit, control, register } = useForm();

  const onSubmit = (data) => {
    let formData = new FormData();
    if (data.cover.length !== 0) {
      formData.append("cover", data.cover[0], data.cover[0].name);
    }

    formData.append("description", data.description);
    formData.append("first_name", data.first_name);
    formData.append(
      "birth_date",
      data.birth_date.convert().format("YYYY-MM-DD")
    );
    formData.append("province", data.province);
    formData.append("last_name", data.last_name);
    formData.append("degree", data.degree);
    formData.append("major", data.major);
    formData.append("email", data.email);
    formData.append("phone_number", data.phone_number);
    formData.append("address", data.address);
    formData.append("github", data.github);
    formData.append("telegram", data.telegram);
    formData.append("instagram", data.instagram);
    formData.append("linkedin", data.linkedin);
    setProfilepostData(formData);
    PostProfile.reFetch();
  };

  const setData = (data) => {
    setProfileData(data);
    setProfileLoading(false);
  };

  const getuserInfo = useFetch({
    url: `TeacherService/profile_get`,
    method: "GET",
    setter: setData,
  });

  const PostProfile = useFetch({
    url: `TeacherService/${profileData?.uuid}`,
    method: "PATCH",
    trigger: false,
    data: profilepostData,
    caller: getuserInfo,
    message: "اطلاعات با موفقیت ثبت شد",
  });

  return (
    <>
      {!ProfileLoading ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-wrapper">
            <div className="uploadProfile__box flex">
              <UploadProfile
                defaultImage={profileData.cover}
                {...register("cover")}
              />

              <div className="mr-10">
                <p className="text-primary uploadProfile__box-name">
                  {userData?.first_name}
                </p>
                <p className="text-primary uploadProfile__box-id">
                  {userData?.username}
                </p>
              </div>
            </div>

            <Input
              label="نام"
              register={{
                required: {
                  value: true,
                  message: "نام را وارد کنید",
                },
              }}
              name="first_name"
              control={control}
              value={profileData?.first_name}
            />
            <Input
              label="نام خانوادگی"
              register={{
                required: {
                  value: true,
                  message: "نام  خانوادگی را وارد کنید",
                },
              }}
              name="last_name"
              control={control}
              value={profileData?.last_name}
            />
            <Select
              label="میزان تحصیلات"
              register={{
                required: true,
              }}
              name="degree"
              control={control}
              options={optionList}
              message="میزان تحصیلات را وارد کنید"
              value={profileData?.degree}
              defaultValue="U.DP"
            />
            <Input
              label=" رشته تحصیلی"
              register={{
                required: {
                  value: true,
                  message: "رشته تحصیلات را وارد کنید",
                },
              }}
              name="major"
              control={control}
              value={profileData?.major}
            />

            <DatePickerInput
              control={control}
              rules={{ required: false }}
              label="تاریخ تولد"
              name="birth_date"
              message="تاریخ تولد را وارد کنید"
              defaultValue={profileData?.birth_date}
            />
            <Input
              label="ایمیل "
              register={{
                required: {
                  value: true,
                  message: "ایمیل خود را وارد کنید",
                },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "ایمیل وارد شده اشتباه است!",
                },
              }}
              name="email"
              control={control}
              value={profileData?.email}
            />
            <Input
              label="محل سکونت"
              register={{
                required: false,
              }}
              name="province"
              control={control}
              value={profileData?.province}
            />
            <Input
              label="شماره تماس "
              register={{
                required: {
                  value: true,
                  message: "شماره تماس را وارد کنید",
                },
              }}
              name="phone_number"
              control={control}
              value={profileData?.phone_number}
            />
          </div>

          <div className="center w-100 mt-40">
            <Button type="primary" htmlType="submit">
              ثبت تغییرات
            </Button>
          </div>
        </form>
      ) : null}
    </>
  );
};

export default ProfileForm;
