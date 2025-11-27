import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isOn, setIsOn] = useState(true);
  useEffect(() => {
    setIsOn(JSON.parse(localStorage.getItem('state') || 'true'));
  }, []);
  return (
    <div className="page">
      <div className="toggle-wrapper">
        <button
          className={`toggle-button toggle-button--on ${
            isOn ? 'toggle-button--visible' : ''
          }`}
          onClick={() => {
            setIsOn(false);
            localStorage.setItem('state', 'false');
          }}
        >
          Выключить
        </button>

        <button
          className={`toggle-button toggle-button--off ${
            !isOn ? 'toggle-button--visible' : ''
          }`}
          onClick={() => {
            setIsOn(true);
            localStorage.setItem('state', 'true');
          }}
        >
          Включить
        </button>
      </div>
    </div>
  );
}

export default App;
