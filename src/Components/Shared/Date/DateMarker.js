import React from 'react';
import moment from 'jalali-moment';
import 'moment/locale/fa';
// moment.locale('fa');
import { DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';

// .convert(persian, persian_fa)
// 		.format('DD MMMM YYYY');
const DateMarker = ({ date }) => {
	const now = new DateObject();
	const currentDate = new DateObject(date);

	const renderMarker = () => {
		if (
			now.year === currentDate.year &&
			now.month.number === currentDate.month.number
		) {
			const day = now.day - currentDate.day;
			switch (day) {
				case 0:
					return 'امروز';
				case 1:
					return 'دیروز';

				default:
					return currentDate.convert(persian, persian_fa).format('DD MMMM YYYY');
			}
		}

		return currentDate.convert(persian, persian_fa).format('DD MMMM YYYY');
	};

	return <span className=''>{renderMarker()}</span>;
};
export default DateMarker;
