import React, { useState } from 'react';
import NewsItemContainer from '@Components/Layouts/News/NewsItemContainer';
import Link from '@Components/Shared/Buttons/Link';
import Pagination from '@Components/Shared/Pagination';
import BreadCrump from '@Components/Shared/BreadCrump/BreadCrump';
import useFetch from '@App/Context/useFetch';
import { NewsItem, LoadingNewsItem } from '@Components/Layouts/News/NewsItem';
import _ from 'lodash';

const News = () => {
	const [newsList, setNewsList] = useState([]);
	const [pagination, setpagination] = useState({
		current: 1,
		pageSize: newsList?.page_count,
	});

	const handleSetData = (data) => {
		setNewsList(data);
	};

	const getNewsList = useFetch({
		url: `NewsService`,
		method: 'GET',
		noHeader: true,
		setter: handleSetData,
		pagination: pagination,
	});

	return (
		<div className='news container'>
			<BreadCrump />
			<h2 className='news-heading '>اخبار</h2>
			<div className='news-grid'>
				{getNewsList.loading &&
					_.range(4).map((key) => <LoadingNewsItem key={key} />)}
				{newsList?.results?.map((card) => (
					<NewsItem key={card.id} {...card} />
				))}
			</div>
			<div className='Title-paging'>
				<Pagination
					current={pagination.current}
					// total={cardData.length}
					total={newsList?.page_count}
					onChange={(page) =>
						setpagination({ ...pagination, current: page })
					}
				/>
			</div>
		</div>
	);
};

export default News;
