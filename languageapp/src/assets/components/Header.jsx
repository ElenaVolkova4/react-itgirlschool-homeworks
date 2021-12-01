import React from 'react';
import './Header.scss';
import logo from '../images/logo10.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Header = () => {
  return (
    <Router>
      <div className="header">
        <div className="header_logo">
          <Link to="/">
            <img className="logo" src={logo} alt="Логотип приложения" />{' '}
          </Link>

          <p className="header_phrase">
            Чтобы попасть в Хогвардс - надо знать английский язык!
          </p>
        </div>
        <div className="header_buttons">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/game">
            <button>training</button>
          </Link>

          <button>Добавить слово</button>
        </div>
      </div>
    </Router>
  );
};

export default Header;
