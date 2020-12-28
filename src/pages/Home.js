import React, { useState, useEffect, Fragment, useRef } from "react";
import Profile from "components/Profile";
import {
  getLatestMovie,
  trending,
  getNowPlaying,
  upcomingMovies,
  getPolpularTVShows,
  topRatedMovies,
  getWatchProviders,
} from "../api/Api";
import MiniMovieCard from "../components/MiniMovieCard";
import Hero from "../components/Hero";
import Section from "../components/Sections";
import { Planet, Cat, Ghost, IceCream } from "react-kawaii";

export default function Home() {
  let welcomeScreen = useRef();
  let mainHomeScreen = useRef();

  const [latestMovie, setLatestMovie] = useState({});

  const [trendingMovies, setTrending] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcomingShows, setUpcomingShows] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [watchProviders, setWatchProviders] = useState({});

  const [profiles, setProfile] = useState([
    {
      name: "Ghost E",
      avatar: <Ghost size={200} mood="blissful" color="#E0E4E8" />,
    },
    {
      name: "Planet A",
      avatar: <Planet size={200} mood="blissful" color="#FDA7DC" />,
    },
    {
      name: "Cat Snow",
      avatar: <Cat size={200} mood="blissful" color="#61DDBC" />,
    },
    {
      name: "IceCream Snow",
      avatar: <IceCream size={200} mood="blissful" color="#61DDBC" />,
    },
  ]);
  useEffect(() => {
    welcomeScreen.current.classList.add("active");

    getLatestMovie().then((response) => {
      setLatestMovie(response);

      getWatchProviders(response.id).then((response) => {
        setWatchProviders(response.results);
      });
    });

    trending().then((response) => {
      setTrending(response.results);
    });

    getNowPlaying().then((response) => {
      setNowPlaying(response.results);
    });

    upcomingMovies().then((response) => {
      setUpcomingShows(response.results);
    });

    getPolpularTVShows().then((response) => {
      setTvSeries(response.results);
    });

    topRatedMovies().then((response) => {
      setTopRated(response.results);
    });
  }, []);

  const profileSelectHandler = (event) => {
    event.preventDefault();
    welcomeScreen.current.classList.remove("active");
    mainHomeScreen.current.classList.add("active");
  };

  const image = `https://image.tmdb.org/t/p/original/${latestMovie.backdrop_path}`;

  return (
    <Fragment>
      <div className="home">
        <div className="home__welcome-screen" ref={welcomeScreen}>
          <h1>Who's watching?</h1>
          <ul className="profiles">
            {profiles &&
              profiles.map((profile, i) => (
                <Profile
                  key={i}
                  name={profile.name}
                  avatar={profile.avatar}
                  profileSelectHandler={profileSelectHandler}
                />
              ))}
          </ul>
          <button>Manage Profiles</button>
        </div>

        <div className="home__main" ref={mainHomeScreen}>
          <Hero movie={latestMovie} watchProviders={watchProviders} />
          <Section title="Trending Now">
            {trendingMovies.length > 0 &&
              trendingMovies.map((trendingMovie, i) => {
                return <MiniMovieCard movies={trendingMovie} key={i} />;
              })}
          </Section>

          <Section title="Top Rated Movies">
            {topRated &&
              topRated.map((topRated, i) => {
                return <MiniMovieCard movies={topRated} key={i} />;
              })}
          </Section>

          <Section title="Popular TV Shows">
            {tvSeries.length > 0 &&
              tvSeries.map((series, i) => {
                return <MiniMovieCard movies={series} key={i} />;
              })}
          </Section>

          <Section title="Now Playing">
            {nowPlaying &&
              nowPlaying.map((nowP, i) => {
                return <MiniMovieCard movies={nowP} key={i} />;
              })}
          </Section>
        </div>
      </div>
    </Fragment>
  );
}
