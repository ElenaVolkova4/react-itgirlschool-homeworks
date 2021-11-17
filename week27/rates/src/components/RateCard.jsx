import "./RateCard.scss";
import classnames from "classnames";
import React, { useState } from 'react'; //useState это хук

const RateCard = (props) => {
  // писать просто (props), а потом обращаться к свойствам props.name или в скобках сразу перечислить все свойства, тогда потом писать просто свойства name, либо задавать отдельную переменную (const { id, header, text, sum } = props;)

  // Стили - первый вариант (условные классы) задание для week27
  // const className = classnames('rateCard', {
  //   blue: props.ratePrice === '300', //класс голубой: если цена=300
  //   green: props.ratePrice === '450',
  //   red: props.ratePrice === '550',
  //   black: props.ratePrice === '1000',
  //   selected: isSelected
  // }
  // )

  //Стили - второй вариант задание для week27
  // const className = `rateCard
  // ${props.ratePrice === '300' ? "blue" : " "} //цена=300? тогда класс голубой: если нет - никакой не добавляется
  // ${props.ratePrice === '450' ? "green" : " "}
  // ${props.ratePrice === '550' ? "red" : " "}
  // ${props.ratePrice === '1000' ? "black" : " "}
  // ${props.isSelected ? "selected" : " "}
  // `




  //попытка добавить возможность выбирать тариф нажатием на него
  const [isSelected, setSelected] = useState(props.isSelected || false); //это исходное состояние (у карточек нет свойства isSelected)

  const handleChange = () => { //функция для обновления состояния
    setSelected(!isSelected);
  };

  const className = classnames('rateCard', {
    blue: props.ratePrice === '300', //класс голубой: если цена=300
    green: props.ratePrice === '450',
    red: props.ratePrice === '550',
    black: props.ratePrice === '1000',
    selected: isSelected,
  }
  )


  return (
    <div className={className}
      // isSelected={isSelected} //для задания week27? я уже запуталась
      onClick={handleChange}
    // onMouseOver={handleChange} //при наведении мыши
    >

      <div className='rateName'><span>{props.rateName}</span></div>
      <div className='ratePrice'>
        <span className='rateCurrency'>руб</span><span className='ratePriceNumber'>{props.ratePrice}</span><span className='rateMonth'>/мес</span></div>
      <div className='rateSpeed'>до&nbsp;<span>{props.rateSpeed}</span>&nbsp;Мбит/сек</div>
      <div className='rateDetailes'>Объем включенного трафика не ограничен</div>
    </div>
  );
}

export default RateCard;
