import React from 'react';
import BreadCrump from '@Components/Shared/BreadCrump/BreadCrump';
import Deatil from '@Components/Layouts/CoWorkers/Employer/Deatil';
import Request from '@Components/Layouts/CoWorkers/Employer/Request';
import Title from '@Components/Shared/Title';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

function Employer() {
	return (
		<div className='Master container'>
			<BreadCrump />
			<Title> تیم کارفرما</Title>
			<div className='Master__formBox'>
				<Tabs className='TabBox' type='card'>
					<TabPane tab='جزئیات' key='1'>
						<Deatil />
					</TabPane>
					<TabPane tab='ارسال درخواست' key='2' id='tab-end'>
						<Request />
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
}

export default Employer;
