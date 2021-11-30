import React, { useState } from 'react';
import BreadCrump from '@Components/Shared/BreadCrump/BreadCrump';
import { Tabs } from 'antd';
import VideoPlayer from '@Components/Shared/VideoPlayer/VideoPlayer';
import Detail from '@Components/Layouts/Course/Sarfasl/Detail';
import Button from '@Components/Shared/Buttons/Button';
import { Accordion, Panel } from '@Components/Shared/Accordion/Accordion';
import ProgressLine from '@Components/Shared/Progress/ProgressLine';
import TrainExample from '@Components/Layouts/Dashboard/TrainExample';
import Quiz from '@Components/Layouts/Dashboard/Quiz';
import Clock, { ReactComponent as LockIcon } from '@Assets/Icons/clock.svg';
import Lock from '@Assets/Icons/lock.svg';
import useFetch from '../../Context/useFetch';
import IconBtn from '../../Components/Shared/Buttons/IconBtn';
import classNames from 'classnames';

const { TabPane } = Tabs;

function LastCourse() {
	const [courseSeasons, setCourseSeasons] = useState([]);
	console.log('LastCourse ~ courseSeasons', courseSeasons);
	const [contentUuid, setContentUuid] = useState(null);
    console.log("LastCourse ~ contentUuid", contentUuid)

	const setData = (data) => {
		console.log('data: ', data);
		setCourseSeasons(data);
		setContentUuid(data.first_content_uuid);
	};

	const getCourseSeasons = useFetch({
		url: `CourseService/y2nnbfSt/sidebar`,
		method: 'GET',
		noHeader: false,
		setter: setData,
	});

	const renderSeasonInfo = (time, lock) => (
		<div className='Sarfasl__AccordionItem'>
			{lock && <img src={Lock} alt={Lock} />}
			<div className='Sarfasl__AccordionItem--time'>
				<time>{time}</time>
				<img src={Clock} alt={Clock} />
			</div>
		</div>
	);

	return (
		<>
			{getCourseSeasons?.response?.data?.seasons ? (
				<div className='LastCourse'>
					<BreadCrump
						pathsname='/dash/course'
						name={courseSeasons.title}
					/>
					<div className='grid LastCourse__container relative'>
						<div>
							<Tabs className='TabBox' type='card'>
								<TabPane tab='ویدیو' key='1'>
									<Detail contentUuid={contentUuid} />
								</TabPane>
								<TabPane tab='تمرین و مثال' key='2'>
									<TrainExample contentUuid={contentUuid} />
								</TabPane>
								<TabPane tab='آزمون' key='3'>
									<Quiz contentUuid={contentUuid} />
								</TabPane>
							</Tabs>
							<div className='flex items-center justify-between LastCourse__btnBox'>
								<Button
									type='primary'
									classes='CoWorkers__btn flex items-center '
								>
									مبحث بعدی
									<i className='fas fa-chevron-right'></i>
								</Button>
								<Button
									type='primary'
									classes='CoWorkers__btn flex items-center '
								>
									<i className='fas fa-chevron-left'></i>
									مبحث قبلی{' '}
								</Button>
							</div>
						</div>

						<div className='LastCourse__Box'>
							<div className='LastCourse__Position'>
								<p className='LastCourse__title'>
									دوره برنامه نویسی <span>{courseSeasons.title}</span>
								</p>
								<div className='Sarfasl__Accordionbox'>
									<Accordion>
										{courseSeasons.seasons.map((season, index) => (
											<Panel
												collapsible={
													season.lockedOn ? 'disabled' : 'header'
												}
												header={
													<span className='Sarfasl__title'>
														{season.title}
													</span>
												}
												extra={renderSeasonInfo(
													season.total_time_for_each_season,
													season.lockedOn
												)}
												key={season.uuid}
											>
												{season?.contents?.map((content, index) => (
													<div
														className='Sarfasl__content flex justify-between items-center'
														key={content.uuid}
														onClick={() =>
															setContentUuid(content.uuid)
														}
													>
														<div className='flex items-center Sarfasl__Accordiontxtbox'>
															{content.is_content_passed ? (
																<div
																	className={
																		'Sarfasl__Accordiondone'
																	}
																>
																	<i className='fas fa-check'></i>
																</div>
															) : (
																<div
																	className={
																		'Sarfasl__Accordionnumber'
																	}
																>
																	{index + 1}
																</div>
															)}
															<p>{content.title}</p>
														</div>
														{renderSeasonInfo(
															content.duration_time,
															content.lockedOn
														)}
													</div>
												))}
											</Panel>
										))}
									</Accordion>
								</div>
								<p className='LastCourse__progresstitle'>
									پیشرفت شما در دوره:{' '}
									<span>{courseSeasons.progress}%</span>
								</p>
								<ProgressLine precent={courseSeasons.progress} />
								<div className='flex items-center cursor-pointer LastCourse__guideBox'>
									<p className='LastCourse__guide-icon'> i</p>
									<p className='LastCourse__guide'>راهنمای صفحه</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}

export default LastCourse;
// const cor = [
//     {
//         title: 'جلسه اول: آشنایی',
//         contents: [
//             {
//                 title: 'چرا پایتون؟',
//                 duration_time: '04:33',
//                 done: true,
//                 lock: false,
//             },
//             {
//                 title: 'چرا پایتون؟',
//                 duration_time: '04:33',
//                 done: false,
//                 lock: true,
//             },
//         ],
//     },
//     {
//         title: 'جلسه اول: آشنایی',
//         contents: [
//             {
//                 title: 'چرا پایتون؟',
//                 duration_time: '04:33',
//                 done: false,
//                 lock: true,
//             },
//         ],
//     },
//     {
//         title: 'جلسه اول: آشنایی',
//         contents: [
//             {
//                 title: 'چرا پایتون؟',
//                 duration_time: '04:33',
//                 done: false,
//                 lock: true,
//             },
//         ],
//     },
//     {
//         title: 'جلسه اول: آشنایی',
//         contents: [
//             {
//                 title: 'چرا پایتون؟',
//                 duration_time: '04:33',
//                 done: false,
//                 lock: true,
//             },
//         ],
//     },
// ];
