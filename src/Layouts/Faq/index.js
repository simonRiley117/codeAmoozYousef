import React from 'react';
import { faqData } from '@Components/Layouts/Faq/FaqData';
import { Collapse } from 'antd';
import classNames from 'classnames';
import Title from '@Components/Shared/Title';
import BreadCrump from '@Components/Shared/BreadCrump/BreadCrump';

const { Panel } = Collapse;

const Faq = () => {
	return (
		<div className='faq container'>
			<BreadCrump />

			<Title>سوالات متداول</Title>

			<Collapse
				accordion
				className='accordion faq__accordion'
				ghost
				expandIcon={({ isActive }) => (
					<div
						className={classNames('faq__accordion--icon', {
							active: isActive,
						})}
					/>
				)}
				expandIconPosition='right'
			>
				{faqData.map(({ heading, text, id }) => (
					<Panel header={<span>{heading}</span>} key={id}>
						<p>{text}</p>
					</Panel>
				))}
			</Collapse>
		</div>
	);
};
export default Faq;
