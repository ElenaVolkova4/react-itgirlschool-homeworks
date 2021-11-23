import React, { useState } from "react";
import "./App.css";
import ButtonSend from "./assets/components/ButtonSend.jsx";
import Comments from "./assets/components/Comments.jsx";
import InputComment from "./assets/components/InputComment.jsx";

function App() {
  return (
    <div className="App">
      <Comments />
      <InputComment />
      <ButtonSend />
    </div>
  );
}

export default App;
