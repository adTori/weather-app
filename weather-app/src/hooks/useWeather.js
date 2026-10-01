import { useEffect, useState } from "react";

function useWeather(city) {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchWeather() {
      if (!city) {
        return;
      }

      setLoading(true);
      setError("");

      try {
        // 1. Hämta koordinater för staden
        const locationResponse = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
            city
          )}&count=1&language=sv&format=json`
        );

        if (!locationResponse.ok) {
          throw new Error("Kunde inte hitta platsen.");
        }

        const locationData = await locationResponse.json();

        if (!locationData.results || locationData.results.length === 0) {
          throw new Error("Kunde inte hitta staden.");
        }

        const cityLocation = locationData.results[0];

        setLocation(cityLocation);

        // 2. Hämta väderdata med koordinaterna
        const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${cityLocation.latitude}&longitude=${cityLocation.longitude}&current=temperature_2m,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto`
        );

        if (!weatherResponse.ok) {
          throw new Error("Kunde inte hämta väderdata.");
        }

        const weatherData = await weatherResponse.json();

        setWeather(weatherData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  return {
    location,
    weather,
    loading,
    error,
  };
}

export default useWeather;