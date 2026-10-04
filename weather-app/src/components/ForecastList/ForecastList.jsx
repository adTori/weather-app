import getWeatherDescription from "../../helpers/weatherHelpers";
import "./ForecastList.css";

function ForecastList({ daily, dailyUnits }) {
  return (
    <section className="forecast">
      <h2>Prognos</h2>

      <ul className="forecast-list">
        {daily.time.map((date, index) => (
          <li key={date}>
            <h3>{date}</h3>

            <p>
              {getWeatherDescription(daily.weather_code[index])}
            </p>

            <p>
              Högst: {daily.temperature_2m_max[index]}{" "}
              {dailyUnits.temperature_2m_max}
            </p>

            <p>
              Lägst: {daily.temperature_2m_min[index]}{" "}
              {dailyUnits.temperature_2m_min}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ForecastList;