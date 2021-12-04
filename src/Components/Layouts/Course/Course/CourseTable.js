import React, {useState} from 'react';
import clock from '@Assets/Icons/clock.svg';
import Coin from '@Assets/Icons/Coin.svg';
import section from '@Assets/Icons/section.svg';
import user from '@Assets/Icons/user.svg';
import Rate from '@Components/Shared/Rate/Rate';
import {Radio} from 'antd';
import Button from '@Components/Shared/Buttons/Button';
import share from '@Assets/Icons/share.svg';
import useFetch from "@App/Context/useFetch";
import {ClipLoader} from "react-spinners";
import {useAuth} from "@App/Context/authContext";

const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'green',
}
const WITHOUT_DEGREE = 'بدون مدرک'

function CourseTable({courseId}) {
    const [orderCourse, setOrderCourse] = useState({})
    const [degree, setDegree] = useState(null);
    const {token, authDispatch} = useAuth();
    const [addtocardData, setaddtocardData] = useState();

    const setCostForSelectedDegree = (e) => {
        const selectedDegree = costs.filter(item => item.uuid === e.target.value)
        setDegree(selectedDegree[0])
    };

    const getCourseOrder = useFetch({
        url: `CourseService/${courseId}/courseOrder`,
        method: "GET",
        noHeader: token ? false : true,
        setter: setOrderCourse
    });

    const {
        title,
        total_time_of_course,
        nums_of_seasons,
        mean_of_participant_points,
        num_of_participants,
        costs,
        has_user_course
    } = orderCourse
    //ریکویست اضافه کردن به سبد کالا ارور 404 میخوره
    const getLatestCourseList = useFetch({
      url: `CartService/addToCart`,
      method: "POST",
      trigger: false,
      data: addtocardData,
    });
    const addToCard = () => {
      setaddtocardData({ course_uuid: courseId, degree_uuid: degree.degree_uuid });
      getLatestCourseList.reFetch()
    };
    return (
        <>
            {getCourseOrder.response?.data ? (
                <div className='CourseTable'>
                    <div className='CourseTable__Position'>
                        <div className='CourseTable__Table'>
                            <div className='flex items-center justify-start CourseTable__titleBox'>
                                <div className='half__circle relative'></div>
                                <p className='CourseTable__title'>{title}</p>
                            </div>
                            <div className='CourseTable__Body'>
                                <div className='flex items-center justify-start CourseTable__infoBox'>
                                    <img alt={clock} src={clock}/>
                                    <p className='CourseTable__infotxt'>{total_time_of_course}</p>
                                </div>
                                <div className='flex items-center justify-start CourseTable__infoBox'>
                                    <img alt={section} src={section}/>
                                    <p className='CourseTable__infotxt'>{nums_of_seasons}</p>
                                    <span className='CourseTable__infotxt'>جلسه</span>
                                </div>
                                <div className='flex items-center justify-start CourseTable__infoBox'>
                                    <img alt={user} src={user}/>
                                    <p className='CourseTable__infotxt'>{num_of_participants}</p>
                                    <span className='CourseTable__infotxt'> نفر در این دوره شرکت کرده اند</span>
                                </div>
                                {degree !== null &&
                                <div className='flex items-center justify-start CourseTable__infoBox'>
                                    <img alt={Coin} src={Coin}/>
                                    <p className='CourseTable__infoPrice'>
                                        {degree.discount_amount}
                                    </p>
                                    <p className='CourseTable__infotxt CourseTable__infoPrice-main'>
                                        {degree.amount}
                                    </p>
                                    <span className='CourseTable__infotxt'>تومان</span>
                                </div>}
                                <div className='CourseTable__RateBox'>
                                    <Rate defaultValue={mean_of_participant_points.grade} disabled={true}/>
                                </div>
                                {!has_user_course
                                    ? <>
                                        <div className='CourseTable__DegreeBox'>
                                            <p className='CourseTable__DegreeTitle'>
                                                دریافت گواهی پایان دوره:
                                            </p>
                                            <Radio.Group onChange={setCostForSelectedDegree}>
                                                {costs.map(degree => (
                                                    degree.name === WITHOUT_DEGREE
                                                        ?
                                                        <Radio checked={true} value={degree.uuid}>{degree.name}</Radio>
                                                        : <Radio value={degree.uuid}>{degree.name}</Radio>
                                                ))}
                                            </Radio.Group>
                                        </div>
                                        {degree !== null
                                            ? <Button onClick={()=>addToCard()} type='primary' classes='CourseTable__btn'>
                                                افزودن به سبد خرید
                                            </Button>
                                            : <Button type='primary' classes='CourseTable__btn' disabled={true}>
                                                <span style={{color: '#222'}}>مدرک انتخاب نکردی</span>
                                            </Button>
                                        }
                                    </>
                                    : <Button  type='primary' classes='CourseTable__btn' disabled={true}>
                                        <span style={{color: '#222'}}>دوره رو قبلا خریدی</span>
                                    </Button>}
                                <div className='flex items-center justify-center CourseTable__ShareBox '>
                                    <img src={share} alt={share} className='cursor-pointer'/>
                                    <p>لینک به اشتراک گذاشتن دوره</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <ClipLoader color="#43aa8b" loading={true} css={override} size={60}/>
            )
            }
        </>

    );
}

export default CourseTable;
