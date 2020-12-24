import { Link } from "react-router-dom";
import thumbsdown from "../img/thumbsdown.svg";
import thumbsup from "../img/thumbsup.svg";
import { getWatchProviders } from "../api/Api";
import { useState, useEffect } from "react";

export default function Modal({ movie, image, watchProviders }) {
  // const [watchProviders, setWatchProviders] = useState([]);

  // useEffect(() => {
  //   getWatchProviders(movie.id).then((response) => {
  //     setWatchProviders(response.results);
  //   });
  // }, []);

  // console.log(watchProviders)
  return (
    <div className="modal-shadow">
      <div className="detail">
        <div
          className="movie-image"
          style={{ backgroundColor: "black", backgroundImage: `url(${image})` }}
        >
          <div className="movie-vote-count">
            <h3>{movie?.title}</h3>
            <span className="number-of-votes">{movie?.vote_count} votes</span>
          </div>
          <div className="home-page">
            <Link to="">Vist Homepage</Link>
            <button className="rate-button">
              <img src={thumbsdown} alt="" />
            </button>
            <button className="rate-button">
              <img src={thumbsup} alt="" />
            </button>
          </div>
        </div>
        <div className="movie-details">
          <div className="genre">
            {movie?.genres &&
              movie?.genres.map((m,k) => {
                return <span key={k}>{m.name}</span>;
              })}
          </div>
          <p>{movie?.overview}</p>

          <div>
            <h3>Watch Providers</h3>
            {
              Object.keys(watchProviders) && Object.keys(watchProviders).map((wp) => {
                console.log(watchProviders[wp])
                return (
                  <div>
                    
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
