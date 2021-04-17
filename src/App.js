import logo from './logo.svg';
import './App.css';
import ExchangeApp from './projectComps/exchangeApp ';
import HeaderEx from './projectComps/headerEx';
import FooterEx from './projectComps/footerEx';

function App() {
  return (
    <div className="App">
    <HeaderEx/>
    <main>
      <ExchangeApp/>
    </main>
    <FooterEx/>
  </div>
);
}

export default App;
