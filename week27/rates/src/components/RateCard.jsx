import "./RateCard.scss";
import classnames from "classnames";

const RateCard = (props) => {
  // писать просто (props), а потом обращаться к свойствам props.name или в скобках сразу перечислить все свойства, тогда потом писать просто свойства name

  // первый вариант (условные классы)

  const className = classnames('RateCard', {
    blue: props.ratePrice === '300',
    green: props.ratePrice === '450',
    red: props.ratePrice === '550',
    black: props.ratePrice === '1000',
    // selected: isSelected, не работает?????
  }
  )



  return (
    <div className={className}>
      <div className='rateName'><span>{props.rateName}</span></div>
      <div className='ratePrice'>
        <sup className='rateCurrency'>руб</sup><span className='ratePriceNumber'>{props.ratePrice}</span><sub>/мес</sub></div>
      <div className='rateSpeed'>до&nbsp;<span>{props.rateSpeed}</span>&nbsp;Мбит/сек</div>
      <div className='rateDetailes'>Объем включенного трафика не ограничен</div>
    </div>
  );
}

export default RateCard;
