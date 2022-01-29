import React from 'react';
import Modal from './Modal';
import SignInForm from './SignInForm';
import ForgetPassword from './ForgetPassword';
import Button from '@Components/Shared/Buttons/Button';
import IconBtn from '@Components/Shared/Buttons/IconBtn';
import Link from '@Components/Shared/Buttons/Link';

// Assets
import loginPic from '@Assets/Pic/login.png';
import GoogleLogoPic from '@Assets/Pic/google_logo.png';
import {ReactComponent as ExitIcon} from '@Assets/Icons/Exit.svg';
import {ReactComponent as LinkedInIcon} from '@Assets/Icons/linkedin.svg';
import {ReactComponent as GithubIcon} from '@Assets/Icons/github.svg';
import {Divider} from 'antd';
import {API_URL, USER_URL} from "../../../constants";
import {useNavigate} from "react-router-dom";

const SignIn = ({
                    onCancel,
                    handleForgetPassword,
                    handleActive,
                    handleResendEmail,
                }) => {
    // const navigate = useNavigate()

    const putUrlInLocalStorage = () => {
        localStorage.setItem("url", window.location.href);
    }

    return (
        <>
            <div className='register__form signIn'>
                <IconBtn title='بستن' icon={<ExitIcon/>} onClick={onCancel}/>

                <div className='register__form--wrapper signIn'>
                    <h2>ورود</h2>
                    <div className="register__form--actions mt-12">
                        {/*<Link*/}
                        {/*    id="google"*/}
                        {/*    type="primary"*/}
                        {/*    icon={<img src={GoogleLogoPic} alt="google"/>}*/}
                        {/*    // to={`${API_URL}/social-auth/login/google-oauth2/`}*/}
                        {/*    to={() => navigate(`${API_URL}/social-auth/login/google-oauth2/`)}*/}
                        {/*>*/}
                        {/*    ورود با اکانت گوگل*/}
                        {/*</Link>*/}
                        <a id="google"
                           type="primary"
                           onClick={putUrlInLocalStorage}
                           href={`${API_URL}/social-auth/login/google-oauth2/`}>
                            ورود با اکانت گوگل <img src={GoogleLogoPic} alt="google"
                                                    style={{width: '4rem', height: '4rem'}}/>
                        </a>

                        {/*<Link to='http://localhost:8000/social-auth/login/linkedin-oauth2/' type="primary"*/}
                        {/*      classes="social">*/}
                        {/*    <LinkedInIcon/>*/}
                        {/*</Link>*/}
                        <a href={`${API_URL}/social-auth/login/linkedin-oauth2/`}
                           type="primary"
                            onClick={putUrlInLocalStorage}
                           className="social">
                            <LinkedInIcon/>
                        </a>
                        {/*<Link to='http://localhost:8000/social-auth/login/github/' type="primary" classes="social">*/}
                        {/*    <GithubIcon/>*/}
                        {/*</Link>*/}
                        <a href={`${API_URL}/social-auth/login/github/`}
                           type="primary"
                            onClick={putUrlInLocalStorage}
                           className="social">
                            <GithubIcon/>
                        </a>
                    </div>
                    <Divider>یا</Divider>
                    <SignInForm/>
                    <Button type='text' onClick={handleForgetPassword}>
                        رمز عبور رو فراموش کردم
                    </Button>
                    <Button type='text' onClick={handleResendEmail}>
                        ارسال دوباره ایمیل
                    </Button>
                    <Button
                        type='text'
                        onClick={handleActive}
                        classes='register__form--other'
                    >
                        هنوز ثبت نام نکردم
                    </Button>
                </div>
            </div>
        </>
    );
};
export default SignIn;
