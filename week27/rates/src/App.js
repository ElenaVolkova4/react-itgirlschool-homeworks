import React, { useState } from "react";
import './App.css';
import RateCard from './components/RateCard';
import { rates } from './components/dataRates'
import Example from './components/primer';

function App() {

  const [selectedCardIndex, setSelectedCardIndex] = useState(-1); //Состояние, которое хранит индекс выделенной карточки

  const handleClick = (id) => {
    setSelectedCardIndex(id);
  }; 


  return (
    <div className="App">
      <h1>Тарифы</h1>
      <div className="rates">
        {
          rates.map((rate, i) =>//переменную rate мы назвали сами
            <RateCard
              key={rate.id}//надо обязательно задавать ключ
              // isSelected={i === 2} //для задания week27

              onClick={() => handleClick(i)} // создаем новую функцию, которая вызовет handleClick с индексом этой карточки
              isSelected={i === selectedCardIndex}

              rateName={rate.rateName} ratePrice={rate.ratePrice} rateSpeed={rate.rateSpeed} />)
        }
      </div>

{/* это пример из лекции */}
<Example />

    </div>
  );
}

export default App;
