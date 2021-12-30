import { makeAutoObservable, action, observable } from 'mobx';

class WordsStore {
  words = [];
  constructor() {
    makeAutoObservable(this);
  }

  loadWords = () => {
    fetch('/api/words')
      .then(response => response.json())
      .then(words => {
        setWords(words);
        // setisWordsLoading(false);
      })
      .catch(error => {
        console.log(error);
        // setisWordsLoading(false);
        // setError(true);
      });
  };
  addWord = word => {
    return this.words.push(word);
  };

  removeWord = index => {
    return this.words.splice(index, 1);
  };
}
// decorate(WordsStore, {
//   words: observable,
//   addWord: action,
//   removeWord: action,
// });

export default WordsStore;
