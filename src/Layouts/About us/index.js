import React from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
// import { motion } from 'framer-motion';
//images
import img1 from "@Assets/Pic/about-1.png";
import img2 from "@Assets/Pic/about-2.png";

const AboutUs = () => {
  return (
    <section className="about ">
      <div className="container">
        <BreadCrump />
        <div className="about-heading title__box">
          <h2 className="">درباره ما</h2>
        </div>

        <section className="about__container">
          <span className="about__circle big">شروع</span>
          <div className="about__row">
            <div className="about__row--box flex-row-reverse">
              <span className="about__circle small">1399</span>
              <div className="about__message">
                <i></i>
                <p>
				کدآموز یکی از پروژه‌های زیرمجموعه و محصول شرکت میزان گستر علم و دانش است. یکی از فعالیت‌های شرکت خلاق میزان گستر علم و دانش، تربیت و آموزش نیرو های متخصص و حرفه ای برای ورود به بازار کار است.

                </p>
              </div>
            </div>
            <div className="about__pic left-0">
              <img src={img1} alt="human office" className="image" />
            </div>
          </div>
          <div className="about__row reverse">
            <div className="about__row--box ">
              <span className="about__circle small">1400</span>
              <div className="about__message rotate">
                <i></i>
                <p>
                سامانه کدآموز، به عنوان یک پلتفرم تخصصی در حوزه توسعه نرم‌افزار و برنامه‌نویسی، خدمات جامعی را فراهم می‌کند. این پلتفرم از طریق دوره‌های آموزشی با کیفیت و ارزیابی‌های تعاملی به دانشجوان این امکان را می‌دهد که مهارت‌های برنامه‌نویسی خود را بهبود ببخشند.
                </p>
              </div>
            </div>
            <div className="about__pic">
              <img src={img2} alt="human office" className="image" />
            </div>
          </div>
          <div className=" dots">
            <span className="about__circle large ">داستان ما تموم نمیشه</span>
          </div>
          <p className="about-conclusion">همراه با پیشرفت کنید ...</p>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;

{
  /* <div className='about__container flex flex-col items-center my-12'>
					<span className='about__circle big'>شروع</span>
					<div className='about__container--left'>
						<div className='about-line'></div>
						<div className='about__pic'>
							<img src={img1} alt='human office' className='image' />
						</div>
					</div>
					<div className='about__container--right'>
						<span className='about__circle small'>1399</span>
						<div className='about__box'>
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
					<div className='about-line'></div>
					<div className='about__container--left'>
						<span className='about__circle small'>1400</span>
						<div className='about__box'>
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
					<div className='about-line'></div>
					<div className='about__container--right dots'>
						<span className='about__circle large '>
							داستان ما تموم نمیشه
						</span>
						<div className='about__pic'>
							<img src={img2} alt='human office' className='image' />
						</div>
					</div>
					<p className='about-conclusion'>همراه با پیشرفت کنید ...</p>
				</div> */
}

{
  /* <section className='about__timeline'>
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
				</section> */
}
