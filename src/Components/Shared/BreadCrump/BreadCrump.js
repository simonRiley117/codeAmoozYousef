import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { Breadcrumb as BreadcrumbBase } from 'antd';
import { ReactComponent as SeparatorIcon } from '@Assets/Icons/SeparatorIcon.svg';
const { Item } = BreadcrumbBase;

const BreadCrump = ({ title }) => {
	// { path: '/news/news-info', breadcrumb: title },
	const routes = [
		{ path: '/', breadcrumb: 'صفحه اصلی' },
		{ path: '/coWorkers', breadcrumb: 'همکاران واساتید' },
		{ path: '/coWorkers/master', breadcrumb: 'اساتید' },
		{ path: '/coWorkers/technicalteam', breadcrumb: 'technical Team' },
		{ path: '/coWorkers/technicalteam/information', breadcrumb: title },
		{ path: '/coWorkers/employer', breadcrumb: 'تیم کارفرما' },
	];
	const breadcrumbs = useBreadcrumbs(routes);
	return (
		<div className='breadcrumbs'>
			<BreadcrumbBase className='breadcrumb' separator={<SeparatorIcon />}>
				{breadcrumbs.map(({ match, breadcrumb }) => (
					<Item key={match.pathname}>
						<NavLink to={match.pathname}>{breadcrumb}</NavLink>
					</Item>
				))}
			</BreadcrumbBase>
		</div>
	);
};

BreadCrump.defaultProps = {
	title: '',
};

BreadCrump.propTypes = {
	title: PropTypes.string,
};

export default BreadCrump;
