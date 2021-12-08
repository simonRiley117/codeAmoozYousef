import React from "react";
import { useForm } from "react-hook-form";
import Input from "@Components/Shared/Inputs/Input";
import DatePickerInput from "@Components/Shared/Inputs/DatePickerInput";
import ResumeFormWrapper from "@Components/Layouts/resume/ResumeWrapper/ResumeFormWrapper";

const EducationExperienceForm = ({ readable }) => {
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
        </div>
        <div className="grid grid-cols-2 resume-grid-gap mt-4">
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
        </div>
      </form>
    </ResumeFormWrapper>
  );
};

export default EducationExperienceForm;
