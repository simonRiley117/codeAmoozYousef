import React from 'react'
import teacherPic from '@Assets/Pic/course-profile.png';
import courseLogo from '@Assets/Icons/HTML.svg';
import pythonIcon from '@Assets/Icons/python.svg';
import { ReactComponent as CoinIcon } from '@Assets/Icons/Coin.svg';
import { ReactComponent as ClockIcon } from '@Assets/Icons/clock.svg';
import { Link } from 'react-router-dom';
const SabadCoursecard = () => {
    return (
        <article className='card-bg SabadCoursecard'>
        <div className='card-bg-discount'>
            <span>40%</span>
            <span>تخفیف</span>
        </div>
        <div className='card-bg-pic'>
            <img src={courseLogo} alt='python' className='card-bg-pic-logo' />
            <img src={pythonIcon} alt='python' />
        </div>
        <div className='card-bg-info'>
            <div className='card-bg-content'>
                <h6 className='card-bg-title'>
                    <Link
                        to={{
                            pathname: '/course',
                            state: {
                                name: 'دوره آنلاین برنامه نویسی HTM',
                                id: '1',
                            },
                        }}
                    >
                        دوره آنلاین برنامه نویسی HTML
                    </Link>
                </h6>
                <div className='card-bg-box'>
                    <div className='card-profile'>
                        <img src={teacherPic} alt={teacherPic} />
                    </div>
                    <div className='card-bg-details'>
                        <h4> علیرضا میرزایی فرد </h4>
                    </div>
                </div>
               
            </div>
        </div>
    </article>
    )
}

export default SabadCoursecard
