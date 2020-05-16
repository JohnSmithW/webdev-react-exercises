import React from 'react';
import ReactDOM from 'react-dom';
import './js/WeatherWidget.css';
import WeatherWidget from './js/WeatherWidget';
import './images/sun.png';

/*change weather props to change weather. Avaliable weather props: 'sunny','rainy','lightning','cloudy'*/
ReactDOM.render(
  <WeatherWidget weather="sunny" city="Los Angeles" precipitation={0} temperature={71} wind={1} humidity={63} />,
  document.querySelector('#root')
);
