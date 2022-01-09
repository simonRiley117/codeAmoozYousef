import React from 'react';

function Detaile({ title, intro, cover }) {
	return (
		<div className='Detaile AboutDetaile'>
			<div className='AboutDetaile__hederBox'>
				<h2 className='font-bold'>{title}</h2>
			</div>
			<div className='AboutDetaile__cover mb-6 flex justify-center'>
				<img src={cover} alt={title} className='object-cover' />
			</div>
			<div className='AboutDetaile__hederBox'>
				<h2 className='font-bold'>درباره دوره</h2>
			</div>
			<p className='AboutDetaile__txt leading-loose'>{intro}</p>
		</div>
	);
}

export default Detaile;
