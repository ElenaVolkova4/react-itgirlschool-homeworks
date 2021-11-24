import React, { useState } from "react";
// import "./InputComment.scss";

const InputComment = (props) => {
  return (
    <div>
      <label htmlFor="comment">Введите комментарии:</label>
      <input className="inputComment" id="comment" placeholder="Текст"></input>
    </div>
  );
};

export default InputComment;
