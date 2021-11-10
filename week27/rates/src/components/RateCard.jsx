import "./RateCard.scss";

function RateCard(props) {
  // писать просто (props), а потом обращаться к свойствам props.name или в скобках сразу перечислить все свойтсва, тогда потом писать просто свойтсва name

  return (
    <div className="RateCard">

      <div className='rateName'><span>{props.rateName}</span></div>
      <div className='ratePrice'>
        <span className='rateCurrency'>руб</span><span>{props.ratePrice}</span></div>
      <div className='rateSpeed'>до <span>{props.rateSpeed}</span> Мбит/сек</div>
      <div className='rateDetailes'>Объем включенного трафика не ограничен</div>
    </div>
  );
}

export default RateCard;
