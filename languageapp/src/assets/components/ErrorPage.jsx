import React from 'react';
import './ErrorPage.scss';
import error from '../images/1.png';
import { Route, Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <p className="errorPage_text">Такого пути в Хогвартс не существует!</p>
      <Link to="/">
        {' '}
        <img className="errorPic" src={error} alt="Ошибка!" />
      </Link>
    </div>
  );
};

export default ErrorPage;
