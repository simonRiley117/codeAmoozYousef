import React from "react";
import PropTypes from "prop-types";
//this component works for every cards in project
const NewsItemContainer = ({ img, children, borderRadius }) => {
  return (
    <div className="card">
      <img style={{ borderRadius }} src={img} alt="news" className="card-img" />
      <div className="card-content">{children}</div>
    </div>
  );
};
NewsItemContainer.defaultProps = {
  borderRadius: "15px",
};

NewsItemContainer.propTypes = {
  borderRadius: PropTypes.string,
  img: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default NewsItemContainer;
