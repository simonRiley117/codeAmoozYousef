import React, { useState } from 'react';
import NewsItemContainer from '@Components/Layouts/News/NewsItemContainer';
import { Link, useLocation } from 'react-router-dom';
import useFetch from '@App/Context/useFetch';
import Parser from 'html-react-parser';

//images
import datebook from '@Assets/Pic/Frame 87.png';
import eye from '@Assets/Pic/Frame 88.png';
import BreadCrump from '@Components/Shared/BreadCrump/BreadCrump';
import DateMarker from '@Components/Shared/Date/DateMarker';

const NewsDetails = () => {
	const { state: id } = useLocation();

	const [NewsData, setNewsData] = useState();
	const [latestNews, setlatestNews] = useState([]);
	const [similarNews, setsimilarNews] = useState([]);

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

	return (
		<div className='container'>
			<BreadCrump name={NewsData?.title} />
			<h3 className='Title-heading'>{NewsData?.title}</h3>
			<div className='Title'>
				<div className='Title-column text-color'>
					<section className='news__details'>
						<div className='news__details--pic'>
							<img src={NewsData?.cover} alt={NewsData?.title} />
						</div>
						<div className='news__details--info'>
							<div className='d-flex gap-x-2'>
								<img src={eye} alt='eye' />
								<span>4</span>
							</div>
							<div className='news__item--date'>
								<DateMarker />-
								<p>
									خواندن در <span>8</span> دقیقه
								</p>
							</div>
						</div>
						{NewsData?.text && (
							<div className='news__details--content'>
								{Parser(NewsData?.text)}
							</div>
						)}
					</section>
				</div>
				<div className='Title-column'>
					<h3 className='Title-heading-sidebar'>جدیدترین اخبار:</h3>
					<div className='Title-heads__container mr-bt-md'>
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
						{similarNews?.map(({ title, id, cover }) => {
							return (
								<div
									key={id}
									to='/news/news-info'
									state={id}
									className='news__related'
									replace
								>
									<img className='image' src={cover} alt={title} />
									<h4>{title}</h4>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
export default NewsDetails;
