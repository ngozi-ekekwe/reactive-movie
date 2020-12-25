import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { withRouter } from 'react-router-dom';
import Modal from "components/Modal";
import { useRef, useEffect, useState } from "react";
import { getWatchProviders } from "api/Api";

function Hero({ movie, location }) {
 
  const moviePath = movie?.backdrop_path || movie?.poster_path;
  const image = moviePath && `https://image.tmdb.org/t/p/original/${moviePath}`;

  const movieOverview = useRef(null);
  let divHeight = movieOverview.current && movieOverview.current.offsetHeight;
  const [watchProviders, setWatchProviders] = useState({});

  useEffect(() => {
    const path = location.pathname.split("/");
    const movieId = Number(path[3]);


    if (divHeight > 179) {
      movieOverview.current.style.maxHeight = "60px";
      movieOverview.current.style.height = "60px";
      movieOverview.current.style.overflow = "hidden";
    }
    movieId && getWatchProviders(movieId).then((response) => {
      setWatchProviders(response.results);
    });
  }, []);

  return (
    <div
      className="hero"
      style={{ backgroundColor: "black", backgroundImage: `url(${image})` }}
    >
      {/* <Modal movie={movie} image={image} watchProviders={watchProviders} /> */}
      {movie && (
        <div className="movie-info">
          <div className="overlay"></div>
          <div className="second-layer">
            <div className="movie-content">
              <SkeletonTheme color="#202020" highlightColor="#444">
                <h2 className="title">
                  {movie.title || <Skeleton height={20} width={300} />}
                </h2>
                <p>{movie.tagline || <Skeleton duration={2} />}</p>
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

export default withRouter(Hero)
