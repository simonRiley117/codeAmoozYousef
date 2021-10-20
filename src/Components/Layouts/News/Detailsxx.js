import React from 'react';
import PropTypes from 'prop-types';
//this component works for every cards in project
const Detailsxx = ({img, children,borderRadius,info}) => {
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
Detailsxx.defaultProps = {
    borderRadius: "15px",
};

Detailsxx.propTypes = {
    borderRadius: PropTypes.string,
    img : PropTypes.string,
    children : PropTypes.node.isRequired,
    info: PropTypes.node,
};

export default Detailsxx;