import { useParams } from "react-router-dom";
import useWeather from "../../hooks/useWeather";
import ForecastList from "../../components/ForecastList/ForecastList";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import Loading from "../../components/Loading/Loading";

function WeatherDetails() {
  const { city } = useParams();
  const { location, weather, loading, error } = useWeather(city);

  if (loading) {
    return (
      <main>
        <h1>Väderdetaljer</h1>
        <Loading />
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
          <WeatherCard
            location={location}
            weather={weather}
          />

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