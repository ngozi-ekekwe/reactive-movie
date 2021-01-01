import React, { useState, useEffect, Fragment, useRef } from "react";
import Profile from "components/Profile";
import {
  trending,
  getNowPlaying,
  upcomingMovies,
  getPolpularTVShows,
  topRatedMovies,
} from "../api/Api";
import { filterAdultContent } from "../utils/filterMovies";
import MiniMovieCard from "../components/MiniMovieCard";
import Hero from "../components/Hero";
import Section from "../components/Sections";
import avatarProfiles from 'utils/profiles';

export default function Home() {
  let welcomeScreen = useRef();
  let mainHomeScreen = useRef();

  const [trendingMovies, setTrending] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcomingShows, setUpcomingShows] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);
  const [topRated, setTopRated] = useState([]);

  const [ profiles, setProfile ] = useState(avatarProfiles);
  
  useEffect(() => {
    welcomeScreen.current.classList.add("active");

    trending().then((response) => {
      let trendings = filterAdultContent(response.results);
      setTrending(trendings);
    });

    getNowPlaying().then((response) => {
      let filteredContent = filterAdultContent(response.results);
      setNowPlaying(filteredContent);
    });

    upcomingMovies().then((response) => {
      let filteredContent = filterAdultContent(response.results);
      setUpcomingShows(filteredContent);
    });

    getPolpularTVShows().then((response) => {
      setTvSeries(response.results);
    });

    topRatedMovies().then((response) => {
      let filteredContent = filterAdultContent(response.results);
      setTopRated(filteredContent);
    });
  }, []);

  const profileSelectHandler = (event) => {
    event.preventDefault();
    welcomeScreen.current.classList.remove("active");
    mainHomeScreen.current.classList.add("active");
  };

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
          <Hero movie={upcomingShows[0]} />
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
