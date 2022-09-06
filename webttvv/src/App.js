import logo from './logo.svg';
import './App.css';
import {Navigationbar} from './components/Navigationbar'

function App() {
  return (
    <div className="App">
      <Navigationbar>
        {/* Puedo colocar props, poco intuitivo. */}
      </Navigationbar>
    </div>
  );
}

export default App;
