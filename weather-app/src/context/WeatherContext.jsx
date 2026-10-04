import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  return (
    <WeatherContext.Provider
      value={{
        favorites,
        setFavorites,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherContext() {
  return useContext(WeatherContext);
}

export default WeatherProvider;