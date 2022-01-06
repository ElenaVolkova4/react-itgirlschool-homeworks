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
    setisWordsLoading(true);
    fetch('/api/words')
      .then(response => response.json())
      .then(words => {
        setWords(words);
        setisWordsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setError(true);
        setisWordsLoading(false);
      });
  };

  useEffect(() => {
    updateData();
  }, []);

  //обновление данных без перерендера
  // const updateData2 = value => {
  //   setWords([...words, { id: words.length + 1, english: value }]);
  // };

  return (
    <WordsContext.Provider
      value={{
        words,
        isWordsLoading,
        setisWordsLoading,
        updateData,
        error,
        setError,
      }}
    >
      {props.children}
    </WordsContext.Provider>
  );
};

export { WordsContextProvider, WordsContext };
