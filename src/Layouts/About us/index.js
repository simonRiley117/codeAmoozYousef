import React from 'react';
import BreadCrump from '../../Components/Shared/BreadCrump/BreadCrump';
//images
import img1 from '@Assets/Pic/about-1.png';
import img2 from '@Assets/Pic/about-2.png';

const AboutUs = () => {
	const menu = [
		{
			name: 'صفحه اصلی',
			rout: '',
		},
		{
			name: 'درباره ما',
			rout: 'about-us',
		},
	];
	return (
		<section className='about '>
			<div className='container'>
				<BreadCrump />
				<div className='about-heading title__box'>
					<h2 className=''>درباره ما</h2>
				</div>
				{/* <section className='about__timeline'>
					<span className='about__timeline--circle'>
						<span>شروع</span>
					</span>
					<div className='about__timeline--item'>
						<div className='about__timeline--content'>
							<i></i>
							<p>
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
								چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
								بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
								برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
								هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
								و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
								متخصصان را می طلبد، تا با نرم افزارها شناخت
							</p>
						</div>
						<div className='about__timeline--circle line flex-grow'>
							<span>1399</span>
						</div>
						<div className='about__timeline--pic '>
							<img src={img2} alt='codeamooz' className='image' />
						</div>
					</div>
					<div className='about__timeline--item'>
						<div className='about__timeline--pic '>
							<img src={img2} alt='codeamooz' className='image' />
						</div>
						<div className='about__timeline--circle line flex-grow'>
							<span>1400</span>
						</div>
						<div className='about__timeline--content'>
							<i></i>
							<p>
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
								چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
								بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
								برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
								هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
								و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
								متخصصان را می طلبد، تا با نرم افزارها شناخت
							</p>
						</div>
					</div>
				</section> */}
				<div className='about-container flex flex-col items-center my-12'>
					<span className='about-circle about-circle__2'>
						شروع
						<img src={img1} alt='human office' className='about-img__1' />
					</span>
					<div className='about-line'></div>
					<span className='about-circle about-circle__1'>
						1399
						<div className='about-text__box about-text__box-1'>
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
							با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
							و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
							تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
							کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
							آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
							افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
							طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
						</div>
					</span>
					<div className='about-line'></div>
					<span className='about-circle about-circle__1'>
						1400
						<img
							src={img2}
							alt='perfect scale'
							className='about-img__2'
						/>
						<div className='about-text__box about-text__box-2'>
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
							با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
							و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
							تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
							کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
							آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
							افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
							طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
						</div>
					</span>
					<div className='about-line'></div>
					<span className='about-circle about-circle__2'>
						داستان ما <br /> تموم <br /> نمیشه
						<div className='about-dots'>...</div>
					</span>
					<p className='about-conclusion'>همراه با پیشرفت کنید ...</p>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
