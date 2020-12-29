const TMD_API_KEY = process.env.REACT_APP_TMD_API_KEY;

const postRequest = (url) => {
  return fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
};

export const getWatchProviders = (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${TMD_API_KEY}`;
  return postRequest(url);
};

export const searchMovieDatabase = (searchQuery) => {
  const searchEndpoint = `https://api.themoviedb.org/3/search/movie?api_key=${TMD_API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;
  return postRequest(searchEndpoint);
};

export const topRatedMovies = () => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMD_API_KEY}&language=en-US&page=1`;
  return postRequest(url);
};

export const upcomingMovies = () => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMD_API_KEY}&language=en-US&page=1`;
  return postRequest(url);
};

export const getNowPlaying = () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMD_API_KEY}&language=en-US&page=1`;
  return postRequest(url);
};

export const trending = () => {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${TMD_API_KEY}`;
  return postRequest(url);
};

export const getLatestMovie = () => {
  const url = `https://api.themoviedb.org/3/movie/latest?api_key=${TMD_API_KEY}&language=en-US`;
  return postRequest(url);
};

export const discoverMovies = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMD_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  return postRequest(url);
};

export const getMovie = (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMD_API_KEY}&language=en-US`;
  return postRequest(url);
};

export const getSimilarVideos = (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${TMD_API_KEY}&language=en-US`;
  return postRequest(url);
};

export const getPolpularTVShows = () => {
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${TMD_API_KEY}&language=en-US&page=1`;
  return postRequest(url);
};
