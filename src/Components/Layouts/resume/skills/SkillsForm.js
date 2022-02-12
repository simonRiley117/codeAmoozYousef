import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Input from "@Components/Shared/Inputs/Input";
import ResumeFormWrapper from '@Components/Layouts/resume/ResumeWrapper/ResumeFormWrapper'
import {Rate} from 'antd';
import useFetch from "../../../../Context/useFetch";

const SkillsForm = (
    {
        getSkill,
        showForm,
        edit,
        id,
        award_rate,
        showEdit,
        award_title
    }) => {
    const {
        handleSubmit,
        control,
        formState: {errors},
    } = useForm({
        defaultValues: {
            award_title: edit ? award_title : ''
        },
    });
    const [postData, setPostData] = useState();
    const createItem = useFetch({
        url: `StudentAwardService`,
        data: postData,
        method: 'POST',
        trigger: false,
        caller: getSkill,
        argFunc: () => showForm(),
    });

    const patchItem = useFetch({
        url: `StudentAwardService/${id}`,
        data: postData,
        method: 'PATCH',
        trigger: false,
        caller: getSkill,
        argFunc: () => showEdit(),
    });
    const [rate, setRate] = useState(edit ? award_rate : 2.5);
    const onSubmit = (data) => {
        setPostData({
            award_title: data.award_title,
            award_rate: rate,
        });
        if (edit) patchItem.reFetch();
        else createItem.reFetch();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ResumeFormWrapper
                className='WorkExperienceForm'
                showForm={showForm}
                showEdit={showEdit}
                edit={edit}
            >
                <div className="SkillsForm__row flex items-end justify-between d-flex-align-end">
                    <Input
                        label='مهارت شما'
                        register={{
                            required: {
                                value: true,
                                message: 'مهارت را وارد کنید',
                            },
                        }}
                        name='award_title'
                        control={control}
                    />
                    <Rate
                        value={rate}
                        onChange={(e) => setRate(e)}
                    />
                </div>
            </ResumeFormWrapper>
        </form>
    );
};

export default SkillsForm;
