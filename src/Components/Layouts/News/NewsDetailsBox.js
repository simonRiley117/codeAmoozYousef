import React from 'react';
import PropTypes from 'prop-types';
//this component works for every cards in project
const NewsDetailsBox = ({img, children,borderRadius,info}) => {
    return (
        <div className="details">
            <div className="details-container">
                <img style={{borderRadius}} src={img} alt="news" className="details-img"/>
                <div className="details-info">
                    {info}
                </div>
            </div>
            <div className="card-content">
                {children}
            </div>
        </div>
    );
};
NewsDetailsBox.defaultProps = {
    borderRadius: "15px",
};

NewsDetailsBox.propTypes = {
    borderRadius: PropTypes.string,
    img : PropTypes.string,
    children : PropTypes.node.isRequired,
    info: PropTypes.node,
};

export default NewsDetailsBox;