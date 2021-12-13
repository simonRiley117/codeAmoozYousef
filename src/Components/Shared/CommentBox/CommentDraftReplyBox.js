import React, {useEffect, useState} from "react";
import moment from "moment";
import {Comment as Comments} from "antd";
import {Tooltip, Avatar} from "antd";
import useFetch from "../../../Context/useFetch";

function CommentDraftReplyBox(
    {
        children,
        name,
        img,
        txt,
        date,
        pub,
        commentId,
        toggleReply,
        // index,
        // replyIndex
    }) {
    console.log('commentId: ', commentId)
    const [replyInfo, setReplyInfo] = useState(null);
    // const [replyLoading, setReplyLoading] = useState(true);

    const setReplyData = (data) => {
        setReplyInfo(data);
        // setReplyLoading(false);
    }

    const getReplyInfo = useFetch({
        url: `ReplyCommentService/draftReplies`,
        params: {comment_uuid: commentId},
        method: 'GET',
        noHeader: false,
        trigger: false,
        setter: setReplyData,
    });
    // console.log('replyInfo: ', replyInfo)

    // const [singleFetch, setSingleFetch] = useState(true)
    console.log('DrafttoggleReply: ', toggleReply)
    useEffect(() => {
        if (toggleReply) {
            getReplyInfo.reFetch()
            // setSingleFetch(false)
        }
    }, [toggleReply]);

    return (
        <>
            {getReplyInfo?.response ? (
                toggleReply ?
                    <div className="CommentBox">
                        {replyInfo.results.map((reply) => (
                            // console.log('reply: ', reply)
                            <Comments
                                key={reply.uuid}
                                author={
                                    pub ? (
                                        <a>{`${reply.first_name} ${reply.last_name}`}</a>
                                    ) : (
                                        <div className="flex items-center CommentBox__draft">
                                            <a>{`${reply.first_name} ${reply.last_name}`}</a> <p>در انتظار تایید برای
                                            انتشار</p>
                                        </div>
                                    )
                                }
                                avatar={reply.user_picture}
                                datetime={<span>{moment(reply.date_created).format("YYYY/MM/DD ")}</span>}
                                content={<p className="leading-9">{reply.text}</p>}
                            >
                            </Comments>
                        ))}
                    </div> : null
            ) : null}
        </>
    );
}

export default CommentDraftReplyBox;
