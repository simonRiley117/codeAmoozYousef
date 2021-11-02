import React from "react";
import UseCopyToClipboard from "@App/Hooks/UseCopyToClipboard";
import Button from "@Components/Shared/Buttons/Button";
import ico from "@Assets/Pic/coding-cuate-5352 1.png";

function SideBarDiscount() {
  const [isCopied, handleCopy] = UseCopyToClipboard(3000);
  return (
    <div className="SideBarDiscount ">
      <div className="SideBarDiscount__circleBox items-end	text-left justify-end relative	">
        <div className="SideBarDiscount__yellowCircle"></div>
        <div className="SideBarDiscount__DarkorangeCircle absolute"></div>
        <div className="SideBarDiscount__redBorder SideBarDiscount__DarkorangeCircle-redborder absolute items-center	text-center justify-center">
          <p className="SideBarDiscount__discount">40%</p>
        </div>
        <div className="SideBarDiscount__LightorangeCircle absolute"></div>
        <div className="SideBarDiscount__redBorder SideBarDiscount__LightorangeCircle-redborder absolute items-center	text-center justify-center">
          <p className="SideBarDiscount__discount">40%</p>
        </div>
      </div>
      <div className="SideBarDiscount__titleBox items-start	text-right justify-start">
        <p className="SideBarDiscount__title">
          تخفیف ویژه برای تمام
          <br /> دوره های کدآموز شروع شد!!!
        </p>
      </div>
      <div className="SideBarDiscount__discountBox flex items-center justify-between">
        <p className="SideBarDiscount__title">کد تخفیف:</p>
        <div className="SideBarDiscount__discountcode justify-center items-center text-center">
          <p>a1b2c3d4</p>
        </div>
        <Button
          ico={false}
          type="primary"
          classes="SideBarDiscount__btn"
          onClick={() => handleCopy("a1b2c3d4")}
        >
          {isCopied ? "کپی شد" : "کپی کن!"}
        </Button>
      </div>
      <div className="SideBarDiscount__timerBox">
        <div className="SideBarDiscount__timerTitle flex justify-between items-center">
          {timer.map((index, id) => (
            <p>{index}</p>
          ))}
        </div>
        <div className="SideBarDiscount__timer flex justify-between items-center">
          <p>20</p>
          <p>:</p>
          <p>45</p>
          <p>:</p>
          <p>13</p>
          <p>:</p>
          <p>12</p>
        </div>
      </div>
      <div className="SideBarDiscount__endPart flex justify-between items-center">
        <div className="SideBarDiscount__endCircleBox relative">
          <div className="SideBarDiscount__endDarkOrange"></div>
          <div className="SideBarDiscount__endYellow absolute"></div>
          <div className="SideBarDiscount__redBorder SideBarDiscount__endYellow-redborder absolute items-center	text-center justify-center">
            <p className="SideBarDiscount__discount">40%</p>
          </div>
          <div className="SideBarDiscount__endLightOrange absolute"></div>
          <div className="SideBarDiscount__smredBorder SideBarDiscount__endLightOrange-redborder absolute items-center	text-center justify-center">
            <p className="SideBarDiscount__discount">40%</p>
          </div>
        </div>
        <img src={ico} alt={ico} />
      </div>
    </div>
  );
}

export default SideBarDiscount;

const timer = ["ثانیه", "دقیقه", "ساعت", "روز"];
