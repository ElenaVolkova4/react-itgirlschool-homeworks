import { makeObservable, makeAutoObservable, action, observable } from 'mobx';

class WordsStore {
  words = [];
  isLoading = false;
  serverError = false;

  constructor() {
    makeObservable(this, {
      words: observable,
      isLoading: observable,
      serverError: observable,
      loadWords: action, //надо??
      addWord: action,
      removeWord: action,
    });
    this.loadWords();
  }
  // или так?
  // constructor() {
  //   makeAutoObservable(this);
  // }

  // или так?
  // decorate(WordsStore, {
  //   words: observable,
  //   addWord: action,
  //   removeWord: action,
  // });

  loadWords = () => {
    this.isLoading = true;
    this.serverError = false;
    fetch('/api/words')
      .then(response => response.json())
      .then(data => {
        this.words = data;
        this.isLoading = false;
      })
      .catch(error => {
        console.log(error);
        this.isLoading = false;
        this.serverError = true;
      });
  };

  addWord = word => {
    return this.words.push(word);
  };

  removeWord = id => {
    this.words = this.words.filter(el => el.id == !id);
  };
}
export default WordsStore;
