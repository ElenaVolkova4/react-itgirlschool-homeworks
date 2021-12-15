import React from 'react';
import './Button_actions.scss';
import './Button_edit.scss';

const ButtonSave = props => {
  const className = `buttonSave button_actions disabled_button
  ${props.disabled ? 'disabled_button' : ' '}
  `;

  return (
    <div
      className={className}
      // className="buttonSave button_actions"
      onClick={props.onClick}
      title="сохранить"
    >
      &#9989;
    </div>
  );
};

export default ButtonSave;
