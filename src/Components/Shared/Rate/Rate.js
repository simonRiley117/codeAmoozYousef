import React from 'react';
import { Rate as RateBase } from 'antd';
import { ReactComponent as StarIcon } from '@Assets/Icons/star.svg';


// const description = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const Rate = (props) => {

	return (
		<RateBase
			className='rate'
			allowHalf
			character={<StarIcon />}
			{...props}
		/>
	);
};
export default Rate;
