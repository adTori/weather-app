import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

function Home() {
  const [city, setCity] = useState("");

  function handleSearch(event) {
    event.preventDefault();

    console.log(city);
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
    </main>
  );
}

export default Home;