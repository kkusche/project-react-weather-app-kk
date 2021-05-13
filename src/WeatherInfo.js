import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
        <div className="row middleSection">
        <div className="col-sm-12 col-md-6 col-xl-6">
          <div className="card1" id="now">
            <div className="card-body1">
              <h2 class="card-title">
                <span id="temperature">
                <WeatherTemperature celsius={props.data.temperature} />
                </span>
              </h2>
              <h6>
                <i id="main-icon"><WeatherIcon code={props.data.icon} /></i>
                <p>
                  <span className="Description" id="description">
                  {props.data.description}
                  </span>
                </p>
              </h6>
              <h3>
                <p className="card-text" id="today">
                <FormattedDate date={props.data.date} />
                </p>
              </h3>
              <ul>
                <li id="humidityID">
                  Humidity: <span id="humidity">{props.data.humidity} %</span>
                </li>
                <li id="windID">
                  Wind: <span id="wind-speed">{props.data.wind} km/h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-xl-6" >
          <div href="/" className="currentLocation">
            <i id="current-location-button">< FaMapMarkerAlt />
              {" "}
            </i>
            <h1 id="city">{props.data.city}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}