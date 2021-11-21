import { useState } from 'react';
import './TableRow.scss';
import ButtonEdit from './Buttons/Button_edit';
import ButtonDelete from './Buttons/Button_delete';
import ButtonSave from './Buttons/Button_save';
import ButtonCancel from './Buttons/Button_cancel';

const TableRow = props => {
  const [editMode, setEditMode] = useState(false); //режим редактирования строчки таблицы (самого компонента TableRow) изначально не редактируема (false)
  const handleClick = () => setEditMode(!editMode);
  return (
    <tr className="tableRow">
      <td>
        {editMode ? <input defaultValue={props.english} /> : props.english}
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

      <td className="tableRow_actions">
        {editMode ? (
          <td className="tableRow_actions">
            <ButtonSave onClick={handleClick} />
            <ButtonCancel />
          </td>
        ) : (
          <td className="tableRow_actions">
            <ButtonEdit onClick={handleClick} />
            <ButtonDelete />
          </td>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
