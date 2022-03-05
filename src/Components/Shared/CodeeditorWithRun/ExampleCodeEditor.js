import React from "react";
import ExampleCodeeditorWithRun from "./ExampleCodeeditorWithRun";
import UseWindowSize from "@App/Sizes/UseWindowSize";

function ExampleCodeEditor(props) {
  const windowSize = UseWindowSize();
  return (
    <div className="w-full">
      <ExampleCodeeditorWithRun
        name={props.name}
        id={props.id}
        lan={props.lan}
        value={props.value}
        lang={props.lang}
      />
    </div>
  );
}

export default ExampleCodeEditor;
