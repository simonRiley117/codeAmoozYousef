import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "@App/Context/authContext";
import { useController, useForm } from "react-hook-form";
import { Input, Dropdown } from "antd";
import { Picker } from "emoji-mart";
import IconBtn from "@Components/Shared/Buttons/IconBtn";

// Assets
import { ReactComponent as SendIcon } from "@Assets/Icons/Frame 28.svg";
import { ReactComponent as EmojiIcon } from "@Assets/Icons/Smiley.svg";

const optionPickerEmoji = {
  showPreview: false,
  showSkinTones: false,
  set: "apple",
  i18n: {
    search: "جستجو",
    clear: "پاک کردن", // Accessible label on "clear" button
    notfound: "ایموجی پیدا نشد",
    categories: {
      search: "نتایج جستجو",
      recent: "اخیرا",
      smileys: "شکلک ها و احساسات",
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

const CommentInput = ({
  onSetDate,
  control,
  watch,
  setValue,
  handleSubmit,
}) => {
  const { token } = useAuth();
  const messageRef = useRef(null);
  const [showEmoji, setShowEmoji] = useState(false);

  // form
  const {
    field: { ref, ...restField },
  } = useController({
    name: "message",
    control,
    rules: { required: true },
    defaultValue: "",
  });

  const onSubmit = (data) => {
    if (!token) {
      toast.error("برای پرسش سوال ابتدا وارد سایت شوید");
    } else {
      onSetDate(data);
    }
  };

  const onEmojiClick = ({ native }) => {
    const message = watch("message");
    const { selectionStart: cursor } =
      messageRef.current.resizableTextArea.textArea;
    const text = message.slice(0, cursor) + native + message.slice(cursor);

    setValue("message", text);
  };

  const handleShowEmojiPanel = (visible) => {
    setShowEmoji(visible);
  };
  const renderEmojiPanel = () => (
    <Picker {...optionPickerEmoji} onSelect={onEmojiClick} />
  );
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="AskAndAnswer__form">
        <div className="AskAndAnswer__form--input">
          <div className="AskAndAnswer__form--action">
            <IconBtn htmlType="submit" icon={<SendIcon />} title="ارسال" />
          </div>
          <Input.TextArea
            placeholder="پیام خود را بنویسید..."
            autoSize={{ minRows: 1, maxRows: 2 }}
            allowClear
            bordered={false}
            ref={(e) => {
              messageRef.current = e;
              return ref(e);
            }}
            {...restField}
          />
		 
          <div className="AskAndAnswer__form--action">
            <Dropdown
              overlay={renderEmojiPanel}
              // title=''
              arrow
              placement="topCenter"
              overlayClassName="AskAndAnswer__form--emoji"
              trigger={["click"]}
              visible={showEmoji}
              onVisibleChange={handleShowEmojiPanel}
            >
              <div>
                <IconBtn icon={<EmojiIcon />} title="ایموجی" id="emoji" />
              </div>
            </Dropdown>
          </div>
        </div>
      </form>
    </>
  );
};
export default CommentInput;
