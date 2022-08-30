import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { EffectCoverflow, Navigation } from 'swiper';

// Components
import Title from '@Components/Shared/Title';
import LinkBox from '@Components/Layouts/Home/LinkBox';
import CoursesBox from './CourseBox';

// Assets
import pythonLogo from '@Assets/Pic/python-logo.png';

SwiperCore.use([EffectCoverflow, Navigation]);

// constants
const courseList = [
	{
		title: 'پایتون',
		subtitle: 'Python',
		icon: pythonLogo,
	},
	{
		title: 'پایتون',
		subtitle: 'Python',
		icon: pythonLogo,
	},
	{
		title: 'پایتون',
		subtitle: 'Python',
		icon: pythonLogo,
	},
	{
		title: 'پایتون',
		subtitle: 'Python',
		icon: pythonLogo,
	},
	{
		title: 'پایتون',
		subtitle: 'Python',
		icon: pythonLogo,
	},
	{
		title: 'پایتون',
		subtitle: 'Python',
		icon: pythonLogo,
	},
	{
		title: 'پایتون',
		subtitle: 'Python',
		icon: pythonLogo,
	},
	{
		title: 'پایتون',
		subtitle: 'Python',
		icon: pythonLogo,
	},
];

const index = () => {
	const renderCourses = () =>
		courseList.map((info, key) => (
			<SwiperSlide key={key}>
				<CoursesBox {...info} />
			</SwiperSlide>
		));

	return (
		<section className='home__courses py-20'>
			<div className='container'>
				<div className='flex flex-col items-center'>
					<Title>همین امروز با کدآموز شروع کن</Title>
					<div className='home__courses--slider  '>
						<Swiper
							effect='coverflow'
							grabCursor
							loop
							slidesPerView={2}
							slideToClickedSlide
							navigation
							coverflowEffect={{
								rotate: 0,
								slideShadows: false,
								scale: 1,
								modifier: 2,
								depth: 5,
							}}
							breakpoints={{
								480: {
									slidesPerView: 3,
									coverflowEffect: {
										modifier: 3,
									},
								},
								762: {
									slidesPerView: 5,
									centeredSlides: true,
									coverflowEffect: {
										modifier: 5,
									},
								},
							}}
						>
							{renderCourses()}
						</Swiper>
					</div>
					<LinkBox />
				</div>
			</div>
		</section>
	);
};
export default index;
