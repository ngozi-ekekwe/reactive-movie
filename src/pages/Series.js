import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getPolpularTVShows,
} from "../api/Api";

export default function TVSeries() {
  const [tvSeries, setTvSeries] = useState([]);

  useEffect(() => {
    getPolpularTVShows().then((response) => {
      setTvSeries(response.results);
    });
  }, []);

  return (
    <div>
      <div className="movies-display">
        {tvSeries && tvSeries.map((result, key) => {
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
