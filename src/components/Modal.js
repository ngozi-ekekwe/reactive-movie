import { Link } from "react-router-dom";
import thumbsdown from "img/thumbsdown.svg";
import thumbsup from "img/thumbsup.svg";
import WatchProvidersComponent from "../components/WatchProviders";

export default function Modal({ movie, image, watchProviders }) {
  const provider = watchProviders.US ? watchProviders.US : null;
  console.log(movie)
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
            <a href={movie.homepage ? movie.homepage : " "}>Vist Homepage</a>
            {/* <button className="rate-button">
              <img src={thumbsdown} alt="" />
            </button>
            <button className="rate-button">
              <img src={thumbsup} alt="" />
            </button> */}
          </div>
        </div>
        <div className="movie-details">
          <div className="genre">
            {movie?.genres &&
              movie?.genres.map((m, k) => {
                return <span key={k}>{m.name}</span>;
              })}
          </div>
          <p>{movie?.overview}</p>
          <p>Budget: {movie?.budget}</p>
          <p>Release Date{movie?.release_date}</p>
          <p>Runtime: {movie?.runtime}</p>
          <p>status: {movie?.status}</p>
          <div>Spoken Languages</div>
          { 
            movie.spoken_languages && movie.spoken_languages.map((sl) => {
              return (
                <p>{sl.english_name}</p>
              )
            })
          }

          <div>
            <h3>Watch Providers in the US</h3>
            {provider && 
              <WatchProvidersComponent
                providers={provider}
              ></WatchProvidersComponent>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
