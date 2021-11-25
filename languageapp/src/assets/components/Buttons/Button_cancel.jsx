import React from 'react';
import './Button_actions.scss';

const ButtonCancel = props => {
  return (
    <div
      className="buttonCancel button_actions"
      onClick={props.onClick}
      title="отменить"
    >
      &#65794;
    </div>
  );
};

export default ButtonCancel;
