import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("weatherFavorites");

    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("weatherFavorites", JSON.stringify(favorites));
  }, [favorites]);

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