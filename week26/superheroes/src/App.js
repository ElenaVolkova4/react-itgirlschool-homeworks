// import logo from './logo.svg';
import './App.css';
import CardHero from './components/card';
// import './components/dataHeroes'

const heroes = [
  {
    pic: "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg",
    heroName: "Бэтмен",
    alterEgo: "Брюс Уэйн",
    universe: "DC Comics",
    superPower: "интеллект, обширные познания, знания боевых искусств, ловкость",
  }, {
    pic: "https://n1s1.hsmedia.ru/34/93/39/3493392c94fc2ae0552ef9c7e87f2617/728x382_1_cc2a743fd686b7b2e256c062966bb465@1034x543_0xac120002_2692921231540468872.jpg",
    heroName: "Дэдпул",
    universe: "Marvel Comics",
    alterEgo: "Уэйд Уинстон Уилсон",
    superPower: "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
  }];


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
