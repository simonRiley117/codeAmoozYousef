import React from 'react';
import eye from '@Assets/Pic/Frame 88.png';
import DateMarker from '@Components/Shared/Date/DateMarker';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from 'antd';

const getReadTime = (time = '0') => {
	const [h, m] = time?.split(':');
	if (m.at(0) === '0') {
		return m.at(1);
	}
	return m;
	// const date = new Date();
	// date.setHours(Number(h), Number(m));
	// return date.getMinutes();
};

const NewsItem = ({
	id,
	cover,
	title,
	short_description,
	view_number,
	published_time,
	read_time,
}) => {
	let navigate = useNavigate();
	return (
		<article
			className='news__item'
			onClick={() => navigate('/news/news-info', { state: id })}
		>
			<div className='news__item--pic'>
				<img src={cover} alt={title} />
			</div>
			<div className='news__item--content'>
				<h2>{title}</h2>
				<p>{short_description}</p>
				<div className='news__item--info'>
					<div className='d-flex gap-x-2'>
						<img src={eye} alt='eye' />
						<span>{view_number}</span>
					</div>
					<div className='news__item--date'>
						<DateMarker date={published_time} />
						{/* <time dateTime='2011-11-18 14:54:39.929-04:00'>5</time> */}
						-
						<p>
							زمان مطالعه : <span>{getReadTime(read_time)}</span> دقیقه
						</p>
					</div>
				</div>
			</div>
		</article>
	);
};

const LoadingNewsItem = () => {
	return (
		<Skeleton
			avatar
			active
			paragraph={{ rows: 3 }}
			className='skeleton news__item news__item--loading'
		/>
	);
};

export { NewsItem, LoadingNewsItem };

{
	/* <article className='news__item news__item--loading'>
			<Skeleton.Avatar active shape='square' />
			<div className='px-4 py-6'>
				<Skeleton.Button active block id='title' />
				<Skeleton.Button active size='small' shape='default' />
				<Skeleton.Button active size='small' shape='default' />
				<div className='flex items-center justify-between '>
					<Skeleton.Button size='small' active />
					<Skeleton.Button size='small' active />
				</div>
			</div>
		</article> */
}
