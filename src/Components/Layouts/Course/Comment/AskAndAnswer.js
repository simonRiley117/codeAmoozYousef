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
  const [data, setData] = useState();
  const [input, setInput] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = formBox();
  const onSubmit = (data) => {
      console.log(`object`, data)
  };

  //   const onEmojiClick = (event, emojiObject) => {
  //     setChosenEmoji(emojiObject);
  //     setData(chosenEmoji data + );
  //   };
  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };
  console.log(`input`, input);
  return (
    <div className="AskAndAnswer relative">
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
            placeholder="پیام خود را بنویسید..."
            className={classNames("input__field", "AskAndAnswer__input")}
            prefix={<Arroe />}
          />
        </div>
      </form>
      <div className="absolute AskAndAnswer__emogibox">
        {chosenEmoji ? (
          <span onClick={() => setShow(!show)}>{chosenEmoji.emoji}</span>
        ) : (
          <img
            src={Smiley}
            alt={Smiley}
            className="cursor-pointer"
            onClick={() => setShow(!show)}
          />
        )}
      </div>
      {show && (
        // <Picker
        //   onEmojiClick={onEmojiClick}
        //   preload={false}
        //   className="AskAndAnswer__picker absolute"
        // />
        <Picker onSelect={addEmoji} />
      )}
    </div>
  );
}

export default AskAndAnswer;
