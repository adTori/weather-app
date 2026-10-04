import { useWeatherContext } from "../../context/WeatherContext";

function Favorites() {
  const { favorites } = useWeatherContext();

  return (
    <main>
      <h1>Favoriter</h1>

      {favorites.length === 0 ? (
        <p>Du har inga sparade städer.</p>
      ) : (
        <ul>
          {favorites.map((city) => (
            <li key={city}>{city}</li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Favorites;