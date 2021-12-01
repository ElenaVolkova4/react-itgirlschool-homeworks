import React from 'react';
import './Arrow.scss';

const ArrowNext = props => {
  const className = `arrow
  ${props.disabled ? 'disabled' : ' '}
  `;

  return (
    <div
      className={className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      &#8827;
    </div>
  );
};

export default ArrowNext;
