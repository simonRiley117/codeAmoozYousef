import React from "react";
import ExampleCodeeditorWithRun from "./ExampleCodeeditorWithRun";
import ExampleResponsiveCodeeditor from "./ExampleResponsiveCodeeditor";
import UseWindowSize from "@App/Sizes/UseWindowSize";

function ExampleCodeEditor(props) {
    const windowSize = UseWindowSize();
    return (
        <div className="w-full">
            {windowSize === "sm" || windowSize === "md-2" ? (
                <ExampleResponsiveCodeeditor
                    name={props.name}
                    id={props.id}
                    lan={props.lan}
                    value={props.value}/>
            ) : (
                <ExampleCodeeditorWithRun
                    name={props.name}
                    id={props.id}
                    lan={props.lan}
                    value={props.value}/>
            )}
        </div>
    );
}

export default ExampleCodeEditor;
