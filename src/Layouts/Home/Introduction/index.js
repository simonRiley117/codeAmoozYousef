import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Title from '@Components/Shared/Title';
import LinkBox from '@Components/Layouts/Home/LinkBox';

// Assets
import imageSrc from '@Assets/Pic/introduction.png';
import { ReactComponent as ControlIcon } from '@Assets/Icons/introduction-1.svg';
import { ReactComponent as GrandIcon } from '@Assets/Icons/introduction-2.svg';

// gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
	const introRef = useRef(null);
	const contentRef = useRef(null);
	useEffect(() => {
		let tl,
			texts = gsap.utils.toArray('.panel-text');

		texts.forEach((text, i) => {
			tl = gsap.timeline({
				scrollTrigger: {
					// trigger: '.home__process',
					start: () => 'top -' + window.innerHeight * i,
					end: () => '+=' + window.innerHeight,
					onToggle: (self) => {
						setActiveContent(text, self.isActive);

						secActiveIcons(text, self.direction);
					},
				},
			});
		});

		// ScrollTrigger.create({
		// 	trigger: introRef.current,
		// 	pin: true,
		// 	start: 'top 120',
		// 	end: () => 3 * window.innerHeight,
		// });

		return () => {
			tl.kill();
			// ScrollTrigger.killAll( ) ;
		};
	}, []);

	const secActiveIcons = (text, direction) => {
		let matchMedia = gsap.matchMedia();
		let activeIcon = '.icon.' + text.classList[1];
		console.log('secActiveIcons ~ activeIcon', activeIcon);
		matchMedia.add('(min-width: 992px)', () => {
			if (direction === 1) {
				gsap.to('.circle', { rotate: '+=44' });
			} else {
				gsap.to('.circle', { rotate: '-=45' });
				// gsap.to('.home__introduction--icons-item', { rotate: '+=45' });
			}
		});
		let icons = gsap.utils.toArray('.home__introduction--icons-item');
		icons.forEach((icon) => {
			icon.classList.remove('active');
		});
		document.querySelector(activeIcon)?.classList.add('active');
	};

	const setActiveContent = (content, isActive) => {
		isActive
			? gsap.to(content, {
					x: 0,
					autoAlpha: 1,
					duration: 0.6,
					ease: 'expo.out',
			  })
			: gsap.to(content, { x: '-100%', autoAlpha: 0 });
	};

	const handleSkip = () => {
		const top = document.querySelector('.home__process').offsetTop;
		// document.h.scrollTo({
		// 	behavior: 'smooth',
		// 	top,
		// });
	};

	return (
		<section className='py-24 home__introduction ' ref={introRef}>
			<div className='home__introduction--shape'></div>
			<div className='container'>
				<div className='grid home__introduction--wrapper'>
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
				</div>
				<span
					className='home__introduction--skip'
					title='ردشدن'
					onClick={() => handleSkip()}
				></span>
			</div>
		</section>
	);
};
export default Introduction;
