import React from "react";
import { Progress } from "antd";

function ProgressLine({precent}) {
  return (
    <div className="ProgressLine">
      <Progress percent={precent} />
    </div>
  );
}

export default ProgressLine;
