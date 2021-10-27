import React, { useState } from "react";
import { ReactComponent as Arroe } from "@Assets/Icons/Frame 28.svg";
import Input from "@Components/Shared/Inputs/Input";
import { useForm as formBox } from "react-hook-form";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import Smiley from "@Assets/Pic/Smiley.png";
import { Input as InputBase } from "antd";
import { Controller } from "react-hook-form";
import classNames from "classnames";

function AskAndAnswer() {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [answer, setAnswer] = useState([
    {
      id: 1,
      txt: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    },
  ]);
  const [input, setInput] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = formBox();
  const onSubmit = (e) => {
    setData([...data, input]);
    setInput("");
  };
  console.log(`object`, data);

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  return (
    <div className="AskAndAnswer relative">
      <div className="AskAndAnswer__content">
        {data.length === 0 ? (
          <div className="items-center absolute AskAndAnswer__emptyBox ">
            <p className=" ">
              سوالاتتان را در این بخش با استاد این دوره مطرح کنید.
            </p>
          </div>
        ) : (
          <div className="AskAndAnswer__contentBox">
            {data.map((index, arr) => (
              <div>
                <div className="AskAndAnswer__askBox flex-col items-start">
                  <span>شما </span>
                  <p>{index}</p>
                </div>
                {answer.map(
                  (item) =>
                    item.id === arr && (
                      <div className="AskAndAnswer__answareBox ">
                        <div className="AskAndAnswer__answare flex-col items-end">
                          {" "}
                          <span>استاد </span>
                          <p> {item.txt}</p>
                        </div>
                      </div>
                    )
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="AskAndAnswer__form absolute"
      >
        <div className="input text-right ">
          <InputBase
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name="txt"
            id="input"
            placeholder="پیام خود را بنویسید..."
            className={classNames("input__field", "AskAndAnswer__input")}
            prefix={
              <Arroe
                onClick={handleSubmit(onSubmit)}
                className="cursor-pointer	"
              />
            }
          />
        </div>
      </form>
      <div className="absolute AskAndAnswer__emogibox">
        <img
          src={Smiley}
          alt={Smiley}
          className="cursor-pointer"
          onClick={() => setShow(!show)}
        />
      </div>
      {show && <Picker onSelect={addEmoji} />}
    </div>
  );
}

export default AskAndAnswer;
