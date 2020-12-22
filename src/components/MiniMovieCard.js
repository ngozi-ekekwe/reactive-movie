import { Link } from "react-router-dom";

function MiniMovieCard({ trendingMovie }) {
  const src = trendingMovie.backdrop_path || trendingMovie.poster_path;
  const image = `https://image.tmdb.org/t/p/original/${src}`;
  console.log(trendingMovie)
  return (
    <Link to="" className="mini-card">
      <div style={{backgroundImage: `url(${image})`}}>
        <span>{trendingMovie.title}</span>
      </div>
    </Link>
  )
}

export default MiniMovieCard;