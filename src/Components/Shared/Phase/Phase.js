import PropTypes from "prop-types";
import React, { useState } from "react";

const Phase = ({ PhaseList, PhaseNum }) => {
  return (
    <div className="d-flex make__phase">
      {PhaseList.map((i, key) => (
        <React.Fragment key={key}>
          <div className="make__phase--box">
            <p
              style={
                PhaseNum === i.PhaseNumber
                  ? { color: "#46BEA7" }
                  : {} && PhaseNum >= i.PhaseNumber
                  ? { color: "#46BEA7" }
                  : null
              }
            >
              {i.phaseName}
            </p>
            <div
              className="make__phase-circle"
              style={
                PhaseNum === i.PhaseNumber
                  ? { border: "1px solid #46BEA7", color: "#46BEA7" }
                  : { border: "none" } && PhaseNum >= i.PhaseNumber
                  ? { backgroundColor: "#46BEA7" }
                  : null
              }
            ></div>
          </div>
          <div
            className="make__phase-line "
            style={PhaseNum > i.PhaseNumber ? { borderColor: "#46BEA7" } : null}
          ></div>
        </React.Fragment>
      ))}
    </div>
  );
};

Phase.propTypes = {
  PhaseList: PropTypes.array,
};

export default Phase;
