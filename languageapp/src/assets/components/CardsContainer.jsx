import React, { useState } from 'react';
import './CardsContainer.scss';
import WordCard from './WordCard';
import { words } from './dataWords';
import ArrowNext from './ArrowNext';
import ArrowPrev from './ArrowPrev';

const CardsContainer = () => {
  const [selectedCardIndex, setselectedCardIndex] = useState(0);

  const handleClickNext = () => {
    const newIndex = selectedCardIndex + 1;
    if (newIndex < words.length) {
      setselectedCardIndex(newIndex);
    }
  };

  const handleClickPrev = () => {
    const newIndex = selectedCardIndex - 1;
    if (newIndex >= 0) {
      setselectedCardIndex(newIndex);
    }
  };

  return (
    <div className="cardsContainer">
      <div className="cardsContainer_cards">
        <ArrowPrev
          onClick={handleClickPrev}
          disabled={selectedCardIndex === 0}
        />
        <WordCard
          key={words[selectedCardIndex].id}
          english={words[selectedCardIndex].english}
          transcription={words[selectedCardIndex].transcription}
          russian={words[selectedCardIndex].russian}
        />
        <ArrowNext
          onClick={handleClickNext}
          disabled={selectedCardIndex === words.length - 1}
        />
      </div>
      <div className="cardsContainer_count">
        {selectedCardIndex + 1} / {words.length}
      </div>
    </div>
  );
};

export default CardsContainer;
