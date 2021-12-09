import React, { useRef, useEffect } from 'react';
import './Button_check.scss';

const ButtonCheck = props => {
  const buttonRef = useRef();
  useEffect(() => buttonRef.current.focus(), []); //делаем фокус на кнопке при первой зарузке (только тег должен быть не div?)
  return (
    <button
      type="button"
      className="buttonCheck"
      onClick={props.onClick}
      ref={buttonRef}
    >
      Проверить
    </button>
  );
};

export default ButtonCheck;
