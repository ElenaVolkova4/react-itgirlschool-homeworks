import React from 'react';
import './Table.scss';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
// import { words } from './dataWords';//нужно, если слова приходят не с сервераа из файла
import Loader from './Loader';
import ServerError from './ServerError';
import { observer, inject } from 'mobx-react';

const Table = inject(['wordsStore'])(
  observer(({ wordsStore }) => {
    if (wordsStore.serverError) return <ServerError />;
    if (wordsStore.isLoading || !wordsStore.words.length) return <Loader />;

    return (
      <div className="main_table">
        <table className="table">
          <TableHeader />
          <tbody>
            {wordsStore.words?.map((word, i) => (
              <TableRow
                key={word.id}
                english={word.english}
                transcription={word.transcription}
                russian={word.russian}
                id={word.id}
                deleteWord={wordsStore.removeWord}
                saveChanges={wordsStore.saveChanges}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }),
);

export default Table;
