function getWeatherDescription(code) {
  const descriptions = {
    0: "Klart",
    1: "Mest klart",
    2: "Delvis molnigt",
    3: "Mulet",
    45: "Dimma",
    48: "Dimma med rimfrost",
    51: "Lätt duggregn",
    53: "Måttligt duggregn",
    55: "Kraftigt duggregn",
    61: "Lätt regn",
    63: "Måttligt regn",
    65: "Kraftigt regn",
    71: "Lätt snöfall",
    73: "Måttligt snöfall",
    75: "Kraftigt snöfall",
    80: "Lätta regnskurar",
    81: "Måttliga regnskurar",
    82: "Kraftiga regnskurar",
    95: "Åska",
  };

  return descriptions[code] || "Okänt väder";
}

function getWeatherIcon(code) {
  const icons = {
    0: "☀️",
    1: "🌤️",
    2: "⛅",
    3: "☁️",
    45: "🌫️",
    48: "🌫️",
    51: "🌦️",
    53: "🌦️",
    55: "🌧️",
    61: "🌧️",
    63: "🌧️",
    65: "🌧️",
    71: "🌨️",
    73: "❄️",
    75: "❄️",
    80: "🌦️",
    81: "🌧️",
    82: "🌧️",
    95: "⛈️",
  };

  return icons[code] || "🌡️";
}

function formatWeatherDate(dateString) {
  const date = new Date(`${dateString}T12:00:00`);

  const formattedDate = new Intl.DateTimeFormat("sv-SE", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

export { getWeatherDescription, getWeatherIcon, formatWeatherDate };