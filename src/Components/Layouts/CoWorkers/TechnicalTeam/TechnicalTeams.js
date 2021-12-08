import React from 'react';
import { useLocation } from 'react-router-dom';
import BreadCrump from '@Components/Shared/BreadCrump/BreadCrump';
import Deatil from './Deatil';
import Request from './Request';
import Title from '@Components/Shared/Title';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

function TechnicalTeams() {
	const { state: title } = useLocation();
	return (
		<div className='TechnicalTeams container'>
			<BreadCrump title={title} />

			<Title>{title}</Title>
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
