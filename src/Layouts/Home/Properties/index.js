import React from 'react';
import Title from '@Components/Shared/Title';
import PropertyItem from './PropertyItem';

// Assets
import { ReactComponent as CodeIcon } from '@Assets/Icons/home-code.svg';
import { ReactComponent as ControlIcon } from '@Assets/Icons/home-control.svg';
import { ReactComponent as EditorIcon } from '@Assets/Icons/home-editor.svg';
import { ReactComponent as GrandIcon } from '@Assets/Icons/home-grand.svg';
import { ReactComponent as ManitorIcon } from '@Assets/Icons/home-manitor.svg';

const Properties = () => {
	return (
		<section className='home__property'>
			<div className='container'>
				<Title>ویژگی های کدآموز</Title>
				<div className='home__property--content'>
					<PropertyItem icon={<CodeIcon />}>
						تمرین آنلاین و ارزشیابی هوشمند
					</PropertyItem>
					<PropertyItem icon={<ManitorIcon />}>
						دوره های جامع آموزشی به زبان فارسی
					</PropertyItem>
					<PropertyItem icon={<EditorIcon />}>
						کد ادیتور آنلاین بدون نیاز به نصب نرم افزار
					</PropertyItem>
					<PropertyItem icon={<ControlIcon />}>
						کنترل و نظارت کامل بر روی دوره ها
					</PropertyItem>
					<PropertyItem icon={<GrandIcon />}>
						دسترسی به راهنما برای پیشرفت در دروس
					</PropertyItem>
				</div>
			</div>
		</section>
	);
};
export default Properties;
