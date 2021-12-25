import React, { useState, useEffect } from 'react';
import ServerError from '../components/ServerError';

const WordsContext = React.createContext();

const WordsContextProvider = props => {
  const [words, setWords] = useState([]);
  const [isWordsLoading, setisWordsLoading] = useState(false);

  useEffect(() => {
    setisWordsLoading(true);

    fetch('/api/words') //из-за прописанного в package.json прокси можно не прописывать адрес целиком
      .then(response => {
        if (response.ok) {
          //Проверяем, что код ответа 200
          return response.json();
        } else {
          <ServerError />;
          throw new Error('Something went wrong!');
        }
      })
      .then(words => {
        setWords(words); // записываем пришедшие с сервер слова в массив (состояние)
        // setTimeout(() => setisWordsLoading(false), 5000); //посмотреть как работает анимация загрузки
        setisWordsLoading(false);
      })
      .catch(error => {
        console.log(error);
        <ServerError />;
      });
  }, []);

  //создание функции для перерендера
  const updateData = () => {
    setisWordsLoading(true);
    fetch('/api/words')
      .then(response => {
        if (response.ok) {
          //Проверяем, что код ответа 200
          return response.json();
        } else {
          throw new Error('Something went wrong!');
        }
      })
      .then(words => {
        setWords(words);
        setisWordsLoading(false);
      })
      .catch(error => {
        console.log(error);
        <ServerError />;
      });
  };

  return (
    <WordsContext.Provider value={{ words, isWordsLoading, updateData }}>
      {props.children}
    </WordsContext.Provider>
  );
};

export { WordsContextProvider, WordsContext };
