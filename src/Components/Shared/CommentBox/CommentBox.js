import React, { useEffect, useState, useRef } from "react";
import moment from "moment";
import { Comment as Comments } from "antd";
import { Tooltip, Avatar } from "antd";
import { useAuth } from "../../../Context/authContext";
import CommentReplyBox from "./CommentReplyBox";
import CommentDraftReplyBox from "./CommentDraftReplyBox";
import { Input, Dropdown } from "antd";
import { useController, useForm } from "react-hook-form";
import { Picker } from "emoji-mart";
import IconBtn from "@Components/Shared/Buttons/IconBtn";
import { ReactComponent as SendIcon } from "@Assets/Icons/Frame 28.svg";
import { ReactComponent as EmojiIcon } from "@Assets/Icons/Smiley.svg";
import useFetch from "../../../Context/useFetch";

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

function CommentBox({
  uuid,
  children,
  name,
  img,
  txt,
  date,
  pub,
  draft,
  hasReply,
  hasdDraftReply,
  setEdits,
  watch, // handleToggleReply,
  // index,
  // openReply
}) {
  const { token } = useAuth();
  const [openReply, setOpenReply] = useState(false);
  const [edit, setEdit] = useState("");
  const handleToggleReply = () => {
    setOpenReply((prevState) => !prevState);
  };
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues: {},
  });
  const [commentPostData, setCommentPostData] = useState(null);

  const onSubmit = (data) => {
    let formData = new FormData();
    formData.append("text", data.message);
    // formData.append("uuid", uuid);
    setCommentPostData(formData);
    postComment.reFetch();
  };
  const postComment = useFetch({
    url: `CommentService/${uuid}`,
    method: "PUT",
    trigger: false,
    noHeader: false,
    data: commentPostData,
    func: () =>
      reset({
        message: "",
      }),

    message: "پیام با موفقیت ویرایش شد",
    argFunc: (res) => {
      setEdit("");
      setEdits((perv) => !perv);
    },
  });
  const deleteComment = useFetch({
    url: `CommentService/${uuid}`,
    method: "DELETE",
    trigger: false,
    noHeader: false,
    message: "پیام با موفقیت حذف شد",
    argFunc: (res) => {
      setEdit("");
      setEdits((perv) => !perv);
    },
  });

  const messageRef = useRef(null);
  const [showEmoji, setShowEmoji] = useState(false);
  // const [replayState, setReplyState] = useState(openReply) // false=close true=open
  //
  // useEffect(() => {
  //     setReplyState((prevState) => !prevState)
  // }, [replayState]);
  const handleEdit = (idd) => {
    setEdit(idd);
  };
  const {
    field: { ref, ...restField },
  } = useController({
    name: "message",
    control,
    rules: { required: true },
    defaultValue: "",
  });
  const onEmojiClick = ({ native }) => {
    const message = watch("message");
    const { selectionStart: cursor } =
      messageRef.current.resizableTextArea.textArea;
    const text = message.slice(0, cursor) + native + message.slice(cursor);
  };

  const handleShowEmojiPanel = (visible) => {
    setShowEmoji(visible);
  };
  const renderEmojiPanel = () => (
    <Picker {...optionPickerEmoji} onSelect={onEmojiClick} />
  );
  const handleDelet = (idd) => {
    deleteComment.reFetch();
  };
  return (
    <div className="CommentBox">
      <Comments
        actions={[
          <div
            key={`comment-nested-reply-to_${uuid}_0`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "0 1rem",
            }}
          >
            {!pub && (
              <div className=" flex items-center ">
                <p className=" cursor-pointer" onClick={() => handleEdit(uuid)}>
                  ویرایش
                </p>
                <p
                  className=" cursor-pointer mr-8"
                  onClick={() => handleDelet(uuid)}
                >
                  حذف
                </p>
              </div>
            )}

            <span key={`comment-nested-reply-to_${uuid}_1`}>
              {!draft && token && "پاسخ به"}{" "}
            </span>
            <span
              onClick={() => {
                handleToggleReply();
              }}
              key={`comment-nested-reply-to_${uuid}_2`}
            >
              {hasReply && (openReply ? "مخفی کردن پاسخ ها" : "نمایش پاسخ ها")}
            </span>
          </div>,
        ]}
        author={
          pub ? (
            <a>{name}</a>
          ) : (
            <div className="flex items-center CommentBox__draft">
              <a>{name}</a> <p>در انتظار تایید برای انتشار</p>
            </div>
          )
        }
        avatar={img}
        datetime={<span>{moment(date).format("YYYY/MM/DD ")}</span>}
        content={
          edit === uuid ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="AskAndAnswer__form"
            >
              <div className="AskAndAnswer__form--input">
                <div className="AskAndAnswer__form--action">
                  <IconBtn
                    htmlType="submit"
                    icon={<SendIcon />}
                    title="ارسال"
                  />
                </div>
                <Input.TextArea
                  placeholder="پیام خود را بنویسید..."
                  autoSize={{ minRows: 1, maxRows: 1 }}
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
          ) : (
            <p className="leading-9">{txt}</p>
          )
        }
      >
        {/*{children}*/}

        {hasReply ? (
          // toggleReply ? (
          <CommentReplyBox
            // index={index}
            // replyIndex={replyIndex}
            toggleReply={openReply}
            commentId={uuid}
            pub={true}
          />
        ) : // ) : null
        null}

        {hasdDraftReply ? (
          // toggleReply ? (
          <CommentDraftReplyBox
            // index={index}
            // replyIndex={replyIndex}
            toggleReply={openReply}
            commentId={uuid}
            pub={false}
          />
        ) : // ) : null
        null}
      </Comments>
    </div>
  );
}

export default CommentBox;
