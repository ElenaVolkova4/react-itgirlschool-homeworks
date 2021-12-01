import React from 'react';
import './ErrorPage.scss';
import error from '../images/1.png';

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <p className="errorPage_text">Такого пути в Хогвардс не существует!</p>
      <img className="errorPic" src={error} alt="Ошибка!" />
    </div>
  );
};

export default ErrorPage;
