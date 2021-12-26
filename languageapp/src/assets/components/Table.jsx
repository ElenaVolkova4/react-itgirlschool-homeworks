import React, { useContext } from 'react';
import './Table.scss';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
// import { words } from './dataWords'; //если слова из файла
import { WordsContext } from '../context/WordsContext';
import Loader from './Loader';
import ServerError from './ServerError';

const Table = () => {
  //достаем слова с сервера
  const { words, isWordsLoading } = useContext(WordsContext);
  if (isWordsLoading || !words.length) return <Loader />;

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
