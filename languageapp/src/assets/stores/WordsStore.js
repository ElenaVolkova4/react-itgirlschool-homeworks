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
    this.words.push(word);
    fetch('/api/words/add', {
      method: 'POST', //по умолчанию используется GET, поэтому POST надо конкретно прописать
      body: JSON.stringify(word),
      headers: {
        'Content-Type': 'application/json; charset=utf-8', //отправляем в формате JSON
      },
    })
      .then(response => response.json())
      .then(words => {
        console.log(words);
      })
      .catch(error => {
        console.log(error);
        this.isLoading = false;
        this.serverError = true;
      });
  };

  removeWord = id => {
    this.words = this.words.filter(el => el.id !== id);
    fetch(`/api/words/${id}/delete`, {
      method: 'POST', //по умолчанию используется GET, поэтому POST надо конкретно прописать
      body: JSON.stringify(this.words),
      headers: {
        'Content-Type': 'application/json; charset=utf-8', //отправляем в формате JSON
      },
    })
      .then(response => response.json())
      .then(word => {
        console.log(word);
        // updateData();
      })
      .catch(error => {
        console.log(error);
        this.isLoading = false;
        this.serverError = true;
      });
  };
}
export default WordsStore;
