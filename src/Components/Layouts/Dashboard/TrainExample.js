import React from "react";
import { Link } from "react-router-dom";
import Codeeditor from "@Components/Shared/Codeeditor";
import UseWindowSize from "@App/Sizes/UseWindowSize";

function TrainExample() {
  const windowSize = UseWindowSize();
  let url = "https://testui.codeamooz.com/example/4/5";
  let id = "1";
  return (
    <div>
      <div className="Sarfasl__sample flex items-center	justify-between">
        <p>مثال1</p>
        <div className="Sarfasl__sampleLinkBox flex items-center justify-center ">
          <Link
            to={{
              pathname: "/dash/example",
              state: {
                title: " phyton دوره برنامه نویسی",
                id: id,
              },
            }}
          >
            {windowSize === "sm"
              ? url.slice(0, 25) + (url.length > 5 ? "..." : "")
              : url}
          </Link>
        </div>
      </div>
      <Codeeditor lan={"c_cpp"} value={'printf("hello, %s", name)'} />
      <p className="Detaile__txt leading-loose">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>
    </div>
  );
}

export default TrainExample;
