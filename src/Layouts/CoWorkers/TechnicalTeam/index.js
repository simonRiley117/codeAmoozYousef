import React from 'react';
import BreadCrump from '@Components/Shared/BreadCrump/BreadCrump';
import Link from '@Components/Shared/Buttons/Link';
import Title from '@Components/Shared/Title';

function index() {
	return (
		<div className='Technicalteam container'>
			<BreadCrump />
			<Title>Technical team</Title>
			<div className='Technicalteam__content'>
				{items.map(({ title, level }, id) => (
					<div
						className='Technicalteam__Box flex justify-between items-center w-full'
						key={id}
					>
						<div className='Technicalteam__txt flex items-center justify-between'>
							<Link to='information' state={title} type='text'>
								Details
							</Link>

							<p>{level}</p>
						</div>
						<p>{title}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default index;

const items = [
	{
		title: 'Front-End developer',
		level: 'Senior',
	},
	{
		title: 'Back-End developer',
		level: 'Senior',
	},
	{
		title: 'UX designer',
		level: 'Beginner',
	},
	{
		title: 'UI designer',
		level: 'Intern',
	},
	{
		title: 'JavaScript Developer',
		level: 'Senior',
	},
	{
		title: 'Software engineer',
		level: 'Senior',
	},
	{
		title: 'UX researcher',
		level: 'Beginner',
	},
	{
		title: 'UX writer',
		level: 'Intern',
	},
];
