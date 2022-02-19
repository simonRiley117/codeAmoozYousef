import React from "react";
import CodeeditorWithRun from "./QuizCodeeditorWithRun";
import QuizResponsiveCodeeditor from "./QuizResponsiveCodeeditor";
import UseWindowSize from "@App/Sizes/UseWindowSize";
import QuizCodeeditorWithRun from "./QuizCodeeditorWithRun";

function QuizCodeEditor(props) {
  const windowSize = UseWindowSize();
  return (
    <div>
      {/* {windowSize === "sm" || windowSize === "md-2" ? (
                <QuizResponsiveCodeeditor
                    name={props.name}
                    quizId={props.quizId}
                    contentId={props.contentId}
                    lan={props.lan}
                    value={props.value}/>
            ) : (
                <QuizCodeeditorWithRun
                    name={props.name}
                    quizId={props.quizId}
                    contentId={props.contentId}
                    lan={props.lan}
                    value={props.value}/>
            )} */}
      <QuizCodeeditorWithRun
        name={props.name}
        quizId={props.quizId}
        contentId={props.contentId}
        lan={props.lan}
        ispreview={props.ispreview}
        ismycoursebol={props.ismycoursebol}
        value={props.value}
        courseId={props.courseId}
        currcourseId={props.currcourseId}
        lang={props.lang}
        nextseson={props.nextseson}
      />
    </div>
  );
}

export default QuizCodeEditor;
