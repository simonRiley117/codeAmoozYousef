import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Codeeditor from '@Components/Shared/Codeeditor';
import { Accordion, Panel } from '@Components/Shared/Accordion/Accordion';
import clock from '@Assets/Icons/clock.svg';
import { useHistory, useLocation } from 'react-router-dom';
import UseWindowSize from '@App/Sizes/UseWindowSize';
import { useAuth } from '@App/Context/authContext';
import useFetch from '@App/Context/useFetch';
import Courseintro from './Courseintro';

function Index() {
	const location = useLocation();
	const [id, setId] = useState();
	const [modal, setModal] = useState(false);
	const { token, authDispatch } = useAuth();
	const [courseSeasons, setCourseSeasons] = useState([]);
	const [contentUuid, setContentUuid] = useState(null);

	const getCourseSeasons = useFetch({
		url: `CourseService/q6SJ61Ta/seasons`,
		method: 'GET',
		noHeader: token ? false : true,
		setter: setCourseSeasons,
	});
	console.log('getCourseSeasons.loading: ', getCourseSeasons.loading);
	console.log('getCourseSeasons: ', getCourseSeasons);
	console.log('courseSeasons: ', courseSeasons);

	useEffect(() => {
		console.log('location.state.id: ', location.state.id);
		setId(location.state.id);
	}, [location]);

	const handleModalVisible = () => {
		setModal(false);
	};

	const handleModalShow = (uuid) => {
		setModal(true);
		setContentUuid(uuid);
	};
	// const windowSize = UseWindowSize();
	// let url = "https://testui.codeamooz.com/example/4/5";
	return (
		<>
			{getCourseSeasons?.response?.data ? (
				<div className='Sarfasl'>
					{/*<div className="Sarfasl__sample flex items-center	justify-between">*/}
					{/*    <p>مثال1</p>*/}
					{/*    <div className="Sarfasl__sampleLinkBox flex items-center justify-center ">*/}
					{/*        <Link*/}
					{/*            to={{*/}
					{/*                pathname: "/example",*/}
					{/*                state: {*/}
					{/*                    title: " phyton دوره برنامه نویسی",*/}
					{/*                    id: id,*/}
					{/*                },*/}
					{/*            }}*/}
					{/*        >*/}
					{/*            {windowSize === "sm"*/}
					{/*                ? url.slice(0, 25) + (url.length > 5 ? "..." : "")*/}
					{/*                : url}*/}
					{/*        </Link>*/}
					{/*    </div>*/}
					{/*</div>*/}
					{/*<Codeeditor lan={"c_cpp"} value={'printf("hello, %s", name)'}/>*/}
					<div className='Sarfasl__Accordionbox'>
						<Accordion >
							{courseSeasons.data.map((season, index) => (
								<Panel header={season.title} key={season.uuid}>
									{season.contents.map((content, index) => (
										<div
											className='flex justify-between items-center'
											onClick={() => handleModalShow(content.uuid)}
										>
											<div className='flex items-center Sarfasl__Accordiontxtbox'>
												<div className='Sarfasl__Accordionnumber'>
													{index + 1}
												</div>
												<p>{content.title}</p>
											</div>
											<div className='flex items-center Sarfasl__AccordionTimeBox'>
												<p>{content.duration_time}</p>
												<img src={clock} alt={clock} />
											</div>
										</div>
									))}
								</Panel>
							))}
						</Accordion>
					</div>
				</div>
			) : (
				<div>LOADING...</div>
			)}
			<Courseintro
				visible={modal}
				contentUuid={contentUuid}
				onCancel={handleModalVisible}
			/>
		</>
	);
}

export default Index;

// const cor = [
//   {
//     nam: "جلسه اول: آشنایی",
//     all: [{ txt: "چرا پایتون؟" }, { txt: "پایتون چیست؟" }],
//   },
//   {
//     nam: "جلسه دوم: آشنایی",
//     all: [{ txt: "چرا پایتون؟" }, { txt: "پایتون چیست؟" }],
//   },
//   {
//     nam: "جلسه سوم: آشنایی",
//     all: [{ txt: "چرا پایتون؟" }, { txt: "پایتون چیست؟" }],
//   },
//   {
//     nam: "جلسه چهارم: آشنایی",
//     all: [{ txt: "چرا پایتون؟" }, { txt: "پایتون چیست؟" }],
//   },
// ];
