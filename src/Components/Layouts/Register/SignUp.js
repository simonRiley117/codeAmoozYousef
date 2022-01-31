import React from "react";
import SignInForm from "./SignInForm";
import Button from "@Components/Shared/Buttons/Button";
import IconBtn from "@Components/Shared/Buttons/IconBtn";
import Link from "@Components/Shared/Buttons/Link";

// Assets
import GoogleLogoPic from "@Assets/Pic/google_logo.png";
import { ReactComponent as ExitIcon } from "@Assets/Icons/Exit.svg";
import { ReactComponent as LinkedInIcon } from "@Assets/Icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "@Assets/Icons/github.svg";
import SignUpForm from "./SignUpForm";
import { Divider } from "antd";
import { API_URL, USER_URL } from "../../../constants";

const SignUp = ({ onCancel, handleActive }) => {
  const putUrlInLocalStorage = () => {
    localStorage.setItem("url", window.location.href);
  };

  return (
    <div className="register__form signUp">
      <IconBtn title="بستن" icon={<ExitIcon />} onClick={onCancel} />

      <div className="register__form--wrapper signUp">
        <h2>ثبت نام</h2>
        <div className="register__form--actions mt-6">
          {/*<Link*/}
          {/*    id="google"*/}
          {/*    type="primary"*/}
          {/*    icon={<img src={GoogleLogoPic} alt="google"/>}*/}
          {/*    to='/'*/}
          {/*>*/}
          {/*    ثبت نام با اکانت گوگل*/}
          {/*</Link>*/}
          <a
            id="google"
            type="primary"
            onClick={putUrlInLocalStorage}
            href={`${API_URL}/social-auth/login/google-oauth2/`}
            className="link link__primary"
          >
            <div className=" flex items-center">
              <p> ورود با اکانت گوگل</p>
              <img src={GoogleLogoPic} alt="google" />
            </div>
          </a>
          {/*<Link to='http://localhost:8000/social-auth/login/linkedin-oauth2/' type="primary"*/}
          {/*      classes="social">*/}
          {/*    <LinkedInIcon/>*/}
          {/*</Link>*/}
          <a
            href={`${API_URL}/social-auth/login/linkedin-oauth2/`}
            type="primary"
            onClick={putUrlInLocalStorage}
            className="link link__primary social"
          >
            <LinkedInIcon />
          </a>
          {/*<Link to='http://localhost:8000/social-auth/login/github/' type="primary" classes="social">*/}
          {/*    <GithubIcon/>*/}
          {/*</Link>*/}
          <a
            href={`${API_URL}/social-auth/login/github/`}
            type="primary"
            onClick={putUrlInLocalStorage}
            className="link link__primary social"
          >
            {" "}
            <GithubIcon />
          </a>
        </div>
        <Divider>یا</Divider>

        <SignUpForm handleActive={handleActive} />
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
