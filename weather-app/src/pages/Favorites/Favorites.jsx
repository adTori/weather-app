import { useWeatherContext } from "../../context/WeatherContext";
import EmptyState from "../../components/EmptyState/EmptyState";
import "./Favorites.css";

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
        <EmptyState message="Du har inga sparade städer." />
      ) : (
        <ul className="favorites-list">
          {favorites.map((city) => (
            <li key={city} className="favorite-item">
              <span>{city}</span>

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