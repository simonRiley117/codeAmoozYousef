import React from 'react'

const Cardxx = ({img, children,borderRadius}) => {
    return (
        <div className="card">
            <img style={{borderRadius}} src={img} alt="news image" className="card-img"/>
            <div className="card-content">
                {children}
            </div>
        </div>
    );
};

export default Cardxx;