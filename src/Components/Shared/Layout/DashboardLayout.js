import React from 'react';
import Appbar from '../Menu/Appbar';
import SidebarMenu from '../Menu/SidebarMenu';
import { Layout } from 'antd';
import BreadCrumb from '../BreadCrump/BreadCrump';
import { Outlet } from 'react-router-dom';
const { Content } = Layout;

const DashboardLayout = () => {
	return (
			<Layout className='layout__dashboard'>
				<header className='layout__header'>
					<Appbar />
				</header>
				<section className='layout__wrapper'>
					<aside className='layout__sidebar'>
						<SidebarMenu />
					</aside>
					<Content className='layout__content'>
						<BreadCrumb />
						<Outlet />
					</Content>
				</section>
			</Layout>
	);
}; 
export default DashboardLayout;
