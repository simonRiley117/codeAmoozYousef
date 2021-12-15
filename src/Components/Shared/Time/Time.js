import React from 'react';
import { DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';

const Time = ({ value }) => {
	return (
		<span className='time'>
			{new DateObject(value)
				.convert(persian, persian_fa)
				.format('DD MMMM YYYY')}
		</span>
	);
};
export default Time;
