import React from "react";
import { Rate } from "antd";
import { ReactComponent as RateIcon } from "@Assets/Icons/Rate.svg";
import Textarea from "@Components/Shared/Inputs/Textarea";
import { useForm as formBox } from "react-hook-form";
import Button from "@Components/Shared/Buttons/Button";
import BtnLink from "@Components/Shared/Buttons/Link";
const CourseRateModal = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = formBox();
  const onSubmit = (data) => {};
  return (
    <form className="CourseRateModal__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="CourseRateModal__form--title">
        <h4>به این دوره امتیاز دهید</h4>
      </div>
      <div className="CourseRateModal__form--rate">
        <Rate
          // character={<RateIcon />}
          allowHalf
        />
      </div>
      <Textarea label="نظر شما:" name="des" control={control} errors={errors} />
      <div className="CourseRateModal__form--btnbox">
        <BtnLink to="/">بعدا</BtnLink>
        <Button type="primary">ثبت</Button>
      </div>
    </form>
  );
};

export default CourseRateModal;
