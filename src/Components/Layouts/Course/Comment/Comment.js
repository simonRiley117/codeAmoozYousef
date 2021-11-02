import React, { useState, createElement } from "react";
import { ReactComponent as Arroe } from "@Assets/Icons/Frame 28.svg";
import { useForm as formBox } from "react-hook-form";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import Smiley from "@Assets/Pic/Smiley.png";
import { Input as InputBase } from "antd";
import classNames from "classnames";
import CommentBox from "@Components/Shared/CommentBox/CommentBox";
import ico from "@Assets/Pic/avatar.png";
import ico1 from "@Assets/Pic/avatar1.png";
function Comment() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [date, setDate] = useState(new Date());
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = formBox();
  const onSubmit = (e) => {
    if (input === "") {
      // setError(true);
    } else {
      setData([
        ...data,
        { txt: input, date: date, img: ico, name: "محمدامین جعفرخواه" },
      ]);
      setInput("");
      // setError(false);
    }
  };

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  return (
    <div className="AskAndAnswer relative">
      <div className="AskAndAnswer__content Comment">
        <CommentBox
          name={commen[0].name}
          img={commen[0].img}
          txt={commen[0].txt}
          pub={commen[0].pub}
        >
          <CommentBox
            name={commen[1].name}
            img={commen[1].img}
            txt={commen[1].txt}
            pub={commen[1].pub}
          />
        </CommentBox>
        {data.length !== 0 &&
          data.map((index) => (
            <CommentBox
              name={index.name}
              img={index.img}
              txt={index.txt}
              pub={false}
            />
          ))}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="AskAndAnswer__form absolute"
      >
        <div className="input text-right ">
          <InputBase.Group style={{ bottom: "0" }}>
            <div className="flex justify-end items-center">
              <InputBase.TextArea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                name="txt"
                id="input"
                placeholder="پیام خود را بنویسید..."
                className={classNames("input__field", "AskAndAnswer__input")}
                autoSize={{ minRows: 1, maxRows: 2 }}
              />
            </div>
            <div>
              <Arroe
                onClick={input !== "" && handleSubmit(onSubmit)}
                className="cursor-pointer	AskAndAnswer__sendBtn absolute"
              />
            </div>
          </InputBase.Group>
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

export default Comment;

const commen = [
  {
    name: "محمدامین جعفرخواه",
    img: ico,
    pub: true,
    txt: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته",
  },
  {
    name: "ویدا آزادی",
    img: ico1,
    pub: true,
    txt: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته",
  },
];
