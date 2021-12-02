import React, {useState, useEffect} from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import {useParams, useLocation} from "react-router-dom";
import QuizDetail from "@Components/Layouts/Quiz/QuizDetail";

function Index() {
    const location = useLocation();
    const [quizId, setQuizId] = useState(null);
    const [contentId, setContentId] = useState(null);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [language, setLanguage] = useState("");
    const [file, setFile] = useState(null);
    const [test_cases, setTest_cases] = useState([]);

    useEffect(() => {
        setQuizId(location.state.quiz_id);
        setContentId(location.state.content_id);
        setTitle(location.state.title);
        setText(location.state.text);
        setTest_cases(location.state.test_cases);
        setLanguage(location.state.language);
        setFile(location.state.file);
    }, [location]);

    return (
        <div className="Example container">
            <BreadCrump pathsname="/dash/quiz" name={title}/>
            <div className="Example__container">
                <QuizDetail
                    quizId={quizId}
                    contentId={contentId}
                    title={title}
                    text={text}
                    file={file}
                    language={language}
                    test_cases={test_cases}
                />
            </div>
        </div>
    );
}

export default Index;
