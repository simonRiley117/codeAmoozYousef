import React from 'react';
import BreadCrump from "../../Components/Shared/BreadCrump/BreadCrump";
//images
import img1 from '../../Assets/Images/Pic/human-friendly-office 1.png'
import img2 from '../../Assets/Images/Pic/Perfect-Fit-scaled 1.png'

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
        <div className="about container">
            <div className="about-breadCrumb">
                {menu.length !== 0 && <BreadCrump item={menu} />}
            </div>
            <h1 className="about-heading title__box">
                درباره ما
            </h1>
            <div className="about-container flex flex-col items-center my-12">
                <span className="about-circle about-circle__2">
                    شروع
                    <img src={img1} alt="human office" className="about-img__1"/>
                </span>
                <div className="about-line"></div>
                <span className="about-circle about-circle__1">
                    1399
                    <div className="about-text__box about-text__box-1">
                         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
                    </div>
                </span>
                <div className="about-line"></div>
                <span className="about-circle about-circle__1">
                    1400
                    <img src={img2} alt="perfect scale" className="about-img__2"/>
                    <div className="about-text__box about-text__box-2">
                         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
                    </div>
                </span>
                <div className="about-line"></div>
                <span className="about-circle about-circle__2">
                    داستان ما <br/> تموم <br/> نمیشه
                    <div className="about-dots">...</div>
                </span>
                <p className="about-conclusion">
                    همراه با پیشرفت کنید ...
                </p>
            </div>
        </div>
    );
};

export default AboutUs;