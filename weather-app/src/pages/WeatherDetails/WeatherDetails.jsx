import { useParams } from "react-router-dom";
import useWeather from "../../hooks/useWeather";
import getWeatherDescription from "../../helpers/weatherHelpers";
import ForecastList from "../../components/ForecastList/ForecastList";

function WeatherDetails() {
  const { city } = useParams();
  const { location, weather, loading, error } = useWeather(city);

  if (loading) {
    return (
      <main>
        <h1>Väderdetaljer</h1>
        <p>Hämtar väderdata...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <h1>Väderdetaljer</h1>
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Väderdetaljer</h1>

      {location && weather && (
        <div>
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

          <ForecastList
            daily={weather.daily}
            dailyUnits={weather.daily_units}
          />
        </div>
      )}
    </main>
  );
}

export default WeatherDetails;