import React from "react";
import ico from "@Assets/Pic/coding-cuate-5352 1.png";
import UseCopyToClipboard from "@App/Hooks/UseCopyToClipboard";
import Button from "@Components/Shared/Buttons/Button";
import { useTimer } from "react-timer-hook";

function HeaderDiscount() {
  const [isCopied, handleCopy] = UseCopyToClipboard(3000);
  const time = new Date();
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ time, onExpire: () => console.warn("onExpire called") });
  function onFinish() {
    console.log("finished!");
  }
  return (
    <div className="HeaderDiscount SideBarDiscount flex items-end justify-between">
      <div className="HeaderDiscount__endCircleBox relative">
        <div className="HeaderDiscount__endDarkOrange"></div>
        <div className="HeaderDiscount__endYellow absolute"></div>
        <div className="HeaderDiscount__redBorderbig HeaderDiscount__endYellow-redborder absolute items-center text-center justify-center">
          <p className="HeaderDiscount__discount">40%</p>
        </div>
        <div className="HeaderDiscount__endLightOrange absolute"></div>
        <div className="HeaderDiscount__midredBorder HeaderDiscount__endLightOrange-redborder absolute items-center	text-center justify-center">
          <p className="HeaderDiscount__discount">40%</p>
        </div>
      </div>
      <div className="w-10/12 sm:w-full	">
        <div className="HeaderDiscount__titleBox items-start text-right justify-start">
          <p className="HeaderDiscount__title">
            تخفیف ویژه برای تمام دوره های کدآموز شروع شد!!!
          </p>
        </div>
        <div className="flex  items-center justify-center HeaderDiscount__midPart">
          <div className="HeaderDiscount__timerBox">
            <div className="SideBarDiscount__timerTitle flex justify-between items-center">
              {timer.map((index, id) => (
                <p>{index}</p>
              ))}
            </div>
            <div className="SideBarDiscount__timer flex justify-between items-center">
              <p>{seconds}</p>
              <p>:</p>
              <p>{minutes}</p>
              <p>:</p>
              <p>{hours}</p>
              <p>:</p>
              <p> {days}</p>
            </div>
          </div>
          <div className="SideBarDiscount__discountBox flex items-start justify-between">
            <p className="SideBarDiscount__title">کد تخفیف:</p>
            <div className="HeaderDiscount__discountBox">
              <div className="SideBarDiscount__discountcode justify-center items-center text-center">
                <p>a1b2c3d4</p>
              </div>
              <Button
                type="primary"
                classes="SideBarDiscount__btn"
                onClick={() => handleCopy("a1b2c3d4")}
              >
                {isCopied ? "کپی شد" : "کپی کن!"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="HeaderDiscount__imgbox">
          <img src={ico} alt={ico} className="HeaderDiscount__img" />
        </div>
        <div className="HeaderDiscount__circleBox items-end text-end justify-end relative">
          <div className="SideBarDiscount__yellowCircle"></div>
          <div className="SideBarDiscount__DarkorangeCircle absolute"></div>
          <div className="SideBarDiscount__redBorder SideBarDiscount__DarkorangeCircle-redborder absolute items-center	text-center justify-center">
            <p className="HeaderDiscount__discount">40%</p>
          </div>
          <div className="HeaderDiscount__LightorangeCircle absolute"></div>
          <div className="SideBarDiscount__redBorder HeaderDiscount__LightorangeCircle-redborder absolute items-center	text-center justify-center">
            <p className="HeaderDiscount__discount">40%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderDiscount;
const timer = ["ثانیه", "دقیقه", "ساعت", "روز"];
