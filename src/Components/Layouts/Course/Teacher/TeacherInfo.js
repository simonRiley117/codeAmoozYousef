import React from "react";
import teacher from "@Assets/Pic/teacher.png";
import instafram from "@Assets/Icons/instafram.svg";
import github from "@Assets/Icons/githubblack.svg";
import social from "@Assets/Icons/social.svg";
import linkdin from "@Assets/Icons/linkdin.svg";
import gSocial from "@Assets/Icons/gSocial.svg";
import youtub from "@Assets/Icons/youtub.svg";
import classNames from "classnames";
import Button from "@Components/Shared/Buttons/Button";
import { Tag } from "antd";

function TeacherInfo() {
  return (
    <div
      className={"TeacherInfo text-center items-center justify-center flex-col"}
    >
      <div className="TeacherInfo__Position">
        <div
          className={classNames(
            "TeacherInfo__form text-center items-center justify-center flex-col"
          )}
        >
          <div className="TeacherInfo__imgBox">
            <img src={teacher} alt={teacher} />
          </div>
          <p className="TeacherInfo__name">استاد: علیرضا میرزایی فرد</p>
          <p className="TeacherInfo__description leading-9 text-justify">
            {" "}
            ایپسوم متن ساختگی با تولید ایپسوم متن ساختگی با تولید سادگی نامفهوم
            از لازم است، و برای شرایط فعلی تکنولوژی مورد سادگی نامفهوم از لازم
            است، و برای شرایط فعلی تکنولوژی مورد
          </p>
          <div className="TeacherInfo__socialBox grid grid-cols-3 justify-center justify-self-start	items-center self-center">
            {socialicon.map((index, id) => (
              <img src={index.img} alt={index.img} key={id} />
            ))}
          </div>
          <div className="TeacherInfo__btnBox text-center flex items-center justify-center">
            <Button type="default" classes="MasterSignUp__btn">
              ارسال
            </Button>
          </div>
        </div>
        <div className="TeacherInfo__tags">
          {tags.map((index, id) => (
            <Tag key={id}>{index}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeacherInfo;
const socialicon = [
  { img: instafram },
  { img: github },
  { img: social },
  { img: linkdin },
  { img: gSocial },
  { img: youtub },
];
const tags = ["دوره آنلاین", "برنامه نویسی", "پایتون", "python", "کد نویسی"];
