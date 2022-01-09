import React, { useState, useRef } from 'react';
import icon from '@Assets/Icons/Frame 5.svg';
import classNames from 'classnames';

function VideoPlayer({ className, src }) {
	const [isPlay, setPlay] = useState(false);
	console.log('VideoPlayer ~ isPlay', isPlay);
	const videoRef = useRef();
	const handlePlay = () => {
		const video = videoRef.current;
		setPlay(video.paused);
		video.paused ? video.play() : video.pause();
	};
	return (
		<div
			className={classNames('VideoPlayer__videoBox relative', [className])}
		>
			{/* <video className="VideoPlayer__video" controls={play} autoPlay={play}>
        <source
          src={props.src}
          type="video/mp4"
          className="VideoPlayer__video"
        />
        Your browser does not support the video tag.
      </video> */}

			<video
				ref={videoRef}
				src={src}
				poster={process.env.PUBLIC_URL + '/poster.png'}
				className='VideoPlayer__video'
				controls
				controlsList='nodownload'
				onPause={() => setPlay(false)}
				onPlay={() => setPlay(true)}
				preload='none'
			/>
			{!isPlay && (
				<div className='VideoPlayer__imgBox'>
					<img src={icon} alt={icon} onClick={handlePlay} />
				</div>
			)}
		</div>
	);
}

export default VideoPlayer;
