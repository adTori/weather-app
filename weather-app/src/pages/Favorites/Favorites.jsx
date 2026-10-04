import { useWeatherContext } from "../../context/WeatherContext";

function Favorites() {
  const { favorites, setFavorites } = useWeatherContext();

  function handleRemoveFavorite(city) {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite !== city
    );

    setFavorites(updatedFavorites);
  }

  return (
    <main>
      <h1>Favoriter</h1>

      {favorites.length === 0 ? (
        <p>Du har inga sparade städer.</p>
      ) : (
        <ul>
          {favorites.map((city) => (
            <li key={city}>
              {city}

              <button
                type="button"
                onClick={() => handleRemoveFavorite(city)}
              >
                Ta bort
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Favorites;