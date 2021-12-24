import React, {useState} from "react";
import {Link} from "react-router-dom";
import Price from "@Components/Shared/Price/Price";
import IconBtn from "@Components/Shared/Buttons/IconBtn";
import {Radio} from "antd";
import {toast} from "react-toastify";
import {useUserData} from "@App/Context/userContext";
// Assets
import {ReactComponent as Trash} from "@Assets/Icons/Trash.svg";
import useFetch from "@App/Context/useFetch";
import Modal from "@Components/Shared/Modal/Modal";
import Button from "@Components/Shared/Buttons/Button";

const ShoppingCoursecard = ({card, getPayment, getorderSummary}) => {
    const {
        all_degrees,
        course_id,
        course_name,
        degree_name,
        discount_amount,
        discounted_cost,
        origin_cost,
        teacher_avatar,
        teacher_last_name,
        teacher_name,
        uuid,
        course_cover,
    } = card;
    const [degree, setDegree] = useState(null);
    const [modal, setModal] = useState(false);
    const {getUser} = useUserData();
    const handleChange = (e) => {
        const selectedDegree = all_degrees.find(
            (item) => item[1] === e.target.value
        );
        setDegree(selectedDegree[0]);
        ChangeDegree.reFetch();
    };
    const CallFunc = () => {
        getorderSummary.reFetch();
        getPayment.reFetch();
    };
    const ChangeDegree = useFetch({
        url: `CartService/${uuid}/editOrderItem`,
        method: "PUT",
        trigger: false,
        func: CallFunc,
        argFunc: (res) => {
            toast.success("مدرک با موفقیت تغییر کرد ");
        },
        data: {degree: degree},
    });
    const DeleteCourse = useFetch({
        url: `CartService/removeFromCart`,
        method: "DELETE",
        trigger: false,
        func: CallFunc,
        argFunc: (res) => {
            toast.success(" دوره با موفقیت حذف شد");
            getUser.reFetch()
        },
        params: {course_uuid: course_id},
    });
    const handleModalVisible = () => {
        setModal(false);
    };

    const handleModalShow = (uuid, lock) => {
        setModal(true);
    };
    const handleDelete = () => {
        DeleteCourse.reFetch();
        handleModalVisible();
    };
    return (
        <article className="card-bg">
            <div className="card-bg-pic">
                <img src={course_cover} alt="python" className="card-bg-pic-logo"/>
            </div>

            <div className="card-bg-info">
                <div className="card-bg--box">
                    <div className="card-bg--heart">
                        <IconBtn
                            disabled={DeleteCourse.loading}
                            onClick={handleModalShow}
                            title="حذف دوره"
                            icon={<Trash/>}
                            getPopupContainer={false}

                        />
                    </div>
                </div>
                <div className="card-bg-content ">
                    <h5 className="card-bg-title">
                        <Link
                            to={{
                                pathname: "/courses/content",
                                state: {nameid: course_name, id: course_id},
                            }}
                        >
                            {course_name}
                        </Link>
                    </h5>
                    <div className="shoppingcard__DegreeBox">
                        <Radio.Group
                            onChange={(e) => handleChange(e)}
                            defaultValue={degree_name}
                        >
                            {all_degrees?.map((i) => (
                                <Radio key={i[0]} value={i[1]}>
                                    {" "}
                                    {i[1]}{" "}
                                </Radio>
                            ))}
                        </Radio.Group>
                    </div>
                    <div className="d-flex-space card-bg-footer">
                        <div className="card-bg-img-pic">
                            <img src={teacher_avatar} alt='teacher-avatar'/>
                            <h4>
                                {teacher_name} {teacher_last_name}
                            </h4>
                        </div>

                        {discount_amount || discount_amount !== 0 ? (
                            <div>
                                {origin_cost !== 0 ? (
                                    <Price value={origin_cost} isDiscount/>
                                ) : (
                                    <p>رایگان</p>
                                )}
                            </div>
                        ) : null}
                        {discounted_cost !== 0 ? (
                            <Price value={discounted_cost} suffix="تومان" success/>
                        ) : (
                            <p className="success"> رایگان</p>
                        )}
                    </div>
                </div>
            </div>
            <Modal
                className="ExitModal"
                visible={modal}
                onCancel={handleModalVisible}
            >
                <div className="ExitModal__back">
                    <p className="mb-12">آیا از حذف دوره مطمئن هستید؟</p>
                    <div className="d-flex-space">
                        <Button onClick={handleDelete}>بله</Button>
                        <Button onClick={handleModalVisible} type="primary">
                            خیر
                        </Button>
                    </div>
                </div>
            </Modal>
        </article>
    );
};

export default ShoppingCoursecard;
//  <Price value={card.get_price_without_degree_with_some_extra_info} success />
//  <Price value={70000} isDiscount suffix="تومان" />
