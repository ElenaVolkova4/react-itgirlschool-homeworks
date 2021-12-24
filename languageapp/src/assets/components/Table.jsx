import React, { useContext } from 'react';
import './Table.scss';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
// import { words } from './dataWords'; //если слова из файла
import { WordsContex } from './context/WordsContex';
import Loader from './Loader';

const Table = () => {
  //достаем слова с сервера
  const { words, isWordsLoading } = useContext(WordsContex);
  console.log(words);
  if (isWordsLoading) return <Loader />;
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
