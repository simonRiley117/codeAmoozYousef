import React from 'react';

// Components
import Link from '@Components/Shared/Buttons/Link';
import SearchBox from '@Components/Layouts/Home/SearchBox';

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
							<div className='flex items-center home__header--action gap-x-10 '>
								<Link to='/courses' type='primary'>
									همه دوره ها
								</Link>
								<Link to='/'>همکاران و اساتید</Link>
							</div>
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
