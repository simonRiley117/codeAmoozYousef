import React, { useState } from 'react';
import DashboardBox from './DashboardBox';
import MessageItem from './MessageItem';
import { ReactComponent as MessageEmptyIcon } from '@Assets/Icons/message-empty.svg';
import Link from '@Components/Shared/Buttons/Link';
import _ from 'lodash';

const Messages = ({ messages }) => {
	const messageList = messages?.slice(0, 3) ?? [];
	const renderMessageEmpty = () => (
		<div className='flex flex-col items-center justify-center flex-auto gap-y-8'>
			<MessageEmptyIcon />
			<p>در حال حاضر پیامی ندارید</p>
		</div>
	);

	const renderMessage = () =>
		messageList.map((message) => (
			<MessageItem key={message.uuid} {...message} />
		));

	return (
		<DashboardBox title='پیام‌های شما:' classes='dashboard__message--box'>
			{_.isEmpty(messageList) ? (
				renderMessageEmpty()
			) : (
				<>
					<div className='flex flex-col gap-y-3 mt-4'>
						{renderMessage()}
					</div>
					{messages.length > 3 && (
						<Link to='/' type='text'>
							بیشتر...
						</Link>
					)}
				</>
			)}
		</DashboardBox>
	);
};

export default Messages;
