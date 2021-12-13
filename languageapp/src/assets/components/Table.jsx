import React from 'react';
import './Table.scss';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { words } from './dataWords';

const Table = () => {
  return (
    <div className="main_table">
      <table className="table">
        <TableHeader />
        <tbody>
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
