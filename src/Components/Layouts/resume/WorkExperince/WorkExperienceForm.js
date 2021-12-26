import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Input from "@Components/Shared/Inputs/Input";
import Textarea from "@Components/Shared/Inputs/Textarea";
import DatePickerInput from "@Components/Shared/Inputs/DatePickerInput";
import CheckboxInput from "@Components/Shared/Inputs/CheckboxInput";
import ResumeFormWrapper from "@Components/Layouts/resume/ResumeWrapper/ResumeFormWrapper";
import useFetch from '@App/Context/useFetch';

const WorkExperienceForm = (
    {
        getWorks,
        showForm,
        edit,
        showEdit,
        company_name,
        profession_description,
        profession_end_date,
        profession_start_date,
        profession_title,
        id,
    }) => {
    const {
        handleSubmit,
        control,
        formState: {errors},
    } = useForm({
        defaultValues: {
            company_name: edit ? company_name : '',
            profession_description: edit ? profession_description : '',
            // profession_end_date: edit ? profession_end_date : '',
            // profession_start_date: edit ? profession_start_date : '',
            profession_title: edit ? profession_title : '',
        },
    });
    const [isNow, setNowDate] = useState(edit && profession_end_date === null ? true : false);

    const [postData, setPostData] = useState();
    const createItem = useFetch({
        url: `StudentProfessionService`,
        data: postData,
        method: 'POST',
        trigger: false,
        caller: getWorks,
        argFunc: () => showForm(),
    });

    const patchItem = useFetch({
        url: `StudentProfessionService/${id}`,
        data: postData,
        method: 'PATCH',
        trigger: false,
        caller: getWorks,
        argFunc: () => showEdit(),
    });


    const onSubmit = (data) => {
        if (isNow)
            setPostData({
                profession_description: data.profession_description,
                profession_title: data.profession_title,
                profession_start_date: data.profession_start_date
                    .convert()
                    .format('YYYY-MM-DD'),
                profession_end_date: null,
                company_name: data.company_name,
            });
        else
            setPostData({
                profession_description: data.profession_description,
                profession_title: data.profession_title,
                profession_start_date: data.profession_start_date
                    .convert()
                    .format('YYYY-MM-DD'),
                profession_end_date: data.profession_end_date
                    .convert()
                    .format('YYYY-MM-DD'),
                company_name: data.company_name,
            });
        if (edit) {
            patchItem.reFetch();
        } else {
            createItem.reFetch();
        }
    };

    const updateSelected = (flag) => {
        setNowDate(flag);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ResumeFormWrapper
                className="WorkExperienceForm"
                type='work'
                showForm={showForm}
                showEdit={showEdit}
                edit={edit}
            >
                <div className="grid grid-cols-2 resume-grid-gap ">
                    <Input
                        label="سمت شما"
                        register={{
                            required: {
                                value: true,
                                message: 'سمتتان را وارد کنید',
                            },
                        }}
                        name="profession_title"
                        control={control}
                        // errors={errors}
                    />
                    <Input
                        label="نام شرکت"
                        register={{
                            required: {
                                value: true,
                                message: 'نام شرکت  را وارد کنید',
                            },
                        }}
                        name="company_name"
                        control={control}
                        // errors={errors}
                    />
                </div>
                <div className="grid  resume-grid-gap WorkExperienceForm__row">
                    <DatePickerInput
                        label=" از تاریخ"
                        register={{
                            required: false,
                        }}
                        message="تاریخ را وارد کنید"
                        name="profession_start_date"
                        control={control}
                        // errors={errors}
                        defaultValue={edit ? profession_start_date : null}
                    />
                    {/*<div className='resume__box'>*/}
                    <DatePickerInput
                        label="تا تاریخ"
                        register={{
                            required: false,
                        }}
                        message="تاریخ را وارد کنید"
                        name="profession_end_date"
                        control={control}
                        defaultValue={edit ? profession_end_date : null}
                        disabled={isNow}
                        // errors={errors}
                    />
                    <div className="resume__checkbox">
                        <CheckboxInput
                            label="تاکنون"
                            register={{
                                required: false,
                            }}
                            message="تاریخ را وارد کنید"
                            name="now"
                            control={control}
                            large
                            onSelected={updateSelected}
                            checked={isNow}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 resume-grid-gap ">
                    <Textarea
                        label=" درباره من "
                        register={{
                            required: {
                                value: true,
                                message: 'توضیحات را وارد کنید',
                            },
                        }}
                        name="profession_description"
                        control={control}
                        // errors={errors}
                    />
                </div>
            </ResumeFormWrapper>
        </form>
    );
};

export default WorkExperienceForm;
