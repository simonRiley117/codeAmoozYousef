import React, {useState} from "react";
import {Rate} from "antd";
import {ReactComponent as RateIcon} from "@Assets/Icons/Rate.svg";
import Textarea from "@Components/Shared/Inputs/Textarea";
import {useForm as formBox} from "react-hook-form";
import Button from "@Components/Shared/Buttons/Button";
import BtnLink from "@Components/Shared/Buttons/Link";
import useFetch from "../../../../Context/useFetch";
import {useNavigate} from "react-router";
import {toast} from "react-toastify";


const CourseRateModal = ({selectedCourse}) => {
    const {
        handleSubmit,
        control,
        formState: {errors},
    } = formBox();

    const navigate = useNavigate()
    const [postPassData, setPostPassData] = useState(null);

    const postScore = useFetch({
        url: "MemberShipService",
        method: "POST",
        trigger: false,
        noHeader: false,
        data: postPassData,
        message: 'نظر شما با موفقیت ثبت شد',
        argFunc: () => {
            navigate('/')
        },
    })

    const [rate, setRate] = useState(2.5);
    const onSubmit = (data) => {
        let formData = new FormData();
        formData.append("course_uuid", selectedCourse);
        formData.append("grade", rate);
        formData.append("text", data.text);
        setPostPassData(formData);
        postScore.reFetch()
    };

    return (
        <form className="CourseRateModal__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="CourseRateModal__form--title">
                <h4>به این دوره امتیاز دهید</h4>
            </div>
            <div className="CourseRateModal__form--rate">
                <Rate
                    // character={<RateIcon />}
                    allowHalf
                    value={rate}
                    min={1}
                    onChange={(e) => setRate(e)}
                />
            </div>
            <Textarea label="نظر شما:"
                      name="text"
                      control={control}
                      errors={errors}/>
            <div className="CourseRateModal__form--btnbox">
                <BtnLink to="/">بعدا</BtnLink>
                <Button type="primary" htmlType="submit">ثبت</Button>
            </div>
        </form>
    );
};

export default CourseRateModal;
