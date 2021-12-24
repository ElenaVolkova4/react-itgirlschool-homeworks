import React from 'react';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="container">
      <div className="spinners-container">
        <div className="spinner-block">
          <div className="spinner-eff spinner-eff-1">
            <div className="bar bar-top"></div>
            <div className="bar bar-right"></div>
            <div className="bar bar-bottom"></div>
            <div className="bar bar-left"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
