import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BreadCrump from '@Components/Shared/BreadCrump/BreadCrump';
import SideBarDiscount from '@Components/Shared/Discount/SideBarDiscount';
import HeaderDiscount from '@Components/Shared/Discount/HeaderDiscount';
import Sarfasl from '@Components/Layouts/Course/Sarfasl';
import About from '@Components/Layouts/Course/About';
import Comment from '@Components/Layouts/Course/Comment/Comment';
import AskAndAnswer from '@Components/Layouts/Course/Comment/AskAndAnswer';
import TeacherInfo from '@Components/Layouts/Course/Teacher/TeacherInfo';
import CourseTable from '@Components/Layouts/Course/Course/CourseTable';
import { Tabs, Tag } from 'antd';
import UseWindowSize from '@App/Sizes/UseWindowSize';
import useFetch from '@App/Context/useFetch';
import { useAuth } from '@App/Context/authContext';
import { Skeleton } from 'antd';

const { TabPane } = Tabs;

const CourseIntro = () => {
	const location = useLocation();
	const [data, setData] = useState('');
	const [courseSeasons, setCourseSeasons] = useState([]);

	useEffect(() => {
		// setMenu(location.state.name);
		setId(location.state.id);
		setName(location.state.name);
	}, [location]);

	// const [menu, setMenu] = useState("");
	const [id, setId] = useState();
	const [name, setName] = useState();
	const windowSize = UseWindowSize();
	const { token } = useAuth();
	const addToCart = useFetch({
		url: `CartService/discount`,
		method: 'GET',
		noHeader: true,
		argFunc: (res) => {
			setData(res);
		},
	});
	const getCourseSeasons = useFetch({
		url: `CourseService/${id}/seasons`,
		method: 'GET',
		noHeader: token ? false : true,
		setter: setCourseSeasons,
	});
	const [tags, setTags] = useState();
	const liftingUpTags = (tags) => {
		setTags(tags);
	};

	const ids = id;
	const url1 = name;
	return (
		<div className='container'>
			<BreadCrump name={name} />
			<div className='Course'>
				{/*todo: it's create bug when uncommented miss beigi*/}
				{windowSize !== 'sm'
					? data !== '' && <HeaderDiscount data={data} />
					: data !== '' && <SideBarDiscount data={data} />}

				<div className='grid Course__container relative'>
					{windowSize !== 'sm' && (
						<div className='Course__sideBar relative'>
							<TeacherInfo courseId={id} resume={false} />
						</div>
					)}

					<div>
						<Tabs className='TabBox' type='card'>
							<TabPane tab='درباره این دوره' key='1'>
								<About courseId={id} />
							</TabPane>
							<TabPane tab='سرفصل ها' key='2'>
								{getCourseSeasons?.response ? (
									<Sarfasl
										courseId={id}
										courseSeasons={courseSeasons}
									/>
								) : (
									<Skeleton />
								)}
							</TabPane>
						</Tabs>
						{windowSize !== 'sm' && (
							<div className='Course__Comment'>
								<Tabs className='TabBox ' type='card'>
									<TabPane
										size={'small'}
										tab='نظرات'
										key='1'
										className='Sarfasl__commentpart'
									>
										<Comment courseId={id} />
									</TabPane>
									<TabPane
										tab='پرسش و پاسخ'
										key='2'
										className='Sarfasl__commentpart'
									>
										<AskAndAnswer courseId={id} />
									</TabPane>
								</Tabs>
							</div>
						)}
					</div>
					{windowSize !== 'sm' && (
						<div className='Course__sideBar relative'>
							<CourseTable courseId={id} ids={ids} url1={url1} />
						</div>
					)}

					{windowSize === 'sm' && (
						<div>
							<div className='Course__sideBar relative'>
								<TeacherInfo
									courseId={id}
									liftingUpTags={liftingUpTags}
								/>
							</div>
							<div className='Course__sideBar relative'>
								<CourseTable courseId={id} ids={ids} url1={url1} />
							</div>
						</div>
					)}
				</div>
				{windowSize === 'sm' && (
					<div className='Course__Comment'>
						<Tabs className='TabBox ' type='card'>
							<TabPane
								tab='نظرات'
								key='1'
								className='Sarfasl__commentpart'
							>
								<Comment courseId={id} />
							</TabPane>
							<TabPane
								tab='پرسش و پاسخ'
								key='2'
								className='Sarfasl__commentpart'
							>
								<AskAndAnswer courseId={id} />
							</TabPane>
						</Tabs>
					</div>
				)}
				{windowSize === 'sm' && (
					<div className='TeacherInfo__tags'>
						{tags?.map((tag, id) => (
							<Tag key={id}>{tag}</Tag>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default CourseIntro;
