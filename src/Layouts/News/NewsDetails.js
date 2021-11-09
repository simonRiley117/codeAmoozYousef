import React, { useState, useEffect } from 'react';
import { cardData } from '@Components/Layouts/News/cardData';
import NewsItemContainer from '@Components/Layouts/News/NewsItemContainer';
import { Link, useLocation } from 'react-router-dom';
import AntParagraph from '../../Components/Shared/AntParagraph';
import NewsDetailsBox from '../../Components/Layouts/News/NewsDetailsBox';
//images
import datebook from '@Assets/Pic/Frame 87.png';
import eye from '@Assets/Pic/Frame 88.png';
import BreadCrump from '@Components/Shared/BreadCrump/BreadCrump';

const NewsDetails = () => {
	const [id, setId] = useState('1');
	const location = useLocation();
	useEffect(() => {
		setId(location.state.id - 1);
	}, [location]);
	//we should be requesting for api but we don't gave any api so
	const api = cardData[id];
	const limitedApi = cardData.slice(0, 3);
	//information of the news
	const info = (
		<div className='Title-details d-flex'>
			<div className='ml-6 d-flex'>
				<img src={datebook} alt='date' />
				<span>{api.time}</span>
				<span>{api.date}</span>
			</div>
			<div className=' d-flex'>
				<img src={eye} alt='eye' />
				<span>{api.seen}</span>
			</div>
		</div>
	);
	return (
		<div className='container'>
			<BreadCrump title={api.header} />
			<h3 className='Title-heading'>{api.header}</h3>
			<div className='Title'>
				<div className='Title-column text-color'>
					<NewsDetailsBox
						borderRadius='15px 15px 0 0'
						img={api.img}
						info={info}
					>
						<p>{api.paragraph}</p>
						<p>{api.paragraph}</p>
						<h4>{api.title}</h4>
						<p>{api.paragraph}</p>
						<p>{api.paragraph}</p>
					</NewsDetailsBox>
				</div>
				<div className='Title-column'>
					<h3 className='Title-heading-sidebar'>جدیدترین اخبار:</h3>
					<div className='Title-heads__container mr-bt-md'>
						{cardData.map((card) => {
							return (
								<p key={card.id} className='Title-heads subtitle'>
									<Link
										to={{
											pathname: '/news/news-info',
											state: {
												id: card.id,
											},
										}}
									>
										{card.header}
									</Link>
								</p>
							);
						})}
					</div>
					<h3 className='Title-heading-sidebar '>موضوعات مرتبط:</h3>
					<div className='Title-cards'>
						{limitedApi.map((card) => {
							return (
								<div key={card.id} className='mr-bt-sm Title-linked'>
									<Link
										to={{
											pathname: '/news/news-info',
											state: {
												id: card.id,
											},
										}}
									>
										<NewsItemContainer
											borderRadius='15px 15px 0 0'
											img={card.img}
										>
											<h3 className='orange subtitle'>
												{card.header}
											</h3>
										</NewsItemContainer>
									</Link>
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
