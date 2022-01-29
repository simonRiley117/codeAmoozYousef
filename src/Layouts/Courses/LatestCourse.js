import React, {  useState } from 'react';
import Slider from 'react-slick';
import useFetch from '@App/Context/useFetch';
import CourseCardBg from '@Components/Layouts/Course/Cards/CourseCardBg';
import { useAuth } from '../../Context/authContext';
import { NextArrow, PrevArrow } from './Arrows';
import { Skeleton } from 'antd';
import _ from 'lodash';

const LatestCourse = () => {
	const [latestCourse, setLatestCourse] = useState([]);
    console.log("LatestCourse ~ latestCourse", latestCourse)
	const { token } = useAuth();

	const setData = (data) => {
		setLatestCourse(data);
	};

	const getLatestCourseList = useFetch({
		url: `CourseService/latestCourse`,
		noHeader: token ? false : true,
		setter: setData,
	});

	const settings = {
		className: 'latestCourse__center',
		infinite: true,
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 1,
		speed: 500,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};
	const renderCourseLoading = () =>
		_.range(3).map((key) => (
			<div className='card-bg-loading' key={key}>
				<Skeleton.Avatar active />
				<div className='card-bg-loading-content'>
					<Skeleton active />
					<div className='card-bg-loading--footer'>
						<Skeleton avatar paragraph={false} active />
						<Skeleton.Button size='small' active />
					</div>
				</div>
			</div>
		));

	const renderCourseItem = () =>
		latestCourse?.map((card) => (
			<CourseCardBg
				card={card}
				key={card.uuid}
			/>
		));
	return (
		<div className='latestCourse'>
			<Slider {...settings}>
				{getLatestCourseList.loading
					? renderCourseLoading()
					: renderCourseItem()}
			</Slider>
		</div>
	);
};

export default LatestCourse;
