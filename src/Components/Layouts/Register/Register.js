import React, { useLayoutEffect, useState } from "react";
import Modal from "./Modal";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Button from "@Components/Shared/Buttons/Button";
import loginPic from "@Assets/Pic/login.png";
import RegisterPic from "@Assets/Pic/register.png";
import classNames from "classnames";
import ForgetPassword from "./ForgetPassword";

const Register = ({ onCancel, visible, ...rest }) => {
  const [isActive, setActive] = useState(false);
  const [isForgetPassword, setForgetPassword] = useState(false);

  const handleActive = () => {
    setActive((prevState) => !prevState);
    setForgetPassword(false);
  };

  const handleForgetPassword = () => {
    setForgetPassword((prevState) => !prevState);
  };
  useLayoutEffect(() => {
    setForgetPassword(false);
    setActive(false);
  }, [visible]);
  return (
    <Modal visible={visible} onCancel={onCancel} {...rest}>
      <section
        className={classNames("register__container", {
          active: isActive,
        })}
      >
        <SignUp onCancel={onCancel} handleActive={handleActive} />
        <SignIn
          onCancel={onCancel}
          handleActive={handleActive}
          handleForgetPassword={handleForgetPassword}
        />
        <ForgetPassword
          onCancel={onCancel}
          active={isForgetPassword}
          handleForgetPassword={handleForgetPassword}
        />

        <div className="register__overlay">
          <div className="register__overlay--content">
            <div className="register__content signUp">
              <h2>وقتشه که پیشرفت رو شروع کنی...</h2>
              <img src={loginPic} alt="ورود" />
              <Button type="primary" onClick={handleActive}>
                ثبت نام
              </Button>
            </div>
            <div className="register__content signIn">
              <h2>به کدآموز خوش اومدی</h2>
              <p>برای دسترسی به دوره ها وارد اکانتت شو</p>
              <img src={RegisterPic} alt="ورود" />
              <Button type="primary" onClick={handleActive}>
                ورود
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
};
export default Register;
