import './App.css';
import Header from './components/Header';
import Recommended from './components/Recommended';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      <Sidebar/>
      <Recommended/>
    </div>
  );
}

export default App;
