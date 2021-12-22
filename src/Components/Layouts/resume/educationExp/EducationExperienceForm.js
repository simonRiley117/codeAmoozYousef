import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Input from "@Components/Shared/Inputs/Input";
import DatePickerInput from "@Components/Shared/Inputs/DatePickerInput";
import ResumeFormWrapper from "@Components/Layouts/resume/ResumeWrapper/ResumeFormWrapper";
import useFetch from "../../../../Context/useFetch";
import Select from "../../../Shared/Inputs/Select";

const EducationExperienceForm = (
    {
        getEducations,
        showForm,
        id,
        institute_name,
        grade,
        catch_start_date,
        catch_end_date,
        major,
        edit,
        showEdit,
    }) => {
    const {
        handleSubmit,
        control,
        formState: {errors},
    } = useForm({
        defaultValues: {
            major: edit ? major : '',
            grade: edit && grade,
            institute_name: edit ? institute_name : '',
        },
    });
    const optionList = [
        {value: 'DP', label: 'فوق دیپلم'},
        {value: 'U.DP', label: 'دیپلم'},
        {value: 'B.S', label: 'کارشناسی'},
        {value: 'M.S', label: 'کارشناسی ارشد'},
        {value: 'Ph.D', label: 'دکترا'},
    ];
    const [postData, setPostData] = useState();
    const createItem = useFetch({
        url: `StudentGradeService`,
        data: postData,
        method: 'POST',
        trigger: false,
        caller: getEducations,
        argFunc: () => showForm(),
    });
    const patchItem = useFetch({
        url: `StudentGradeService/${id}`,
        data: postData,
        method: 'PATCH',
        trigger: false,
        caller: getEducations,
        argFunc: () => showEdit(),
    });
    const onSubmit = (data) => {
        setPostData({
            grade: data.grade,
            major: data.major,
            institute_name: data.institute_name,
            catch_start_date: data.catch_start_date.convert().format('YYYY-MM-DD'),
            catch_end_date: data.catch_end_date.convert().format('YYYY-MM-DD'),
        });
        if (edit) patchItem.reFetch();
        else createItem.reFetch();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ResumeFormWrapper
                className="WorkExperienceForm"
                showForm={showForm}
                showEdit={showEdit}
                edit={edit}>
                <div className="grid grid-cols-2 resume-grid-gap ">
                    <Input
                        label='نام آموزشگاه'
                        register={{
                            required: {
                                value: true,
                                message: 'نام آموزشگاه را وارد کنید',
                            },
                        }}
                        name='institute_name'
                        control={control}
                    />
                    <Select
                        label='مدرک تحصیلی'
                        register={{
                            required: {
                                value: true,
                                message: ' مدرک تحصیلی را انتخاب کنید',
                            },
                        }}
                        name='grade'
                        control={control}
                        options={optionList}
                        defaultValue='U.DP'

                        // defaultValue={createInfoData.stepOne.courseLevel}
                    />
                    <Input
                        label='رشته تحصیلی'
                        register={{
                            required: {
                                value: true,
                                message: 'رشته تحصیلی را وارد کنید',
                            },
                        }}
                        name='major'
                        control={control}
                    />
                </div>
                <div className="grid grid-cols-2 resume-grid-gap mt-4">
                    <DatePickerInput
						label='از تاریخ'
						register={{
							required: true,
						}}
						message='تاریخ را وارد کنید'
						name='catch_start_date'
						control={control}
						defaultValue={edit && catch_start_date}
					/>
                    <DatePickerInput
						label='تا تاریخ'
						register={{
							required: true,
						}}
						message='تاریخ را وارد کنید'
						name='catch_end_date'
						control={control}
						defaultValue={edit && catch_end_date}
					/>
                </div>
            </ResumeFormWrapper>
        </form>
    );
};

export default EducationExperienceForm;
