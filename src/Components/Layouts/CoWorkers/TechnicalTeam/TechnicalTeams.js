import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import BreadCrump from '@Components/Shared/BreadCrump/BreadCrump';
import Deatil from './Deatil';
import Request from './Request';
import TabBox from '@Components/Shared/Tabs/TabBox';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function TechnicalTeams() {
	const { name } = useParams();
	const location = useLocation();
	const [titles, setTitles] = useState('');
	const [menu, setMenu] = useState([]);
	const [id, setId] = useState(0);

	useEffect(() => {
		setTitles(location.state.title);
		setMenu([
			{
				name: 'صفحه اصلی',
				rout: '',
			},
			{
				name: 'همکاران و اساتید',
				rout: 'coWorkers',
			},
			{
				name: 'technical Team',
				rout: 'coWorkers/technicalteam',
			},
			{
				name: location.state.title,
				rout: `coWorkers/technicalteam/${name}`,
			},
		]);
	}, [location]);

	return (
		<div className='TechnicalTeams'>
			{menu.length !== 0 && <BreadCrump item={menu} />}
			<p className='Master__title text-center'>{titles}</p>
			<div className='Master__formBox'>
				<Tabs className='TabBox' type='card'>
					<TabPane tab='جزئیات' key='1'>
						<Deatil />
					</TabPane>
					<TabPane tab='ارسال درخواست' key='2'>
						<Request />
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
}

export default TechnicalTeams;
