const TMD_API_KEY = "e50620381c304d1652e990162f95f16a";

export const searchMovieDatabase = (searchQuery) => {
  const searchEndpoint = `https://api.themoviedb.org/3/search/movie?api_key=${TMD_API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;
  return fetch(searchEndpoint, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
};

export const getLatestMovie = () => {
  const url = `https://api.themoviedb.org/3/movie/latest?api_key=${TMD_API_KEY}&language=en-US`;
  return fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
};

export const discoverMovies = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMD_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  return fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
};

export const getMovie = (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMD_API_KEY}&language=en-US`;
  return fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
};

export const getSimilarVideos = (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${TMD_API_KEY}&language=en-US`;
  return fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
};

export const getPolpularTVShows = () => {
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${TMD_API_KEY}&language=en-US&page=1`;
  return fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
};
