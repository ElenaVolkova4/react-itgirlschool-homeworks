import "./Table.scss";
import TableRow from "./TableRow";


const Table = () => {
  return (
    <div className="main_table">
      <table className="table">
        <thead>
          <tr>
            <th>English</th>
            <th>Transcription</th>
            <th>Translate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>apple</td>
            <td>-</td>
            <td>яблоко</td>
            <td>кнопка редактировать &quot;кнопка удалить</td>
          </tr>
          <tr>
            <td>orange</td>
            <td>-</td>
            <td>апельсин</td>
            <td>кнопка редактировать</td>
          </tr>
<TableRow />
<TableRow />

        </tbody>
      </table>
    </div>
  );
};

export default Table;
