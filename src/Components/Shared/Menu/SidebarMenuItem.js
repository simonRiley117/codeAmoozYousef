import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarMenuItem = ({ url, icon, text, ...rest }) => {
	return (
		<li className='sidebarMenu__li d-flex-align' {...rest}>
			<NavLink
				to={url}
				className={({ isActive }) =>
					isActive ? 'd-flex-align selected' : 'd-flex-align'
				}
				end
			>
				<div className='menuIcon'>{icon}</div>
				<p>{text}</p>
			</NavLink>
		</li>
	);
};

export default SidebarMenuItem;
