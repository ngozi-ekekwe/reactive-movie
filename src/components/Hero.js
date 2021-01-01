import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { withRouter } from "react-router-dom";
import Modal from "components/Modal";
import { useRef, useEffect, useState } from "react";
import { getWatchProviders } from "api/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faChevronCircleDown
} from "@fortawesome/free-solid-svg-icons";

function Hero({ movie, location }) {
  const moviePath = movie?.backdrop_path || movie?.poster_path;
  const image = moviePath && `https://image.tmdb.org/t/p/original/${moviePath}`;
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    movieId &&
      getWatchProviders(movieId).then((response) => {
        setWatchProviders(response.results);
      });
  }, []);

  const toggleModal = () => {
    if(isModalOpen) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "auto";
    }
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div
      className="hero"
      style={{ backgroundColor: "black", backgroundImage: `url(${image})` }}
    >
      {isModalOpen && (
        <Modal
          movie={movie}
          image={image}
          watchProviders={watchProviders}
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
        />
      )}
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
                <button className="play">
                  <FontAwesomeIcon icon={faPlay} size="1x" />
                  Watch Trailer
                </button>
                <button className="more-info" onClick={toggleModal}>
                <FontAwesomeIcon icon={faChevronCircleDown} size="1x" />
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default withRouter(Hero);
