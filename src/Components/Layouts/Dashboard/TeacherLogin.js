import React from "react";
import teacher from "@Assets/Pic/teacherLogin.png";
import {TEAChER_URL} from "../../../constants";
import {useUserData} from "@App/Context/userContext";

const TeacherLogin = () => {
    const {userData} = useUserData()
    // console.log('userData: ', userData)
    return (
        <div className="teacher-card dash-teacher row-span-2 md:row-start-2 md:col-start-3 row-start-5 ">
            <h2>ورود به بخش اساتید</h2>
            <img src={teacher} alt={teacher}/>
            <p>
                اگر توانایی تدریس داری و میخوای دانش خودت رو بقیه انتقال بدی به عنوان
                استاد ثبت نام کن و کارتو شروع کن
            </p>
            <a className="button button__default backgrou bg-white"
               href={userData.user_is_teacher ? TEAChER_URL + '/' : TEAChER_URL + '/profile'}>ورود</a>
            {/*<a className="ant-btn ant-btn-primary button button__primary">*/}
            {/*    شروع همکاری*/}
            {/*</a>*/}
        </div>
    );
};

export default TeacherLogin;
