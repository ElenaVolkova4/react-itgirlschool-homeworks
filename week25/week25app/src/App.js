// import logo from './logo.svg';
import './App.css';
// import { SketchPicker } from 'react-color';
import { Pie } from 'react-chartjs-2';



function App() {
  return (

    <div className="App">
    <h1>Сравнение фреймворков/библиотек JavaScript по состоянию на 01.10.2021 г. по данным GoogleTrends</h1>

{/* <SketchPicker /> //выборцвета */}


<Pie data={
{
  labels: [
    'React',
    'Angular',
    'Vue.js',
  ],
  datasets: [{
    label: 'Сравнение фреймворков/библиотек JavaScript по состоянию на 01.10.2021 г. по данным GoogleTrends',
    data: [83, 23, 2],
    backgroundColor: [
      'blue',
      'red',
      'green'
    ],
    hoverOffset: 4
  }]
}
}
/>      
    </div>
  );
}

export default App;
