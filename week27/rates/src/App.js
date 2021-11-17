import './App.css';
import RateCard from './components/RateCard';
import { rates } from './components/dataRates'
import Example from './components/primer';

function App() {
  return (
    <div className="App">
      <h1>Тарифы</h1>
      <div className="rates">
        {
          rates.map((rate, i) =>//переменную rate мы назвали сами
            <RateCard
              key={rate.id}//надо обязательно задавать ключ
              // isSelected={i === 2} //для задания week27
              rateName={rate.rateName} ratePrice={rate.ratePrice} rateSpeed={rate.rateSpeed} />)
        }
      </div>

{/* это пример из лекции */}
<Example />

    </div>
  );
}

export default App;
