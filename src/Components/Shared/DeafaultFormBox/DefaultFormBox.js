import React, { useState } from "react";

function DefaultFormBox(props) {
  const [idselect, setIdselect] = useState(0);
  const handleClick = (index) => {
    setIdselect(index);
  };
  return (
    <div className="DefaultFormBox w-4/5">
      <div className="flex flex-row DefaultFormBox__content">
        {props.labels.map((index, id, arr) => (
          <div
            className={
              idselect === id
                ? `DefaultFormBox__labelBox DefaultFormBox__labelBox-white ${
                    idselect === 0
                      ? "boxshadow__right"
                      : idselect === arr.length - 1
                      ? "boxshadow__left"
                      : ""
                  }  py-3 rounded-t-3xl cursor-pointer ${props.className}`
                : ` DefaultFormBox__labelBox DefaultFormBox__labelBox-gray  py-3 rounded-t-3xl cursor-pointer ${props.className}`
            }
            onClick={() => handleClick(id)}
          >
            <p className="text-3xl">{index}</p>
          </div>
        ))}
      </div>
      <div className="DefaultFormBox__body w-full rounded-3xl"></div>
    </div>
  );
}

export default DefaultFormBox;

//props.className is for width depend on array lis: w-1/2,w-1/3,
