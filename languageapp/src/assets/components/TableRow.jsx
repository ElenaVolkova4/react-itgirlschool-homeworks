import React, { useState } from 'react';
import './TableRow.scss';
import ButtonEdit from './Buttons/Button_edit';
import ButtonDelete from './Buttons/Button_delete';
import ButtonSave from './Buttons/Button_save';
import ButtonCancel from './Buttons/Button_cancel';
import classnames from 'classnames';

const TableRow = function (props) {
  const [editMode, setEditMode] = useState(false); // режим редактирования строчки таблицы (самого компонента TableRow) изначально не редактируема (false)
  const [rowData, setRowData] = useState({
    //первоначальные состояния (текс) полей input (из пропсов)
    english: props.english,
    transcription: props.transcription,
    russian: props.russian,
  });

  //валидация

  //условия валидации полей input
  const englishFormat = /^[a-zA-Z]+$/; //поле english должно содержать только англ буквы
  const russianFormat = /^[а-яё]+$/i; //поле english должно содержать только русские буквы

  //строка валидна?
  const [rowValid, setRowValid] = useState(true);

  const isRowValid = () => {
    if (
      // englishFormat.test(rowData.english) !== true; //НО!!!!! работает до первого совпадения
      rowData.english.search(englishFormat) > -1 || //НО!!!!! тоже работает до первого совпадения
      russianFormat.test(rowData.russian) !== true ||
      rowData.english === '' ||
      rowData.transcription === '' ||
      rowData.russian === ''
    ) {
      setRowValid(!rowValid);
    } else {
      setRowValid(rowValid);
    }
  };
  // console.log(rowData.english); //вот так обращаемся к value inputов

  // стили для полей input (inputTableRow и если поле пустое - redInputTableRow)
  //МОЖНО КАК-ТО ОБЪЕДИНИТЬ?
  const classNameInputEnglish = classnames('', {
    // redInputTableRow: !rowValid,
    redInputTableRow:
      rowData.english === '' || englishFormat.test(rowData.english) !== true,
  });
  const classNameInputTranscription = classnames('', {
    redInputTableRow: rowData.transcription === '',
  });
  const classNameInputRussian = classnames('', {
    redInputTableRow:
      rowData.russian === '' || russianFormat.test(rowData.russian) !== true,
  });

  const handleClick = () => setEditMode(!editMode); //по клику у строки появляется состояние редактируема

  //изменение состояния полей
  const handleChange = e => {
    setRowData({
      ...rowData, //копируем объект с полями rowData
      [e.target.name]: e.target.value.toLowerCase(), //изменяем value inputов на вводимые значения в зависимости от ключа name и маленькими буквами (toLowerCase)
    });
    isRowValid(); //сюда валидацию?????? работает только с одним символом
  };

  //кнопка сохранить
  const handleClickSave = () => {
    if (rowValid) {
      console.log(rowData);
    } else {
      alert(
        'Остались незаполненные поля или поля содержат недопустивые знаки!',
      );
    }
    setEditMode(!editMode); //снова убирается режим редактирования
  };

  return (
    <tr className="tableRow">
      <td>
        {editMode ? (
          <input
            // className={classNameInputEnglish} тогда в classNameInputEnglish надо заменить ' ' на 'inputTableRow'
            //или вариант:
            className={`inputTableRow ${classNameInputEnglish}`}
            defaultValue={props.english}
            name="english"
            onChange={handleChange}
          />
        ) : (
          props.english
        )}
      </td>
      <td>
        {editMode ? (
          <input
            className={`inputTableRow ${classNameInputTranscription}`}
            defaultValue={props.transcription}
            name="transcription"
            onChange={handleChange}
          />
        ) : (
          props.transcription
        )}
      </td>
      <td>
        {editMode ? (
          <input
            className={`inputTableRow ${classNameInputRussian}`}
            defaultValue={props.russian}
            name="russian"
            onChange={handleChange}
          />
        ) : (
          props.russian
        )}
      </td>

      {editMode ? (
        <td className="tableRow_actions">
          <ButtonSave
            onClick={handleClickSave}
            //кнопка неактивна, если поля не заполнены
            // disabled={!rowValid}
            disabled={
              // disabled={!rowValid}

              classNameInputEnglish ||
              classNameInputTranscription ||
              classNameInputRussian
            }
          />
          <ButtonCancel onClick={handleClick} />
        </td>
      ) : (
        <td className="tableRow_actions">
          <ButtonEdit onClick={handleClick} />
          <ButtonDelete />
        </td>
      )}
    </tr>
  );
};

export default TableRow;
