import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import CommentBox from '@Components/Shared/CommentBox/CommentBox';
import useFetch from '../../../../Context/useFetch';
import { toast } from 'react-toastify';
import { useAuth } from '../../../../Context/authContext';
import { Skeleton } from 'antd';
import Button from '@Components/Shared/Buttons/Button';
import NoCommentImage from '../../../../Assets/Images/Pic/empthyChat.svg';
import CommentInput from './CommentInput';

function Comment({ courseId }) {
	const [commentInfo, setCommentInfo] = useState(null);
	const [commentList, setcommentList] = useState([]);
	const [pageSize, setPageSize] = useState(0);
	const [draftCommentInfo, setDraftCommentInfo] = useState(null);
	const [more, setMore] = useState(3);
	const [pagination, setpagination] = useState({
		current: 1,
	});
	const setComment = (data) => {
		setcommentList((currentArray) => [...currentArray, ...data.results]);
	};
	const getCommentInfo = useFetch({
		url: `CommentService`,
		params: { course_uuid: courseId },
		method: 'GET',
		noHeader: true,
		trigger: false,
		setter: setCommentInfo,
		pagination: pagination,
		argFunc: (res) => {
			setComment(res);
			setPageSize(res.page_size);
		},
	});
	useEffect(() => {
		getCommentInfo.reFetch();
		// getDraftCommentInfo.reFetch();
	}, [pagination]);

	const handlePagination = () => {
		setpagination({ ...pagination, current: pagination.current + 1 });
	};
	const { reset, ...othersMethod } = useForm();

	const { token } = useAuth();
	const getDraftCommentInfo = useFetch({
		url: `CommentService/draftComments`,
		pagination: pagination,
		params: { course_uuid: courseId },
		method: 'GET',
		trigger: token ? true : false,
		noHeader: false,
		setter: setDraftCommentInfo,
	});

	const [commentPostData, setCommentPostData] = useState(null);
	const postComment = useFetch({
		url: 'CommentService',
		method: 'POST',
		trigger: false,
		noHeader: false,
		data: commentPostData,
		caller: getDraftCommentInfo,
		func: () =>
			reset({
				message: '',
			}),
		message: 'پیام با موفقیت ثبت شد',

		argErrFunc: (err) => handleError(err),
	});

	const handleError = (err) => {
		if (err?.data === 'Warning! Duplicate Comment') {
			toast.error('حواست نیست!دوبار داری میفرستی');
		}
		if (err?.detail === 'Given token not valid for any token type') {
			toast.error('برای ثبت نظر ابتدا وارد سایت شوید');
		}
	};

	const handleSetMessage = (data) => {
		let formData = new FormData();
		formData.append('text', data.message);
		formData.append('course_uuid', courseId);
		setCommentPostData(formData);
		postComment.reFetch();
	};

	const handleMore = () => {
		setMore(more + draftCommentInfo?.page_size);
	};
	return (
		<div className='AskAndAnswer flex flex-col relative'>
			<div
				className={`AskAndAnswer__content Comment ${
					((draftCommentInfo === null && commentList.length === 0) ||
						(commentList.length === 0 &&
							draftCommentInfo.results.length === 0)) &&
					!getCommentInfo.loading
						? 'flex'
						: null
				} `}
			>
				{getCommentInfo?.response ? (
					<>
						{commentList.length !== 0 &&
							commentList.map(
								(comment, index) =>
									index < more && (
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
											style={
												index === pageSize - 1 && {
													borderBottom: 'none',
												}
											}
										></CommentBox>
									)
							)}
						{commentList.length !== 0 && more < commentList?.page_size && (
							<div className='center my-8'>
								<Button onClick={handleMore}>نمایش بیشتر نظرات</Button>
							</div>
						)}
						{commentList.length !== 0 && (
							<div className='center my-8'>
								{pagination.current < commentInfo?.page_count && (
									<Button onClick={handlePagination}>
										نمایش بیشتر نظرات
									</Button>
								)}
							</div>
						)}
					</>
				) : (
					<Skeleton />
				)}

				{getDraftCommentInfo?.response ? (
					<>
						{draftCommentInfo.length !== 0 &&
							draftCommentInfo.results.map(
								(comment, index) =>
									index < more && (
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
											style={
												index === pageSize - 1 && {
													borderBottom: 'none',
												}
											}
										/>
									)
							)}
						{draftCommentInfo.length !== 0 &&
							more < draftCommentInfo?.page_size && (
								<div className='center my-8'>
									<Button onClick={handleMore}>
										نمایش بیشتر نظرات
									</Button>
								</div>
							)}
						{draftCommentInfo.length !== 0 && (
							<div className='center my-8'>
								{pagination.current < draftCommentInfo?.page_count && (
									<Button onClick={handlePagination}>
										نمایش بیشتر نظرات
									</Button>
								)}
							</div>
						)}
					</>
				) : null}
				{(draftCommentInfo === null && commentList.length === 0) ||
				(commentList.length === 0 &&
					draftCommentInfo.results.length === 0) ? (
					<div className='center empty__chat '>
						<img src={NoCommentImage} alt='NoCommentImage' />
					</div>
				) : null}
			</div>

			<CommentInput onSetDate={handleSetMessage} {...othersMethod} />
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
