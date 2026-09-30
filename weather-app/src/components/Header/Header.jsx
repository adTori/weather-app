import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav aria-label="Navigation">
        <NavLink to="/">Väder</NavLink>
        <NavLink to="/favorites">Favoriter</NavLink>
      </nav>
    </header>
  );
}

export default Header;