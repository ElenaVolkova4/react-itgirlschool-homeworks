import React from 'react';
import './CardsContainer.scss';
import WordCard from './WordCard';
import { words } from './dataWords';
import ArrowNext from './ArrowNext';
import ArrowPrev from './ArrowPrev';

const CardsContainer = () => {
  return (
    <div className="cardsContainer">
      <ArrowNext />
      <ArrowPrev />
    </div>
  );
};

export default CardsContainer;
