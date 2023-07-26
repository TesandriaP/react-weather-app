import React from 'react';
import './App.css';
import Weather from './Weather.js';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
    <Weather 
    defaultCity="Toronto"
    />
     <footer>
      This project is made by Penn626 and is {""}
     <a href="https://github.com/TesandriaP/react-weather-app" target="_blank" rel='noreferrer'>open-sourced</a>  on GitHub
     </footer>
     </div>
    </div>
  );
}
