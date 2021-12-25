import React, { useState, useRef } from "react";
import { ReactComponent as Arroe } from "@Assets/Icons/Frame 28.svg";
import { useForm as formBox } from "react-hook-form";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import Smiley from "@Assets/Pic/Smiley.png";
import { Input as InputBase } from "antd";
import classNames from "classnames";
import moment from "moment";
import useFetch from "../../../../Context/useFetch";
import { toast } from "react-toastify";
import { useAuth } from "../../../../Context/authContext";
import { Popover } from "antd";

const optionPickerEmoji = {
  showPreview: false,
  showSkinTones: false,
  // emoji: {emojiData},
  i18n: {
    search: "جستجو",
    clear: "پاک کردن", // Accessible label on "clear" button
    notfound: "ایموجی پیدا نشد",
    categories: {
      search: "نتایج جستجو",
      recent: "اخیرا",
      smileys: "Smileys & Emotion",
      people: "شکلک‌ها و مردم",
      nature: "حیوانات و طبیعت",
      foods: "غذا و نوشیدنی",
      activity: "فعالیت‌ها",
      places: "سفرومکان‌ها",
      objects: "اشیاء",
      symbols: "نمادها",
      flags: "پرچم‌ها",
    },
  },
};

function AskAndAnswer({ courseId }) {
  const { token } = useAuth();
  const [messageInfo, setMessageInfo] = useState(null);
  const [visible, setVisible] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [message, setMessageForm] = useState("");
  const ref = useRef(null);
  const setMessageData = (data) => {
    setMessageInfo(data);
  };
  const getMessageInfo = useFetch({
    url: `QuestionService/user_get`,
    params: { course_uuid: courseId },
    method: "GET",
    trigger: token ? true : false,
    noHeader: false,
    setter: setMessageData,
  });
  console.log("messageInfo: ", messageInfo);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = formBox();
  const [messagePostData, setMessagePostData] = useState(null);
  const postMessage = useFetch({
    url: "QuestionMessageService/user_create",
    method: "POST",
    trigger: false,
    noHeader: false,
    data: messagePostData,
    caller: getMessageInfo,
    message: "پیام با موفقیت ثبت شد",
  });
  const onSubmit = (data) => {
    let formData = new FormData();
    formData.append("question_message", input);
    formData.append("course_uuid", courseId);
    setMessagePostData(formData);
    postMessage.reFetch();
    console.log("postMessage: ", postMessage);
    console.log("postMessage.error: ", postMessage.error);
    // console.log('postComment.error: ', postComment.error.response.status)
    if (!token) {
      toast.error("برای پرسش سوال ابتدا وارد سایت شوید");
    }
    // console.log('formData: ', formData)
    setInput("");
    // console.log('input: ', input)
  };

  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const onEmojiClick = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    // setInput(input + emoji);
    const cursor = ref.current.selectionStart;
    const text = message.slice(0, cursor) + emoji + message.slice(cursor);
    setMessageForm(text);
  };
  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = (visible) => {
    setVisible(visible);
  };
  return (
    <div className="AskAndAnswer relative">
      {messageInfo ? (
        <div className="AskAndAnswer__content">
          {messageInfo.messages.length === 0 ? (
            <div className="items-center absolute AskAndAnswer__emptyBox ">
              <p className=" ">
                سوالاتتان را در این بخش با استاد این دوره مطرح کنید.
              </p>
            </div>
          ) : (
            messageInfo.messages.map((message, index) =>
              !message.is_teacher_send ? (
                <div className="AskAndAnswer__contentBox">
                  <div>
                    <div className="AskAndAnswer__askBox flex-col items-start">
                      <span>شما </span>
                      <p>{message.question_message}</p>
                    </div>
                    <div className="flex justify-end items-center w-4/5 AskAndAnswer__TimeBox-ask AskAndAnswer__TimeBox">
                      <p>{moment(message.date).format("YYYY/MM/DD")}</p>
                      <p>{message.time}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="AskAndAnswer__answareBox ">
                  <div className="AskAndAnswer__answare flex-col items-start">
                    {" "}
                    <span>استاد </span>
                    <p>{message.question_message}</p>
                  </div>
                  <div className="flex justify-end items-center w-4/5 AskAndAnswer__TimeBox-answer AskAndAnswer__TimeBox">
                    <p>{message.time}</p>
                    <p>{moment(message.date).format("YYYY/MM/DD")}</p>
                  </div>
                </div>
              )
            )
          )}
        </div>
      ) : null}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="AskAndAnswer__form absolute"
      >
        <div className="input text-right ">
          <InputBase.Group style={{ bottom: "0" }}>
            <div className="flex justify-end items-center">
              <input
                value={message}
                onChange={(e) => setMessageForm(e.target.value)}
                type="text"
                name="text"
                id="input"
                placeholder="پیام خود را بنویسید..."
                className={classNames(
                  "input__field input__withborder",
                  "AskAndAnswer__input"
                )}
                ref={ref}
              />
            </div>
            <div>
              <Arroe
                onClick={input !== "" ? handleSubmit(onSubmit) : undefined}
                className="cursor-pointer	AskAndAnswer__sendBtn absolute"
              />
            </div>
          </InputBase.Group>
        </div>
      </form>
      <div className="absolute AskAndAnswer__emogibox">
        <Popover
          content={<Picker {...optionPickerEmoji} onSelect={onEmojiClick} />}
          title=""
          trigger="click"
          visible={visible}
          onVisibleChange={handleVisibleChange}
        >
          <img
            src={Smiley}
            alt={Smiley}
            className="cursor-pointer"
            onClick={() => setShow(!show)}
            onPointerMove={() => setShow(false)}
            onMouseUp={() => setShow(false)}
          />{" "}
        </Popover>
      </div>
      {/* {show && <Picker {...optionPickerEmoji} onSelect={addEmoji} />} */}
    </div>
  );
}

export default AskAndAnswer;
