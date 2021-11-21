import './TableRowEdit.scss';
import ButtonSave from './Buttons/Button_save';
import ButtonCancel from './Buttons/Button_cancel';

const TableRowEdit = props => {
  return (
    <tr className="tableRowEdit">
      <td className="tableRowEdit_input">
        <input value={props.english}></input>
      </td>
      <td>
        <input value={props.transcription}></input>
      </td>
      <td>
        <input value={props.russian}></input>
      </td>
      <td className="tableRow_actions">
        <ButtonSave />
        <ButtonCancel />
      </td>
    </tr>
  );
};

export default TableRowEdit;
