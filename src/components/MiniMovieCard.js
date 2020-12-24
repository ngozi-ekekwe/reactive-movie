import { Link } from "react-router-dom";

function MiniMovieCard({ movies }) {
  const src = movies.backdrop_path || movies.poster_path;
  const url = `/movie/details/${movies.id}`;
  const image = `https://image.tmdb.org/t/p/w500/${src}`;
  return (
    <Link to={url} className="mini-card">
      <div
        className="card-details"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="card-text">
          <div className="overlay"></div>
          <h3>{movies?.title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default MiniMovieCard;
