import React, { useState, useMemo, useContext } from 'react';
import './NewWord.scss';
import classnames from 'classnames';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { WordsContext } from '../context/WordsContext';
import ServerError from './ServerError';

//условия валидации полей input
const englishFormat = /^[a-zA-Z-\s]+$/; //поле english должно содержать только слова англ буквами, включая дефис (можно прописывать отдельно и заглавные и строчные)
const russianFormat = /^[а-яё-\s]+$/i; //поле english должно содержать только слова русскими буквами, включая дефис (а можно использовать флаг /i)

const NewWord = () => {
  //первоначальное состояние полей input
  const [newData, setnewData] = useState({
    english: '',
    transcription: '',
    russian: '',
  });
  const { updateData, error, setError } = useContext(WordsContext); //достаем функцию перерендера

  const history = useHistory(); // для возвращения пользователя к таблице после добавления слова
  //валидация

  //первоначальное состояние инпутов, когда нет ошибок (для валидации в handleChange)
  const [errorsIntuts, setErrorsIntuts] = useState({
    englishInput: false,
    transcriptionInput: false,
    russianInput: false,
  });

  const isInputsInValid = useMemo(() => {
    return (
      newData.english.search(englishFormat) === -1 ||
      russianFormat.test(newData.russian) !== true ||
      newData.english === '' ||
      newData.transcription === '' ||
      newData.russian === ''
    );
  }, [newData.russian, newData.english, newData.transcription, newData.id]);

  // стили для полей input (inputTableRow и если поле пустое/есть неправильные символы - redInputTableRow)
  const classNameInputEnglish = classnames('', {
    redInputTableRow: errorsIntuts.english === true,
    // или так
    // newData.english === '' || englishFormat.test(newData.english) !== true,
  });
  const classNameInputTranscription = classnames('', {
    redInputTableRow: errorsIntuts.transcription === true,
    // или так
    // newData.transcription === '',
  });
  const classNameInputRussian = classnames('', {
    redInputTableRow: errorsIntuts.russian === true,
    // или так
    // newData.russian === '' || russianFormat.test(newData.russian) !== true,
  });

  //ф-ция, чтобы можно было заность в input текст
  const handleChange = e => {
    console.log(e.target.value);
    setnewData({
      ...newData, //копируем объект с полями newData
      [e.target.name]: e.target.value.toLowerCase(), //изменяем value inputов на вводимые значения в зависимости от ключа name и маленькими буквами (toLowerCase)
    });
    //валидация, срабатывающая при первом вводе в поле (поэтому она в handleChange)
    setErrorsIntuts({
      ...errorsIntuts,
      english:
        newData.english === '' || englishFormat.test(newData.english) !== true
          ? true
          : false,
      transcription: newData.transcription === '' ? true : false,
      russian:
        newData.russian === '' || russianFormat.test(newData.russian) !== true
          ? true
          : false,
    });
  };

  //метод отправления нового слова на сервер
  const sentWord = () => {
    fetch('/api/words/add', {
      method: 'POST', //по умолчанию используется GET, поэтому POST надо конкретно прописать
      body: JSON.stringify(newData),
      headers: {
        'Content-Type': 'application/json; charset=utf-8', //отправляем в формате JSON
      },
    })
      .then(response => response.json())
      .then(newData => {
        console.log(newData);
        history.push('/'); //после добавления слова возвращает пользователя к таблице
        updateData();
      })
      .catch(error => {
        console.log(error);
        setisWordsLoading(false);
        setError(true);
      });
  };

  if (error) return <ServerError />;

  return (
    <div className="newWord">
      <h4 className="newWord-title">Add new word</h4>
      <label htmlFor="english">english:</label>{' '}
      <input
        className={`inputTableRow ${classNameInputEnglish}`}
        value={newData.english}
        name="english"
        onChange={handleChange}
      />
      <label htmlFor="transcription">transcription:</label>{' '}
      <input
        className={`inputTableRow ${classNameInputTranscription}`}
        value={newData.transcription}
        name="transcription"
        onChange={handleChange}
      />
      <label htmlFor="russian">russian:</label>{' '}
      <input
        className={`inputTableRow ${classNameInputRussian}`}
        value={newData.russian}
        name="russian"
        onChange={handleChange}
      />
      <button
        className="buttonCheck"
        onClick={sentWord}
        disabled={isInputsInValid}
      >
        Сохранить
      </button>
    </div>
  );
};

export default NewWord;
