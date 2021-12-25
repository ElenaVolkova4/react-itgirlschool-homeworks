import React from 'react';
import './ServerError.scss';
import error from '../images/error.png';
import { Route, Link } from 'react-router-dom';

const ServerError = () => {
  return (
    <div className="serverError">
      <p className="serverError_text">
        Список заклинаний не был загружен! Попробуйте использовать метлу для
        доставки данных
      </p>
      <Link to="/">
        {' '}
        <img className="errorPic" src={error} alt="Ошибка!" />
      </Link>
    </div>
  );
};

export default ServerError;
