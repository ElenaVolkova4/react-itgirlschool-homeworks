import './App.scss';
import Header from './assets/components/Header';
import Table from './assets/components/Table';
import Footer from './assets/components/Footer';



// import { words } from './assets/components/dataWords'



const App = () => {

  // console.log(words)
  return (
    <div className="App">
    <Header />
    <main className="main">
         <Table />
    </main>
 
    <Footer />
    </div>
  );
}

export default App;
