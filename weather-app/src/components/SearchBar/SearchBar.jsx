import "./SearchBar.css";

function SearchBar({ city, setCity, onSearch }) {
  return (
    <form onSubmit={onSearch}>
      <label htmlFor="city">Stad</label>

      <input
        id="city"
        type="text"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        placeholder="Till exempel Stockholm"
      />

      <button type="submit">Sök</button>
    </form>
  );
}

export default SearchBar;