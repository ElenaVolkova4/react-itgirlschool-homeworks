import React, { useState, useMemo, useEffect } from 'react';
import './TableRow.scss';
import ButtonEdit from './Buttons/Button_edit';
import ButtonDelete from './Buttons/Button_delete';
import ButtonSave from './Buttons/Button_save';
import ButtonCancel from './Buttons/Button_cancel';
import classnames from 'classnames'; //надо ли?

//условия валидации полей input
const englishFormat = /^[a-zA-Z-\s]+$/; //поле english должно содержать только слова англ буквами, включая дефис (можно прописывать отдельно и заглавные и строчные)
const russianFormat = /^[а-яё-\s]+$/i; //поле english должно содержать только слова русскими буквами, включая дефис (а можно использовать флаг /i)

const TableRow = props => {
  const [editMode, setEditMode] = useState(false); // режим редактирования строчки таблицы (самого компонента TableRow) изначально не редактируема (false)
  const [rowData, setRowData] = useState({
    //первоначальные состояния (текст) полей input (из пропсов)
    english: props.english,
    transcription: props.transcription,
    russian: props.russian,
    id: props.id,
  });

  // валидация
  // const isRowInValid = useMemo(() => {
  //   return (
  //     rowData.english.search(englishFormat) === -1 ||
  //     russianFormat.test(rowData.russian) !== true ||
  //     rowData.english === '' ||
  //     rowData.transcription === '' ||
  //     rowData.russian === ''
  //   );
  // }, [rowData.russian, rowData.english, rowData.transcription, rowData.id]);

  // стили для полей input (inputTableRow и если поле пустое/есть неправильные символы - redInputTableRow)

  // const classNameInputEnglish = classnames('', {
  //   redInputTableRow:
  //     rowData.english === '' || englishFormat.test(rowData.english) !== true,
  // });
  // const classNameInputTranscription = classnames('', {
  //   redInputTableRow: rowData.transcription === '',
  // });
  // const classNameInputRussian = classnames('', {
  //   redInputTableRow:
  //     rowData.russian === '' || russianFormat.test(rowData.russian) !== true,
  // });

  const handleClick = () => setEditMode(!editMode); //по клику у строки появляется состояние редактируема

  //изменение состояния полей
  const handleChange = e => {
    setRowData({
      ...rowData, //копируем объект с полями rowData
      [e.target.name]: e.target.value.toLowerCase(), //изменяем value inputов на вводимые значения в зависимости от ключа name и маленькими буквами (toLowerCase)
    });
  };

  //функция сохранения изменений слова КОНТЕКСТ
  // const saveChanges = () => {
  //   setError(false);
  //   fetch(`/api/words/${rowData.id}/update`, {
  //     method: 'POST', //по умолчанию используется GET, поэтому POST надо конкретно прописать
  //     body: JSON.stringify(rowData),
  //     headers: {
  //       'Content-Type': 'application/json; charset=utf-8', //отправляем в формате JSON
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(rowData => {
  //       console.log(rowData);
  //       updateData();
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       setisWordsLoading(false);
  //       setError(true);
  //     });
  // };

  // функция удаления слова
  const deleteWord = id => {
    props.deleteWord(id);
  };

  //кнопка сохранить
  // const handleClickSave = () => {
  //   if (!isRowInValid) {
  //     // saveChanges();
  //     setEditMode(!editMode); //снова убирается режим редактирования
  //   } else {
  //     alert(
  //       //срабатывает, если закоменнить в конпке // disabled={isRowInValid}
  //       'Остались незаполненные поля или поля содержат недопустимые знаки!',
  //     );
  //   }
  // };

  return (
    <tr className="tableRow">
      <td>
        {editMode ? (
          <input
            // className={classNameInputEnglish} тогда в classNameInputEnglish надо заменить ' ' на 'inputTableRow'
            //или вариант:
            className={`inputTableRow ${classNameInputEnglish}`}
            value={rowData.english}
            name="english"
            onChange={handleChange}
          />
        ) : (
          rowData.english
        )}
      </td>
      <td>
        {editMode ? (
          <input
            className={`inputTableRow ${classNameInputTranscription}`}
            value={rowData.transcription}
            name="transcription"
            onChange={handleChange}
          />
        ) : (
          rowData.transcription
        )}
      </td>
      <td>
        {editMode ? (
          <input
            className={`inputTableRow ${classNameInputRussian}`}
            value={rowData.russian}
            name="russian"
            onChange={handleChange}
          />
        ) : (
          rowData.russian
        )}
      </td>

      {editMode ? (
        <td className="tableRow_actions">
          <ButtonSave
            onClick={handleClickSave}
            // disabled={isRowInValid} //надо закомментить это, чтобы срабатывал alert
          />
          <ButtonCancel onClick={handleClick} />
        </td>
      ) : (
        <td className="tableRow_actions">
          <ButtonEdit onClick={handleClick} />
          <ButtonDelete onClick={() => deleteWord(props.id)} />
        </td>
      )}
    </tr>
  );
};

export default TableRow;
