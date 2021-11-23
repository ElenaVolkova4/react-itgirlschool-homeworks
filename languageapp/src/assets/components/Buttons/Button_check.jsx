import React from 'react';
import './Button_check.scss';

const ButtonCheck = props => {
  return (
    <div className="buttonCheck" onClick={props.onClick}>
      Проверить
    </div>
  );
};

export default ButtonCheck;
