import React from 'react';
import eye from '@Assets/Pic/Frame 88.png';
import DateMarker from '@Components/Shared/Date/DateMarker';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from 'antd';

const NewsItem = ({ id, cover, title, short_description }) => {
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
						<span>4</span>
					</div>
					<div className='news__item--date'>
						<DateMarker />
						{/* <time dateTime='2011-11-18 14:54:39.929-04:00'>5</time> */}
						-
						<p>
							خواندن در <span>8</span> دقیقه
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
			className='news__item news__item--loading'
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
