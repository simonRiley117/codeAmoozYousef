import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Input from "@Components/Shared/Inputs/Input";
import InputTextArea from "@Components/Shared/Inputs/Textarea";
import CheckBox from "@Components/Shared/Inputs/CheckBox";
import Button from "@Components/Shared/Buttons/Button";
import UploadProfile from "@Components/Shared/Inputs/UploadProfile";
import PopUp from "@Components/Shared/PopUp/PopUp";
import useFetch from "../../../../Context/useFetch";
import Upload from "../../../Shared/Inputs/Upload";

function Request() {
    const [employerCoworkerPostData, setEmployerCoworkerPostData] = useState(null);
    const {handleSubmit, control, formState: {errors}, register} = useForm();

    const onSubmit = (data) => {
        let formData = new FormData();
        console.log('data: ', data)
        if (data.resume.length !== 0) {
            formData.append('resume', data.resume[0], data.resume[0].name);
        }
        formData.append('company_name', data.first_name);
        formData.append('founder_name', data.last_name);
        formData.append('major', data.major);
        formData.append('phone_number', data.phone_number);
        formData.append('email', data.email);
        formData.append('bio', data.bio);
        setEmployerCoworkerPostData(formData);
        postEmployerCoWorker.reFetch();
    };

    const postEmployerCoWorker = useFetch({
        url: 'EmployerCoWorkerService',
        method: 'POST',
        trigger: false,
        data: employerCoworkerPostData,
        // caller: getTeacherCoWorkerInfo,
        message: 'اطلاعات با موفقیت ثبت شد',
    });

    return (
        <div className="Deatil">
            <div className="ProduceRules__content">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="MasterSignUp__formBox"
                >
                    <div className="grid grid-cols-2 MasterSignUp__gridBox items-start justify-start">
                        <Input
                            label="نام شرکت:"
                            register={{
                                required: true,
                            }}
                            message="نام شرکت را وارد کنید"
                            name="company_name"
                            control={control}
                            errors={errors}
                        />
                        <Input
                            label="نام موسس:"
                            register={{
                                required: true,
                            }}
                            message=" نام موسس را وارد کنید"
                            name="founder_name"
                            control={control}
                            errors={errors}
                        />
                        <Input
                            label="زمینه کاری:"
                            register={{
                                required: true,
                            }}
                            message=" زمینه کاری را وارد کنید"
                            name="major"
                            control={control}
                            errors={errors}
                        />
                        <div></div>
                        <Input
                            label="شماره تماس:"
                            register={{
                                required: true,
                            }}
                            message="شماره تماس را وارد کنید"
                            name="phone_number"
                            control={control}
                            errors={errors}
                        />
                        <Input
                            label="ایمیل:"
                            register={{
                                required: {
                                    value: true,
                                    message: 'ایمیل خود را وارد کنید',
                                },
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'ایمیل وارد شده اشتباه است!',
                                },
                            }}
                            name="email"
                            errors={errors}
                            control={control}
                        />
                        <div className='profile__upload-row'>
                            <Upload
                                label='رزومه'
                                {...register('resume', {
                                    required: true,
                                })}
                                accept='.pdf'
                                // value={teacherCoworkerData?.resume}
                                id='cover_upload'
                            />
                        </div>
                    </div>
                    <div className="MasterSignUp__textarea">
                        <InputTextArea
                            rows={4}
                            label="شرح مختصری از شما:"
                            register={{
                                required: true,
                            }}
                            message="شرح را وارد کنید"
                            name="bio"
                            control={control}
                            errors={errors}
                        />
                    </div>
                    <div className="flex items-start text-right MasterSignUp__ruleBox">
                        <CheckBox
                            label="سایت را قبول دارم"
                            message="قوانین و مقررات"
                            name="rule"
                            control={control}
                            errors={errors}
                            register={{
                                required: true,
                            }}
                        />
                    </div>
                    <div className="text-center flex items-center justify-center MasterSignUp__btnBox ">
                        <Button type="primary" classes="MasterSignUp__btn" htmlType="submit">
                            ارسال
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Request;
