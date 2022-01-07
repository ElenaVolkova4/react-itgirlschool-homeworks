import React from 'react';
import './TableHeader.scss';

const TableHeader = () => {
  return (
    <thead className="table_header">
      <tr>
        <th>English</th>
        <th>Transcription</th>
        <th>Translate</th>
        <th className="table_header__actions">Actions</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
