// создание рекакт-компонента с именем LikeButton

'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Мне это понравилось.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Мне нравится'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
//Последние две строки кода здесь ищут элемент <div>, который мы добавили на первом шаге, а затем отображают React-компонент с кнопкой «Нравится» внутри него.