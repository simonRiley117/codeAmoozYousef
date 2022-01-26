import React, { useState } from "react";
import { ReactComponent as Arroe } from "@Assets/Icons/Frame 28.svg";
import { useForm as formBox } from "react-hook-form";
import { Picker } from "emoji-mart";
import Smiley from "@Assets/Pic/Smiley.png";
import { Input as InputBase } from "antd";
import classNames from "classnames";
import moment from "moment";
import useFetch from "../../../../Context/useFetch";
import { toast } from "react-toastify";
import { useAuth } from "../../../../Context/authContext";
const ChatroomForm = () => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };
  return (
    <div>
      <form className="AskAndAnswer__form absolute">
        <div className="input text-right ">
          <InputBase.Group style={{ bottom: "0" }}>
            <div className="flex justify-end items-center">
              <InputBase
                type="text"
                name="text"
                id="input"
                value={input}
                placeholder="پیام خود را بنویسید..."
                className={classNames("input__field", "AskAndAnswer__input")}
              />
            </div>
            <div>
              <Arroe className="cursor-pointer	AskAndAnswer__sendBtn absolute" />
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
          onPointerMove={() => setShow(false)}
          onMouseUp={() => setShow(false)}
        />
      </div>
      {show && <Picker onSelect={addEmoji} />}
    </div>
  );
};

export default ChatroomForm;
