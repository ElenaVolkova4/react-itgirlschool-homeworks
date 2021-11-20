import './TableRowEdit.scss';
import ButtonEdit from './Buttons/Button_edit';
import ButtonDelete from './Buttons/Button_delete';

const TableRowEdit = props => {
  return (
    <tr className="tableRowEdit">
      <td className="tableRowEdit_input">
        <input></input>
      </td>
      <td>
        <input></input>
      </td>
      <td>
        <input></input>
      </td>
      <td className="tableRow_actions">
        <ButtonEdit />
        <ButtonDelete />
      </td>
    </tr>
  );
};

export default TableRowEdit;
