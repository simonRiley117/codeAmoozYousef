import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Title from '@Components/Shared/Title';
import Link from '@Components/Shared/Buttons/Link';
import NewsItem from './NewsItem';
import image1 from '@Assets/Pic/image 1.png';
import image2 from '@Assets/Pic/image 2.png';
import image3 from '@Assets/Pic/image 3.png';

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const data = [
	{
		description:
			'تمرین آنلاین و ارزشیابی هوشمند تمرین آنلاین و ارزشیابی هوشمند تمرین آنلاین و ارزشیابی هوشمند تمرین آنلاین و ارزشیابی هوشمند ',

		image: image1,
		title: 'تیتر خبری شماره ۱',
	},
	{
		description:
			'تمرین آنلاین و ارزشیابی هوشمند تمرین آنلاین و ارزشیابی هوشمند تمرین آنلاین و ارزشیابی هوشمند تمرین آنلاین و ارزشیابی هوشمند ',
		image: image2,
		title: 'تیتر خبری شماره 2',
	},
	{
		description:
			'تمرین آنلاین و ارزشیابی هوشمند تمرین آنلاین و ارزشیابی هوشمند تمرین آنلاین و ارزشیابی هوشمند تمرین آنلاین و ارزشیابی هوشمند ',
		image: image3,
		title: 'تیتر خبری شماره 3',
	},
	{
		description:
			'تمرین آنلاین و ارزشیابی هوشمند تمرین آنلاین و ارزشیابی هوشمند تمرین آنلاین و ارزشیابی هوشمند تمرین آنلاین و ارزشیابی هوشمند ',
		image: image2,
		title: 'تیتر خبری شماره 4',
	},
	{
		description:
			'تمرین آنلاین و ارزشیابی هوشمند تمرین آنلاین و ارزشیابی هوشمند تمرین آنلاین و ارزشیابی هوشمند تمرین آنلاین و ارزشیابی هوشمند ',
		image: image3,
		title: 'تیتر خبری شماره 5',
	},
];

const News = () => {
	const renderNewsItem = () =>
		data.map((info, key) => (
			<SwiperSlide key={key}>
				<NewsItem {...info} />
			</SwiperSlide>
		));

	return (
		<section className='home__news'>
			<div className='container'>
				<Title>جدیدترین اخبار</Title>
				<div className='home__news--content'>
					<div className='home__news--slider'>
						<Swiper
							effect='coverflow'
							grabCursor
							loop
							slidesPerView={3}
							slideToClickedSlide
							coverflowEffect={{
								rotate: 0,
								stretch: 40,
								depth: 400,
								modifier: 3,
								slideShadows: false,
								scale: 1,
							}}
							pagination={{
								clickable: true,
							}}
						>
							{renderNewsItem()}
						</Swiper>
					</div>
					<div className='home__news--action'>
						<Link to='/' type='primary'>
							اخبار بیشتر
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
export default News;
