import React from 'react';
import PropTypes from 'prop-types';
//this component works for every cards in project
const Cardxx = ({img, children,borderRadius}) => {
    return (
        <div className="card">
            <img style={{borderRadius}} src={img} alt="news" className="card-img"/>
            <div className="card-content">
                {children}
            </div>
        </div>
    );
};
Cardxx.defaultProps = {
    borderRadius: "15px",
};

Cardxx.propTypes = {
    borderRadius: PropTypes.string,
    img : PropTypes.string,
    children : PropTypes.node.isRequired,
};

export default Cardxx;