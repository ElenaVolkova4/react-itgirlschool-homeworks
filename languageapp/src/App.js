import React, { useState } from 'react';
import './App.scss';
import Header from './assets/components/Header.jsx';
import WordCard from './assets/components/WordCard.jsx';
import { words } from './assets/components/dataWords.js';

import Table from './assets/components/Table.jsx';
import Footer from './assets/components/Footer.jsx';

const App = () => {
  const [selectedCardIndex, showTranslate] = useState(-1); //Состояние, которое хранит индекс выделенной карточки

  const handleClick = id => {
    showTranslate(id);
  };

  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="main_cards">
          {/* вывод всех карточек
          {words.map((word, i) => (
            <WordCard
              key={word.id}
              english={word.english}
              transcription={word.transcription}
              russian={word.russian}
            />
          ))} */}

          {/* одна карточка */}
          <WordCard
            key={words[0].id}
            english={words[0].english}
            transcription={words[0].transcription}
            russian={words[0].russian}
          />
                    <WordCard
            key={words[1].id}
            english={words[1].english}
            transcription={words[1].transcription}
            russian={words[1].russian}
          />

        </div>

        {/* {
          rates.map((rate, i) =>//переменную rate мы назвали сами
            <RateCard
              key={rate.id}//надо обязательно задавать ключ
              // isSelected={i === 2} //для задания week27

              onClick={() => handleClick(i)} // создаем новую функцию, которая вызовет handleClick с индексом этой карточки
              isSelected={i === selectedCardIndex}

              rateName={rate.rateName} ratePrice={rate.ratePrice} rateSpeed={rate.rateSpeed} />)
        } */}

        <Table />
      </main>

      <Footer />
    </div>
  );
};

export default App;
