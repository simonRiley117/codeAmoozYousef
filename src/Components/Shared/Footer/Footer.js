import React from 'react';
import neshan from '@Assets/Pic/etminan.png';
import enamad from '@Assets/Pic/enamad.png';
import logo from '@Assets/Logo/codlogo.png';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';

const Footer = () => {
	return (
		<footer className='footer relative overflow-hidden mt-8'>
			<div className='footer__wrapper relative'>
				<div className='container '>
					<section className='footer__content'>
						<article className='footer__about flex flex-col items-center'>
							<h2>درباره ما</h2>
							<p>
								ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
								و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
								روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
								شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
								بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و
							</p>
						</article>
						<div className='flex flex-col footer__access'>
							<h2>دسترسی سریع</h2>
							<Link to='/'>سوالات متداول</Link>
							<Link to='/'>همکاری با ما</Link>
							<Link to='/'>دوره ها</Link>
						</div>
						<div className='flex flex-col footer__link '>
							<Link to='/'>codeamooz</Link>
							<Link to='/'>codeamooz</Link>
							<Link to='/'>codeamooz</Link>
						</div>
						<div className='flex items-center footer__symbols'>
							<article
								className='footer__symbols--img'
								onClick={() =>
									window.open(
										'https://trustseal.enamad.ir/?id=251667&code=ORS8gimDMkFKmWVzad3T',
										'Popup',
										'toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30'
									)
								}
							>
								{/* <a
                  referrerpolicy="origin"
                  target="_blank"
                  href="https://trustseal.enamad.ir/?id=251667&code=ORS8gimDMkFKmWVzad3T" rel="noreferrer" 
                > */}
								<img
									referrerPolicy='origin'
									src='https://Trustseal.eNamad.ir/logo.aspx?id=251667&amp;Code=ORS8gimDMkFKmWVzad3T'
									alt=''
									// style='cursor:pointer'
									data-no-retina
									id='ORS8gimDMkFKmWVzad3T'
								/>
								{/* </a> */}
							</article>
							<article
								className='footer__symbols--img'
								onClick={() =>
									window.open(
										'https://logo.samandehi.ir/Verify.aspx?id=124402&p=rfthuiwkaodsaodsobpduiwk',
										'Popup',
										'toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30'
									)
								}
							>
								<img
									referrerpolicy='origin'
									id='jxlznbqewlaowlaoesgtnbqe'
									// style='cursor:pointer'

									alt='logo-samandehi'
									src='https://logo.samandehi.ir/logo.aspx?id=124402&p=nbpdodrfshwlshwllymaodrf'
								/>
							</article>
						</div>
					</section>
				</div>
				<div className='footer__logo absolute'>
					<img src={logo} alt='Code Amooz' />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
{
	/* <div className=' relative'>
			<div className='footer relative w-screen '>
				<div className=' flex items-center justify-between footer__detail'>
					<div className='footer__AboutUsBox flex flex-col  p-16'>
						<p className='footer__AboutUsBox-title text-4xl	font-semibold'>
							درباره ما
						</p>
						<p className='footer__AboutUsBox-text text-center text-2xl font-medium leading-8	'>
							Lorem ipsum dolor sit amet, exerci legere percipitur his
							ex. Te dolor delectus necessitatibus qui. Usu tantas
							officiis ea. Et per oratio nusquam menandri, mel ex esse
							inani graece. Dico case id nec. Et nec soluta molestiae
							accommodare.
						</p>
					</div>
					<div className=' flex items-start w-full footer__detailBox justify-center'>
						<div className='flex flex-col footer__accessBox'>
							<p className='footer__accessTitle text-4xl font-semibold'>
								دسترسی سریع
							</p>
							<ul className='footer__accessList text-2xl font-medium'>
								<li>سوالات متداول</li>
								<li>همکاری با ما</li>
								<li>دوره ها</li>
							</ul>
						</div>
						<div className='flex flex-col footer__contenttxt'>
							<p className='text-4xl font-semibold'>codeamooz</p>
							<p className='text-4xl font-semibold'>codeamooz</p>
							<p className='text-4xl font-semibold'>codeamooz</p>
						</div>
					</div>
					<div className='flex items-center footer__SambolsBox'>
						<article className='footer__SambolsBox--img'>
							<a
								referrerpolicy='origin'
								target='_blank'
								href='https://trustseal.enamad.ir/?id=251667&amp;Code=ORS8gimDMkFKmWVzad3T' rel="noreferrer"
							>
								<img
									referrerpolicy='origin'
									src='https://Trustseal.eNamad.ir/logo.aspx?id=251667&amp;Code=ORS8gimDMkFKmWVzad3T'
									alt='logo-eNamad'
									// style='cursor:pointer'
									id='ORS8gimDMkFKmWVzad3T'
								/>
							</a>
							
						</article>
						<article className='footer__SambolsBox--img'>
							<img
								referrerpolicy='origin'
								id='jxlznbqewlaowlaoesgtnbqe'
								// style='cursor:pointer'
								onClick={() =>
									window.open(
										'https://logo.samandehi.ir/Verify.aspx?id=124402&p=rfthuiwkaodsaodsobpduiwk',
										'Popup',
										'toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30'
									)
								}
								alt='logo-samandehi'
								src='https://logo.samandehi.ir/logo.aspx?id=124402&p=nbpdodrfshwlshwllymaodrf'
							/>
						</article>
					</div>
				</div>
				<div className='footer__GreenLine '></div>
			</div>
			<div className='absolute footer__greenPart'>
				<div className='absolute top-1/2 footer__logo'>
					<img src={logo} alt={logo} />
				</div>
			</div>
		</div> */
}
