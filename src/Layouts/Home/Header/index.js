import React from 'react';

// Components
import SearchBox from '@Components/Layouts/Home/SearchBox';
import LinkBox from '@Components/Layouts/Home/LinkBox';

// Assets
import { ReactComponent as HeaderPic } from '@Assets/Icons/home-header.svg';

const Header = () => {
	return (
		<header className='home__header'>
			<div className='container'>
				<div className='flex flex-col items-center'>
					<div className='flex items-end justify-between home__header--wrapper'>
						<section className='pb-2 home__header--content'>
							<h1 className='home__header--title text-primary '>
								یه بستر داریم، تا نداره!
							</h1>
							<p className='home__header--caption mb-28'>
								کدآموز تخصصی‌ترین وب‌سایت آموزش{' '}
								<strong>کاملاً آنلاین</strong> برنامه‌نویسی زیر نظر
								برترین اساتید
							</p>
							<LinkBox dark/>
						</section>
						<div className='home__header--pic'>
							<HeaderPic />
						</div>
					</div>

					<SearchBox />
				</div>
			</div>
		</header>
	);
};
export default Header;
