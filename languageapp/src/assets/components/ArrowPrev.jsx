import React from 'react';
import './Arrow.scss';

const ArrowPrev = props => {
  return (
    <div className="arrowPrev arrow" onClick={props.onClick}>
      &#8826;
    </div>
  );
};

export default ArrowPrev;
