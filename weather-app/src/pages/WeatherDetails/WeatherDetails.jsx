import { useParams } from "react-router-dom";
import useWeather from "../../hooks/useWeather";
import getWeatherDescription from "../../helpers/weatherHelpers";

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

          <h2>Prognos</h2>

          {weather.daily.time.map((date, index) => (
            <div key={date}>
              <h3>{date}</h3>

              <p>
                {getWeatherDescription(weather.daily.weather_code[index])}
              </p>

              <p>
                Högst: {weather.daily.temperature_2m_max[index]}{" "}
                {weather.daily_units.temperature_2m_max}
              </p>

              <p>
                Lägst: {weather.daily.temperature_2m_min[index]}{" "}
                {weather.daily_units.temperature_2m_min}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default WeatherDetails;