import React, { useState, useCallback } from 'react';
import './CardsContainer.scss';
import WordCard from './WordCard';
import { words } from './dataWords';
import ArrowNext from './ArrowNext';
import ArrowPrev from './ArrowPrev';

const CardsContainer = () => {
  const [selectedCardIndex, setselectedCardIndex] = useState(0); //для карусели карточек
  const [countedLearnedCard, setcountedLearnedCard] = useState(0); //для подсчета выученных слов в тренировке

  const handleClickNext = () => {
    //вариант с конечной каруселью
    // const newIndex = selectedCardIndex + 1;
    // if (newIndex < words.length) {
    //   setselectedCardIndex(newIndex);
    // }

    //вариант с бесконечной каруселью
    setselectedCardIndex((selectedCardIndex + 1) % words.length);
  };

  const handleClickPrev = () => {
    //вариант с конечной каруселью
    // const newIndex = selectedCardIndex - 1;
    // if (newIndex >= 0) {
    //   setselectedCardIndex(newIndex);
    // }

    //вариант с бесконечной каруселью
    setselectedCardIndex((selectedCardIndex - 1 + words.length) % words.length);
  };

  //счетчик изученных слов (заворачиваем в хук useCallback, чтобы меньше перерендеривалось, его лучше использовать где большие расчеты)
  const learnedCard = useCallback(
    () => setcountedLearnedCard(countedLearnedCard + 1),
    [countedLearnedCard],
  );
  const notLearnedCard = useCallback(
    () => setcountedLearnedCard(countedLearnedCard - 1),
    [countedLearnedCard],
  );

  return (
    <div className="cardsContainer">
      <div className="cardsContainer_count">
        Изучено слов за тренировку: {countedLearnedCard}
      </div>
      <div className="cardsContainer_cards">
        <ArrowPrev
          onClick={handleClickPrev}
          // disabled={selectedCardIndex === 0}
        />
        <WordCard
          key={words[selectedCardIndex].id}
          english={words[selectedCardIndex].english}
          transcription={words[selectedCardIndex].transcription}
          russian={words[selectedCardIndex].russian}
          // learnedCard={learnedCard} //не работает
          // notLearnedCard={notLearnedCard} //не работает

          //вот так внутри лучше не писать
          learnedCard={() => setcountedLearnedCard(countedLearnedCard + 1)}
          notLearnedCard={() => setcountedLearnedCard(countedLearnedCard - 1)}
        />
        <ArrowNext
          onClick={handleClickNext}
          // disabled={selectedCardIndex === words.length - 1}
        />
      </div>
      <div className="cardsContainer_count">
        {selectedCardIndex + 1} / {words.length}
      </div>
    </div>
  );
};

export default CardsContainer;
