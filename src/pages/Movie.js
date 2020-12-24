import React, { useState, useEffect } from "react";
import { getMovie, getSimilarVideos, getWatchProviders } from "../api/Api";
import Hero from "../components/Hero";
import MiniMovieCard from "../components/MiniMovieCard";
import Section from "../components/Sections";

export default function MovieDetails(props) {
  const [movieDetails, setMovieDetails] = useState({});
  const [similarVideos, setSimilarVideos] = useState([]);
  const [ watchProviders, setWatchProviders ] = useState([]);

  useEffect(() => {
    const path = props.location.pathname.split("/");
    const movieId = Number(path[3]);

    getMovie(movieId).then((response) => {
      setMovieDetails(response);
    });

    getSimilarVideos(movieId).then((response) => {
      setSimilarVideos(response.results);
    });

    getWatchProviders(movieId).then((response) => {
      console.log(response.results)
      setWatchProviders(response.results);
    });
  }, [props.location.pathname]);

  return (
    <div className="movie-wrapper">
      <Hero movie={movieDetails} watchProviders={watchProviders} />
      {similarVideos && similarVideos.length > 0 && (
        <Section title="More Like this">
          {similarVideos.map((movie, key) => {
            return <MiniMovieCard movies={movie} key={key} />;
          })}
        </Section>
      )}
    </div>
  );
}
