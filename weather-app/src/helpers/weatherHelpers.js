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

export default getWeatherDescription;