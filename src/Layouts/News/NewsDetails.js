import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useFetch from '@App/Context/useFetch';
import Parser from 'html-react-parser';
import { Skeleton } from 'antd';

//images
import eye from '@Assets/Pic/Frame 88.png';
import BreadCrump from '@Components/Shared/BreadCrump/BreadCrump';
import DateMarker from '@Components/Shared/Date/DateMarker';

const NewsDetails = () => {
	const { state: id } = useLocation();

	const [NewsData, setNewsData] = useState();
	const [latestNews, setlatestNews] = useState([]);
	const [similarNews, setsimilarNews] = useState([]);

	useEffect(() => {
		setlatestNews([]);
		getNews.reFetch();
		getLatestNewsList.reFetch();
		getSimilarNewsList.reFetch();
	}, [id]);

	const getNews = useFetch({
		url: `NewsService/${id}`,
		method: 'GET',
		noHeader: true,
		setter: setNewsData,
	});

	const getLatestNewsList = useFetch({
		url: `NewsService/latestNews`,
		method: 'GET',
		noHeader: true,
		setter: setlatestNews,
	});

	const getSimilarNewsList = useFetch({
		url: `NewsService/${id}/similarNews`,
		method: 'GET',
		noHeader: true,
		setter: setsimilarNews,
	});
	//information of the news

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

	return (
		<div className='container'>
			<BreadCrump name={NewsData?.title} />
			<h3 className='Title-heading'>{NewsData?.title}</h3>
			<div className='Title'>
				<div className='Title-column text-color'>
					<section className='news__details'>
						{getNews.loading ? (
							<Skeleton
								avatar
								active
								paragraph={{ rows: 5 }}
								className='skeleton news__loading--details'
							/>
						) : (
							<>
								<div className='news__details--pic'>
									<img src={NewsData?.cover} alt={NewsData?.title} />
								</div>
								<div className='news__details--info'>
									<div className='d-flex gap-x-2'>
										<img src={eye} alt='eye' />
										<span>{NewsData?.view_number}</span>
									</div>
									<div className='news__item--date'>
										{NewsData?.published_time && (
											<DateMarker date={NewsData?.published_time} />
										)}
										- زمان مطالعه :{' '}
										<span>{getReadTime(NewsData?.read_time)}</span>{' '}
										دقیقه
									</div>
								</div>
								{NewsData?.text && (
									<div className='news__details--content'>
										{Parser(NewsData?.text)}
									</div>
								)}
							</>
						)}
					</section>
				</div>
				<div className='Title-column'>
					<h3 className='Title-heading-sidebar'>جدیدترین اخبار:</h3>
					<div className='Title-heads__container mr-bt-md'>
						{getLatestNewsList.loading && (
							<Skeleton
								avatar
								active
								paragraph={false}
								className='news__loading--lastNews'
							/>
						)}
						{latestNews?.results?.map(({ title, id, cover }) => {
							return (
								<Link
									key={id}
									to='/news/news-info'
									state={id}
									className='d-flex-align Title-heads subtitle'
								>
									<img className='ml-4' src={cover} alt={title} />
									<h4>{title}</h4>
								</Link>
							);
						})}
					</div>
					<h3 className='Title-heading-sidebar '>موضوعات مرتبط:</h3>
					<div className='Title-cards'>
						{getSimilarNewsList.loading && (
							<Skeleton
								avatar
								active
								paragraph={false}
								className='skeleton news__loading--related '
							/>
						)}
						{similarNews?.map(({ title, id, cover }) => {
							return (
								<Link
									key={id}
									to='/news/news-info'
									state={id}
									className='news__related'
								>
									<img className='image' src={cover} alt={title} />
									<h4>{title}</h4>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
export default NewsDetails;
