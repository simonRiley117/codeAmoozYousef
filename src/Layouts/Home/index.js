import React from 'react';
import Link from '@Components/Shared/Buttons/Link';
import Button from '@Components/Shared/Buttons/Button';
import { ReactComponent as ArrowLeftIcon } from '@Assets/Icons/arrow-left.svg';

import { Button as ButtonAnt } from 'antd';

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
			<Link to='/' type='text' icon={<ArrowLeftIcon />} large disabled>
				مان / دورو
			</Link>
			<Button type='text' icon={<ArrowLeftIcon />} large disabled>
				مان تبث / دورو
			</Button>
			<ButtonAnt type='text' disabled>
				ggggggggggggg
			</ButtonAnt>
			#ffa44a
		</div>
	);
};
export default Home;
