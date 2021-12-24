import React, {useState} from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import {useForm} from "react-hook-form";
import Input from "@Components/Shared/Inputs/Input";
import InputTextArea from "@Components/Shared/Inputs/Textarea";
import icon from "@Assets/Pic/newcourse.png";
import Button from "@Components/Shared/Buttons/Button";
import PopUp from "@Components/Shared/PopUp/PopUp";
import useFetch from "../../Context/useFetch";

function NewCourse() {
    const [pop, setPop] = useState(false);
    const {
        handleSubmit,
        control,
        formState: {errors, isSubmitted},
        setValue,
        reset
    } = useForm();
    const [suggestCoursePostData, setSuggestCoursePostData] =
        useState(null);

    const onSubmit = (data) => {
        let formData = new FormData();
        formData.append("course_name", data.course_name);
        formData.append("course_description", data.course_description);
        setSuggestCoursePostData(formData);
        postSuggestCourse.reFetch();
    };


    const postSuggestCourse = useFetch({
        url: "StudentService/suggest_course",
        method: "POST",
        trigger: false,
        data: suggestCoursePostData,
        // caller: getTechnicalCoWorkerInfo,
        message: "اطلاعات با موفقیت ثبت شد",
        func: () => reset({
            course_name: '',
            course_description: '',
        }),
    });

    return (
        <div className="NewCourse">
            <p className="NewCourse__title text-center ">پیشنهاد دوره جدید</p>
            <form onSubmit={handleSubmit(onSubmit)} className="NewCourse__formBox">
                <div className="flex items-center  NewCourse__inputBox">
                    <Input
                        label="نام دوره"
                        register={{
                            required: {
                                value: true,
                                message: "نام دوره را وارد کنید",
                            },
                        }}
                        name="course_name"
                        classes="NewCourse__input"
                        placeholder="طراحی رابط کاربری"
                        control={control}
                        errors={errors}
                    />
                    <img src={icon} alt={icon}/>
                </div>
                <InputTextArea
                    rows={6}
                    label="توضیح درباره دوره:"
                    register={{
                        required: {
                            value: true,
                            message: "توضیح دوره را وارد کنید",
                        }
                    }}
                    name="course_description"
                    control={control}
                    errors={errors}
                    // value={technicalCoworkerData?.bio}
                />

                {/* <PopUp description={"test"}> */}
                <Button
                    ico={false}
                    type="primary"
                    classes="NewCourse__btn"
                    htmlType="submit"
                >
                    ثبت
                </Button>
                {/* </PopUp> */}
            </form>
        </div>
    );
}

export default NewCourse;
