import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Codeeditor from "@Components/Shared/Codeeditor";
import { Accordion, Panel } from "@Components/Shared/Accordion/Accordion";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "@App/Context/authContext";
import useFetch from "@App/Context/useFetch";
import Courseintro from "./Courseintro";
import Clock, { ReactComponent as LockIcon } from "@Assets/Icons/clock.svg";
import Lock from "@Assets/Icons/lock.svg";
import classNames from "classnames";
import IconBtn from "../../../Shared/Buttons/IconBtn";
import Modal from "@Components/Shared/Modal/Modal";
import Detail from "./Detail";
import { Tabs, Tag } from "antd";
import TrainExample from "@Components/Layouts/Dashboard/TrainExample";
import { Button, Tooltip } from "antd";

const { TabPane } = Tabs;

const Topic = ({ courseId, courseSeasons }) => {
  // const location = useLocation();
  // const [id, setId] = useState();
  const [modal, setModal] = useState(false);
  const { token } = useAuth();
  //   const [courseSeasons, setCourseSeasons] = useState([]);
  const [contentUuid, setContentUuid] = useState(null);
  const [showModal, setShowModal] = useState(false);

  //   const getCourseSeasons = useFetch({
  //     url: `CourseService/${courseId}/seasons`,
  //     method: "GET",
  //     noHeader: token ? false : true,
  //     setter: setCourseSeasons,
  //   });

  // useEffect(() => {
  //     console.log('location.state.id: ', location.state.id);
  //     setId(location.state.id);
  // }, [location]);

  const handleModalVisible = () => {
    setModal(false);
    setContentUuid(null);
  };

  const handleModalShow = (uuid, lock) => {
    setModal(true);
    setContentUuid(uuid);
    setShowModal(!lock);
  };

  const renderSeasonInfo = (time, lock) => (
    <div className="Sarfasl__AccordionItem">
      {lock && <img src={Lock} alt={Lock} />}
      <div className="Sarfasl__AccordionItem--time">
        <time>{time}</time>
        <img src={Clock} alt={Clock} />
      </div>
    </div>
  );
  console.log(`courseSeasons`, courseSeasons);
  // const windowSize = UseWindowSize();
  // let url = "https://testui.codeamooz.com/example/4/5";
  return (
    <>
      {courseSeasons.data.length !== 0 && (
        <div className="Sarfasl">
          <div className="Sarfasl__Accordionbox">
            <Accordion>
              {courseSeasons.data.map((season, index) => (
                <Panel
                  collapsible={season.lockedOn && "disabled"}
                  header={
                    <span className="Sarfasl__title">{season.title}</span>
                  }
                  extra={renderSeasonInfo(
                    season.total_time_for_each_season,
                    season.lockedOn
                  )}
                  key={season.uuid}
                >
                  {season?.contents?.map((content, index) => (
                    <div
                      className={
                        content.lockedOn
                          ? "Sarfasl__content flex justify-between items-center cursor-not-allowed"
                          : "Sarfasl__content flex justify-between items-center cursor-pointer"
                      }
                      key={content.uuid}
                      onClick={() =>
                        handleModalShow(content.uuid, content.lockedOn)
                      }
                    >
                      <div className="flex items-center Sarfasl__Accordiontxtbox">
                        {content.is_content_passed ? (
                          <div className={"Sarfasl__Accordiondone"}>
                            <i className="fas fa-check"></i>
                          </div>
                        ) : (
                          <div className={"Sarfasl__Accordionnumber"}>
                            {index + 1}
                          </div>
                        )}
                        {content.lockedOn ? (
                          <p>{content.title}</p>
                        ) : (
                          <Tooltip
                            title="مشاهده محتوا"
                            mouseEnterDelay={1}
                            placement="top"
                            autoAdjustOverflow
                          >
                            <p className="Sarfasl__content--title">
                              {content.title}
                            </p>
                          </Tooltip>
                        )}
                      </div>
                      {renderSeasonInfo(
                        content.duration_time,
                        content.lockedOn
                      )}
                    </div>
                  ))}
                </Panel>
              ))}
            </Accordion>
          </div>
        </div>
      )}

      {showModal && (
        <Modal visible={modal} onCancel={handleModalVisible}>
          {/* <Tabs className="TabBox" type="card">
            <TabPane tab="درباره این درس" key="1">
              <Detail contentUuid={contentUuid} />
            </TabPane>
            <TabPane tab="آزمون های درس" key="2">
              <Detail contentUuid={contentUuid} />
            </TabPane>
          </Tabs> */}
          <div className="p-10">
            <h2 className="mb-10 text-center">محتوای جلسه</h2>
            <Detail ispreviw={true} contentUuid={contentUuid} />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Topic;

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

// {
// 	/*<div className="Sarfasl__sample flex items-center	justify-between">*/
// }
// {
// 	/*    <p>مثال1</p>*/
// }
// {
// 	/*    <div className="Sarfasl__sampleLinkBox flex items-center justify-center ">*/
// }
// {
// 	/*        <Link*/
// }
// {
// 	/*            to={{*/
// }
// {
// 	/*                pathname: "/example",*/
// }
// {
// 	/*                state: {*/
// }
// {
// 	/*                    title: " phyton دوره برنامه نویسی",*/
// }
// {
// 	/*                    id: id,*/
// }
// {
// 	/*                },*/
// }
// {
// 	/*            }}*/
// }
// {
// 	/*        >*/
// }
// {
// 	/*            {windowSize === "sm"*/
// }
// {
// 	/*                ? url.slice(0, 25) + (url.length > 5 ? "..." : "")*/
// }
// {
// 	/*                : url}*/
// }
// {
// 	/*        </Link>*/
// }
// {
// 	/*    </div>*/
// }
// {
// 	/*</div>*/
// }
// {
// 	/*<Codeeditor lan={"c_cpp"} value={'printf("hello, %s", name)'}/>*/
// }

// const getHeader = (index, title, done, time, lock) =>
// 	done ? (
// 		<>
// 			<div
// 				className='Sarfasl__AccordionCenter'
// 				style={{ justifyContent: 'flex-start' }}
// 			>
// 				<div className='Sarfasl__Accordiondone'>
// 					<i className='fas fa-check'></i>
// 				</div>
// 				&nbsp;
// 				<div>{title}</div>
// 			</div>
// 			<div className='Sarfasl__AccordionItem'>
// 				<p>{time}</p>
// 				&nbsp;
// 				<img src={Clock} alt={Clock} />
// 				&nbsp;&nbsp;
// 				<img src={Lock} alt={Lock} />
// 			</div>
// 		</>
// 	) : (
// 		<div className='Sarfasl__AccordionCenter'>
// 			<div
// 				className='Sarfasl__AccordionCenter'
// 				style={{ justifyContent: 'flex-start' }}
// 			>
// 				<div className='Sarfasl__Accordionnumber'>{index + 1} </div>
// 				&nbsp;
// 				<div>{title}</div>
// 			</div>
// 			<div className='Sarfasl__AccordionItem'>
// 				<p>{time}</p>
// 				&nbsp;
// 				<img src={Clock} alt={Clock} />
// 				&nbsp;&nbsp;
// 				<img src={Lock} alt={Lock} />
// 				{/* <IconBtn
//                     classes={classNames('CreateSeason__btn', {
//                         lock: !lock,
//                     })}
//                     icon={
//                         <>
//                             <img src={Lock} alt={Lock}/>
//                             <i/>
//                         </>
//                     }
//                 /> */}
// 			</div>
// 		</div>
// 	);
