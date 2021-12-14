import React, { useState } from 'react';
import './TableRow.scss';
import ButtonEdit from './Buttons/Button_edit';
import ButtonDelete from './Buttons/Button_delete';
import ButtonSave from './Buttons/Button_save';
import ButtonCancel from './Buttons/Button_cancel';

const TableRow = function (props) {
  const [editMode, setEditMode] = useState(false); // режим редактирования строчки таблицы (самого компонента TableRow) изначально не редактируема (false)
  const [rowData, setRowData] = useState({
    //первоначальные состояния полей input
    english: props.english,
    transcription: props.transcription,
    russian: props.russian,
  });

  const handleClick = () => setEditMode(!editMode); //по клику у строки поялвяется состояние редактируема

  //изменение состояния полей
  const handleChange = e => {
    setRowData({
      ...rowData, //копируем объект с полями rowData
      [e.target.name]: e.target.value, //изменяем value inputов на вводимые значения в зависимости от ключа name
    });
  };

  //кнопка сохранить
  const handleClickSave = () => {
    console.log(rowData);
    // if (editModeEnglish === '') {
    //   alert('не заполено поле English');
    // }
  };

  return (
    <tr className="tableRow">
      <td>
        {editMode ? (
          <input
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
            defaultValue={props.russian}
            name="transcription"
            onChange={handleChange}
          />
        ) : (
          props.russian
        )}
      </td>

      {editMode ? (
        <td className="tableRow_actions">
          <ButtonSave
            //прописать условия, что она неактивна если поля не заполнены
            onClick={handleClickSave}
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
