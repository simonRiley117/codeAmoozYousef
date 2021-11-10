import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Price from '@Components/Shared/Price/Price';
import Rate from '@Components/Shared/Rate/Rate';

// Assets
import teacherPic from '@Assets/Pic/course-profile.png';
import courseLogo from '@Assets/Icons/HTML.svg';
import pythonIcon from '@Assets/Icons/python.svg';
import { ReactComponent as CoinIcon } from '@Assets/Icons/Coin.svg';
import { ReactComponent as ClockIcon } from '@Assets/Icons/clock.svg';

const CourseCardBg = () => {
	const [isOff, setIsOff] = useState(false);
	return (
		<article className='card-bg'>
			<div className='card-bg-pic'>
				<img src={courseLogo} alt='python' className='card-bg-pic-logo' />
				<img src={pythonIcon} alt='python' />
			</div>
			<div className='card-bg-info'>
				<div className='card-bg-content'>
					<h5 className='card-bg-title'>
						<Link
							to={{
								pathname: '/course',
								state: {
									name: 'دوره آنلاین برنامه نویسی HTM',
									id: '1',
								},
							}}
						>
							دوره آنلاین برنامه نویسی HTML
						</Link>
					</h5>
					<div className='card-bg-box'>
						<div className='card-profile'>
							<img src={teacherPic} alt={teacherPic} />
						</div>
						<div className='card-bg-details'>
							<h4> علیرضا میرزایی فرد </h4>
							<div className='card-bg-details-time'>
								<ClockIcon />
								<span>07:13:00</span>
							</div>
							<div className='card-bg-details-price'>
								<CoinIcon />
								<Price value={50000} success />
								<Price value={70000} isDiscount suffix='تومان' />
							</div>
						</div>
					</div>
					<Rate defaultValue={4} />
				</div>
			</div>
		</article>
	);
};

export default CourseCardBg;
