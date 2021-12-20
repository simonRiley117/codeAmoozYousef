import React from "react";
import UserBox from "./UserBox";
import support from "@Assets/Pic/Group 845.png";
import img from "@Assets/Pic/course-profile.png";
const MessageUser = () => {
  return (
    <div>
      <UserBox
        src={support}
        title="پشتیانی"
        des="با سلام خدمت شما دانشجوی گرامی. تیم پشتیبانی دوره
های ما همه روزه پاسخگوی سوالات شما درباره..."
        id="1"
      />
      <UserBox
        src={img}
        title="علیرضا میرزایی فرد"
        des="از طراحان لورم ایپسوم متن ساختگی با نامفهوم از لازم
است، و برای شرایط فعلی تکنولوژی مورد..."
        time="3:17"
        date="1400/05/17"
        id="2"
      />
      <UserBox
        src={img}
        title="علیرضا میرزایی فرد"
        des="از طراحان لورم ایپسوم متن ساختگی با نامفهوم از لازم
است، و برای شرایط فعلی تکنولوژی مورد..."
        time="3:17"
        date="1400/05/17"
        id="3"
      />
      <UserBox
        src={img}
        title="علیرضا میرزایی فرد"
        des="از طراحان لورم ایپسوم متن ساختگی با نامفهوم از لازم
است، و برای شرایط فعلی تکنولوژی مورد..."
        time="3:17"
        date="1400/05/17"
        id="4"
      />
      <UserBox
        src={img}
        title="علیرضا میرزایی فرد"
        des="از طراحان لورم ایپسوم متن ساختگی با نامفهوم از لازم
است، و برای شرایط فعلی تکنولوژی مورد..."
        time="3:17"
        date="1400/05/17"
        id="5"
      />
    </div>
  );
};

export default MessageUser;
