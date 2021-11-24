import React from "react";
import LogoTypo from "@Assets/Pic/logoTypo.png";
import { ReactComponent as Trash } from "@Assets/Icons/Trash.svg";
import CourseLogo from "@Assets/Icons/CourseLogo.svg";
import CardProfile from "@Assets/Icons/cardProfile.png";
import { ReactComponent as ClockIcon } from "@Assets/Icons/clock.svg";
import { ReactComponent as CoinIcon } from "@Assets/Icons/Coin.svg";
import Price from "@Components/Shared/Price/Price";
import Rate from "@Components/Shared/Rate/Rate";

const Favoritesitem = () => {
  return (
    <div className="favorites-items w-full">
      <div className="flex flex-col justify-center items-center pt-20">
        <div className="logo">
          <img src={CourseLogo} />
        </div>
        <div className="typo">
          <img src={LogoTypo} />
        </div>
      </div>
      <div className="favorites-items-detail">
        <h2>دوره آنلاین برنامه نویسی HTML</h2>
        <div className="flex favorites-items-detail-content gap-8">
          <img src={CardProfile} />
          <div>
            <h6 className="text-3xl mb-4">علیرضا میرزایی فرد</h6>
            <div className="flex items-center">
              <ClockIcon />
              <span className="mr-8 text-3xl">07:13:00</span>
            </div>
            <div className="flex justify-end">
              <Price value={50000} success />
              &nbsp;
              <Price value={70000} isDiscount suffix="تومان" />
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse favorites-items-detail-btn items-center">
          <Trash />
          <a className="link link__default ml-4">افزودن به سبد خرید</a>
          <Rate />
        </div>
      </div>
    </div>
  );
};

export default Favoritesitem;
