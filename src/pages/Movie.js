import React, { useState, useEffect } from "react";
import { getMovie, getSimilarVideos } from "../api/Api";
import Hero from "../components/Hero";
import MiniMovieCard from "../components/MiniMovieCard";
import Section from "../components/Sections";

export default function MovieDetails(props) {
  const [movieDetails, setMovieDetails] = useState({});
  const [similarVideos, setSimilarVideos] = useState([]);

  useEffect(() => {
    const path = props.location.pathname.split("/");
    const movieId = Number(path[3]);

    getMovie(movieId).then((response) => {
      setMovieDetails(response);
    });

    getSimilarVideos(movieId).then((response) => {
      setSimilarVideos(response.results);
    });
  }, [props.location.pathname]);

  return (
    <div className="movie-wrapper">
      <Hero movie={movieDetails} />
      {similarVideos && (
        <Section title="Similar Videos">
          {similarVideos.map((movie, key) => {
            return <MiniMovieCard movies={movie} key={key} />;
          })}
        </Section>
      )}
    </div>
  );
}
