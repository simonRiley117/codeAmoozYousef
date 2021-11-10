import React from "react";
import Modal from "./Modal";
import SignInForm from "./SignInForm";
import ForgetPassword from "./ForgetPassword";
import Button from "@Components/Shared/Buttons/Button";
import IconBtn from "@Components/Shared/Buttons/IconBtn";
import Link from "@Components/Shared/Buttons/Link";

// Assets
import loginPic from "@Assets/Pic/login.png";
import GoogleLogoPic from "@Assets/Pic/google_logo.png";
import { ReactComponent as ExitIcon } from "@Assets/Icons/Exit.svg";
import { ReactComponent as LinkedInIcon } from "@Assets/Icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "@Assets/Icons/github.svg";
import { Divider } from "antd";

const SignIn = ({ onCancel, handleForgetPassword, handleActive }) => {
  return (
    <>
      <div className="register__form signIn">
        <IconBtn title="بستن" icon={<ExitIcon />} onClick={onCancel} />

        <div className="register__form--wrapper signIn">
          <h2>ورود</h2>
          <div className="register__form--actions mt-12">
            <Link
              id="google"
              type="primary"
              icon={<img src={GoogleLogoPic} alt="google" />}
            >
              ورود با اکانت گوگل
            </Link>
            <Link type="primary" classes="social">
              <LinkedInIcon />
            </Link>
            <Link type="primary" classes="social">
              <GithubIcon />
            </Link>
          </div>
          <Divider>یا</Divider>
          <SignInForm />
          <Button type="text" onClick={handleForgetPassword}>
            رمز عبور رو فراموش کردم
          </Button>
          <Button
            type="text"
            onClick={handleActive}
            classes="register__form--other"
          >
            هنوز ثبت نام نکردم
          </Button>
        </div>
      </div>
    </>
  );
};
export default SignIn;
