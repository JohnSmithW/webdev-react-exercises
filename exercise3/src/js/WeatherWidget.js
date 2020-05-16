import React from 'react';
import { PropTypes } from 'prop-types';

function WeatherWidget(props) {
  return (
    <React.StrictMode>
      <div className="main">
        <div className={'header ' + props.weather}>
          <span className="header__text">{props.weather}</span>
          <div className="header__icon"></div>
        </div>
        <div className="content">
          <div className="content__item">city: {props.city}</div>
          <div className="content__item">precipitation: {props.precipitation}%</div>
          <div className="content__item">temperature: {props.temperature}°F</div>
          <div className="content__item">wind: {props.wind}m/s</div>
          <div className="content__item">humidity: {props.humidity}%</div>
        </div>
      </div>
    </React.StrictMode>
  );
}

// const widgets = (
//   <div className="widgets-container">
//     <WeatherWidget weather="sunny" city="Los Angeles" precipitation="0" temperature="71" wind="1" humidity="63" />
//     <WeatherWidget weather="cloudy" city="Washington" precipitation="0" temperature="57" wind="7" humidity="12" />
//     <WeatherWidget weather="rainy" city="London" precipitation="56" temperature="56" wind="6" humidity="61" />
//     <WeatherWidget weather="lightning" city="New York" precipitation="0" temperature="61" wind="6" humidity="12" />
//   </div>
// );

WeatherWidget.propTypes = {
  weather: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  precipitation: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
};

export default WeatherWidget;
