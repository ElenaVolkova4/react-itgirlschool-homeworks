import React, { useState } from "react";
import "./ButtonSend.css";

const ButtonSend = (props) => {
  return (
    <div className="buttonSend" onClick={props.onClick}>
      Отправить
    </div>
  );
};

export default ButtonSend;
