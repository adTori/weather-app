import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import WeatherDetails from "./pages/WeatherDetails/WeatherDetails";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weather/:city" element={<WeatherDetails />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;