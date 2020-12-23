export default function Hero({ movie }) {
  const image = movie && `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  return (
    <div
      className="hero"
      style={{ backgroundColor: 'black', backgroundImage: `url(${image})` }}
    >
      {movie && <div className="movie-info">
        <div className="overlay"></div>
        <div className="second-layer">
          <div className="movie-content">
            <h2 className="title">{movie.title}</h2>
            <p>{movie.overview}</p>
            <div className="actions">
              <button className="play">Play</button>
              <button className="more-info">More Info</button>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
}
