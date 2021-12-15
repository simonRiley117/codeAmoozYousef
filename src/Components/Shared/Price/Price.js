import { Statistic } from 'antd';
import classNames from 'classnames';
import React from 'react';

const Price = ({ isDiscount, success, ...rest }) => {
	return (
		<Statistic
			className={classNames('price whitespace-nowrap mx-1', {
				isSuccess: success,
				discount: isDiscount,
			})}
			{...rest}
		/>
	);
};
export default Price;
