import React, {useState, createElement} from "react";
import {ReactComponent as Arroe} from "@Assets/Icons/Frame 28.svg";
import {useForm as formBox} from "react-hook-form";
import {Picker} from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import Smiley from "@Assets/Pic/Smiley.png";
import {Input as InputBase} from "antd";
import classNames from "classnames";
import CommentBox from "@Components/Shared/CommentBox/CommentBox";
import ico from "@Assets/Pic/avatar.png";
import ico1 from "@Assets/Pic/avatar1.png";
import useFetch from "../../../../Context/useFetch";
import CommentReplyBox from "../../../Shared/CommentBox/CommentReplyBox";
import CommentDraftReplyBox from "../../../Shared/CommentBox/CommentDraftReplyBox";
import {toast} from "react-toastify";
import {useAuth} from "../../../../Context/authContext";

function Comment({courseId}) {
    const [commentInfo, setCommentInfo] = useState(null);

    const getCommentInfo = useFetch({
        url: `CommentService`,
        params: {course_uuid: courseId},
        method: "GET",
        noHeader: true,
        setter: setCommentInfo,
    });
    const {token} = useAuth();
    const [draftCommentInfo, setDraftCommentInfo] = useState(null);
    const getDraftCommentInfo = useFetch({
        url: `CommentService/draftComments`,
        params: {course_uuid: courseId},
        method: "GET",
        trigger: token ? true : false,
        noHeader: false,
        setter: setDraftCommentInfo,
    });

    const {
        handleSubmit,
        control,
        formState: {errors},
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

    const onSubmit = (data) => {
        let formData = new FormData();

        formData.append("text", input);
        formData.append("course_uuid", courseId);
        setCommentPostData(formData);
        postComment.reFetch();
        setInput("");
    };

    const [show, setShow] = useState(false);
    const [input, setInput] = useState("");
    const addEmoji = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
    };

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
                    : null}
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
                    <InputBase.Group style={{bottom: "0"}}>
                        <div className="flex justify-end items-center">
                            <InputBase
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                type="text"
                                name="text"
                                id="input"
                                placeholder="پیام خود را بنویسید..."
                                className={classNames("input__field", "AskAndAnswer__input")}
                                onClick={() => setShow(false)}
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
                <img
                    src={Smiley}
                    alt={Smiley}
                    className="cursor-pointer"
                    onClick={() => setShow(!show)}
                />
            </div>
            {show && <Picker onSelect={addEmoji}/>}
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
