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
		title: 'سی شارپ',
		subtitle: 'c sharp',
		icon: 
		"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
	  ,
	},
	{
		title: ' سی پلاس پلاس',
		subtitle: 'c++',
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
          
	  ,
	},
	
	{
		title: 'سی',
		subtitle: 'c',
		icon: 
	
	"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
          
	  ,
	},
	{
		title: 'نود جی اس',
		subtitle: 'nodejs',
		icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
	  ,
	},
	{
		title: 'پایتون',
		subtitle: 'Python',
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
	  ,
	},
	{
		title: 'چنگو',
		subtitle: 'django',
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"

	  ,
	},

	{
		title: 'لاراول',
		subtitle: 'laravel',
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"
		,
	},
	{
		title: 'اکسپرس',
		subtitle: 'express',
	
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"

		,
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
