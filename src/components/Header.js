import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/movies">MOVIES</Link>
          </li>
          <li>
            <Link to="/tv-series">TV-SERIES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
