import React, { useState, useEffect } from "react";
import { discoverMovies } from "api/Api";
import Section from "components/Sections";
import MiniMovieCard from "components/MiniMovieCard";
import { filterAdultContent } from '../utils/filterMovies';
import Hero from "components/Hero";

export default function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    discoverMovies().then((response) => {
      let filteredContent = filterAdultContent(response.results);
      setMovies(filteredContent);
    });
  }, []);
  return (
    <div className="movie-wrapper">
      <Hero movie={movies.length - 1} />
      {movies.length > 0 && (
        <Section>
          {movies.map((movie, key) => {
            return <MiniMovieCard movies={movie} />;
          })}
        </Section>
      )}
    </div>
  );
}
