import getWeatherDescription from "../../helpers/weatherHelpers";

function WeatherCard({ location, weather }) {
  return (
    <section>
      <h2>{location.name}</h2>

      <p>
        Väder: {getWeatherDescription(weather.current.weather_code)}
      </p>

      <p>
        Temperatur: {weather.current.temperature_2m}{" "}
        {weather.current_units.temperature_2m}
      </p>

      <p>
        Vind: {weather.current.wind_speed_10m}{" "}
        {weather.current_units.wind_speed_10m}
      </p>
    </section>
  );
}

export default WeatherCard;