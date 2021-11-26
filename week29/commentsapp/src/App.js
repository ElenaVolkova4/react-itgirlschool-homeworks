import React, { useState } from "react";
import "./App.css";
import ButtonSend from "./assets/components/ButtonSend.jsx";

function App() {
  const [newComment, setNewComment] = useState(""); //новый комментарий в инпуте
  const [addedComment, setComment] = useState([]); //массив, куда должны попадать сообщения, введенные в InputComment

  const handleClick = () => {
    //ф-ция, которая добавляет value inputа в массив комментов и очищает инпут

    const commentsCopy = [...addedComment]; //создается массив с комментами
    // console.log(commentsCopy);
    commentsCopy.push(newComment); //добавление нового коммента в массив
    setComment(commentsCopy); //перезаписывание массива
    setNewComment(""); //очищение поля инпута
  };
  return (
    <div className="App">
      <div className="App_comments">
        {addedComment.map((message, i) => {
          return (
            //с условием, что первое сообщение зеленым цветом
            <div key={i} className={i === 0 ? "green" : ""}>
              {message}
            </div>
          );
        })}
      </div>
      <textarea
        id="comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <ButtonSend onClick={handleClick} />
    </div>
  );
}

export default App;
