import React, {useEffect, useState} from "react";
import clock from "@Assets/Icons/clock.svg";
import Coin from "@Assets/Icons/Coin.svg";
import section from "@Assets/Icons/section.svg";
import user from "@Assets/Icons/user.svg";
import Rate from "@Components/Shared/Rate/Rate";
import {Radio} from "antd";
import Button from "@Components/Shared/Buttons/Button";
import share from "@Assets/Icons/share.svg";
import useFetch from "@App/Context/useFetch";
import {ClipLoader} from "react-spinners";
import {useAuth} from "@App/Context/authContext";
import UseCopyToClipboard from "@App/Hooks/UseCopyToClipboard";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import INSTAGRAM from "@Assets/Icons/instafram.svg";
import LinkedIn from "@Assets/Icons/linkdin.svg";
import Telegram from "@Assets/Icons/gSocial.svg";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "green",
};
const WITHOUT_DEGREE = "بدون مدرک";

function CourseTable({courseId}) {
    const [orderCourse, setOrderCourse] = useState({});
    const [loadingorOerCourse, setLoadingOrderCourse] = useState(true);
    const [degree, setDegree] = useState(null);
    const {token} = useAuth();
    const [addtocardData, setaddtocardData] = useState();
    const [isCopied, handleCopy] = UseCopyToClipboard(3000);
    const [socialId, setSocialId] = useState(-1);
    const [socialsInfo, setSocialsInfo] = useState([])
    const [socialLoading, setSocialLoading] = useState(true)

    const setCostForSelectedDegree = (e) => {
        const selectedDegree = orderCourse?.costs.filter((item) => item.uuid === e.target.value);
        setDegree(selectedDegree[0]);
    };

    const setData = (data) => {
        // console.log('ddd: ', data)
        setLoadingOrderCourse(false)
        setOrderCourse(data)
        setDegree(data.selected_degree)
        // selected_degree
    }
    const getCourseOrder = useFetch({
        url: `CourseService/${courseId}/courseOrder`,
        method: "GET",
        noHeader: token ? false : true,
        setter: setData,
    });

    const setSocialData = (data) => {
        setSocialsInfo(data)
        setSocialLoading(false)
    }

    const getSocials = useFetch({
        url: `SocialService/${courseId}`,
        method: "GET",
        setter: setSocialData,
    });

    let socialicon = [];
    if (!socialLoading) {
        socialicon = socialsInfo.results?.map((item) => (
                {
                    img: item.social_name === 'Telegram' ? Telegram : (
                        item.social_name === 'LinkedIn' ? LinkedIn : (
                            INSTAGRAM
                        )
                    ),
                    link: item.social_url
                }
            )
        )
    }

    // const {
    //     title,
    //     total_time_of_course,
    //     nums_of_seasons,
    //     mean_of_participant_points,
    //     num_of_participants,
    //     costs,
    //     has_user_course,
    // } = orderCourse;

    const addToCart = useFetch({
        url: `CartService/addToCart`,
        method: "POST",
        trigger: false,
        data: addtocardData,
        caller: getCourseOrder,
        argFunc: (res) => {
            toast.success("سفارش با موفقیت ثبت شد");
        },
        argErrFunc: (err) => handleError(err),
    });

    const handleError = (err) => {
        if (err?.data === "course already exists") {
            toast.error("قبلا به سبد خرید اضافه شده است");
        }
        if (err?.detail === "Given token not valid for any token type") {
            toast.error("برای ثبت سفارش وارد سایت شوید");
        }
    };

    const addToCard = () => {
        setaddtocardData({
            course_uuid: courseId,
            degree_uuid: degree.degree_uuid,
        });
        addToCart.reFetch();
    };
    const handleLinkCopy = () => {
        handleCopy(window.location.href);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setSocialId(-1);
        }, 2000);
        return () => clearTimeout(timer);
    }, [socialId]);

    const handleImgClick = (link, id) => {
        handleCopy(link);
        setSocialId(id);
    };

    console.log('socialsInfo: ', socialsInfo)
    console.log('socialicon: ', socialicon)
    return (
        !loadingorOerCourse ? (
            <div className="CourseTable">
                <div className="CourseTable__Position">
                    <div className="CourseTable__Table">
                        <div className="flex items-center justify-start CourseTable__titleBox">
                            <div className="half__circle relative"></div>
                            <p className="CourseTable__title">{orderCourse?.title}</p>
                        </div>
                        <div className="CourseTable__Body">
                            <div className="flex items-center justify-start CourseTable__infoBox">
                                <img alt={clock} src={clock}/>
                                <p className="CourseTable__infotxt">{orderCourse?.total_time_of_course}</p>
                            </div>
                            <div className="flex items-center justify-start CourseTable__infoBox">
                                <img alt={section} src={section}/>
                                <p className="CourseTable__infotxt">{orderCourse?.nums_of_seasons}</p>
                                <span className="CourseTable__infotxt">جلسه</span>
                            </div>
                            <div className="flex items-center justify-start CourseTable__infoBox">
                                <img alt={user} src={user}/>
                                <p className="CourseTable__infotxt">{orderCourse?.num_of_participants}</p>
                                <span className="CourseTable__infotxt">
                    {" "}
                                    نفر در این دوره شرکت کرده اند
                  </span>
                            </div>
                            {degree !== null && (
                                <div className="flex items-center justify-start CourseTable__infoBox">
                                    <img alt={Coin} src={Coin}/>
                                    <p className="CourseTable__infoPrice">
                                        {degree?.discount_amount !== 0 && degree?.discount_amount}
                                    </p>
                                    {degree?.amount === 0 ? (
                                        <p className="CourseTable__infotxt ">رایگان</p>
                                    ) : (
                                        <div className="flex items-center justify-start ">
                                            {" "}
                                            <p className="CourseTable__infotxt CourseTable__infoPrice-main">
                                                {degree?.amount}
                                            </p>
                                            <span className="CourseTable__infotxt">تومان</span>
                                        </div>
                                    )}
                                </div>
                            )}
                            <div className="CourseTable__RateBox">
                                <Rate
                                    defaultValue={orderCourse?.mean_of_participant_points?.grade}
                                    disabled={true}
                                />
                            </div>
                            {!orderCourse?.has_user_course ? (
                                <>
                                    <div className="CourseTable__DegreeBox">
                                        <p className="CourseTable__DegreeTitle">
                                            دریافت گواهی پایان دوره:
                                        </p>
                                        <Radio.Group onChange={setCostForSelectedDegree} name="radiogroup"
                                                     value={degree?.uuid}>
                                            {orderCourse?.costs?.map((degre) =>
                                                    // degre.name === WITHOUT_DEGREE ? (
                                                    //     <Radio value={degre.uuid}>
                                                    //         {degre.name}
                                                    //     </Radio>
                                                    // ) : (
                                                    <Radio value={degre.uuid}>{degre.name}</Radio>
                                                // )
                                            )}
                                        </Radio.Group>
                                    </div>
                                    {degree !== null ? (
                                        <Button
                                            onClick={() => addToCard()}
                                            type="primary"
                                            classes="CourseTable__btn"
                                        >
                                            افزودن به سبد خرید
                                        </Button>
                                    ) : (
                                        <Button
                                            type="primary"
                                            classes="CourseTable__btn"
                                            disabled={true}
                                        >
                                            <span style={{color: "#222"}}>مدرک انتخاب نکردی</span>
                                        </Button>
                                    )}
                                </>
                            ) : (
                                <Button
                                    type="primary"
                                    classes="CourseTable__btn"
                                    disabled={true}
                                >
                                    <span style={{color: "#222"}}>دوره رو قبلا خریدی</span>
                                </Button>
                            )}
                            <div
                                className="flex items-center justify-center CourseTable__ShareBox "
                                onClick={handleLinkCopy}
                            >
                                <img src={share} alt={share} className="cursor-pointer"/>
                                <div>
                                    <p>لینک به اشتراک گذاشتن دوره</p>
                                </div>
                                {socialicon.map((item, id) =>
                                    isCopied && socialId === id ? (
                                        "کپی شد"
                                    ) : (
                                        <img
                                            onClick={() => handleImgClick(item.link, id)}
                                            src={item.img}
                                            alt={item.img}
                                            key={id}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <ClipLoader color="#43aa8b" loading={true} css={override} size={60}/>
        )
    );
}

export default CourseTable;
