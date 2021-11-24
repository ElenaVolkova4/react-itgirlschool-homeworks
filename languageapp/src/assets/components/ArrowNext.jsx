import React from 'react';
import './Arrow.scss';

const ArrowNext = props => {
  return (
    <div className="arrowNext arrow" onClick={props.onClick}>
      &#8827;
    </div>
  );
};

export default ArrowNext;
