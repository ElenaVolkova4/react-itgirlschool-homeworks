import React, { useState, useContext } from 'react';
import './App.scss';
import Header from './assets/components/Header.jsx';
import WordCard from './assets/components/WordCard.jsx';
// import { words } from './assets/components/dataWords.js';
import CardsContainer from './assets/components/CardsContainer.jsx';
import Table from './assets/components/Table.jsx';
import Footer from './assets/components/Footer.jsx';
import ErrorPage from './assets/components/ErrorPage.jsx';
import NewWord from './assets/components/NewWord.jsx';

import Loader from './assets/components/Loader';
import ServerError from './assets/components/ServerError';

import { Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/" component={Table}></Route>
          <Route exact path="/game" component={CardsContainer}></Route>
          <Route exact path="/new" component={NewWord}></Route>
          {/* страница ошибки - без path */}
          <Route component={ErrorPage}></Route>
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
        </Switch>
      </main>
      <Footer />
    </div>
  );
};
export default App;
