import React, {useEffect, useState} from "react";
import quiz from "@Assets/Pic/quiz.png";
import Button from "@Components/Shared/Buttons/Button";
import {Link} from "react-router-dom";
import useFetch from "../../../Context/useFetch";

function Quiz({quizUuid, contentUuid, courseUuid}) {
    const [quizContent, setQuizContent] = useState(null);
    const [quizLoading, setQuizLoading] = useState(true);

    const setData = (data) => {
        setQuizContent(data);
        setQuizLoading(false);
    }

    const getQuizContent = useFetch({
        url: `QuizService/${quizUuid}/get_user_quiz`,
        method: "GET",
        noHeader: false,
        trigger: false,
        setter: setData
    });

    useEffect(() => {
        if (quizUuid) {
            getQuizContent.reFetch()
        }
    }, [quizUuid]);


    return (
        <div className="Quiz">
            {!quizUuid ? (
                <div className="Quiz__empty">
                    <p>این مبحث آزمونی نداره! میتونی بری مبحث بعدی:) </p>
                    <img src={quiz} alt={quiz}/>{" "}
                </div>
            ) : (
                !quizLoading ? (
                    <div className="Quiz__box">
                        <p className="Quiz__title">آزمون درس</p>
                        <p className="Quiz__txt">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در
                            شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
                            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                            ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
                            سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته
                            اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد
                        </p>
                        <Button ico={false} type="primary" classes="CoWorkers__btn Quiz__btn">
                            <Link
                                to={"/dashboard/course/quiz"}
                                state={{
                                    content_id: contentUuid,
                                    quiz_id: quizUuid,
                                    courseUuid: courseUuid,
                                    title: quizContent.name,
                                    text: quizContent.text,
                                    test_cases: quizContent.test_cases,
                                    language: quizContent.language,
                                    file: quizContent.file,
                                }}
                            >
                                شروع
                            </Link>
                        </Button>
                    </div>
                ) : null
            )}
        </div>
    );
}

export default Quiz;
