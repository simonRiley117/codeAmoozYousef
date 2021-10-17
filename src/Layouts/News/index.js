import React from 'react';
import Cardxx from '@Components/Layouts/News/Cardxx';
import { cardData } from '@Components/Layouts/News/cardData';
import Button from '@Components/Shared/Buttons/Button';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';

const News = () => {
	return (
		<div className='news'>
			<h2 className='news-heading '>اخبار</h2>
			<div className='news-grid'>
				{cardData.map((card) => {
					return (
						<Cardxx key={card.id} borderRadius='15px' img={card.img}>
							<h3 className='card-heading mr-bt-sm title'>
								{card.header}
							</h3>
							<p className='card-paragraph mr-bt-sm subtitle'>
								{card.text}
							</p>
							<Button classes='news-button' type='default'>
								<Link to={`/news/${card.id}`}> بیشتر بخوانید...</Link>
							</Button>
						</Cardxx>
					);
				})}
			</div>
			<div className='Title-paging'>
				<Pagination defaultCurrent={1} total={cardData.length} />
			</div>
		</div>
	);
};

export default News;
