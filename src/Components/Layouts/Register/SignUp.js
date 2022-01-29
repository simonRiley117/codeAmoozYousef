import React from "react";
import SignInForm from "./SignInForm";
import Button from "@Components/Shared/Buttons/Button";
import IconBtn from "@Components/Shared/Buttons/IconBtn";
import Link from "@Components/Shared/Buttons/Link";

// Assets
import GoogleLogoPic from "@Assets/Pic/google_logo.png";
import {ReactComponent as ExitIcon} from "@Assets/Icons/Exit.svg";
import {ReactComponent as LinkedInIcon} from "@Assets/Icons/linkedin.svg";
import {ReactComponent as GithubIcon} from "@Assets/Icons/github.svg";
import SignUpForm from "./SignUpForm";
import {Divider} from "antd";
import {API_URL} from "../../../constants";

const SignUp = ({onCancel, handleActive}) => {
    return (
        <div className="register__form signUp">
            <IconBtn title="بستن" icon={<ExitIcon/>} onClick={onCancel}/>

            <div className="register__form--wrapper signUp">
                <h2>ثبت نام</h2>
                <div className="register__form--actions mt-6">
                   
                    <a
                        id="google"
                        className="link link__primary"
                        href={`${API_URL}/social-auth/login/google-oauth2/`}>
                        ورود با اکانت گوگل <img src={GoogleLogoPic} alt="google"/>
                    </a>


                   
                    <a href={`${API_URL}/social-auth/login/linkedin-oauth2/`}
                       className="link link__primary"
                       className="social">
                        <LinkedInIcon/>
                    </a>

                    
                    <a href={`${API_URL}/social-auth/login/github/`}
                       className="link link__primary"
                       className="social">
                        <GithubIcon/>
                    </a>
                </div>
                <Divider>یا</Divider>

                <SignUpForm handleActive={handleActive}/>
                <Button
                    type="text"
                    onClick={handleActive}
                    classes="register__form--other"
                >
                    قبلا ثبت نام کردم
                </Button>
            </div>
        </div>
    );
};
export default SignUp;
