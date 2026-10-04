import getWeatherDescription from "../../helpers/weatherHelpers";
import { useWeatherContext } from "../../context/WeatherContext";
import "./WeatherCard.css";

function WeatherCard({ location, weather }) {
  const { favorites, setFavorites } = useWeatherContext();

  function handleAddFavorite() {
    if (!favorites.includes(location.name)) {
      setFavorites([...favorites, location.name]);
    }
  }

  return (
    <section className="weather-card">
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

      <button type="button" onClick={handleAddFavorite}>
        Lägg till som favorit
      </button>
    </section>
  );
}

export default WeatherCard;