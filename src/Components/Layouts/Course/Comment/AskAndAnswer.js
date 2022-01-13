import React, { useState, useRef } from 'react';
import moment from 'moment';
import useFetch from '@App/Context/useFetch';
import { toast } from 'react-toastify';
import { useAuth } from '@App/Context/authContext';
import NoCommentImage from '@Assets/Pic/empthyChat.svg';
import CommentInput from './CommentInput';
import { useForm } from 'react-hook-form';

function AskAndAnswer({ courseId, has_user_course }) {
	const { token } = useAuth();
	const [messageInfo, setMessageInfo] = useState(null);
	const [messagePostData, setMessagePostData] = useState(null);
	const setMessageData = (data) => {
		setMessageInfo(data);
	};
	const { reset, ...othersMethod } = useForm();

	const handleSetMessage = (data) => {
		let formData = new FormData();
		formData.append('question_message', data.message);
		formData.append('course_uuid', courseId);
		setMessagePostData(formData);
		postMessage.reFetch();
	};
	const getMessageInfo = useFetch({
		url: `QuestionService/user_get`,
		params: { course_uuid: courseId },
		method: 'GET',
		trigger: token && has_user_course ? true : false,
		noHeader: false,
		setter: setMessageData,
	});
	// console.log("messageInfo: ", messageInfo);

	const postMessage = useFetch({
		url: 'QuestionMessageService/user_create',
		method: 'POST',
		trigger: false,
		noHeader: false,
		data: messagePostData,
		caller: getMessageInfo,
		func: () =>
			reset({
				message: '',
			}),
		message: 'پیام با موفقیت ثبت شد',
		argErrFunc: (err) => handleError(err),
	});

	const handleError = (err) => {
		if (
			err?.detail === 'You do not have permission to perform this action.'
		) {
			toast.error('شما در دوره ثبت نام نکردی');
		}
	};

	return (
		<div className='AskAndAnswer flex flex-col	 relative'>
			{/* {token ?getMessageInfo?.response ? : <Skeleton />  : } */}
			{messageInfo ? (
				<div className='AskAndAnswer__content'>
					{messageInfo.messages.length === 0 ? (
						<div className='items-center absolute AskAndAnswer__emptyBox '>
							<p className=' '>
								سوالاتتان را در این بخش با استاد این دوره مطرح کنید.
							</p>
						</div>
					) : (
						messageInfo.messages.map((message, index) =>
							!message.is_teacher_send ? (
								<div className='AskAndAnswer__contentBox'>
									<div>
										<div className='AskAndAnswer__askBox flex-col items-start'>
											<span>شما </span>
											<p>{message.question_message}</p>
										</div>
										<div className='flex justify-end items-center w-4/5 AskAndAnswer__TimeBox-ask AskAndAnswer__TimeBox'>
											<p>
												{moment(message.date).format('YYYY/MM/DD')}
											</p>
											<p>{message.time}</p>
										</div>
									</div>
								</div>
							) : (
								<div className='AskAndAnswer__answareBox '>
									<div className='AskAndAnswer__answare flex-col items-start'>
										{' '}
										<span>استاد </span>
										<p>{message.question_message}</p>
									</div>
									<div className='flex justify-end items-center w-4/5 AskAndAnswer__TimeBox-answer AskAndAnswer__TimeBox'>
										<p>{message.time}</p>
										<p>{moment(message.date).format('YYYY/MM/DD')}</p>
									</div>
								</div>
							)
						)
					)}
				</div>
			) : (
				<div className='center empty__chat'>
					<img src={NoCommentImage} alt='NoCommentImage' />
				</div>
			)}
			<CommentInput onSetDate={handleSetMessage} {...othersMethod} />
		</div>
	);
}

export default AskAndAnswer;
