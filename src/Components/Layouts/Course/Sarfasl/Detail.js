import React, { useEffect, useState } from 'react';
import VideoPlayer from '@Components/Shared/VideoPlayer/VideoPlayer';
import useFetch from '@App/Context/useFetch';
import { useAuth } from '@App/Context/authContext';

function Detail({ contentUuid }) {
	console.log('Detail ~ contentUuid', contentUuid);
	const [content, setContent] = useState(null);
	console.log('Detail ~ content', content);
	const { token, authDispatch } = useAuth();

	const getContent = useFetch({
		url: `ContentService/${contentUuid}/getModalContent`,
		method: 'GET',
		noHeader: token ? false : true,
		setter: setContent,
	});

	useEffect(() => {
		getContent.reFetch();
	}, [contentUuid]);

	return (
		<>
			{getContent?.response ? (
				<div className='Detaile'>
					<div className='Detaile__hederBox'>
						<p>{content.title}</p>
						{/*<p>پایتون چیست؟</p>*/}
					</div>
					<div>
						<VideoPlayer src={content.video} />
					</div>
					<p className='Detaile__txt leading-loose'>
						{content.short_description}
					</p>
				</div>
			) : null}
		</>
	);
}

export default Detail;
