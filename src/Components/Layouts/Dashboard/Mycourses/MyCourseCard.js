import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Price from '@Components/Shared/Price/Price';
import Rate from '@Components/Shared/Rate/Rate';
import IconBtn from '@Components/Shared/Buttons/IconBtn';
import { Progress } from 'antd';

// Assets
import teacherPic from '@Assets/Pic/course-profile.png';
import courseLogo from '@Assets/Icons/HTML.svg';
import Cover from '@Assets/Pic/js.png';
import { ReactComponent as Star } from '@Assets/Icons/star.svg';

import useFetch from '@App/Context/useFetch';
import Button from '@Components/Shared/Buttons/Button';
import BtnLink from '@Components/Shared/Buttons/Link';
const MyCourseCard = ({ card, finishedCourse }) => {
	
	return (
		<article className='card-bg MyCourses__Card'>
			<div className='card-bg-pic'>
				<img src={Cover} alt='python' className='card-bg-pic-logo' />
			</div>
			<div className='card-bg-info'>
				<div className='card-bg-content '>
					<div className='d-flex-space MyCourses__Card--header'>
						<h5 className='card-bg-title'>
							<Link to='/course'>دوره جاوا</Link>
						</h5>
						<BtnLink to='/course'>مشاهده ی کل دوره</BtnLink>
					</div>
					<div className='MyCourses__Card--body'>
						{!finishedCourse ? (
							<>
								<div className='MyCourses__Card--body-row d-flex-space'>
									<p className='MyCourses__Card--body-p '>
										پیشرفت شما در دوره :
									</p>
									<span>5جلسه</span>
								</div>
								<Progress
									strokeWidth={12}
									strokeColor={'#196476'}
									percent={50}
								/>
								<div className='MyCourses__Card--Link '>
									امتیاز به این دوره
								</div>{' '}
							</>
						) : (
							<>
								<div className='d-flex-align'>
									<Progress type='circle' percent={100} />

									<p className='MyCourses__Card--body-p mx-4 '>
										دوره تکمیل شده{' '}
									</p>
								</div>
								<Link to='/course' className='MyCourses__Card--Link '>
								
									دریافت گواهی پایان دوره دانشگاه صنعتی
								</Link>
								<div className='MyCourses__Card--Link '>
									امتیاز به این دوره
								</div>{' '}
							</>
						)}
					</div>
					<div className='d-flex-space card-bg-footer'>
						<div className='card-bg-img-pic'>
							<img src={teacherPic} />
							<h4>پریسا قربانی</h4>
						</div>
						<Link to='/course' className='MyCourses__Card--Link'>
						
							ارتباط با استاد
						</Link>
					</div>
				</div>
			</div>
		</article>
	);

};

export default MyCourseCard;

