import React from "react";
import { Link } from "react-router-dom";
import { Divider } from "antd";
import { useForm } from "react-hook-form";

// Components
import Input from "../Inputs/Input";
import TextArea from "@Components/Shared/Inputs/Textarea";
import Button from "../Buttons/Button";

// Assets
import logo from "@Assets/Logo/codlogo.png";
import neshan from "@Assets/Pic/etminan.png";
import enamad from "@Assets/Pic/enamad.png";
import { ReactComponent as TelegramIcon } from "@Assets/Icons/telegram.svg";
import { ReactComponent as WhatsappIcon } from "@Assets/Icons/whatsapp.svg";
import { ReactComponent as InstagramIcon } from "@Assets/Icons/instagram.svg";
import { ReactComponent as LinkedInIcon } from "@Assets/Icons/linked.svg";

const Footer = () => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: "",
      message: ""
    }
  });
  //window.open(&quot;https://logo.samandehi.ir/Verify.aspx?id=124402&p=rfthuiwkaodsaodsobpduiwk&quot;, &quot;Popup&quot;,&quot;toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30&quot;)
  const handleClick = () => {
    window.open(
    "https://logo.samandehi.ir/Verify.aspx?id=124402&p=rfthuiwkaodsaodsobpduiwk",
	"popup",
	"toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30"
    );
  };
  const onSubmit = data => {};

  return (
    <footer className="footer mt-48 pb-8">
      <div className="container">
        <div className="footer__wrapper  pt-24 ">
          <section className="footer__info ">
            <Link to="/">
              <div className="footer__logo d-flex gap-x-4">
                <img src={logo} alt="CodeAmooz" />
                <h2>CODEAMOOZ</h2>
              </div>
            </Link>
            <p>
            سامانه «کدآموز» در زمینه توسعه نرم‌افزار و برنامه‌نویسی، به عنوان یک پلتفرم تخصصی، خدمات گسترده‌ای ارائه می‌دهد که شامل آموزش و ارزیابی تعاملی می‌شود. این دوره‌ها و منابع آموزشی توسط اساتید و متخصصان با تجربه ارائه می‌شود و داشتن امکان ارزیابی تعاملی، این امکان را به دانشجویان و علاقمندان می‌دهد بتوانند در قالب آزمون و یا پروژه‌های عملی، مهارت‌های خود را محک بزنند.  


            </p>
            <div className="flex gap-5 footer__info--symbols mt-6">
			<a
                        referrerPolicy="origin"
                        target="_blank"
                        href="https://trustseal.enamad.ir/?id=251667&amp;Code=ORS8gimDMkFKmWVzad3T"
                    >
                        <img
                            className="h-40"
                            referrerPolicy="origin"
                            src="https://Trustseal.eNamad.ir/logo.aspx?id=251667&amp;Code=ORS8gimDMkFKmWVzad3T"
                            alt=""
                            id="ORS8gimDMkFKmWVzad3T"
                        />
                    </a>
                    <img
                        onClick={handleClick}
                        className="cursor-pointer h-40"
                        referrerPolicy="origin"
                        id="jxlznbqewlaowlaoesgtnbqe"
                        alt="logo-samandehi"
                        src="https://logo.samandehi.ir/logo.aspx?id=124402&p=nbpdodrfshwlshwllymaodrf"
                    />
            </div>
          </section>
          <section className="footer__about ">
            <h3 className="footer__title">تماس با ما</h3>
            <p className="mb-4">
            آدرس دفتر: اصفهان – بلوار دانشگاه صنعتی اصفهان – شهرک علمی و تحقیقاتی اصفهان ساختمان ابوریحان – واحد 135

            </p>
            <div className="flex items-center justify-between mb-4">
              <span>ساعات تماس:</span>
              <span>شنبه تا چهارشنبه از ساعت 9 الی 18
</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span>تلفن:</span>
              <span>031-33932242</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span>کد پستی :</span>
              <span> 8415682025</span>
            </div>
            <div className="flex items-center justify-between ">
              <span>ایمیل :</span>
              <span>CodeAmooz@gmail.com</span>
            </div>
          </section>
          <section className="footer__link ">
            <h3 className="footer__title">درباره ما</h3>
            <Link to="/about-me">درباره ما</Link>
            <Link to="/contact-us">تماس با ما</Link>
            <Link to="/">قوانین و مقررات</Link>
           
            <Link to="/">سوالات متداول</Link>
          </section>
          <section className="footer__contact  flex items-center justify-center flex-col">
            <h4>ارتباط با ما</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="ایمیل"
                register={{
                  required: {
                    value: true,
                    message: "ایمیل را وارد کنید"
                  }
                }}
                name="email"
                control={control}
                // value={teacherCoworkerData?.first_name}
              />
              <TextArea
                label="پیام شما"
                register={{
                  required: {
                    value: true,
                    message: "پیام را وارد کنید"
                  }
                }}
                name="message"
                control={control}
                minRows={3}
                maxRows={3}
                // value={teacherCoworkerData?.bio}
              />
              <Button
                type="primary"
                htmlType="submit"
                // disabled={acceptRules ? false : true}
              >
                ارسال
              </Button>
            </form>
          </section>
        </div>
        <section className="footer__social flex justify-end gap-x-7">
          <span className="footer__social--item">
            <TelegramIcon />
          </span>
          <span className="footer__social--item">
            <WhatsappIcon />
          </span>
          <span className="footer__social--item">
            <InstagramIcon />
          </span>
          <span className="footer__social--item">
            <LinkedInIcon />
          </span>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
