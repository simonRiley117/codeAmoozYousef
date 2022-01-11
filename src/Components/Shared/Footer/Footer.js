import React from 'react';
import neshan from '@Assets/Pic/etminan.png';
import enamad from '@Assets/Pic/enamad.png';
import logo from '@Assets/Logo/codlogo.png';

const Footer = () => {
	return (
		<div className=' relative'>
			<div className='Footer relative w-screen '>
				<div className=' flex items-center justify-between Footer__detail'>
					<div className='Footer__AboutUsBox flex flex-col  p-16'>
						<p className='Footer__AboutUsBox-title text-4xl	font-semibold'>
							درباره ما
						</p>
						<p className='Footer__AboutUsBox-text text-center text-2xl font-medium leading-8	'>
							Lorem ipsum dolor sit amet, exerci legere percipitur his
							ex. Te dolor delectus necessitatibus qui. Usu tantas
							officiis ea. Et per oratio nusquam menandri, mel ex esse
							inani graece. Dico case id nec. Et nec soluta molestiae
							accommodare.
						</p>
					</div>
					<div className=' flex items-start w-full Footer__detailBox justify-center'>
						<div className='flex flex-col Footer__accessBox'>
							<p className='Footer__accessTitle text-4xl font-semibold'>
								دسترسی سریع
							</p>
							<ul className='Footer__accessList text-2xl font-medium'>
								<li>سوالات متداول</li>
								<li>همکاری با ما</li>
								<li>دوره ها</li>
							</ul>
						</div>
						<div className='flex flex-col Footer__contenttxt'>
							<p className='text-4xl font-semibold'>codeamooz</p>
							<p className='text-4xl font-semibold'>codeamooz</p>
							<p className='text-4xl font-semibold'>codeamooz</p>
						</div>
					</div>
					<div className='flex items-center Footer__SambolsBox'>
						<article className='Footer__SambolsBox--img'>
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
						<article className='Footer__SambolsBox--img'>
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
				<div className='Footer__GreenLine '></div>
			</div>
			<div className='absolute Footer__greenPart'>
				<div className='absolute top-1/2 Footer__logo'>
					<img src={logo} alt={logo} />
				</div>
			</div>
		</div>
	);
};

export default Footer;
