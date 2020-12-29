import { Link } from "react-router-dom";
import WatchProvidersComponent from "../components/WatchProviders";

export default function Modal({ movie, image, watchProviders, isModalOpen, toggleModal }) {
  const provider = watchProviders.US ? watchProviders.US : null;
  return (
    <div className={`modal-shadow ${isModalOpen ? 'active' : ''}`} onClick={toggleModal}>
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
            movie.spoken_languages && movie.spoken_languages.map((sl, key) => {
              return (
                <p key={key}>{sl.english_name}</p>
              )
            })
          }

         { provider && <div>
            <h3>Watch Providers in the US</h3>
            {provider && 
              <WatchProvidersComponent
                providers={provider}
              ></WatchProvidersComponent>
            }
          </div>}
        </div>
      </div>
    </div>
  );
}
