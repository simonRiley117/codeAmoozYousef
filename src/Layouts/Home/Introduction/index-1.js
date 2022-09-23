import React, { useRef } from 'react';
import {
	useScroll,
	motion,
	useSpring,
	useMotionValue,
} from 'framer-motion/dist/framer-motion';

// Components
import Title from '@Components/Shared/Title';
import LinkBox from '@Components/Layouts/Home/LinkBox';

// Assets
import imageSrc from '@Assets/Pic/introduction.png';
import { ReactComponent as ControlIcon } from '@Assets/Icons/introduction-1.svg';
import { ReactComponent as GrandIcon } from '@Assets/Icons/introduction-2.svg';

const Introduction = () => {
	const introRef = useRef(null);
	const contentRef = useRef(null);

	const x = useMotionValue(0);
	const spring = useSpring(x);
	console.log('Introduction ~ scrollYProgress', spring);
	return (
		<section className='home__introduction py-24 ' ref={introRef}>
			<div className='home__introduction--shape'></div>
			<div className='container'>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className='grid home__introduction--wrapper'
				>
					<Title> آنچه کدآموز را خاص می‌کند </Title>
					<div className='home__introduction--assets'>
						<div className='home__introduction--assets-pic'>
							<img src={imageSrc} alt='codeamooz' className='image' />
						</div>
						<div className='home__introduction--icons circle' id=''>
							<div className='home__introduction--icons-item icon creative '>
								<ControlIcon />
							</div>
							<div className='home__introduction--icons-item icon website'>
								<GrandIcon />
							</div>
							<div className='home__introduction--icons-item icon strategy'>
								<GrandIcon />
							</div>
						</div>
					</div>

					<div className='home__introduction--content ' ref={contentRef}>
						<div className='panel-text creative'>
							<div className='mb-16 sm:mb-28'>
								<h3 className='mb-10'>
									دوره های جامع آموزشی به زبان فارسی
								</h3>
								<p>
									جامع آموزشی به زبان فارسی دوره های جامع آموزشی به
									زبان فارسی لورم ایپسوم متن ساختگی با تولید سادگی
									نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
									است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
									سطرآنچنان که لازم است،
								</p>
							</div>
							<LinkBox />
						</div>
						<div className='panel-text website'>
							<div className='mb-16 sm:mb-28'>
								<h3 className='mb-10'>
									websiteدوره های جامع آموزشی به زبان فارسی
								</h3>
								<p>
									جامع آموزشی به زبان فارسی دوره های جامع آموزشی به
									زبان فارسی لورم ایپسوم متن ساختگی با تولید سادگی
									نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
									است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
									سطرآنچنان که لازم است،
								</p>
							</div>
							<LinkBox />
						</div>
						<div className='panel-text strategy'>
							<div className='mb-16 sm:mb-28'>
								<h3 className='mb-10'>
									strategyدوره های جامع آموزشی به زبان فارسی
								</h3>
								<p>
									جامع آموزشی به زبان فارسی دوره های جامع آموزشی به
									زبان فارسی لورم ایپسوم متن ساختگی با تولید سادگی
									نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
									است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
									سطرآنچنان که لازم است،
								</p>
							</div>
							<LinkBox />
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
export default Introduction;
