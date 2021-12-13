import React, { useRef, useEffect } from 'react';
import './Button_check.scss';

const ButtonCheck = props => {
  console.log();
  const buttonRef = useRef();
  useEffect(() => buttonRef.current.focus(), []); //делаем фокус на кнопке при первой зарузке
  return (
    <div
      tabIndex="0" //добавлено свойство, чтобы .current.focus() срабатывал на div
      type="button"
      className="buttonCheck"
      onClick={props.onClick}
      ref={buttonRef}
    >
      Проверить
    </div>
  );
};

export default ButtonCheck;
