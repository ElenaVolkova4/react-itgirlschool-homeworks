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
    //первоначальные состояния полей input (из пропсов)
    english: props.english,
    transcription: props.transcription,
    russian: props.russian,
  });

  // стиль для полей input
  let classNameInput = classnames('inputTableRow', {
    // redInputTableRow: e.target.value === '', //класс красный: если поле пустое
  });

  const handleClick = () => setEditMode(!editMode); //по клику у строки появляется состояние редактируема

  //изменение состояния полей
  const handleChange = e => {
    setRowData({
      ...rowData, //копируем объект с полями rowData
      [e.target.name]: e.target.value, //изменяем value inputов на вводимые значения в зависимости от ключа name
    });
    console.log(e.target.value);

    classNameInput = classnames('inputTableRow', {
      redInputTableRow: e.target.value === '', //класс красный: если поле пустое
    });
  };

  //кнопка сохранить
  const handleClickSave = () => {
    // console.log(rowData);
    // if (editModeEnglish === '') {
    // console.log(rowData);
    // }
    setEditMode(!editMode); //снова убирается режим редактирования
  };

  return (
    <tr className="tableRow">
      <td>
        {editMode ? (
          <input
            className={classNameInput}
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
            className={classNameInput}
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
            className={classNameInput}
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
          // disabled={???????}

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
