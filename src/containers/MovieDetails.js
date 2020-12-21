import React, { Component } from "react";
import { getMovie, getSimilarVideos } from "../api/Api";
import { Link } from "react-router-dom";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: {},
      similarVideos: [],
      genres: [],
    };
  }

  componentDidMount() {
    const path = this.props.location.pathname.split("/");
    const movieId = Number(path[3]);
    getMovie(movieId).then((response) => {
      this.setState({
        movieDetails: response,
        genres: response.genres,
      });
    });

    getSimilarVideos(movieId).then((response) => {
      this.setState({
        similarVideos: response.results,
      });
    });
  }

  render() {
    const details = this.state.movieDetails;
    const genres = details.genres;
    const image = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${details.poster_path}`;
    return (
      <div>
        <div className="movies-display-details">
          <div
            className="movie-backdrop"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div>
            <div className="movie-details">{details.original_title}</div>
            <div className="movie-description">{details.overview}</div>
            <div className="movie-description">
              Release date: {details.release_date}
            </div>
            <div className="movie-description">Budget: {details.budget}</div>
            <div className="movie-description">Revenue: {details.revenue}</div>
            <div className="movie-description">Runtime: {details.runtime}</div>
            <div className="movie-description">
              <div className="genre">
                {this.state.genres.map((genre, key) => {
                  return (
                    <div className="space-genre" key={key}>
                      {genre.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="similar-videos">Similar Movies</div>

        <div>
          <div className="movies-display">
            {this.state.similarVideos.map((result, key) => {
              const image = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${result.poster_path}`;
              const url = `/movie/details/${result.id}`;
              return (
                <div key={key} className="movie-card">
                  <Link to={url}>
                    <div
                      className="movie-poster"
                      style={{ backgroundImage: `url(${image})` }}
                    ></div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
