import React, { useState } from "react";
import ShoppingCoursecard from "./ShoppingCoursecard";

const CoursesBox = ({ orderCard, getPayment, getorderSummary }) => {
  return (
    <div className="primary-box CoursesBox">
      {orderCard?.results?.map((i) => (
        <ShoppingCoursecard
          getPayment={getPayment}
          getorderSummary={getorderSummary}
          key={i.uuid}
          card={i}
        />
      ))}
    </div>
  );
};

export default CoursesBox;
