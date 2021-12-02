import React from "react";
import CodeeditorWithRun from "./QuizCodeeditorWithRun";
import QuizResponsiveCodeeditor from "./QuizResponsiveCodeeditor";
import UseWindowSize from "@App/Sizes/UseWindowSize";
import QuizCodeeditorWithRun from "./QuizCodeeditorWithRun";

function QuizCodeEditor(props) {
    const windowSize = UseWindowSize();
    return (
        <div>
            {windowSize === "sm" || windowSize === "md-2" ? (
                <QuizResponsiveCodeeditor
                    name={props.name}
                    id={props.id}
                    lan={props.lan}
                    value={props.value}/>
            ) : (
                <QuizCodeeditorWithRun
                    name={props.name}
                    id={props.id}
                    lan={props.lan}
                    value={props.value}/>
            )}
        </div>
    );
}

export default QuizCodeEditor;
