import React, { useState } from "react";
import "./App.css";
import ButtonSend from "./assets/components/ButtonSend.jsx";
import Comments from "./assets/components/Comments.jsx";
import InputComment from "./assets/components/InputComment.jsx";

function App() {
  const comments = []; //массив, куда должны попадать сообщения, введенные в InputComment
  let comment = document.getElementById("comment").value;
  const [addedComment, setComment] = useState(comments);

  const handleClick = () => {
    //ф-ция, которая добавляеть value InputComment в массив комментов comments
    comments.push(comment);
    setComment(comments);
  };
  return (
    <div className="App">
      <div className="App_comments"></div>
      <input id="comment" />
      <ButtonSend onClick={handleClick} />

      {/* компоненты */}
      {/* <Comments />
      <InputComment />
      <ButtonSend onClick={addComment} /> */}
    </div>
  );
}

export default App;
