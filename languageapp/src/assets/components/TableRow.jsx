import React, { useState } from 'react';
import './TableRow.scss';
import ButtonEdit from './Buttons/Button_edit';
import ButtonDelete from './Buttons/Button_delete';
import ButtonSave from './Buttons/Button_save';
import ButtonCancel from './Buttons/Button_cancel';

const TableRow = function (props) {
  const [editMode, setEditMode] = useState(false); // режим редактирования строчки таблицы (самого компонента TableRow) изначально не редактируема (false)
  const [editModeEnglish, setEditModeEnglish] = useState(props.english);

  const handleClick = () => setEditMode(!editMode);

  //изменение поля english - НАДО ЛИ?????????
  // const handleChangeEnglish = e => {
  //   console.log(editModeEnglish);
  //   setEditModeEnglish({
  //     editModeEnglish: e.target.value,
  //   });
  // };

  //кнопка сохранить
  const handleClickSave = () => {
    if (editModeEnglish === '') {
      alert('не заполено поле English');
    }
  };

  return (
    <tr className="tableRow">
      <td>
        {editMode ? (
          <input
            defaultValue={props.english}
            // onChange={handleChangeEnglish}
          />
        ) : (
          props.english
        )}
      </td>
      <td>
        {editMode ? (
          <input defaultValue={props.transcription} />
        ) : (
          props.transcription
        )}
      </td>
      <td>
        {editMode ? <input defaultValue={props.russian} /> : props.russian}
      </td>

      {editMode ? (
        <td className="tableRow_actions">
          <ButtonSave onClick={handleClickSave} />
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