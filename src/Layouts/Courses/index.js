import React from 'react';
import Slider from "react-slick";
import CourseCardBg from "../../Components/Shared/Cards/CourseCardBg";
import Searchxx from "./Searchxx";
import {Swiper, SwiperSlide} from 'react-swipe'
// images
import arrow from '../../Assets/Images/Icons/Path 497.png'
import nexArrow from '../../Assets/Images/Icons/Path 498.png'
import Coursecardsm from "../../Components/Shared/Cards/CourseCardSm";

const Courses = () => {
    //react slick settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<img src={nexArrow} alt="arrow" />,
        prevArrow:<img src={arrow} alt="arrow" />,
    };
    const secondSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow:<img src={nexArrow} alt="arrow" />,
        prevArrow:<img src={arrow} alt="arrow" />,
    };
    // just some testing array to be able to map on cards
    const cards = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
    ];
    return (
       <div className="courses px-40 mt-60">
           <Slider {...settings}>
               {
                   cards.map((card, index) => {
                       return (
                           <CourseCardBg key={card.id} />
                       );
                   })
               }
           </Slider>
           <Searchxx />
           <h3 className="text-4xl font-bold mb-12">
               پرطرفدار ترین دوره ها
           </h3>
           <Slider  {...secondSettings}>
               {
                   cards.map((card, index) => {
                       return (
                           <Coursecardsm key={card.id} />
                       );
                   })
               }
           </Slider>
       </div>
    );
};
export default Courses;