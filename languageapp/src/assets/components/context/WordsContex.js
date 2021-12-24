import React, { useState, useEffect } from 'react';

const WordsContex = React.createContext;

const WordsContexProvider = props => {
  const [words, setWords] = useState([]);
  const [isWordsLoading, setisWordsLoading] = useState(false);

  useEffect(() => {
    setisWordsLoading(true);

    fetch('http://itgirlschool.justmakeit.ru/api/words')
      .then(response => response.json())
      .then(words => {
        setWords(words); // записываем пришедшие с сервер слова в массив (состояние)
        setTimeout(() => setisWordsLoading(false, 5000)); //посмотреть как работает анимация загрузки
        setisWordsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <WordsContex.Provider value={{ words, isWordsLoading }}>
      {' '}
      {props.children}{' '}
    </WordsContex.Provider>
  );
};

export default { WordsContex, WordsContexProvider };

// // от Зои
// import React, { useState, useEffect } from 'react';
// const DataContext = React.createContext();
// const DataContextProvider = props => {
//   const [data, setData] = useState([]);
//   const [isWordsLoading, setIsWordsLoading] = useState(false);
//   useEffect(() => {
//     setIsWordsLoading(true);
//     fetch(' http://itgirlschool.justmakeit.ru/api/words')
//       .then(response => response.json())
//       .then(words => {
//         try {
//           console.log(words);
//           setData(words);
//           setIsWordsLoading(false);
//           if (words.length === 0) {
//             throw new ReferenceError('Что-то пошло не так.');
//           }
//           if (words === undefined) {
//             throw new SyntaxError(
//               'Попробуйте повторить запрос: пришли некорректные данные.',
//             );
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);
//   return (
//     <DataContext.Provider value={{ data, isWordsLoading }}>
//       {props.children}
//     </DataContext.Provider>
//   );
// };
// export { DataContextProvider, DataContext };
