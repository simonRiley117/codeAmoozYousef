import Time from '@Components/Shared/Time/Time';
import React from 'react';

const MessageItem = ({ avatar, first_name, last_name, date, time, text }) => {
	return (
		<div className='dashboard__message--item'>
			<div className='dashboard__message--item-cover'>
				<img src={avatar} alt={first_name} className='image' />
			</div>
			<div className='dashboard__message--item-content'>
				<span className='name'>
					{first_name} {last_name}
				</span>
				<Time>{date}</Time>
				<span className='time'>{time?.slice(0, time.length - 3)}</span>
				<p className='description'>{text}</p>
				<span className='number'>1</span>
			</div>
		</div>
	);
};
export default MessageItem;
