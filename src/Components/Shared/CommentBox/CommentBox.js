import React from "react";
import moment from "moment";
import { Comment as Comments } from "antd";
import { Tooltip, Avatar } from "antd";

function CommentBox({ children, name, img, txt, pub }) {
  return (
    <div className="CommentBox">
      <Comments
        actions={[<span key="comment-nested-reply-to">Reply to</span>]}
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
        datetime={<span>{moment().format("YYYY/MM/DD ")}</span>}
        content={<p className="leading-9">{txt}</p>}
      >
        {children}
      </Comments>
    </div>
  );
}

export default CommentBox;
