import './Table.scss';
import Table_header from './Table_header';
import TableRow from './TableRow';
import TableRowEdit from './TableRowEdit';

import { words } from './dataWords';

const Table = () => {
  return (
    <div className="main_table">
      <table className="table">
        <Table_header />
        <tbody>
          <TableRowEdit />
          {words.map((word, i) => (
            <TableRow
              key={word.id}
              english={word.english}
              transcription={word.transcription}
              russian={word.russian}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
