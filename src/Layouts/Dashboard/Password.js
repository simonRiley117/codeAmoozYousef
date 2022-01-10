import React, {useState} from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import {useForm} from "react-hook-form";
import Password from "@Components/Shared/Inputs/Password";
import Button from "@Components/Shared/Buttons/Button";
import {ReactComponent as LockIcon} from "@Assets/Icons/lock.svg";
import {toast} from "react-toastify";
import useFetch from "../../Context/useFetch";

function PasswordChange() {
    const {
        handleSubmit,
        control,
        formState: {errors},
        reset,
    } = useForm();
    const [postPassData, setPostPassData] = useState(null);
    const onSubmit = (data) => {
        let formData = new FormData();
        formData.append("old_password", data.old_password);
        formData.append("new_password1", data.new_password1);
        formData.append("new_password2", data.new_password2);
        setPostPassData(formData);
        postPassword.reFetch()
    };
    const postPassword = useFetch({
        url: "auth/password/change",
        method: "POST",
        trigger: false,
        noHeader: false,
        data: postPassData,
        argFunc: (res) => {
            toast.success('پسورد با موفقیت تغییر یافت');
            reset({
                old_password: '',
                new_password1: '',
                new_password2: '',
            })
        },
        argErrFunc: (err) => {
            if (err.detail === 'you\'re new password must differ from you\'re old password') {
                toast.error('پسورد قبلی و جدیدت یکیه');
            }
            if (err.old_password?.includes(
                'Your old password was entered incorrectly. Please enter it again.'
            )) {
                toast.error('پسورد فعلی نادرسته');
            } else if (err.new_password2?.includes("This password is too short. It must contain at least 8 characters.")) {
                toast.error('پسورد کوتاه است.حداقل هشت رقم وارد کنید')
            } else if (err.new_password2?.includes("This password is too common.")) {
                toast.error('پسورد ساده است')
            } else if (err.new_password2?.includes("This password is entirely numeric.")) {
                toast.error('پسوورد باید ترکیبی از حروف و اعداد باشد ')
            } else if (err.new_password1) {
                console.log('new_password1', err.new_password1)
            } else if (err.new_password2?.includes("The two password fields didn’t match.")) {
                toast.error('عدم تطابق پسورهای جدید');
            } else if (err.new_password2) {
                console.log('new_password2', err.new_password2)
            } else {
                console.log('other_password', err)
            }
        },
    });
    return (
        <div>
            <p className="NewCourse__title text-center ">تعویض کلمه عبور</p>
            <form onSubmit={handleSubmit(onSubmit)} className="NewCourse__formBox ">
                <Password
                    label="کلمه عبور فعلی"
                    register={{
                        required: true,
                    }}
                    message="کلمه عبور فعلی را وارد کنید"
                    name="old_password"
                    classes="NewCourse__input "
                    control={control}
                    errors={errors}
                />

                <Password
                    label="کلمه عبور جدید"
                    register={{
                        required: true,
                    }}
                    message=" کلمه عبور جدید را وارد کنید"
                    name="new_password1"
                    classes="NewCourse__input mt-8"
                    control={control}
                    errors={errors}
                />
                <Password
                    label="تکرار کلمه عبور جدید"
                    register={{
                        required: true,
                    }}
                    message=" تکرار کلمه عبور جدید را وارد کنید "
                    name="new_password2"
                    classes="NewCourse__input mt-8	"
                    control={control}
                    errors={errors}
                />
                <Button
                    ico={false}
                    type="primary"
                    classes="NewCourse__btn mt-10 "
                    htmlType="submit"
                >
                    ثبت تغییرات
                </Button>
            </form>
        </div>
    );
}

export default PasswordChange;
