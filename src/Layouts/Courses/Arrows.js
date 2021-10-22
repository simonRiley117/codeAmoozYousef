import React from 'react';

const Arrow = ({src, classes}) => {
    return (
            <img src={src} alt="arrow" className={classes}/>
    );
};
export const PrevArrow = ({src,classes}) => {
  return (
    <img src={src} className={classes} alt="arrow"/>
  );
};
export default Arrow;