import React, {useEffect, useState} from "react";
import moment from "moment";
import {Comment as Comments} from "antd";
import {Tooltip, Avatar} from "antd";
import {useAuth} from "../../../Context/authContext";
import CommentReplyBox from "./CommentReplyBox";
import CommentDraftReplyBox from "./CommentDraftReplyBox";

function CommentBox(
    {
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
        // handleToggleReply,
        // index,
        // openReply
    }) {

    const [openReply, setOpenReply] = useState(false)
    const handleToggleReply = () => {
        setOpenReply((prevState) => !prevState)
    }

    // const [replayState, setReplyState] = useState(openReply) // false=close true=open
    //
    // useEffect(() => {
    //     setReplyState((prevState) => !prevState)
    // }, [replayState]);

    return (
        <div className="CommentBox">
            <Comments
                actions={[
                    <div key={`comment-nested-reply-to_${uuid}_0`}
                         style={{
                             display: 'flex',
                             alignItems: 'center',
                             justifyContent: 'space-between',
                             margin: '0 1rem'
                         }}>
                        <span key={`comment-nested-reply-to_${uuid}_1`}>{!draft && 'پاسخ به'} </span>
                        <span
                            onClick={() => {
                                handleToggleReply()
                            }}
                            key={`comment-nested-reply-to_${uuid}_2`}
                        >
                            {hasReply && (openReply ? 'مخفی کردن پاسخ ها' : 'نمایش پاسخ ها')}
                        </span>
                    </div>
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
                content={<p className="leading-9">{txt}</p>}
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
                    // ) : null
                ) : null}

                {hasdDraftReply ? (
                    // toggleReply ? (
                    <CommentDraftReplyBox
                        // index={index}
                        // replyIndex={replyIndex}
                        toggleReply={openReply}
                        commentId={uuid}
                        pub={false}
                    />
                    // ) : null
                ) : null}
            </Comments>
        </div>
    );
}

export default CommentBox;
