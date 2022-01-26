import React, { useEffect, useState } from "react";
import teacher from "@Assets/Pic/teacher.png";
import INSTAGRAM from "@Assets/Icons/instafram.svg";
import GITHUB from "@Assets/Icons/githubblack.svg";
import DRIBBLE from "@Assets/Icons/social.svg";
import LINKEDIN from "@Assets/Icons/linkdin.svg";
import gSocial from "@Assets/Icons/gSocial.svg";
import YOUTUBE from "@Assets/Icons/youtub.svg";
import classNames from "classnames";
import Link from "@Components/Shared/Buttons/Link";
import { Skeleton, Tag } from "antd";
import useFetch from "@App/Context/useFetch";
import UseCopyToClipboard from "@App/Hooks/UseCopyToClipboard";
import { ClipLoader } from "react-spinners";
import { stringify } from "postcss";
import UseWindowSize from "@App/Sizes/UseWindowSize";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "green",
};

function TeacherInfo({ courseId, resume, liftingUpTags }) {
    const [isCopied, handleCopy] = UseCopyToClipboard(3000);
    const [socialId, setSocialId] = useState(-1);
    const [teacherProfileInfo, setTeacherProfileInfo] = useState(null);
    const [tagsList, setTagsList] = useState([]);
function TeacherInfo({ courseId, resume, liftingUpTags,isSticky }) {
	console.log('courseId: ', courseId);
	const [isCopied, handleCopy] = UseCopyToClipboard(3000);
	const [socialId, setSocialId] = useState(-1);
	const [teacherProfileInfo, setTeacherProfileInfo] = useState(null);
	const [tagsList, setTagsList] = useState([]);

    const setData = (data) => {
        setTeacherProfileInfo(data.teacher);
        setTagsList(data.tags);
        windowSize === "sm" && liftingUpTags(data.tags);
        // setLoadingTeacherProfileInfo(false)
    };
    const windowSize = UseWindowSize();
    const getTeacherProfileInfo = useFetch({
        url: `CourseService/${courseId}/courseTeacherProfileBrief`,
        method: "GET",
        noHeader: true,
        setter: setData,
    });

    let socialicon = [];
    if (getTeacherProfileInfo) {
        if (getTeacherProfileInfo.response) {
            socialicon = [
                { img: INSTAGRAM, link: teacherProfileInfo.instagram },
                { img: GITHUB, link: teacherProfileInfo.github },
                { img: DRIBBLE, link: teacherProfileInfo.dribble },
                { img: LINKEDIN, link: teacherProfileInfo.linkedin },
                { img: gSocial, link: teacherProfileInfo.telegram },
                { img: YOUTUBE, link: teacherProfileInfo.youtube },
            ];
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setSocialId(-1);
        }, 2000);
        return () => clearTimeout(timer);
    }, [socialId]);

    const handleImgClick = (link, id) => {
        handleCopy(link);
        setSocialId(id);
    };

    return (
        <div
            className={
                "TeacherInfo text-center items-center justify-center flex-col"
            }
        >
            <div className="TeacherInfo__Position">
                <div
                    className={classNames(
                        "TeacherInfo__form text-center items-center justify-center flex-col"
                    )}
                >
                    {getTeacherProfileInfo.loading ? (
                        <div className="TeacherInfo__loading">
                            <Skeleton active avatar paragraph={{ rows: 4 }} />
                            <Skeleton.Button active shape="round" />
                        </div>
                    ) : (
                        <>
                            <div className="TeacherInfo__imgBox">
                                <img
                                    src={teacherProfileInfo?.cover}
                                    alt={teacherProfileInfo?.first_name}
                                />
                            </div>
                            <p className="TeacherInfo__name">{`استاد: ${teacherProfileInfo?.first_name} ${teacherProfileInfo?.last_name}`}</p>
                            <p className="TeacherInfo__description leading-9 text-justify">
                                {teacherProfileInfo?.description}
                            </p>
                            <div className="TeacherInfo__socialBox grid grid-cols-3 justify-center justify-self-start	items-center self-center">
                                {socialicon.map((item, id) =>
                                    String(item.link) !== "null" &&
                                    String(item.link) !== "undefined" ? (
                                        isCopied && socialId === id ? (
                                            "کپی شد"
                                        ) : (
                                            <img
                                                onClick={() =>
                                                    handleImgClick(
                                                        item.link,
                                                        id
                                                    )
                                                }
                                                src={item.img}
                                                alt={item.img}
                                                key={id}
                                            />
                                        )
                                    ) : null
                                )}
                            </div>
                            {!resume && (
                                <div className="TeacherInfo__btnBox text-center flex items-center justify-center">
                                    <Link
                                        to="/courses/teacher"
                                        state={{
                                            courseId: courseId,
                                            teacherId: teacherProfileInfo?.uuid,
                                        }}
                                    >
                                        مشاهده پروفایل
                                    </Link>
                                </div>
                            )}
                        </>
                    )}
                </div>
	return (
		<div
			className={
				'TeacherInfo text-center items-center justify-center flex-col'
			}
		>
			<div
				className={classNames({
					TeacherInfo__Position: isSticky,
				})}
			>
				<div
					className={classNames(
						'TeacherInfo__form text-center items-center justify-center flex-col'
					)}
				>
					{getTeacherProfileInfo.loading ? (
						<div className='TeacherInfo__loading'>
							<Skeleton active avatar paragraph={{ rows: 4 }} />
							<Skeleton.Button active shape='round' />
						</div>
					) : (
						<>
							<div className='TeacherInfo__imgBox'>
								<img
									src={teacherProfileInfo?.cover}
									alt={teacherProfileInfo?.first_name}
								/>
							</div>
							<p className='TeacherInfo__name'>{`استاد: ${teacherProfileInfo?.first_name} ${teacherProfileInfo?.last_name}`}</p>
							<p className='TeacherInfo__description leading-9 text-justify'>
								{teacherProfileInfo?.description}
							</p>
							<div className='TeacherInfo__socialBox grid grid-cols-3 justify-center justify-self-start	items-center self-center'>
								{socialicon.map((item, id) =>
									String(item.link) !== 'null' &&
									String(item.link) !== 'undefined' ? (
										isCopied && socialId === id ? (
											'کپی شد'
										) : (
											<img
												onClick={() =>
													handleImgClick(item.link, id)
												}
												src={item.img}
												alt={item.img}
												key={id}
											/>
										)
									) : null
								)}
							</div>
							{!resume && (
								<div className='TeacherInfo__btnBox text-center flex items-center justify-center'>
									<Link
										to='/courses/teacher'
										state={{
											courseId: courseId,
											teacherId: teacherProfileInfo?.uuid,
										}}
									>
										مشاهده پروفایل
									</Link>
								</div>
							)}
						</>
					)}
				</div>

                {windowSize !== "sm" && !resume && (
                    <div className="TeacherInfo__tags">
                        {getTeacherProfileInfo.loading ? (
                            <div className="TeacherInfo__tags--loading d-flex justify-between">
                                <Skeleton.Button active shape="round" />
                                <Skeleton.Button active shape="round" />
                                <Skeleton.Button active shape="round" />
                            </div>
                        ) : (
                            <>
                                {tagsList.map((tag, id) => (
                                    <Tag key={id}>{tag}</Tag>
                                ))}
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TeacherInfo;
