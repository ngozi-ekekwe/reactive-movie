import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useRef, useEffect } from "react";

export default function Hero({ movie }) {
  const moviePath = movie?.backdrop_path || movie?.poster_path;
  const image = moviePath && `https://image.tmdb.org/t/p/original/${moviePath}`;

  const movieOverview = useRef(null);
  let divHeight = movieOverview.current && movieOverview.current.offsetHeight;
  
  useEffect(()=> {
    if(divHeight > 179) {
      movieOverview.current.style.maxHeight = '60px';
      movieOverview.current.style.height = '60px';
      movieOverview.current.style.overflow = 'hidden';
    }
  }, [divHeight])

  return (
    <div
      className="hero"
      style={{ backgroundColor: "black", backgroundImage: `url(${image})` }}
    >
      {movie && (
        <div className="movie-info">
          <div className="overlay"></div>
          <div className="second-layer">
            <div className="movie-content">
              <SkeletonTheme color="#202020" highlightColor="#444">
                <h2 className="title">
                  {movie.title || <Skeleton height={20} width={300} />}
                </h2>
                <p ref={movieOverview}>
                  {movie.overview || <Skeleton duration={2} />}
                </p>
              </SkeletonTheme>
              <div className="actions">
                <button className="play">Watch Trailer</button>
                <button className="more-info">More Info</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
