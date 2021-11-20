import './TableRow.scss';
import ButtonEdit from './Buttons/Button_edit';
import ButtonDelete from './Buttons/Button_delete';

const TableRow = props => {
  return (
    <tr className="tableRow">
      <td>{props.english}</td>
      <td>{props.transcription}</td>
      <td>{props.russian}</td>
      <td className="tableRow_actions">
        <ButtonEdit />
        <ButtonDelete />
      </td>
    </tr>
  );
};

export default TableRow;
