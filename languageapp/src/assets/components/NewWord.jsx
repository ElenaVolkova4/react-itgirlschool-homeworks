import React, { useState, useMemo } from 'react';
import './NewWord.scss';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';
import ServerError from './ServerError';
import { observer, inject } from 'mobx-react';

//условия валидации полей input
const englishFormat = /^[a-zA-Z-\s]+$/; //поле english должно содержать только слова англ буквами, включая дефис (можно прописывать отдельно и заглавные и строчные)
const russianFormat = /^[а-яё-\s]+$/i; //поле english должно содержать только слова русскими буквами, включая дефис (а можно использовать флаг /i)

const NewWord = inject(['wordsStore'])(
  observer(({ wordsStore }) => {
    //первоначальное состояние полей input
    const [newData, setnewData] = useState({
      english: '',
      transcription: '',
      russian: '',
    });

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
      redInputTableRow: errorsIntuts.english, //=true
      // или так
      // newData.english === '' || englishFormat.test(newData.english) !== true,
    });
    const classNameInputTranscription = classnames('', {
      redInputTableRow: errorsIntuts.transcription, //=true
      // или так
      // newData.transcription === '',
    });
    const classNameInputRussian = classnames('', {
      redInputTableRow: errorsIntuts.russian, //=true
      // или так
      // newData.russian === '' || russianFormat.test(newData.russian) !== true,
    });

    //ф-ция, чтобы можно было заносить в input текст
    const handleChange = e => {
      setnewData({
        ...newData, //копируем объект с полями newData
        [e.target.name]: e.target.value.toLowerCase(), //изменяем value inputов на вводимые значения в зависимости от ключа name и маленькими буквами (toLowerCase)
      });
      //валидация, срабатывающая при первом вводе в поле (поэтому она в handleChange и специально создался стейт [errorsIntuts, setErrorsIntuts]
      if (e.target.name === 'english') {
        setErrorsIntuts({
          ...errorsIntuts,
          english:
            e.target.value === '' || !englishFormat.test(e.target.value)
              ? true
              : false,
        });
      }
      if (e.target.name === 'transcription') {
        setErrorsIntuts({
          ...errorsIntuts,
          transcription: e.target.value === '' ? true : false,
        });
      }
      if (e.target.name === 'russian') {
        setErrorsIntuts({
          ...errorsIntuts,
          russian:
            e.target.value === '' || !russianFormat.test(e.target.value)
              ? true
              : false,
        });
      }
    };

    //метод отправления нового слова на сервер
    const sentWord = newData => {
      wordsStore.addWord(newData);
      history.push('/'); //после добавления слова возвращает пользователя к таблице
    };

    if (wordsStore.serverError) return <ServerError />;

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
          onClick={() => sentWord(newData)}
          disabled={isInputsInValid}
        >
          Сохранить
        </button>
      </div>
    );
  }),
);

export default NewWord;
