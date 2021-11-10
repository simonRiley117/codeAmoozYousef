import React from "react";
import { useForm } from "react-hook-form";
import Input from "@Components/Shared/Inputs/Input";
import ResumeFormWrapper from '@Components/Layouts/resume/ResumeWrapper/ResumeFormWrapper'
import { Rate } from 'antd';

const SkillsForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};
  return (
      <ResumeFormWrapper className='WorkExperienceForm' >
      <form onSubmit={handleSubmit(onSubmit)}>
    
        <div className="SkillsForm__row d-flex-space d-flex-align-end">
          <Input
            label="مهارت شما"
            register={{
              required: false,
            }}
            message="مهارت را وارد کنید"
            name="first_name"
            control={control}
            errors={errors}
          />
        
      
        <Rate allowHalf defaultValue={2.5}  />
          </div>
      </form>
      </ResumeFormWrapper>
  );
};

export default SkillsForm;
