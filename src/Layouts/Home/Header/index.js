import React from 'react';
import Button from '@Components/Shared/Buttons/Button';
import SearchBox from '@Components/Layouts/Home/SearchBox';

// Assets
import { ReactComponent as ArrowLeftIcon } from '@Assets/Icons/arrow-left.svg';
import ImageSrc from '@Assets/Pic/home-header-bg.png';

const index = () => {
	return (
		<header className='home__header'>
			<div className='container'>
				<section className='home__header--content'>
					<div className='home__header--wrapper'>
						<article className='home__header--image'>
							<img src={ImageSrc} alt='study' />
						</article>
						<SearchBox />
					</div>
					<div className='home__header--box'>
						<h1 className='home__header--title'>
							آموزش تعاملی آنلاین برنامه نویسی
						</h1>
						<p>
							کدآموز، تخصصی ترین وب سایت آموزش برنامه نویسی
							<br /> به صورت کاملا آنلاین زیر نظر بهترین اساتید
						</p>
						<Button type='primary' icon={<ArrowLeftIcon />} large>
							همین حالا شروع کن
						</Button>
					</div>
				</section>
			</div>
		</header>
	);
};
export default index;
