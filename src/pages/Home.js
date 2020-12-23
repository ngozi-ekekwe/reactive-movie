import React, { useState, useEffect, Fragment, useRef } from "react";
import Profile from "../components/Profile";
import { getLatestMovie, trending } from "../api/Api";
import MiniMovieCard from '../components/MiniMovieCard';
import Section from '../components/Sections';
import { Planet, Cat, Ghost, IceCream } from "react-kawaii";

export default function Home() {
  let welcomeScreen = useRef();
  let mainHomeScreen = useRef();

  const [latestMovie, setLatestMovie] = useState({});

  const [trendingMovies, setTrending] = useState([]);

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
    });

    trending().then((response) => {
      setTrending(response.results)
    })
  }, []);

  const profileSelectHandler = (event) => {
    event.preventDefault();
    welcomeScreen.current.classList.remove("active");
    mainHomeScreen.current.classList.add("active");
  };

  console.log(latestMovie, 'trendingMovies');

  const image = `https://image.tmdb.org/t/p/original/${latestMovie.backdrop_path}`;

  return (
    <Fragment>
      <div className="home">
        <div className="home__welcome-screen" ref={welcomeScreen}>
          <h1>Who's watching?</h1>
          <ul className="profiles">
            {profiles &&
              profiles.map((profile) => (
                <Profile
                  name={profile.name}
                  avatar={profile.avatar}
                  profileSelectHandler={profileSelectHandler}
                />
              ))}
          </ul>
          <button>Manage Profiles</button>
        </div>
        <div className="home__main" ref={mainHomeScreen}>
          <div
            className="hero"
            style={
              latestMovie.poster_path && { backgroundImage: `url(${image})` }
            }
          >
            <div className="movie-info">
              <div className="overlay"></div>
              <div className="second-layer">
                <div className="movie-content">
                  <h2 className="title">{latestMovie.title}</h2>
                  <p>{latestMovie.overview}</p>
                  <div className="actions">
                    <button className="play">Play</button>
                    <button className="more-info">More Info</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Section title="Trending Now">
            { trendingMovies && trendingMovies.map((trendingMovie) => {
              return (
                <MiniMovieCard movies={trendingMovie} />
              )
            })}
          </Section>

          <Section title="New Realeases">

          </Section>

          <Section title="Originals">

          </Section>

        </div>
      </div>
    </Fragment>
  );
}
