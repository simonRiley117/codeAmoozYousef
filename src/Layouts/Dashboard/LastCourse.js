import React, {useEffect, useState} from 'react';
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
import {useLocation} from "react-router";

const {TabPane} = Tabs;

function LastCourse() {
    //TODO: should use Reducer instead of state
    const [isNext, setIsNext] = useState(false)
    const [courseSeasons, setCourseSeasons] = useState([]);
    const [contentUuid, setContentUuid] = useState(null)
    const [courseUuid, setCourseUuid] = useState(null)
    const [quizUuid, setQuizUuid] = useState(null)
    const [makeSetDataTrigger, setMakeSetDataTrigger] = useState(false)
    const [makeSetCurrentSituationDataTrigger, setMakeSetCurrentSituationDataTrigger] = useState(false)
    // const [callbackPassContent, setCallBackPassContent] = useState(null)
    const [currentContentState, setCurrentContentState] = useState(null)
    // const [errorPostData, setErrorPostData] = useState('')

    const location = useLocation();
    console.log('LOCATION: ', location)
    useEffect(() => {
        setCourseUuid(location.state.id);
    }, [location]);

    useEffect(() => {
        setMakeSetDataTrigger(true)
    }, []);

    const setCurrentSituationData = (data) => {
        console.log('setCurrentSituationData ~ data: ', data)
        setCurrentContentState(data)
        if (makeSetCurrentSituationDataTrigger) {
            if (isNext) {
                setContentUuid(data.next_content_id)
                setQuizUuid(data.next_quiz_id)
            } else {
                setContentUuid(data.prev_content_id)
                setQuizUuid(data.prev_quiz_id)
            }
        }
    }

    const getCurrentContentState = useFetch({
        url: `ContentService/${contentUuid}/currentContentState`,
        method: 'GET',
        noHeader: false,
        trigger: false,
        setter: setCurrentSituationData,
    });

    const setData = (data) => {
        console.log('setData ~ data: ', data)
        setCourseSeasons(data)
        if (makeSetDataTrigger) {
            setContentUuid(data.init_data.first_content_uuid)
            setQuizUuid(data.init_data.first_quiz_uuid)
            setMakeSetDataTrigger(false)
        }
    }

    const getCourseSeasons = useFetch({
        url: `CourseService/${courseUuid}/sidebar`,
        method: 'GET',
        noHeader: false,
        caller: getCurrentContentState,
        setter: setData,
    });

    const setUuids = (cUUID, qUUID) => {
        setContentUuid(cUUID)
        setQuizUuid(qUUID)
        getCurrentContentState.reFetch()
    }

    const postPassContent = useFetch({
        url: `PassService/${contentUuid}`,
        method: 'POST',
        noHeader: false,
        trigger: false,
        // errMessage:setErrorPostData,
        caller: getCourseSeasons,
        // setter: setCallBackPassContent
    });

    const handleNextContent = () => {
        if (currentContentState.next_content_passed) {
            setContentUuid(currentContentState.next_content_id)
            setQuizUuid(currentContentState.next_quiz_id)
            getCurrentContentState.reFetch()
        } else {
            postPassContent.reFetch()
            setIsNext(true)
            setMakeSetCurrentSituationDataTrigger(true)
        }

        // console.log('callbackPassContent next: ',callbackPassContent)
        // console.log('handleNextContent.response: ', postPassContent?.response?.data)
        // if (postPassContent?.response?.data) {
        //     setContentUuid(postPassContent.response.data.next_content_id)
        //     setQuizUuid(postPassContent.response.data.next_quiz_id)
        // }
    }

    const handlePrevContent = () => {
        if (currentContentState.prev_content_passed) {
            setContentUuid(currentContentState.prev_content_id)
            setQuizUuid(currentContentState.prev_quiz_id)
            getCurrentContentState.reFetch()
        } else {
            postPassContent.reFetch()
            setIsNext(false)
            setMakeSetCurrentSituationDataTrigger(true)
        }

        // console.log('callbackPassContent prev: ',callbackPassContent)
        // console.log('handlePrevContent.response: ', postPassContent?.response?.data)
        // if (postPassContent?.response?.data) {
        //     console.log('prev_content_id: ', postPassContent.response.data.prev_content_id)
        //     console.log('prev_quiz_id: ', postPassContent.response.data.prev_quiz_id)
        //     setContentUuid(postPassContent.response.data.prev_content_id)
        //     setQuizUuid(postPassContent.response.data.prev_quiz_id)
        // }
    }

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

    console.log('contentUuid!: ', contentUuid)
    console.log('quizUuid!: ', quizUuid)

    return (
        <>
            {getCourseSeasons?.response?.data?.seasons && getCurrentContentState?.response?.data ? (
                <div className='LastCourse'>
                    {/*<BreadCrump pathsname='/dash/course' name={courseSeasons.title}/>*/}
                    <div className='grid LastCourse__container relative'>
                        <div>
                            {/*<Tabs activeKey={activeKey} className='TabBox' type='card' onChange={handleTabChange}>*/}
                            {/*<Tabs className='TabBox' type='card' destroyInactiveTabPane={true}>*/}
                            <Tabs className='TabBox' type='card'>
                                <TabPane tab='ویدیو' key={`${contentUuid}_1`}>
                                    <Detail contentUuid={contentUuid}/>
                                </TabPane>
                                <TabPane tab='تمرین و مثال' key={`${contentUuid}_2`}>
                                    <TrainExample contentUuid={contentUuid} courseUuid={courseUuid}/>
                                </TabPane>
                                <TabPane tab='آزمون' key={`${contentUuid}_3`}>
                                    <Quiz quizUuid={quizUuid} contentUuid={contentUuid} courseUuid={courseUuid}/>
                                </TabPane>
                            </Tabs>
                            <div className='flex items-center justify-between LastCourse__btnBox'>
                                <Button
                                    ico={false}
                                    type='primary'
                                    classes='CoWorkers__btn flex items-center '
                                    {...(currentContentState.has_next_content && {onClick: handleNextContent})}
                                    disabled={!currentContentState.has_next_content}
                                >
                                    مبحث بعدی
                                    <i className='fas fa-chevron-right'></i>
                                </Button>
                                <Button
                                    ico={false}
                                    type='primary'
                                    classes='CoWorkers__btn flex items-center '
                                    {...(currentContentState.has_prev_content && {onClick: handlePrevContent})}
                                    disabled={!currentContentState.has_prev_content}
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
                                                             {...(!content.lockedOn && {onClick: () => setUuids(content.id, content.quiz_id)})}
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
