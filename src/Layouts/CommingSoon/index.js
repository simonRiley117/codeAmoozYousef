import useFetch from "@App/Context/useFetch";
import Input from "@Components/Shared/Inputs/Input";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import commingsoonImg from "../../Assets/Images/Pic/coming-soon.png";
import Logo from "../../Assets/Images/Pic/logo.png";
const CommingSoon = () => {
  // get ready's date
  const Ready = new Date("25 Augest 2023").getTime();

  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff = Ready - today;

  // countdown
  let timer = setInterval(function() {
    // Decrease one second, one second (1000ms = 1s)
    diff -= 1000;

    // math
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(diff % (1000 * 60) / 1000);
    // display
    document.getElementById("timer").innerHTML =
      '<div class="seconds"> \
  <div class="numbers">' +
      seconds +
      '</div>ثانیه</div> \
<div class="minutes"> \
  <div class="numbers">' +
      minutes +
      '</div>دقیقه</div> \
<div class="hours"> \
  <div class="numbers">' +
      hours +
      '</div>ساعت</div> \
<div class="days"> \
  <div class="numbers">' +
      days +
      "</div>روز</div> \
</div>";

    // when (ready == today) => stop countdown timer
    if (diff < 1000) return clearInterval(timer);
  }, 1000);

  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors, isSubmitted }
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onTouched",
    defaultValues: {
      phone: "",
     
    }
  });
  const [data, setData] = useState();
  const postPhone = useFetch({
    url: "",
    method: "POST",
    trigger: false,
    noHeader: true,
    data: data,
    func: () =>
      reset({
        phone: ""
      }),
    message: "پیام با موفقیت ثبت شد"
    // argErrFunc: (err) => re(err),
  });
  const submit = data => {
   // setData(data);
   console.log(data)
  
  };

  return (
    <div className="comming-soon">
      <div class="comming-soon-container">
        <div class="toast-true-hide">
          <div class="icon">
            <i class="fa-solid fa-circle-check fa-beat" />
          </div>
          <div class="text">
            <p>ثبت نام شدید!</p>
          </div>
        </div>
        <div class="toast-false-hide">
          <div class="icon">
            <i class="fa-solid fa-triangle-exclamation fa-beat" />
          </div>
          <div class="text">
            <p>دوباره تلاش کنید!</p>
          </div>
        </div>
        <img src={Logo} class="logo" />
        <div class="comming-soon-container-2">
          <h1>یه بستر داریم، تا نداره</h1>
          <p>
            همین الان شماره موبایلتو وارد کن و از تخفیف 20درصدی دوره‌های یادگیری
            برنامه نویسی کدآموز بهره‌مند شو:)
          </p>
          <div id="timer" />
          <div class="">
            <div class="form">
              <form onSubmit={handleSubmit(submit)}>
                <Input
                  //type="tel"
                  name="phone"
                  class="subscribe"
                  placeholder="!جای شمارت اینجاست"
                  required
                  type='number'
                  register={{
                    required: {
                      value: true,
                      message: "شماره تماس خود را وارد کنید"
                    },
                   pattern: {
                    value: /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                     message:
                    " فرمت درست(۱۲۱۲ ۱۲۳ ۰۹۱۳) شماره تماس وارد شده اشتباه است!",
                   }
                 }}
                  control={control}
                />
                <button id="button" type="submit">
                  <div id="loader-container" class="">
                    ثبت نام
                  </div>
                </button>
              </form>
            </div>
            <div class="hidden error" />
          </div>
        </div>
        <img src={commingsoonImg} class="content-img" />
      </div>
    </div>
  );
};

export default CommingSoon;
