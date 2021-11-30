import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Codeeditor from '@Components/Shared/Codeeditor';
import {Accordion, Panel} from '@Components/Shared/Accordion/Accordion';
import {useHistory, useLocation} from 'react-router-dom';
import UseWindowSize from '@App/Sizes/UseWindowSize';
import {useAuth} from '@App/Context/authContext';
import useFetch from '@App/Context/useFetch';
import Courseintro from './Courseintro';
import Clock, {ReactComponent as LockIcon} from '@Assets/Icons/clock.svg';
import Lock from '@Assets/Icons/lock.svg';
import classNames from "classnames";
import IconBtn from "../../../Shared/Buttons/IconBtn";

function Index() {
    const location = useLocation();
    const [id, setId] = useState();
    const [modal, setModal] = useState(false);
    const {token, authDispatch} = useAuth();
    const [courseSeasons, setCourseSeasons] = useState([]);
    const [contentUuid, setContentUuid] = useState(null);
    const [showModal, setShowModal] = useState(false)

    const getCourseSeasons = useFetch({
        url: `CourseService/q6SJ61Ta/seasons`,
        method: 'GET',
        noHeader: token ? false : true,
        setter: setCourseSeasons,
    });
    // console.log('getCourseSeasons.loading: ', getCourseSeasons.loading);
    // console.log('getCourseSeasons: ', getCourseSeasons);
    // console.log('courseSeasons: ', courseSeasons);

    useEffect(() => {
        console.log('location.state.id: ', location.state.id);
        setId(location.state.id);
    }, [location]);

    const handleModalVisible = () => {
        setModal(false);
    };

    const handleModalShow = (uuid, lock) => {
        setModal(true);
        setContentUuid(uuid);
        setShowModal(!lock)
    };

    const getHeader = (index, title, done, time, lock) => (
        done ? (
            <div className='Sarfasl__AccordionCenter'>
                <div className='Sarfasl__AccordionCenter' style={{justifyContent: 'flex-start'}}>
                    <div>
                        <div className='Sarfasl__Accordiondone'>
                            <i className='fas fa-check'></i>
                        </div>
                        &nbsp;
                        <div>{title}</div>
                    </div>
                </div>
                <div className='Sarfasl__AccordionItem'>
                    <p>{time}</p>
                    &nbsp;
                    <img src={Clock} alt={Clock}/>
                    &nbsp;&nbsp;
                    <img src={Lock} alt={Lock}/>
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
                <div className='Sarfasl__AccordionItem'>
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

    // const windowSize = UseWindowSize();
    // let url = "https://testui.codeamooz.com/example/4/5";
    return (
        <>
            {getCourseSeasons?.response?.data ? (
                <div className='Sarfasl'>
                    {/*<div className="Sarfasl__sample flex items-center	justify-between">*/}
                    {/*    <p>مثال1</p>*/}
                    {/*    <div className="Sarfasl__sampleLinkBox flex items-center justify-center ">*/}
                    {/*        <Link*/}
                    {/*            to={{*/}
                    {/*                pathname: "/example",*/}
                    {/*                state: {*/}
                    {/*                    title: " phyton دوره برنامه نویسی",*/}
                    {/*                    id: id,*/}
                    {/*                },*/}
                    {/*            }}*/}
                    {/*        >*/}
                    {/*            {windowSize === "sm"*/}
                    {/*                ? url.slice(0, 25) + (url.length > 5 ? "..." : "")*/}
                    {/*                : url}*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<Codeeditor lan={"c_cpp"} value={'printf("hello, %s", name)'}/>*/}
                    <div className='Sarfasl__Accordionbox'>
                        <Accordion>
                            {courseSeasons.data.map((season, index) => (
                                <Panel
                                    collapsible={season.lockedOn ? 'disabled' : 'header'}
                                    header={getHeader(index, season.title, season.is_season_passed, season.total_time_for_each_season, season.lockedOn)}
                                    key={season.uuid}>
                                    {season.contents ? (
                                        season.contents.map((content, index) => (
                                            <div className='flex justify-between items-center'
                                                 key={content.uuid}
                                                 onClick={() => handleModalShow(content.uuid, content.lockedOn)}
                                            >
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
                                                <div className='flex items-center Sarfasl__AccordionTimeBox'>
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
                                                                <img src={Lock} alt={Lock}/>
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
                </div>
            ) : null}
            {showModal && (
                <Courseintro
                    visible={modal}
                    contentUuid={contentUuid}
                    onCancel={handleModalVisible}
                />
            )}
        </>
    );
}

export default Index;

// const cor = [
//   {
//     nam: "جلسه اول: آشنایی",
//     all: [{ txt: "چرا پایتون؟" }, { txt: "پایتون چیست؟" }],
//   },
//   {
//     nam: "جلسه دوم: آشنایی",
//     all: [{ txt: "چرا پایتون؟" }, { txt: "پایتون چیست؟" }],
//   },
//   {
//     nam: "جلسه سوم: آشنایی",
//     all: [{ txt: "چرا پایتون؟" }, { txt: "پایتون چیست؟" }],
//   },
//   {
//     nam: "جلسه چهارم: آشنایی",
//     all: [{ txt: "چرا پایتون؟" }, { txt: "پایتون چیست؟" }],
//   },
// ];
