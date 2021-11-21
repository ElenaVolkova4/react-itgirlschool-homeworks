import React, { useState } from 'react';
import './Table.scss';
import Table_header from './Table_header';
import TableRow from './Row';
import { words } from './dataWords';

const Table = () => {
  return (
    <div className="main_table">
      <table className="table">
        <Table_header />
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
