import React from "react";
import { useForm } from "react-hook-form";
import Input from "@Components/Shared/Inputs/Input";
import Textarea from "@Components/Shared/Inputs/Textarea";
import DatePickerInput from "@Components/Shared/Inputs/DatePickerInput";
import CheckboxInput from "@Components/Shared/Inputs/CheckboxInput";
import ResumeFormWrapper from "@Components/Layouts/resume/ResumeWrapper/ResumeFormWrapper";

const WorkExperienceForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};
  return (
    <ResumeFormWrapper className="WorkExperienceForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 resume-grid-gap ">
          <Input
            label="سمت شما"
            register={{
              required: false,
            }}
            message="سمتتان را وارد کنید"
            name="first_name"
            control={control}
            errors={errors}
          />
          <Input
            label="نام شرکت"
            register={{
              required: false,
            }}
            message="نام شرکت  را وارد کنید"
            name="first_name"
            control={control}
            errors={errors}
          />
          <div className="resume__checkbox">
            <CheckboxInput
              label="تاکنون"
              register={{
                required: false,
              }}
              message="نام شرکت  را وارد کنید"
              name="date"
              control={control}
              className="checkbox__large"
              errors={errors}
            />
          </div>
        </div>
        <div className="grid  resume-grid-gap WorkExperienceForm__row">
          <DatePickerInput
            label=" از تاریخ"
            register={{
              required: false,
            }}
            message="سمتتان را وارد کنید"
            name="first_name"
            control={control}
            errors={errors}
          />
          <DatePickerInput
            label="تا تاریخ"
            register={{
              required: false,
            }}
            message="نام شرکت  را وارد کنید"
            name="first_name"
            control={control}
            errors={errors}
          />
          <div className="resume__checkbox">
            <CheckboxInput
              label="تاکنون"
              register={{
                required: false,
              }}
              message="نام شرکت  را وارد کنید"
              name="date"
              control={control}
              className="checkbox__large"
              errors={errors}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 resume-grid-gap ">
          <Textarea
            label=" درباره من "
            register={{
              required: false,
            }}
            message="نام را وارد کنید"
            name="last_name"
            control={control}
            errors={errors}
          />
        </div>
      </form>
    </ResumeFormWrapper>
  );
};

export default WorkExperienceForm;
