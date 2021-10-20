import React from 'react';
import Header from './Header';
import Properties from './Properties';
import Work from './Work';
import Offers from './Offers';
import News from './News';

const Home = () => {
	return (
		<div className=''>
			<Header />
			<Properties />
			<Work />
			<Offers />
			<News />
		</div>
	);
};
export default Home;
