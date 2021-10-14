import React from "react";
import back from "@App/Assets/img/footer/Group 846.png";
import neshan from "@App/Assets/img/footer/Group.png";
import enamad from "@App/Assets/img/footer/Group (1).png";
import logo from "@App/Assets/img/logo/Group.png";

function Footer() {
  return (
    <div className="Footer relative w-screen">
      <div className="Footer__box">
        <img src={back} alt={back} className="Footer__bluBack w-full" />
      </div>
      <div className="flex items-center absolute Footer__content">
        <div className="Footer__AboutUsBox flex flex-col  p-16">
          <p className="Footer__AboutUsBox-title text-4xl	font-semibold">
            درباره ما
          </p>
          <p className="Footer__AboutUsBox-text text-center text-2xl font-medium leading-8	">
            Lorem ipsum dolor sit amet, exerci legere percipitur his ex. Te
            dolor delectus necessitatibus qui. Usu tantas officiis ea. Et per
            oratio nusquam menandri, mel ex esse inani graece. Dico case id nec.
            Et nec soluta molestiae accommodare.
          </p>
        </div>
        <div className="flex flex-col Footer__accessBox">
          <p className="Footer__accessTitle text-4xl font-semibold">
            دسترسی سریع
          </p>
          <ul className="Footer__accessList text-2xl font-medium">
            <li>سوالات متداول</li>
            <li>همکاری با ما</li>
            <li>دوره ها</li>
          </ul>
        </div>
        <div className="flex flex-col Footer__contenttxt">
          <p className="text-4xl font-semibold">codeamooz</p>
          <p className="text-4xl font-semibold">codeamooz</p>
          <p className="text-4xl font-semibold">codeamooz</p>
        </div>
        <div className="flex items-center Footer__SambolsBox">
          <img alt={enamad} src={enamad} />
          <img alt={neshan} src={neshan} />
        </div>
      </div>

      <div className="absolute top-1/2 Footer__logo">
        <img src={logo} alt={logo} />
      </div>
      <div className="Footer__GreenLine absolute "></div>
    </div>
  );
}

export default Footer;
