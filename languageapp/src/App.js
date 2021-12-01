import React, { useState } from 'react';
import './App.scss';
import Header from './assets/components/Header.jsx';
import WordCard from './assets/components/WordCard.jsx';
import { words } from './assets/components/dataWords.js';
import CardsContainer from './assets/components/CardsContainer.jsx';
import Table from './assets/components/Table.jsx';
import Footer from './assets/components/Footer.jsx';
import ErrorPage from './assets/components/ErrorPage.jsx';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <main className="main">
            <Route exact path="/">
              <Table />
            </Route>

            <Route path="/game">
              <CardsContainer />
            </Route>

            {/* <Route path="/">
              <ErrorPage />
            </Route> */}

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
            {/* <WordCard
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
          /> */}
          </main>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
