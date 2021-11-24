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
    setselectedCardIndex(selectedCardIndex + 1);
  };
  const HandleClickPrev = () => {
    setselectedCardIndex(selectedCardIndex - 1);
  };

  return (
    <div className="cardsContainer">
      <ArrowPrev onClick={HandleClickPrev} />
      <WordCard
        key={words[selectedCardIndex].id}
        english={words[selectedCardIndex].english}
        transcription={words[selectedCardIndex].transcription}
        russian={words[selectedCardIndex].russian}
      />{' '}
      <ArrowNext onClick={HandleClickNext} />
    </div>
  );
};

export default CardsContainer;
