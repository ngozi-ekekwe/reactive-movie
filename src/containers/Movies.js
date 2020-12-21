import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { discoverMovies } from "../api/Api";

export default function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    discoverMovies().then((response) => {
      setMovies(response.results);
    });
  }, [])

  return (
    <div>
      <div className="movies-display">
        {movies && movies.map((result, key) => {
          const image = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${result.poster_path}`;
          const url = `/movie/details/${result.id}`;
          return (
            <div key={key} className="movie-card">
              <Link to={url}>
                <div
                  className="movie-poster"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}