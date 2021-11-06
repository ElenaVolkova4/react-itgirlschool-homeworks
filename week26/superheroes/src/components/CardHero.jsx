import './cardHero.css' //подключение стилей карточек
function CardHero(props) {
  // писать просто (props), а потом обращаться к свойствам props.name или в скобках сразу перечислить все свойтсва, тогда потом писать просто свойтсва name

  return (
    <div className="CardHero">

      <h2>{props.heroName}</h2>
      <img className="img" src={props.pic} alt="hero" />
      <div className='title'>Альтер эго: <span>{props.alterEgo}</span></div>
      <div className='title'>Вселенная: <span>{props.universe}</span></div>
      <div className='title'>Суперсилы: <span>{props.superPower}</span></div>
      <div className='title'>Подробнее: <span>{props.details}</span></div>
    </div>
  );
}

export default CardHero;
