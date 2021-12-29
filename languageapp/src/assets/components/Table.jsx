import React from 'react';
import './Table.scss';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { words } from './dataWords';
import Loader from './Loader';
import ServerError from './ServerError';

const Table = () => {
  //достаем слова с сервера через контекст
  //  const { words, isWordsLoading, error } = useContext(WordsContext);
  //  if (error) return <ServerError />;
  //  if (isWordsLoading || !words.length) return <Loader />;

  return (
    <div className="main_table">
      <table className="table">
        <TableHeader />
        <tbody>
          {words?.map((word, i) => (
            <TableRow
              key={word.id}
              english={word.english}
              transcription={word.transcription}
              russian={word.russian}
              id={word.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
