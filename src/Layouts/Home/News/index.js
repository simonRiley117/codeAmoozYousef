import React, { useState } from 'react';
import Slider from 'react-slick';
import Title from '@Components/Shared/Title';
import Link from '@Components/Shared/Buttons/Link';
import NewsItem from './NewsItem';
import image1 from '@Assets/Pic/image 1.png';
import image2 from '@Assets/Pic/image 2.png';
import image3 from '@Assets/Pic/image 3.png';

// Import Swiper styles

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
	const [imageIndex, setImageIndex] = useState(0);
	console.log("Slider", Slider)

	const settings = {
		// className: 'center',
		infinite: true,
		slidesToShow: 3,
		speed: 500,
		// rtl:true,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		centerPadding: '0',
		swipeToSlide: true,
		focusOnSelect: true,
		beforeChange: (current, next) => {
			console.log('current,next', current, next);
			setImageIndex(next);
		},
		afterChange: (index) => {
			console.log('index', index);
		},
	};
	const renderNewsItem = () =>
		data.map((info, key) => (
			<NewsItem key={key} {...info} active={key === imageIndex} />
		));
	return (
		<section className='home__news'>
			<div className='container'>
				<Title>جدیدترین اخبار</Title>
				<div className='home__news--content'>
					<div className='home__news--slider'>
						<Slider {...settings}>{renderNewsItem()}</Slider>
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
