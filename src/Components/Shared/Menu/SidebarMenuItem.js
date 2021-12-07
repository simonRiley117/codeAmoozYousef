import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarMenuItem = ({ url, icon, text, ...rest }) => {
	return (
		<li className='sidebarMenu__li d-flex-align' {...rest}>
			<NavLink
				exact
				to={url}
				className='d-flex-align'
				activeClassName='selected'
			>
				<div className='menuIcon'>{icon}</div>
				<p>{text}</p>
			</NavLink>
		</li>
	);
};

export default SidebarMenuItem;


