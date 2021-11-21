import './Table.scss';
import Table_header from './Table_header';
import TableRow from './TableRow';
import TableRowEdit from './TableRowEdit';

import { words } from './dataWords';

const Table = () => {
  const [added, setValue] = useState(value); //value уже написанного,
  const handleClick = () => {
    setValue(value); //value inputa (то, что ввели при редактировании)
  };

  return (
    <div className="main_table">
      <table className="table">
        <Table_header />
        <tbody>
          {/* попытка вывода одной строки */}
          {/* {added ? (
            <TableRowEdit onClick={handleClick} />
          ) : (
            <TableRow
              // key={word[0].id}
              english={word[0].english}
              transcription={word[0].transcription}
              russian={word[0].russian}
            />
          )} */}

          {/* все строчки таблицы (все слова) */}
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
