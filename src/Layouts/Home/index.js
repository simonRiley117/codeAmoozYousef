import React from 'react';
import Button from '@Components/Shared/Buttons/Button';
import { ReactComponent as ArrowLeftIcon } from '@Assets/Icons/arrow-left.svg';

const Home = () => {
	return (
		<div
			className=''
			style={{
				height: '50vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Button type='primary' icon={<ArrowLeftIcon />} large disabled>
				مان تبث / دورو
			</Button>
		</div>
	);
};
export default Home;
