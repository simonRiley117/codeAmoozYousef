import React, { useState } from 'react';
import BreadCrump from '@Components/Shared/BreadCrump/BreadCrump';
import WorkWithUs from '@Components/Layouts/CoWorkers/Master/WorkWithUs';
import CoursStandards from '@Components/Layouts/CoWorkers/Master/CoursStandards';
import ProduceRules from '@Components/Layouts/CoWorkers/Master/ProduceRules';
import MasterSignUp from '@Components/Layouts/CoWorkers/Master/MasterSignUp';
import Title from '@Components/Shared/Title';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Master = () => {
	return (
		<div className='Master container'>
			<BreadCrump />
			<Title>اساتید</Title>
			<div className='Master__formBox'>
				<Tabs className='TabBox' type='card'>
					<TabPane tab='همکاری با ما' key='1'>
						<WorkWithUs />
					</TabPane>
					<TabPane tab='استاندارد های دوره' key='2'>
						<CoursStandards />
					</TabPane>
					<TabPane tab='قوانین تولید' key='3'>
						<ProduceRules />
					</TabPane>
					<TabPane tab='ثبت نام' key='4'>
						<MasterSignUp />
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
};

export default Master;
