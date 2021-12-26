import React, { useState, createElement, useRef } from "react";
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
import useFetch from "../../../../Context/useFetch";
import CommentReplyBox from "../../../Shared/CommentBox/CommentReplyBox";
import CommentDraftReplyBox from "../../../Shared/CommentBox/CommentDraftReplyBox";
import { toast } from "react-toastify";
import { useAuth } from "../../../../Context/authContext";
import { Popover } from "antd";
import { Skeleton } from "antd";

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

function Comment({ courseId }) {
  const [commentInfo, setCommentInfo] = useState(null);
  const [visible, setVisible] = useState(false);

  const getCommentInfo = useFetch({
    url: `CommentService`,
    params: { course_uuid: courseId },
    method: "GET",
    noHeader: true,
    setter: setCommentInfo,
  });
  const { token } = useAuth();
  const [draftCommentInfo, setDraftCommentInfo] = useState(null);
  const getDraftCommentInfo = useFetch({
    url: `CommentService/draftComments`,
    params: { course_uuid: courseId },
    method: "GET",
    trigger: token ? true : false,
    noHeader: false,
    setter: setDraftCommentInfo,
  });
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [message, setMessageForm] = useState("");
  const ref = useRef(null);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = formBox();

  const [commentPostData, setCommentPostData] = useState(null);
  const postComment = useFetch({
    url: "CommentService",
    method: "POST",
    trigger: false,
    noHeader: false,
    data: commentPostData,
    caller: getDraftCommentInfo,
    argFunc: (res) => {
      toast.success("پیام با موفقیت ثبت شد");
    },
    argErrFunc: (err) => handleError(err),
  });

  const handleError = (err) => {
    if (err?.data === "Warning! Duplicate Comment") {
      toast.error("حواست نیست!دوبار داری میفرستی");
    }
    if (err?.detail === "Given token not valid for any token type") {
      toast.error("برای ثبت نظر ابتدا وارد سایت شوید");
    }
  };
  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = (visible) => {
    setVisible(visible);
  };
  const onSubmit = (data) => {
    let formData = new FormData();

    formData.append("text", message);
    formData.append("course_uuid", courseId);
    setCommentPostData(formData);
    postComment.reFetch();
    setMessageForm("");
  };
  const onEmojiClick = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    // setInput(input + emoji);
    const cursor = ref.current.selectionStart;
    const text =
      message.slice(0, cursor) + emoji + message.slice(cursor);
    setMessageForm(text);
  };
  //   const addEmoji = (e) => {
  //     let sym = e.unified.split("-");
  //     let codesArray = [];
  //     sym.forEach((el) => codesArray.push("0x" + el));
  //     let emoji = String.fromCodePoint(...codesArray);
  //     // setInput(input + emoji);
  //     const cursor = ref.current.selectionStart;
  //     const text = message.slice(0, cursor) + emoji + message.slice(cursor);
  //     setMessageForm(text);
  //   };

  // const [openReply, setOpenReply] = useState(false)
  // const [replyIndex, setReplyIndex] = useState(-1)
  // const handleToggleReply = (index) => {
  //     // console.log('state1: ', openReply)
  //     // console.log('state2: ', openState)
  //     setOpenReply((prevState) => !prevState)
  //     setReplyIndex(index)
  // }

  return (
    <div className="AskAndAnswer relative">
      <div className="AskAndAnswer__content Comment">
        {getCommentInfo?.response
          ? commentInfo.results.map((comment, index) => (
              <CommentBox
                key={comment.uuid + index}
                uuid={comment.uuid}
                // index={index}
                draft={false}
                name={`${comment.first_name} ${comment.last_name}`}
                img={comment.user_picture}
                txt={comment.text}
                date={comment.date_created}
                pub={comment.is_accepted}
                hasReply={comment.has_reply}
                hasdDraftReply={comment.has_draft_reply}
                // handleToggleReply={handleToggleReply}
                // openReply={openReply}
              >
                {/*{comment.has_reply ? (*/}
                {/*    // toggleReply ? (*/}
                {/*    <CommentReplyBox*/}
                {/*        index={index}*/}
                {/*        replyIndex={replyIndex}*/}
                {/*        toggleReply={openReply}*/}
                {/*        commentId={comment.uuid}*/}
                {/*        pub={true}*/}
                {/*    />*/}
                {/*    // ) : null*/}
                {/*) : null}*/}

                {/*{comment.has_draft_reply ? (*/}
                {/*    // toggleReply ? (*/}
                {/*    <CommentDraftReplyBox*/}
                {/*        index={index}*/}
                {/*        replyIndex={replyIndex}*/}
                {/*        toggleReply={openReply}*/}
                {/*        commentId={comment.uuid}*/}
                {/*        pub={false}*/}
                {/*    />*/}
                {/*    // ) : null*/}
                {/*) : null}*/}
              </CommentBox>
            ))
          : <Skeleton />}
        {getDraftCommentInfo?.response
          ? draftCommentInfo.results.map((comment, index) => (
              <CommentBox
                key={comment.uuid + index + index}
                uuid={comment.uuid}
                draft={true}
                name={`${comment.first_name} ${comment.last_name}`}
                img={comment.user_picture}
                txt={comment.text}
                date={comment.date_created}
                pub={comment.is_accepted}
                hasReply={false}
              />
            ))
          : null}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="AskAndAnswer__form absolute"
      >
        <div className="input text-right ">
          <InputBase.Group style={{ bottom: "0" }} >
            <div className="flex justify-end items-center">
              <input
                value={message}
                onChange={(e) => setMessageForm(e.target.value)}
                type="text"
                name="text"
                id="input"
                placeholder="پیام خود را بنویسید..."
                className={classNames("input__field input__withborder", "AskAndAnswer__input")}
                ref={ref}
              />
            </div>
            <div>
              <Arroe
                onClick={message !== "" ? handleSubmit(onSubmit) : undefined}
                className="cursor-pointer	AskAndAnswer__sendBtn absolute"
              />
            </div>
          </InputBase.Group>
        </div>
      </form>
      <div className="absolute AskAndAnswer__emogibox">
        <Popover
          content={
            <Picker {...optionPickerEmoji} onSelect={onEmojiClick} />
          }
          title=""
          trigger="click"
          visible={visible}
          onVisibleChange={handleVisibleChange}
        >
          <img src={Smiley} alt={Smiley} className="cursor-pointer" />
        </Popover>
      </div>
    </div>
  );
}

export default Comment;

// const commen = [
//     {
//         name: "محمدامین جعفرخواه",
//         img: ico,
//         pub: true,
//         txt: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته",
//     },
//     {
//         name: "ویدا آزادی",
//         img: ico1,
//         pub: true,
//         txt: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته",
//     },
// ];
// import React, { useState, useRef } from "react";
// import Picker from "emoji-picker-react";

// export default function Comment() {
//   const [chosenEmoji, setChosenEmoji] = useState(null);
//   const [message, setMessageForm] = useState("");
//   const ref = useRef(null);
//   const onEmojiClick = (event, emojiObject) => {
//     const cursor = ref.current.selectionStart;
//     const text =
//       message.slice(0, cursor) + emojiObject.emoji + message.slice(cursor);
//     setMessageForm(text);
//   };

//   return (
//     <div>
//       {chosenEmoji ? (
//         <span>You chose: {chosenEmoji.emoji}</span>
//       ) : (
//         <span>No emoji Chosen</span>
//       )}
//       <Picker onEmojiClick={onEmojiClick} />
//       <input
//         id="text"
//         ref={ref}
//         type="text"
//         placeholder="Type your message"
//         value={message}
//         onKeyPress={(e) => {
//           if (e.key !== "Enter") return;
//           console.log(message);
//         }}
//         onChange={(e) => setMessageForm(e.target.value)}
//       />
//     </div>
//   );
// }
