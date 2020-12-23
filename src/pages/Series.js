import React, { useState, useEffect } from "react";
import MiniMovieCard from "../components/MiniMovieCard";
import { getPolpularTVShows } from "../api/Api";
import Section from "../components/Sections";
import Hero from "../components/Hero";

export default function TVSeries() {
  const [tvSeries, setTvSeries] = useState([]);

  useEffect(() => {
    getPolpularTVShows().then((response) => {
      setTvSeries(response.results);
    });
  }, []);

  return (
    <div className="movie-wrapper">
      <Hero movie={tvSeries[tvSeries.length - 1]} />
      {tvSeries && (
        <Section>
          {tvSeries.map((movie, key) => {
            return <MiniMovieCard movies={movie} key={key} />;
          })}
        </Section>
      )}
    </div>
  );
}
