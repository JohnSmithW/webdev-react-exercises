import React from 'react';
import { PropTypes } from 'prop-types';

class WeatherWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.StrictMode>
        <div className="main">
          <div className={'header ' + this.props.weather}>
            <span className="header__text">{this.props.weather}</span>
            <div className="header__icon"></div>
          </div>
          <div className="content">
            <div className="content__item">city: {this.props.city}</div>
            <div className="content__item">precipitation: {this.props.precipitation}%</div>
            <div className="content__item">temperature: {this.props.temperature}°F</div>
            <div className="content__item">wind: {this.props.wind}m/s</div>
            <div className="content__item">humidity: {this.props.humidity}%</div>
          </div>
        </div>
      </React.StrictMode>
    );
  }
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
