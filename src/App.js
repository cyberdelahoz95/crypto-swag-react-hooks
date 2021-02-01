import React, { useState }  from 'react'

import Header from './components/Header'
import Cryptos from './components/Cryptos'
import './App.css';

function App() {
  const [darkModeActive, setDarkModeActive] = useState(false)
  const handleClick = () => {
      setDarkModeActive(!darkModeActive)
  }  
  return (
    <div className={`App ${darkModeActive ? "dark-mode":"light-mode"}`}>      
      <section className="section">
      <Header handleDarkModeSwitcher={handleClick} darkModeActive={darkModeActive} />
    <div className="container is-flex is-flex-direction-row is-align-content-center is-justify-content-center is-flex-wrap-wrap">
      <Cryptos darkModeActive={darkModeActive} />
    </div>
  </section>
    </div>
  );
}

export default App;
