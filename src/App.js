import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [developer, setdeveloper] = useState('Jimmy');

  const handleClick = () =>{
    setdeveloper('@wiraarbaa_');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Blog with {developer}
        </p>
        <button onClick={handleClick}>Show Ig</button>
      </header>
    </div>
  );
}

export default App;
