import React, { useState } from 'react';
import './App.scss';
import Header from './assets/components/Header.jsx';
import WordCard from './assets/components/WordCard.jsx';
import { words } from './assets/components/dataWords.js';

import Table from './assets/components/Table.jsx';
import Footer from './assets/components/Footer.jsx';

const App = () => {
  // const [selectedCardIndex, showTranslate] = useState(-1); //Состояние, которое хранит индекс выделенной карточки

  // const handleClick = id => {
  //   showTranslate(id);
  // };

  // const [value, setValue] = useState('text');
  // function handleChange(event) {
  //   setValue(event.target.value);
  // }

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

          {/* по одной карточке */}
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
        <Table />
      </main>
      <Footer />
    </div>
  );
};

export default App;
