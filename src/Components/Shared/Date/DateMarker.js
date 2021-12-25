import React from 'react';
import moment from 'jalali-moment';
import 'moment/locale/fa';
moment.locale('fa');

const DateMarker = ({ date }) => {
	const now = moment();
	const currentDate = moment.unix(1240200059).utc();

	const renderMarker = () => {
		if (
			now.year() === currentDate.year() &&
			now.month() === currentDate.month()
		) {
			const day = now.date() - currentDate.date();
			switch (day) {
				case 0:
					return 'امروز';
				case 1:
					return 'دیروز';
				case day < 7 && day > 1:
					return currentDate.format('dddd');
				default:
					return currentDate.format('L');
			}
		}

		return currentDate.format('L');
	};

	return <span className=''>{renderMarker()}</span>;
};
export default DateMarker;
