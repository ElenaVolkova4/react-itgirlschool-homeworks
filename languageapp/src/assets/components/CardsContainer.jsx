import React, { useState } from 'react';
import './CardsContainer.scss';
import WordCard from './WordCard';
import { words } from './dataWords';
import ArrowNext from './ArrowNext';
import ArrowPrev from './ArrowPrev';

const CardsContainer = () => {
  const [selectedCardIndex, setselectedCardIndex] = useState(0);
  // const HandleClick = i => {
  //   setselectedCardIndex(i);
  // };

  const HandleClickNext = () => {
    const newIndex = selectedCardIndex + 1;
    if (newIndex < words.length) {
      setselectedCardIndex(newIndex);
    }
  };

  const HandleClickPrev = () => {
    const newIndex = selectedCardIndex - 1;
    if (newIndex >= 0) {
      setselectedCardIndex(newIndex);
    }

    // setselectedCardIndex(selectedCardIndex - 1);
  };

  return (
    <div className="cardsContainer">
      <div className="cardsContainer_cards">
        <ArrowPrev onClick={HandleClickPrev} />
        <WordCard
          key={words[selectedCardIndex].id}
          english={words[selectedCardIndex].english}
          transcription={words[selectedCardIndex].transcription}
          russian={words[selectedCardIndex].russian}
        />
        <ArrowNext onClick={HandleClickNext} />
      </div>
      <div className="cardsContainer_count">
        {selectedCardIndex + 1} / {words.length}
      </div>
    </div>
  );
};

export default CardsContainer;
