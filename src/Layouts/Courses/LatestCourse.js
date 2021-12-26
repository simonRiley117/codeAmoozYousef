import React, { Component, useState } from 'react';
import Slider from 'react-slick';
import useFetch from '@App/Context/useFetch';
import CourseCardBg from '@Components/Layouts/Course/Cards/CourseCardBg';
import { useAuth } from '../../Context/authContext';
import { NextArrow, PrevArrow } from './Arrows';
import { ClipLoader } from 'react-spinners';
import { Skeleton } from 'antd';
import _ from 'lodash';
const override = {
	display: 'block',
	margin: '0 auto',
	borderColor: 'green',
};
const LatestCourse = ({ getallCourseList, liftUpLatestCourseRequest }) => {
	const [latestCourse, setLatestCourse] = useState([]);
	const { token } = useAuth();

	const setData = (data) => {
		setLatestCourse(data);
		liftUpLatestCourseRequest(getLatestCourseList);
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
				getallCourseList={getallCourseList}
				getLatestCourseList={getLatestCourseList}
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
