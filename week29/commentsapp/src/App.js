import React, { useState } from "react";
import "./App.css";
import ButtonSend from "./assets/components/ButtonSend.jsx";

function App() {
  const [newComment, setNewComment] = useState(""); //новый комментарий в инпуте
  const [addedComment, setComment] = useState([]); //массив, куда должны попадать сообщения, введенные в InputComment

  //от Зои
  //наведение красоты массива комментов
  const saveFunction = () => {
    const finalMessage = value.replace(/ +/g, " ").trim();
    if (finalMessage) {
      setArray([finalMessage.replace(/(\r\n|\n|\r)/gm, ""), ...array]);
      console.log(array);
    } else {
      setValue("");
      return;
    }
    setValue("");
  };

  const handleClick = () => {
    //ф-ция, которая добавляет value inputа в массив комментов и очищает инпут

    const commentsCopy = [...addedComment]; //массив с комментами
    console.log(commentsCopy);
    commentsCopy.push(newComment); //добавление нового коммента в массив
    setComment(commentsCopy);
    setNewComment(""); //очищение инпута
    // {
    //   for (let i = 0; i < addedComment.length; i++) {
    //     document.querySelector(".App_comments").innerHTML = addedComment[i] + <br>;
    //   }
    // }
    // let comments = addedComment.map(function (item) {
    //   return <span>{item}</span>;
    // });
  };
  return (
    <div className="App">
      <div className="App_comments">{addedComment}</div>
      <input
        id="comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <ButtonSend onClick={handleClick} />
    </div>
  );
}

export default App;
