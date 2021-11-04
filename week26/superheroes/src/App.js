// import logo from './logo.svg';
import './App.css';
import CardHero from './components/card';
import { heroes } from './components/dataHeroes'

function App() {
  return (
    <div className="App">
      <h1>Супергерои современности</h1>
      {
        heroes.map((hero) =>//переменную hero мы назвали сами
          <CardHero heroName={hero.heroName} pic={hero.pic} alterEgo={hero.alterEgo} universe={hero.universe} superPower={hero.superPower} details={hero.details} />)
      }
    </div>
  );
}

export default App;
