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
                           دوره‌های جامع آموزشی به زبان فارسی
                        </h3>
                        <p>
                           اینجا کدآموز است.جایی برای یادگیری برنامه نویسی و
                           توسعه نرم‌افزار به (زبان فارسی) با امکان تمرین و رفع
                           اشکال و کلی فعالیت هیجان انگیز. در «کدآموز» دوره‌های
                           آموزشی جامع و کاملی به (زبان فارسی) ارائه می‌کنیم که
                           به شما امکان دهد به عنوان یک برنامه‌نویس حرفه‌ای شروع
                           به کار کنید و یا مهارت‌های خود را توسعه بخشید.
                        </p>
                     </div>
                     <LinkBox />
                  </div>
                  <div className='panel-text website'>
                     <div className='mb-16 sm:mb-28'>
                        <h3 className='mb-10'>
                           فهرستی جامع از وب سایت‌های مناسب برای مطالعه بیشتر
                           مرتبط با برنامه نویسی
                        </h3>
                        <p>
                           در «کدآموز» سعی داریم برای علاقه‌مندان به دنیای توسعه
                           نرم‌افزار و برنامه‌نویسی، فضایی برای یادگیری به زبان
                           فارسی و امکان پیشرفت را فراهم کنیم. در این بخش از
                           سایت، برای دسترسی راحت‌تر و بهتر به منابع مفید مرتبط
                           با برنامه‌نویسی، فهرستی جامع از وب‌سایت‌های مناسب
                           برای مطالعه بیشتر براتون گرداوری کردیم
                        </p>
                     </div>
                     <LinkBox />
                  </div>
                  <div className='panel-text strategy'>
                     <div className='mb-16 sm:mb-28'>
                        <h3 className='mb-10'>
                           تعیین راهبرد مناسب برای یادگیری برنامه‌نویسی
                        </h3>
                        <p>
                           ما کمکتون می‌کنیم به عنوان یه برنامه‌نویس حرفه‌ای،
                           شروع به کار کنید. اینجا میتونی استراتژی یا همون
                           راهبرد مناسب برای یادگیری برنامه‌نویسی را یاد بگیری.
                           چطوری؟ با مشاوره و راهنمایی اساتید و تجربیات دیگران،
                           مسیری کارآمد برای تسلط بر مهارت‌های برنامه‌نویسی
                           انتخاب و به سمت توانایی‌های عملی خود حرکت کنی.
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
