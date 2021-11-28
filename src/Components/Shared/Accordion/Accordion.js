import React from 'react';
import { Collapse } from 'antd';
import { ReactComponent as Arrow } from '@Assets/Icons/arrow-down.svg';
import classNames from 'classnames';

const { Panel } = Collapse;

const ArrowIcon = ({ active }) => (
	<div
		className={classNames('accordion__arrow', {
			active: active,
		})}
	>
		<Arrow />
	</div>
);

const Accordion = ({ children, half, ...rest }) => {
	return (
		<Collapse
			className={classNames('accordion', {
				accordion__circle: half,
			})}
			expandIcon={({ isActive }) => <ArrowIcon active={isActive} />}
			ghost
			expandIconPosition='left'
			{...rest}
		>
			{children}
		</Collapse>
	);
};

export { Accordion, Panel };
