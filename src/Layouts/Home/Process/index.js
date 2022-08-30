import React from 'react';

// Components
import Title from '@Components/Shared/Title';
import ProcessItem from '@Components/Layouts/Home/ProcessItem';

// Assets
import { ReactComponent as imageProcess1 } from '@Assets/Icons/process-1.svg';
import { ReactComponent as imageProcess2 } from '@Assets/Icons/process-2.svg';
import { ReactComponent as imageProcess3 } from '@Assets/Icons/process-3.svg';
import { ReactComponent as WaveDashed } from '@Assets/Icons/wave-dash.svg';
import { ReactComponent as WaveDashedLarge } from '@Assets/Icons/wave-dash-large.svg';
import Link from '@Components/Shared/Buttons/Link';

const index = () => {
	return (
		<section className='home__process'>
			<div className='container'>
				<div className='flex flex-col items-center'>
					<Title>یک پروسه، چهار توقفگاه</Title>
					<span className='wave-up'>
						<WaveDashedLarge />
					</span>
					<div className='home__process--steps flex flex-col'>
						<ProcessItem
							title='ثبت نام و انتخاب دوره'
							Icon={imageProcess1}
							data-count='1'
						>
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
							و با استفاده از طراحان گرافیک است.
						</ProcessItem>
						<WaveDashed />
						<ProcessItem
							title='ثبت نام و انتخاب دوره'
							Icon={imageProcess2}
							data-count='2'
						>
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
							و با استفاده از طراحان گرافیک است.
						</ProcessItem>
						<WaveDashed />
						<ProcessItem
							title='ثبت نام و انتخاب دوره'
							Icon={imageProcess3}
							data-count='3'
						>
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
							و با استفاده از طراحان گرافیک است.
						</ProcessItem>
						<WaveDashed />
						<ProcessItem
							title='ثبت نام و انتخاب دوره'
							Icon={imageProcess1}
							data-count='4'
						>
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
							و با استفاده از طراحان گرافیک است.
						</ProcessItem>
						<WaveDashedLarge />
					</div>
					<div className='home__process--action'>
						<Link to='/courses' type='primary'>
							همه دوره ها
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
export default index;
