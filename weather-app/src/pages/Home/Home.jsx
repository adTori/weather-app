import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

function Home() {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();

    const trimmedCity = city.trim();

    if (!trimmedCity) {
      setError("Skriv in en stad.");
      return;
    }

    setError("");
    navigate(`/weather/${encodeURIComponent(trimmedCity)}`);
  }

  return (
    <main>
      <h1>Väderappen</h1>
      <p>Sök efter en stad för att se vädret.</p>

      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
      />

      {error && <p>{error}</p>}
    </main>
  );
}

export default Home;