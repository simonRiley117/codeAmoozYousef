import React from 'react';
import Title from '@Components/Shared/Title';
import OffersItem from './OffersItem';

import StudentImage from '@Assets/Pic/offers-student.png';
import TeacherImage from '@Assets/Pic/offers-teacher.png';
import Link from '@Components/Shared/Buttons/Link';

const Offers = () => {
	return (
		<section className='home__offers'>
			<div className='container'>
				<Title>پیشنهادات ویژه</Title>
				<div className='home__offers--content'>
					<OffersItem image={StudentImage}>
						<h2>دانش آموخته بهترین دوره های برنامه نویس باشد</h2>
						<Link type='primary' to='/' large>
							ثبت نام دوره ها
						</Link>
					</OffersItem>
					<OffersItem image={TeacherImage}>
						<h2>در بین بهترین اساتید برنامه نویسی باشد</h2>
						<Link type='primary' to='/' large>
							ثبت نام به عنوان استاد
						</Link>
					</OffersItem>
				</div>
			</div>
		</section>
	);
};
export default Offers;
