import React, { useState, useEffect } from 'react';
import { cardData } from '@Components/Layouts/News/cardData';
import Cardxx from '@Components/Layouts/News/Cardxx';
import { Link, useLocation } from 'react-router-dom';
import AntParagraph from '../../Components/Shared/AntParagraph';
import Detailsxx from '../../Components/Layouts/News/Detailsxx';
//images
import datebook from '@Assets/Pic/Frame 87.png';
import eye from '@Assets/Pic/Frame 88.png';

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
			<img className='Title-date' src={datebook} alt='date' />
			<span className=' light'>{api.time}</span>
			<span className='margin-left light'>{api.date}</span>
			<img className='Title-seen' src={eye} alt='eye' />
			<span className='light'>{api.seen}</span>
		</div>
	);
	return (
		<section className='container'>
			<h3 className='Title-heading title'>{api.header}</h3>
			<div className='Title'>
				<div className='Title-column '>
					<Detailsxx
						borderRadius='15px 15px 0 0'
						img={api.img}
						info={info}
					>
						<p>{api.paragraph}</p>
						<p>{api.paragraph}</p>
						<h4>{api.title}</h4>
						<p>{api.paragraph}</p>
						<p>{api.paragraph}</p>
					</Detailsxx>
				</div>
				<div className='Title-column text-color'>
					<h3 className='Title-heading-sidebar'>جدیدترین اخبار:</h3>
					<div className='Title-heads__container mr-bt-md'>
						{cardData.map((card) => {
							return (
								<p key={card.id} className='Title-heads subtitle'>
									<Link
										to={{
											pathname: '/news/NewsDetails',
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
					<h3 className='Title-heading-sidebar'>موضوعات مرتبط:</h3>
					<div className='Title-cards'>
						{limitedApi.map((card) => {
							return (
								<div key={card.id} className='mr-bt-sm'>
									<Link
										to={{
											pathname: '/news/NewsDetails',
											state: {
												id: card.id,
											},
										}}
									>
										<Cardxx
											borderRadius='15px 15px 0 0'
											img={card.img}
										>
											<span className='card-title '>
												{card.header}
											</span>
										</Cardxx>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
export default NewsDetails;
