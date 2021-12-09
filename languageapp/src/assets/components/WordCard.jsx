import React, { useState } from 'react';
import './WordCard.scss';
import ButtonCheck from './Buttons/Button_check.jsx';

const WordCard = props => {
  const [clicked, showTranslate] = useState(false); //Состояние, которое хранит индекс выделенной карточки
  // не нужно const [iscountedLearnedCard, setcountedLearnedCard] = useState(false); //для подсчета выученных слов в тренировке

  const handleClick = () => {
    showTranslate(!clicked);
    {
      if (!clicked) {
        props.learnedCard();
      } else {
        props.notLearnedCard();
      }
    }
  };

  return (
    <div className="wordCard">
      <div className="englishWord">{props.english}</div>
      <div className="englishTranscription">{props.transcription}</div>
      {/* <div className="russianWord">{props.russian}</div> */}
      {/* условный рендеринг: кликнули на кнопку - появился перевод */}
      {/* <div className="checking"> */}
      {clicked ? (
        <div className="checking">
          <div className="russianWord">{props.russian}</div>
          <div className="checking_btn" onClick={handleClick}>
            Скрыть перевод
          </div>
        </div>
      ) : (
        <ButtonCheck onClick={handleClick} />
      )}
    </div>
  );
};

export default WordCard;
