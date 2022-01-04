import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import teacher from "@Assets/Pic/teacher.png";
import INSTAGRAM from "@Assets/Icons/instafram.svg";
import GITHUB from "@Assets/Icons/githubblack.svg";
import DRIBBLE from "@Assets/Icons/social.svg";
import LINKEDIN from "@Assets/Icons/linkdin.svg";
import gSocial from "@Assets/Icons/gSocial.svg";
import YOUTUBE from "@Assets/Icons/youtub.svg";
import classNames from "classnames";
import Button from "@Components/Shared/Buttons/Button";
import { Tag, Skeleton } from "antd";
import useFetch from "@App/Context/useFetch";
import UseCopyToClipboard from "@App/Hooks/UseCopyToClipboard";
import { stringify } from "postcss";
import UseWindowSize from "@App/Sizes/UseWindowSize";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "green",
};

function TeacherInfo({ courseId, resume, liftingUpTags }) {
  console.log("courseId: ", courseId);
  const [isCopied, handleCopy] = UseCopyToClipboard(3000);
  const [socialId, setSocialId] = useState(-1);
  const [teacherProfileInfo, setTeacherProfileInfo] = useState(null);
  // const [loadingTeacherProfileInfo, setLoadingTeacherProfileInfo] = useState(true);

  const setData = (data) => {
    setTeacherProfileInfo(data);
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
  console.log("teacherProfileInfo: ", teacherProfileInfo);

  let socialicon = [];
  if (getTeacherProfileInfo) {
    if (getTeacherProfileInfo.response) {
      // const {
      //     first_name,
      //     last_name,
      //     cover,
      //     description,
      //     linkedin,
      //     dribble,
      //     instagram,
      //     youtube,
      //     github,
      //     telegram
      // } = teacherProfileInfo.teacher

      socialicon = [
        { img: INSTAGRAM, link: teacherProfileInfo.teacher.instagram },
        { img: GITHUB, link: teacherProfileInfo.teacher.github },
        { img: DRIBBLE, link: teacherProfileInfo.teacher.dribble },
        { img: LINKEDIN, link: teacherProfileInfo.teacher.linkedin },
        { img: gSocial, link: teacherProfileInfo.teacher.telegram },
        { img: YOUTUBE, link: teacherProfileInfo.teacher.youtube },
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
    <>
      {getTeacherProfileInfo?.response ? (
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
              <div className="TeacherInfo__imgBox">
                <img
                  src={teacherProfileInfo.teacher.cover}
                  alt={teacherProfileInfo.teacher.cover}
                />
              </div>
              <p className="TeacherInfo__name">{`استاد: ${teacherProfileInfo.teacher.first_name} ${teacherProfileInfo.teacher.last_name}`}</p>
              <p className="TeacherInfo__description leading-9 text-justify">
                {" "}
                {teacherProfileInfo.teacher.description}
              </p>
              <div className="TeacherInfo__socialBox grid grid-cols-3 justify-center justify-self-start	items-center self-center">
                {socialicon.map((item, id) =>
                  String(item.link) !== "null" &&
                  String(item.link) !== "undefined" ? (
                    isCopied && socialId === id ? (
                      "کپی شد"
                    ) : (
                      <img
                        onClick={() => handleImgClick(item.link, id)}
                        src={item.img}
                        alt={item.img}
                        key={id}
                      />
                    )
                  ) : null
                )}
              </div>
              {!resume ? (
                <div className="TeacherInfo__btnBox text-center flex items-center justify-center">
                  <Link
                    to="/courses/teacher"
                    state={{
                      courseId: courseId,
                      teacherId: teacherProfileInfo.teacher.uuid,
                    }}
                  >
                    <Button type="default" classes="MasterSignUp__btn">
                      مشاهده پروفایل
                    </Button>
                  </Link>
                </div>
              ) : null}
            </div>
            {windowSize !== "sm" &&
              (!resume ? (
                <div className="TeacherInfo__tags">
                  {teacherProfileInfo.tags.map((tag, id) => (
                    <Tag key={id}>{tag}</Tag>
                  ))}
                </div>
              ) : null)}
          </div>
        </div>
      ) : (
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
              <Skeleton />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TeacherInfo;
