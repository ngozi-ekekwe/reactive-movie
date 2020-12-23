import { Link } from "react-router-dom";

function MiniMovieCard({ movies }) {
  const src = movies.backdrop_path || movies.poster_path;
  const url = `/movie/details/${movies.id}`;
  const image = `https://image.tmdb.org/t/p/original/${src}`;
  return (
    <Link to={url} className="mini-card">
      <div className="card-details" style={{backgroundImage: `url(${image})`}}>
        {/* <span>{movies.title}</span> */}
      </div>
    </Link>
  )
}

export default MiniMovieCard;