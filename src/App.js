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
     <a href="https://github.com/TesandriaP/react-weather-app" target="_blank" rel="nopener noreferrer">
      open-sourced on GitHub
      </a>{" "}
      and{" "}
      <a 
      href="https://remarkable-maamoul-d4cb9d.netlify.app/"
      target="_blank"
      rel="nopener noreferrer"
      >
        hosted on Netflify
      </a>
     </footer>
     </div>
    </div>
  );
}
