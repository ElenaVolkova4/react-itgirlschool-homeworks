import React, { useState, useEffect } from 'react';
import ServerError from '../components/ServerError';

const WordsContext = React.createContext();

const WordsContextProvider = props => {
  const [words, setWords] = useState([]);
  const [isWordsLoading, setisWordsLoading] = useState(false);
  const [error, setError] = useState(false);

  //создание функции для перерендера
  const updateData = () => {
    setError(false);
    fetch('/api/words')
      .then(response => response.json())
      .then(words => {
        setWords(words);
        setisWordsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setisWordsLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    updateData();
  }, []);

  // if (error) return <ServerError />;
  return (
    <WordsContext.Provider value={{ words, isWordsLoading, updateData, error }}>
      {props.children}
    </WordsContext.Provider>
  );
};

export { WordsContextProvider, WordsContext };
