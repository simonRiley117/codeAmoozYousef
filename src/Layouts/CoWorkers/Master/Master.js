import React, { useState } from 'react';
import BreadCrump from '@Components/Shared/BreadCrump/BreadCrump';
import WorkWithUs from '@Components/Layouts/CoWorkers/Master/WorkWithUs';
import CoursStandards from '@Components/Layouts/CoWorkers/Master/CoursStandards';
import ProduceRules from '@Components/Layouts/CoWorkers/Master/ProduceRules';
import MasterSignUp from '@Components/Layouts/CoWorkers/Master/MasterSignUp';
import Title from '@Components/Shared/Title';

import { Tabs } from 'antd';
import { useLocation } from 'react-router';

const { TabPane } = Tabs;

const Master = () => {
	const {
		state: { activeTab },
	} = useLocation();
	console.log('Master ~ state', !!activeTab);
	return (
		<div className='Master container'>
			<BreadCrump />
			<Title>اساتید</Title>
			<div className='Master__formBox'>
				<Tabs className='TabBox' type='card' defaultActiveKey={activeTab}>
					<TabPane tab='همکاری با ما' key='workWithUs'>
						<WorkWithUs />
					</TabPane>
					<TabPane tab='استاندارد های دوره' key='standards'>
						<CoursStandards />
					</TabPane>
					<TabPane tab='قوانین تولید' key='rules'>
						<ProduceRules />
					</TabPane>
					<TabPane tab='ثبت نام' key='signUp'>
						<MasterSignUp />
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
};

export default Master;
