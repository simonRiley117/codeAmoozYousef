import React, {useState} from 'react';
import BreadCrump from '@Components/Shared/BreadCrump/BreadCrump';
import {Tabs} from 'antd';
import VideoPlayer from '@Components/Shared/VideoPlayer/VideoPlayer';
import Detail from '@Components/Layouts/Course/Sarfasl/Detail';
import Button from '@Components/Shared/Buttons/Button';
import {Accordion, Panel} from '@Components/Shared/Accordion/Accordion';
import ProgressLine from '@Components/Shared/Progress/ProgressLine';
import TrainExample from '@Components/Layouts/Dashboard/TrainExample';
import Quiz from '@Components/Layouts/Dashboard/Quiz';
import Clock, {ReactComponent as LockIcon} from '@Assets/Icons/clock.svg';
import Lock from '@Assets/Icons/lock.svg';
import useFetch from "../../Context/useFetch";
import IconBtn from "../../Components/Shared/Buttons/IconBtn";
import classNames from "classnames";

const {TabPane} = Tabs;

function LastCourse() {
    const [courseSeasons, setCourseSeasons] = useState([]);
    const [contentUuid, setContentUuid] = useState(null)
    const [quizUuid, setQuizUuid] = useState(null)

    const setData = (data) => {
        console.log('data: ', data)
        setCourseSeasons(data)
        setContentUuid(data.init_data.first_content_uuid)
        setQuizUuid(data.init_data.first_quiz_uuid)
    }

    const getCourseSeasons = useFetch({
        url: `CourseService/q6SJ61Ta/sidebar`,
        method: 'GET',
        noHeader: false,
        setter: setData,
    });

    const setUuids = (cUUID, qUUID) => {
        setContentUuid(cUUID)
        setQuizUuid(qUUID)
    }
    console.log('contentUuid LastCourse: ', contentUuid)

    const getHeader = (index, title, done, time, lock) => (
        done ? (
            <div className='Sarfasl__AccordionCenter'>
                <div className='Sarfasl__AccordionCenter' style={{justifyContent: 'flex-start'}}>
                    <div className='Sarfasl__Accordiondone'>
                        <i className='fas fa-check'></i>
                    </div>
                    &nbsp;
                    <div>{title}</div>
                </div>
                <div className='Sarfasl__AccordionCenter'>
                    <p>{time}</p>
                    &nbsp;
                    <img src={Clock} alt={Clock}/>
                    &nbsp;&nbsp;
                    {/*<img src={Lock} alt={Lock}/>*/}
                    <IconBtn
                        classes={classNames('Sarfasl__btn', {
                            lock: !lock,
                        })}
                        icon={
                            <>
                                <img src={Lock} alt={Lock}/>
                                <i/>
                            </>
                        }
                    />
                </div>
            </div>

        ) : (
            <div className='Sarfasl__AccordionCenter'>
                <div className='Sarfasl__AccordionCenter' style={{justifyContent: 'flex-start'}}>
                    <div className='Sarfasl__Accordionnumber'>
                        {index + 1}{' '}
                    </div>
                    &nbsp;
                    <div>{title}</div>
                </div>
                <div className='Sarfasl__AccordionCenter'>
                    <p>{time}</p>
                    &nbsp;
                    <img src={Clock} alt={Clock}/>
                    &nbsp;&nbsp;
                    {/*<img src={Lock} alt={Lock}/>*/}
                    <IconBtn
                        classes={classNames('Sarfasl__btn', {
                            lock: !lock,
                        })}
                        icon={
                            <>
                                <img src={Lock} alt={Lock}/>
                                <i/>
                            </>
                        }
                    />
                </div>
            </div>
        )
    )

    // const [activeKey,setActiveKey]=useState('1')
    // const handleTabChange = (selectedkey) => {
    //     setActiveKey(selectedkey);
    //     console.log("change callback");
    //     getCourseSeasons.reFetch()
    // };

    return (
        <>
            {getCourseSeasons?.response?.data?.seasons ? (
                <div className='LastCourse'>
                    <BreadCrump pathsname='/dash/course' name={courseSeasons.title}/>
                    <div className='grid LastCourse__container relative'>
                        <div>
                            {/*<Tabs activeKey={activeKey} className='TabBox' type='card' onChange={handleTabChange}>*/}
                            {/*<Tabs className='TabBox' type='card' destroyInactiveTabPane={true}>*/}
                            <Tabs className='TabBox' type='card'>
                                <TabPane tab='ویدیو' key={`${contentUuid}_1`}>
                                    <Detail contentUuid={contentUuid}/>
                                </TabPane>
                                <TabPane tab='تمرین و مثال' key={`${contentUuid}_2`}>
                                    <TrainExample contentUuid={contentUuid}/>
                                </TabPane>
                                <TabPane tab='آزمون' key={`${contentUuid}_3`}>
                                    <Quiz quizUuid={quizUuid}/>
                                </TabPane>
                            </Tabs>
                            <div className='flex items-center justify-between LastCourse__btnBox'>
                                <Button
                                    ico={false}
                                    type='primary'
                                    classes='CoWorkers__btn flex items-center '
                                >
                                    مبحث بعدی
                                    <i className='fas fa-chevron-right'></i>
                                </Button>
                                <Button
                                    ico={false}
                                    type='primary'
                                    classes='CoWorkers__btn flex items-center '
                                >
                                    <i className='fas fa-chevron-left'></i>
                                    مبحث قبلی{' '}
                                </Button>
                            </div>
                        </div>

                        <div className='LastCourse__Box'>
                            <div className='LastCourse__Position'>
                                <p className='LastCourse__title'>
                                    دوره برنامه نویسی <span>{courseSeasons.title}</span>
                                </p>
                                <div className='Sarfasl__Accordionbox'>
                                    <Accordion>
                                        {courseSeasons.seasons.map((season, index) => (
                                            <Panel
                                                collapsible={season.lockedOn ? 'disabled' : 'header'}
                                                header={getHeader(index, season.title,
                                                    season.is_season_passed,
                                                    season.total_time_for_each_season,
                                                    season.lockedOn)}
                                                key={season.uuid}>
                                                {season.contents ? (
                                                    season.contents.map((content, index) => (
                                                        <div className='flex justify-between items-center'
                                                             onClick={() => setUuids(content.id, content.quiz_id)}
                                                             key={index}>
                                                            <div className='flex items-center Sarfasl__Accordiontxtbox'>
                                                                {content.is_content_passed ? (
                                                                    <div
                                                                        className={
                                                                            'Sarfasl__Accordiondone'
                                                                        }
                                                                    >
                                                                        <i className='fas fa-check'></i>
                                                                    </div>
                                                                ) : (
                                                                    <div
                                                                        className={
                                                                            'Sarfasl__Accordionnumber'
                                                                        }
                                                                    >
                                                                        {index + 1}{' '}
                                                                    </div>
                                                                )}
                                                                <p>{content.title}</p>
                                                            </div>
                                                            <div className='flex items-start Sarfasl__AccordionTimeBox'
                                                                 style={{
                                                                     display: 'flex',
                                                                     justifyContent: 'center',
                                                                     alignItems: 'center'
                                                                 }}>
                                                                <p>{content.duration_time}</p>
                                                                &nbsp;
                                                                <img
                                                                    src={Clock}
                                                                    alt={Clock}
                                                                    className='Sarfasl__Accordionclock'
                                                                />
                                                                &nbsp;&nbsp;
                                                                <IconBtn
                                                                    classes={classNames('Sarfasl__btn', {
                                                                        lock: !content.lockedOn,
                                                                    })}
                                                                    icon={
                                                                        <>
                                                                            <img src={Lock} alt={Lock} style={{
                                                                                maxHeight: '20px',
                                                                                maxWidth: '20px'
                                                                            }}/>
                                                                            <i/>
                                                                        </>
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : null}
                                            </Panel>
                                        ))}
                                    </Accordion>
                                </div>
                                <p className='LastCourse__progresstitle'>
                                    پیشرفت شما در دوره: <span>{courseSeasons.progress}%</span>
                                </p>
                                <ProgressLine precent={courseSeasons.progress}/>
                                <div className='flex items-center cursor-pointer LastCourse__guideBox'>
                                    <p className='LastCourse__guide-icon'> i</p>
                                    <p className='LastCourse__guide'>راهنمای صفحه</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default LastCourse;
// const cor = [
//     {
//         title: 'جلسه اول: آشنایی',
//         contents: [
//             {
//                 title: 'چرا پایتون؟',
//                 duration_time: '04:33',
//                 done: true,
//                 lock: false,
//             },
//             {
//                 title: 'چرا پایتون؟',
//                 duration_time: '04:33',
//                 done: false,
//                 lock: true,
//             },
//         ],
//     },
//     {
//         title: 'جلسه اول: آشنایی',
//         contents: [
//             {
//                 title: 'چرا پایتون؟',
//                 duration_time: '04:33',
//                 done: false,
//                 lock: true,
//             },
//         ],
//     },
//     {
//         title: 'جلسه اول: آشنایی',
//         contents: [
//             {
//                 title: 'چرا پایتون؟',
//                 duration_time: '04:33',
//                 done: false,
//                 lock: true,
//             },
//         ],
//     },
//     {
//         title: 'جلسه اول: آشنایی',
//         contents: [
//             {
//                 title: 'چرا پایتون؟',
//                 duration_time: '04:33',
//                 done: false,
//                 lock: true,
//             },
//         ],
//     },
// ];
