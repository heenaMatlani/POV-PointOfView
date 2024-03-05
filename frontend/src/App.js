import './App.css';
import Header from './components/Header';
import Recommended from './components/Recommended';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <Recommended/>
    </div>
  );
}

export default App;
