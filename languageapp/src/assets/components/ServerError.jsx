import React from 'react';
import './ServerError.scss';
import error from '../images/error.png';

const ServerError = () => {
  return (
    <div className="serverError">
      <p className="serverError_text">
        Данные не были загружены! <br />
        Может, у вас отсутствует подключение к интернету?
      </p>
      <img className="errorPic" src={error} alt="Ошибка!" />
    </div>
  );
};

export default ServerError;
