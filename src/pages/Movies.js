import React, { useState, useEffect } from "react";
import { discoverMovies } from "../api/Api";
import Section from "../components/Sections";
import MiniMovieCard from "../components/MiniMovieCard";
import Hero from "../components/Hero";

export default function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    discoverMovies().then((response) => {
      setMovies(response.results);
    });
  }, []);
  return (
    <div className="movie-wrapper">
      <Hero movie={movies.length - 1} />
      {movies && (
        <Section>
          {movies.map((movie, key) => {
            return <MiniMovieCard movies={movie} />;
          })}
        </Section>
      )}
    </div>
  );
}
