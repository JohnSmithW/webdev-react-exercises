import React from 'react';
import ReactDOM from 'react-dom';
import './css/WeatherWidget.css';
import WeatherWidget from './js/WeatherWidget.js';
import sunPng from './images/sun.png';

ReactDOM.render(
  /*change weather props to change weather. Avaliable weather props: 'sunny','rainy','lightning','cloudy'*/
  <WeatherWidget weather="sunny" city="Los Angeles" precipitation={0} temperature={71} wind={1} humidity={63} />,
  document.querySelector('#root')
);
