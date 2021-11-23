import React, {useState} from 'react';
import Input from "../../Components/Shared/Inputs/Input";
import Textarea from "../../Components/Shared/Inputs/Textarea";
import {useForm} from "react-hook-form";
//images
import headset from '../../Assets/Images/Pic/Group 823.png'
import Button from "../../Components/Shared/Buttons/Button";
import useFetch from "../../Context/useFetch";


const Contact = () => {
    const [contactPostData, setContactPostData] = useState(null);

    const {
        handleSubmit,
        control,
        formState: {errors},
    } = useForm();

    const postContact = useFetch({
        url: `ContactService/create_contact`,
        method: 'POST',
        trigger: false,
        data: contactPostData,
        message: 'اطلاعات با موفقیت ارسال شد',
    });

    const onSubmit = (data) => {
        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('message', data.message);
        setContactPostData(formData);
        postContact.reFetch()
    };

    return (
        <div className="contact container">
            <div className="w-4/5 mx-auto my-20 bg-gray-200 h-50 rounded-full mt-40">
                <h2 className="contact-heading title__box ">
                    ارتباط با ما
                </h2>
                <div className="flex justify-between mx-auto w-4/5 items-start">
                    <form onSubmit={handleSubmit(onSubmit)} className="contact-form mr-28 ">
                        <Input
                            label="نام و نام خانوادگی:"
                            register={{
                                required: true,
                            }}
                            message="نام نام خانوادگی را وارد کنید"
                            name="name"
                            control={control}
                            errors={errors}
                            classes="mr-bt-sm contact-bold"
                        />
                        <Input
                            label="ایمیل: "
                            register={{
                                required: true,
                            }}
                            message="ایمیل را وارد کنید"
                            name="email"
                            control={control}
                            errors={errors}
                            type="email"
                            classes="mr-bt-sm"
                        />
                        <Textarea
                            label="پیام شما"
                            register={{
                                required: true,
                            }}
                            message="پیام را وارد کنید"
                            name="message"
                            control={control}
                            errors={errors}
                            minRows={7}
                        />
                        <Button classes="contact-button w-full" type="primary" htmlType="submit">
                            ارسال
                        </Button>
                    </form>
                    <img src={headset} alt="headset" className="contact-img  "/>
                </div>
            </div>
        </div>
    );
};
export default Contact;