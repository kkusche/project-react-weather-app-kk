import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="col-sm-12 col-md-6 col-xl-2">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {maxTemperature()}
              </span>{" "}
              /{" "}
              <span className="WeatherForecast-temperature-min">
                {minTemperature()}
              </span>
            </div>
          </h4>
          <h5 className="weather-icon">
            <i>
              <WeatherIcon code={props.data.weather[0].icon} size={36} />
            </i>
          </h5>
          <p className="card-text">
            <div className="WeatherForecast-day">{day()}</div>
          </p>
        </div>
      </div>
    </div>
  );
}