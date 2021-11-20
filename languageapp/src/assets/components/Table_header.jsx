import './Table_header.scss';

const Table_header = () => {
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

export default Table_header;
