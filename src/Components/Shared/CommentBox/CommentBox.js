import React, {useEffect, useState} from "react";
import moment from "moment";
import {Comment as Comments} from "antd";
import {Tooltip, Avatar} from "antd";
import {useAuth} from "../../../Context/authContext";

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
        handleToggleReply,
        index,
        openReply
    }) {

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
                        <span key={`comment-nested-reply-to_${uuid}_1`}>{!draft && 'Reply to'} </span>
                        <span
                            onClick={() => {
                                handleToggleReply(index)
                            }}
                            key={`comment-nested-reply-to_${uuid}_2`}
                        >
                            {hasReply && 'Show Answer'}
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
                {children}
            </Comments>
        </div>
    );
}

export default CommentBox;
