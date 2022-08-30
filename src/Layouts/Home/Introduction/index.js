import React from 'react';

// Components
import Title from '@Components/Shared/Title';
import LinkBox from '@Components/Layouts/Home/LinkBox';

// Assets
import imageSrc from '@Assets/Pic/introduction.png';
import { ReactComponent as ControlIcon } from '@Assets/Icons/introduction-1.svg';
import { ReactComponent as GrandIcon } from '@Assets/Icons/introduction-2.svg';

const Introduction = () => {
	return (
		<section className='home__introduction '>
			<div className='container'>
				<div className='home__introduction--wrapper grid'>
					<Title> آنچه کدآموز را خاص می‌کند </Title>

					<div className='home__introduction--pic relative'>
						<img src={imageSrc} alt='codeamooz' />
						<div className='home__introduction--icons'>
							<div className='home__introduction--icons-item large '>
								<ControlIcon />
							</div>
							<div className='home__introduction--icons-item'>
								<GrandIcon />
							</div>
							<div className='home__introduction--icons-item'>
								<GrandIcon />
							</div>
						</div>
					</div>
					<div className='home__introduction--content'>
						<div className='mb-28'>
							<h3 className='mb-10'>
								دوره های جامع آموزشی به زبان فارسی
							</h3>
							<p>
								جامع آموزشی به زبان فارسی دوره های جامع آموزشی به زبان
								فارسی لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
								صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
								متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
								است،
							</p>
						</div>
						<LinkBox />
					</div>
				</div>
			</div>
		</section>
	);
};
export default Introduction;
