import './App.css';
import RateCard from './components/RateCard';
import { rates } from './components/dataRates'


// const button = (props) => {
//   const className = classnames("button" < {
//     primary: props.type === "primary",
//     danger: props.type === "danger",
//     disabled: props.disabled
//   });

//   return (
//     <button className={className} disabled={props.disabled}>
//       {props.label}
//     </button>
//   );
// }




function App() {
  return (
    <div className="App">

      <h1>Тарифы</h1>
      <div className="rates">
        {
          rates.map((rate) =>//переменную rate мы назвали сами
            <RateCard
              key={rate.id}//надо обязательно задавать ключ
              isSelected={rate.ratePrice === '550'}
              rateName={rate.rateName} ratePrice={rate.ratePrice} rateSpeed={rate.rateSpeed} />)
        }
      </div>
    </div>
  );
}

export default App;
