import getWeatherDescription from "../../helpers/weatherHelpers";

function ForecastList({ daily, dailyUnits }) {
  return (
    <section>
      <h2>Prognos</h2>

      <ul>
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