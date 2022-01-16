import React from 'react';
import classnames from 'classnames';
import './Arrow.scss';

const ArrowPrev = props => {
  const className = classnames('arrow', {
    //задаем доп класс, если появляется свойство disabled (его условия прописываем в App)
    disabled: props.disabled,
  });

  return (
    <div
      className={className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      &#8826;
    </div>
  );
};

export default ArrowPrev;
